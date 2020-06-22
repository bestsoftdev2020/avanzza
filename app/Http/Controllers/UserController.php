<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Users;
use File;
use Crypt;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function userList() {
        $data = DB::table('users')->get() ;
        foreach($data as $key=>$item) {
            $data[$key]->password = Crypt::decrypt($data[$key]->password) ;
        }
        return $data ;
    }

    public function updateUser(Request $request, $id) {
        $testItem = Users::where('name', $request->get('username'))->first();
        if($testItem->id != $id)
            return 0;
        $userItem = Users::find($id) ;
        $userItem->name = $request->get('username') ;
        $userItem->first_name = $request->get('first_name') ;
        $userItem->last_name = $request->get('last_name') ;
        $userItem->dni = $request->get('dni') ;
        $userItem->phone = $request->get('phone') ;
        $userItem->email = $request->get('email') ;
        $userItem->password = Crypt::encrypt($request->get('password')) ;
        $userItem->role = $request->get('role') ;
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $profilePath = public_path() . '/images/profile/user-uploads/';
            $safeName = uniqid().'.png';
            if (File::exists($profilePath . $safeName)) {
                File::delete($profilePath . $safeName);
            }
            $file->move($profilePath, $safeName);
            $userItem->avatar = '/images/profile/user-uploads/'.$safeName ;
        }
        else {
            if($request->get('avatar') == 'null')
                $userItem->avatar = "";
            else
                $userItem->avatar = $request->get('avatar') ;
        }

        $userItem->save() ;
        
        $data = DB::table('users')->where('id',$id)->first() ;
        $data->password = Crypt::decrypt($data->password) ;

        return response()->json($data);
    }

    public function addUser(Request $request) {
        $testItem = Users::where('name', $request->get('username'))->first();
        if($testItem)
            return 0 ;
        $userItem = new Users;
        $userItem->name = $request->get('username') ;
        $userItem->first_name = $request->get('first_name') ;
        $userItem->last_name = $request->get('last_name') ;
        $userItem->dni = $request->get('dni') ;
        $userItem->phone = $request->get('phone') ;
        $userItem->email = $request->get('email') ;
        $userItem->password = Crypt::encrypt($request->get('password')) ;
        $userItem->role = $request->get('role') ;
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $profilePath = public_path() . '/images/profile/user-uploads/';
            $safeName = uniqid().'.png';
            if (File::exists($profilePath . $safeName)) {
                File::delete($profilePath . $safeName);
            }
            $file->move($profilePath, $safeName);
            $userItem->avatar = '/images/profile/user-uploads/'.$safeName ;
        }
        else {
            if($request->get('avatar') == 'null')
                $userItem->avatar = "";
            else
                $userItem->avatar = $request->get('avatar') ;
        }

        $userItem->save() ;
        
        $data = DB::table('users')->where('id',DB::raw("(select max(`id`) from users)"))->first() ;
        $data->password = Crypt::decrypt($data->password) ;

        return response()->json($data);
    }

    public function deleteUser($id) {
        DB::table('users')->delete($id);
        return $id;
    }

    public function getRole($id) {
        switch($id) {
            case 1:
                return 'sales_manager';
            case 4:
                return 'vendor';
            default:
                return 'sales_manger' ;
        }
    }

    public function loginUser(Request $request) {
        $username = $request->get('username') ;
        $password = $request->get('password') ;

        $error = "Something went wrong" ;

        $user = Users::where('name',$username)->first() ;
        if($user) {
            if(Crypt::decrypt($user->password) == $password) {
                $accessToken = Str::random(60) ;
                $user->remember_token = $accessToken;
                $user->save() ;

                $userData = (object) [
                    'uid' => $user->id,
                    'userName' => $username,
                    'displayName' => $user->first_name.' '.$user->last_name,
                    'email' => $user->email,
                    'phoneNumber' => $user->phone,
                    'providerId' => 'jwt',
                    'password' => $password,
                    'photoURL' => $user->avatar
                ];
                $response = (object) [
                    'userRole' => $this->getRole($user->role),
                    'userData' => $userData,
                    'accessToken' => $accessToken
                ];
                return response()->json($response);
            }
            else {
                $error = "Password Invalid" ;
            }
        }
        else {
            $error = "Username Invalid" ;
        }
        return $error;
    } 
}
