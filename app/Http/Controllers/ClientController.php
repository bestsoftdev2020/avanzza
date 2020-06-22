<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Clients;
use App\ClientTransaction;
use App\BankInfo;
use App\EmployInfo;
use File;
use Crypt;
use Illuminate\Support\Str;

class ClientController extends Controller
{
    public function clientList() {
        $data = DB::table('clients')->where('status','<',4)->get() ;
        // foreach($data as $key=>$item) {
        //     $data[$key]->password = Crypt::decrypt($data[$key]->password) ;
        // }
        return response()->json($data);
    }

    public function clientListDeleted() {
        $data = DB::table('clients')->where('status','>',3)->get() ;
        // foreach($data as $key=>$item) {
        //     $data[$key]->password = Crypt::decrypt($data[$key]->password) ;
        // }
        return response()->json($data);
    }

    public function clientListRequested() {
        $data = DB::table('clients')->where('quota_flag','=',1)->get() ;
        // foreach($data as $key=>$item) {
        //     $data[$key]->password = Crypt::decrypt($data[$key]->password) ;
        // }
        return response()->json($data);
    }

    public function branchList() {
        $data = DB::table('membership_branch')->get() ;
        return $data ;
    }

    public function addClient(Request $request) {
        $clientItem = new Clients;
        $clientItem->first_name = $request->get('first_name') ;
        $clientItem->last_name = $request->get('last_name') ;
        $clientItem->gender = $request->get('gender') ;
        $clientItem->email = $request->get('email') ;
        $clientItem->doc_type = $request->get('doc_type') ;
        $clientItem->doc_num = $request->get('doc_num') ;
        $clientItem->birth_date = $request->get('birth_date') ;
        $clientItem->cuil_first = $request->get('cuil_first') ;
        $clientItem->cuil_last = $request->get('cuil_second') ;
        $clientItem->civil_state = $request->get('civil_state') ;
        $clientItem->address_street = $request->get('address_street') ;
        $clientItem->address_number = $request->get('address_number') ;
        $clientItem->address_neighbour = $request->get('address_neighbour') ;
        $clientItem->address_location = $request->get('address_location') ;
        $clientItem->address_cp = $request->get('address_cp') ;
        $clientItem->address_province = $request->get('address_province') ;
        $clientItem->phone_number1 = $request->get('phone_number1') ;
        $clientItem->phone_number2 = $request->get('phone_number2') ;
        $clientItem->phone_number3 = $request->get('phone_number3') ;
        $clientItem->membership_class = $request->get('membership_class') ;
        $clientItem->membership_branch = $request->get('membership_branch') ;
        $clientItem->membership_fee = $request->get('membership_fee') ;
        $clientItem->membership_fee_update = date("Y-m-d") ;
        $clientItem->status = 1 ;
        $clientItem->quota_flag = 0 ;
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $profilePath = public_path() . '/images/client/client-uploads/';
            $safeName = uniqid().'.png';
            if (File::exists($profilePath . $safeName)) {
                File::delete($profilePath . $safeName);
            }
            $file->move($profilePath, $safeName);
            $clientItem->avatar = '/images/client/client-uploads/'.$safeName ;
        }
        else {
            if($request->get('avatar') == 'null')
                $clientItem->avatar = "";
            else
                $clientItem->avatar = $request->get('avatar') ;
        }
        $clientItem->save() ;
        foreach(json_decode($request->get('bank_info'), true) as $item) {
            $bankItem = new BankInfo;
            $bankItem->client_id = $clientItem->id;
            $bankItem->bank_name = $item['bankName'] ;
            $bankItem->bank_number = $item['bankNumber'] ;
            $bankItem->bank_account = $item['bankAccount'] ;
            $bankItem->bank_client = $item['bankClient'] ;
            $bankItem->save() ;
        }
        foreach(json_decode($request->get('employ_info'), true) as $item) {
            $employItem = new EmployInfo;
            $employItem->client_id = $clientItem->id;
            $employItem->company_name = $item['companyName'] ;
            $employItem->address_street = $item['addressStreet'] ;
            $employItem->address_number = $item['addressNumber'] ;
            $employItem->address_neighbour = $item['addressNeighbour'] ;
            $employItem->address_cp = $item['addressCp'] ;
            $employItem->address_location = $item['addressLocation'] ;
            $employItem->address_province = $item['addressProvince'] ;
            $employItem->profit = $item['companySalary'] ;
            $employItem->salary_date = $item['salaryDate'] ;
            $employItem->next_salary_date = $item['nextSalarydate'] ;
            $employItem->save() ;
        }

        $clientTransaction = new ClientTransaction ;
        $clientTransaction->user_id = $request->get('user_id') ;
        $clientTransaction->date = date('Y-m-d');
        $clientTransaction->client_id = $clientItem->id ;
        $clientTransaction->transaction_type = "Create" ;
        $clientTransaction->save() ;
        return 1;
    }

    public function updateField($id, $user_id, $field_name, $old_value, $new_value) {
        $clientTransaction = new ClientTransaction ;
        $clientTransaction->user_id = $user_id ;
        $clientTransaction->date = date('Y-m-d');
        $clientTransaction->client_id = $id ;
        $clientTransaction->transaction_type = "Update" ;
        $clientTransaction->field = $field_name ;
        $clientTransaction->old_value = $old_value ;
        $clientTransaction->new_value = $new_value ;
        $clientTransaction->save() ;
    }

    public function updateClient(Request $request,$id) {
        $clientItem = Clients::find($id);
        if($clientItem->first_name != $request->get('first_name')) {
            $this->updateField($id, $request->get('user_id'), 'First Name', $clientItem->first_name, $request->get('first_name')) ;
            $clientItem->first_name = $request->get('first_name') ;
        }
        if($clientItem->last_name != $request->get('last_name')) {
            $this->updateField($id, $request->get('user_id'), 'Last Name', $clientItem->last_name, $request->get('last_name')) ;
            $clientItem->last_name = $request->get('last_name') ;
        }
        if($clientItem->gender != $request->get('gender')) {
            $this->updateField($id, $request->get('user_id'), 'Gender', $clientItem->gender, $request->get('gender')) ;
            $clientItem->gender = $request->get('gender') ;
        }
        if($clientItem->email != $request->get('email')) {
            $this->updateField($id, $request->get('user_id'), 'Email', $clientItem->email, $request->get('email')) ;
            $clientItem->email = $request->get('email') ;
        }
        if($clientItem->doc_type != $request->get('doc_type')) {
            $this->updateField($id, $request->get('user_id'), 'Document Type', $clientItem->doc_type, $request->get('doc_type')) ;
            $clientItem->doc_type = $request->get('doc_type') ;
        }
        if($clientItem->doc_num != $request->get('doc_num')) {
            $this->updateField($id, $request->get('user_id'), 'Document Number', $clientItem->doc_num, $request->get('doc_num')) ;
            $clientItem->doc_num = $request->get('doc_num') ;
        }
        if($clientItem->birth_date != $request->get('birth_date')) {
            $this->updateField($id, $request->get('user_id'), 'Birthday', $clientItem->birth_date, $request->get('birth_date')) ;
            $clientItem->birth_date = $request->get('birth_date') ;
        }
        if($clientItem->cuil_first != $request->get('cuil_first')) {
            $this->updateField($id, $request->get('user_id'), 'Cuil First', $clientItem->cuil_first, $request->get('cuil_first')) ;
            $clientItem->cuil_first = $request->get('cuil_first') ;
        }
        if($clientItem->cuil_last != $request->get('cuil_second')) {
            $this->updateField($id, $request->get('user_id'), 'Cuil Second', $clientItem->cuil_last, $request->get('cuil_second')) ;
            $clientItem->cuil_last = $request->get('cuil_second') ;
        }
        if($clientItem->civil_state != $request->get('civil_state')) {
            $this->updateField($id, $request->get('user_id'), 'Civil State', $clientItem->civil_state, $request->get('civil_state')) ;
            $clientItem->civil_state = $request->get('civil_state') ;
        }
        if($clientItem->address_street != $request->get('address_street')) {
            $this->updateField($id, $request->get('user_id'), 'Address Street', $clientItem->address_street, $request->get('address_street')) ;
            $clientItem->address_street = $request->get('address_street') ;
        }
        if($clientItem->address_number != $request->get('address_number')) {
            $this->updateField($id, $request->get('user_id'), 'Address Number', $clientItem->address_number, $request->get('address_number')) ;
            $clientItem->address_number = $request->get('address_number') ;
        }
        if($clientItem->address_neighbour != $request->get('address_neighbour')) {
            $this->updateField($id, $request->get('user_id'), 'Address Neighbour', $clientItem->address_neighbour, $request->get('address_neighbour')) ;
            $clientItem->address_neighbour = $request->get('address_neighbour') ;
        }
        if($clientItem->address_location != $request->get('address_location')) {
            $this->updateField($id, $request->get('user_id'), 'Address Location', $clientItem->address_location, $request->get('address_location')) ;
            $clientItem->address_location = $request->get('address_location') ;
        }
        if($clientItem->address_cp != $request->get('address_cp')) {
            $this->updateField($id, $request->get('user_id'), 'Address CP', $clientItem->address_cp, $request->get('address_cp')) ;
            $clientItem->address_cp = $request->get('address_cp') ;
        }
        if($clientItem->address_province != $request->get('address_province')) {
            $this->updateField($id, $request->get('user_id'), 'Address CP', $clientItem->address_province, $request->get('address_province')) ;
            $clientItem->address_province = $request->get('address_province') ;
        }
        if($clientItem->phone_number1 != $request->get('phone_number1')) {
            $this->updateField($id, $request->get('user_id'), 'Phone Number1', $clientItem->phone_number1, $request->get('phone_number1')) ;
            $clientItem->phone_number1 = $request->get('phone_number1') ;
        }
        if($clientItem->phone_number2 != $request->get('phone_number2')) {
            $this->updateField($id, $request->get('user_id'), 'Phone Number2', $clientItem->phone_number2, $request->get('phone_number2')) ;
            $clientItem->phone_number2 = $request->get('phone_number2') ;
        }
        if($clientItem->phone_number3 != $request->get('phone_number3')) {
            $this->updateField($id, $request->get('user_id'), 'Phone Number3', $clientItem->phone_number3, $request->get('phone_number3')) ;
            $clientItem->phone_number3 = $request->get('phone_number3') ;
        }
        if($clientItem->membership_class != $request->get('membership_class')) {
            $this->updateField($id, $request->get('user_id'), 'Membership Class', $clientItem->membership_class, $request->get('membership_class')) ;
            $clientItem->membership_class = $request->get('membership_class') ;
        }
        if($clientItem->membership_branch != $request->get('membership_branch')) {
            $this->updateField($id, $request->get('user_id'), 'Membership Branch', $clientItem->membership_branch, $request->get('membership_branch')) ;
            $clientItem->membership_branch = $request->get('membership_branch') ;
        }
        if($clientItem->membership_fee != $request->get('membership_fee')) {
            $this->updateField($id, $request->get('user_id'), 'Membership Fee', $clientItem->membership_fee, $request->get('membership_fee')) ;
            $clientItem->membership_fee = $request->get('membership_fee') ;
            $clientItem->membership_fee_update = date("Y-m-d") ;
        }
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $profilePath = public_path() . '/images/client/client-uploads/';
            $safeName = uniqid().'.png';
            if (File::exists($profilePath . $safeName)) {
                File::delete($profilePath . $safeName);
            }
            $file->move($profilePath, $safeName);
            $clientItem->avatar = '/images/client/client-uploads/'.$safeName ;
        }
        else {
            if($request->get('avatar') == 'null')
                $clientItem->avatar = "";
            else
                $clientItem->avatar = $request->get('avatar') ;
        }
        $clientItem->save() ;
        BankInfo::where('client_id', $id)->delete();
        foreach(json_decode($request->get('bank_info'), true) as $item) {
            $bankItem = new BankInfo;
            $bankItem->client_id = $clientItem->id;
            $bankItem->bank_name = $item['bankName'] ;
            $bankItem->bank_number = $item['bankNumber'] ;
            $bankItem->bank_account = $item['bankAccount'] ;
            $bankItem->bank_client = $item['bankClient'] ;
            $bankItem->save() ;
        }
        EmployInfo::where('client_id', $id)->delete();
        foreach(json_decode($request->get('employ_info'), true) as $item) {
            $employItem = new EmployInfo;
            $employItem->client_id = $clientItem->id;
            $employItem->company_name = $item['companyName'] ;
            $employItem->address_street = $item['addressStreet'] ;
            $employItem->address_number = $item['addressNumber'] ;
            $employItem->address_neighbour = $item['addressNeighbour'] ;
            $employItem->address_cp = $item['addressCp'] ;
            $employItem->address_location = $item['addressLocation'] ;
            $employItem->address_province = $item['addressProvince'] ;
            $employItem->profit = $item['companySalary'] ;
            $employItem->salary_date = $item['salaryDate'] ;
            $employItem->next_salary_date = $item['nextSalarydate'] ;
            $employItem->save() ;
        }
        return 1;
    }

    public function getClient($id) {
        $clientItem = DB::table('clients')->where('id', $id)->first();
        $bankInfo = DB::table('client_bank_infos')->where('client_id', $id)->get();
        $employInfo = DB::table('client_employ_infos')->where('client_id', $id)->get();
        $data = [$clientItem, $bankInfo, $employInfo];
        return response()->json($data);
    }

    public function getClientView($id) {
        $clientItem = DB::table('clients')->where('id', $id)->first();
        $branchItem = DB::table('membership_branch')->where('id', $clientItem->membership_branch)->first();
        $clientItem->membership_branch = $branchItem->name ;
        $bankInfo = DB::table('client_bank_infos')->where('client_id', $id)->get();
        $employInfo = DB::table('client_employ_infos')->where('client_id', $id)->get();
        $data = [$clientItem, $bankInfo, $employInfo];
        return response()->json($data);
    }

    public function deleteClient(Request $request,$id) {
        $clientItem = Clients::find($id) ;
        $clientItem->status = 3;
        $clientItem->save() ;

        $clientTransaction = new ClientTransaction ;
        $clientTransaction->user_id = $request->get('user_id') ;
        $clientTransaction->date = date('Y-m-d');
        $clientTransaction->client_id = $id ;
        $clientTransaction->transaction_type = "Remove" ;
        $clientTransaction->save() ;
        return $id;
    }

    public function deleteRequest($id) {
        $clientItem = Clients::find($id) ;
        $clientItem->status = 2;
        $clientItem->save() ;
        return $id;
    }

    public function updateQuota(Request $request) {
        $clientItem = Clients::find($request->get('id')) ;
        $clientItem->quota_flag = 1 ;
        $clientItem->quota_request_val = $request->get('value') ;
        $clientItem->quota_request_comment = $request->get('comment') ;
        $clientItem->save() ;
        return $clientItem->id;
    }

    public function updateQuotaAll(Request $request) {
        $data;
        if($request->get('del_flag'))
            $data = DB::table('clients')->get() ;
        else
            $data = DB::table('clients')->where('status','<',4)->get() ;
        if($data) {
            foreach($data as $item) {
                $clientItem = Clients::find($item->id) ;
                $clientItem->quota_request_comment = $request->get('comment') ;
                $clientItem->quota_flag = 0 ;
                if($request->percent_flag) 
                    $clientItem->membership_fee = $clientItem->membership_fee/100*(100+floatval($request->get('value'))) ;
                else
                    $clientItem->membership_fee = floatval($request->get('value'));
                $clientItem->save() ;
            }
        }
        return 1;
    }

    public function approveQuota(Request $request) {
        $clientItem = Clients::find($request->get('id')) ;
        $clientItem->quota_flag = 0 ;
        $clientItem->membership_fee = $clientItem->quota_request_val ;
        $clientItem->save() ;
        return $clientItem->id;
    }

    public function rejectQuota(Request $request) {
        $clientItem = Clients::find($request->get('id')) ;
        $clientItem->quota_flag = 0 ;
        $clientItem->save() ;
        return $clientItem->id;
    }
}
