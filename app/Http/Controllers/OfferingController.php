<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Offering;
use App\OfferTransaction;

class OfferingController extends Controller
{
    public function offeringList() {
        $data = DB::table('offer_data')->where('enabled','>',0)->get() ;
        return response()->json($data);
    }

    public function addOffering(Request $request) {
        $offeringItem = new Offering;
        $type = $request->get('type') ;
        $offeringItem->type = $request->get('type') ;
        $offeringItem->name = $request->get('name') ;
        $offeringItem->description = $request->get('description') ;
        $offeringItem->minimum_risk = $request->get('minimum_risk') ;
        switch($type) {
            case 1:
                $offeringItem->loan_installment = $request->get('loan_installment') ;
                $offeringItem->loan_term = $request->get('loan_term') ;
                $offeringItem->loan_min_amount = $request->get('loan_min_amount') ;
                $offeringItem->loan_max_amount = $request->get('loan_max_amount') ;
                $offeringItem->loan_interest_rate = $request->get('loan_interest_rate') ;
                $offeringItem->loan_min_flag = ($request->get('loan_min_flag') == 'false') ? 0 : 1 ;
                $offeringItem->loan_max_flag = ($request->get('loan_max_flag') == 'false') ? 0 : 1 ;
                break ;
            case 2:
                $offeringItem->retail_price = $request->get('retail_price') ;
                $offeringItem->retail_stock = $request->get('retail_stock') ;
                $offeringItem->retail_provider = $request->get('retail_provider') ;
                break ;
            case 3:
                $offeringItem->insurance_fee = $request->get('insurance_fee') ;
                break ;
            case 4:
                $offeringItem->trips_destination = $request->get('trips_destination') ;
                $offeringItem->trips_provider = $request->get('trips_provider') ;
                $offeringItem->trips_price = $request->get('trips_price') ;
                $offeringItem->trips_available_seats = $request->get('trips_available_seats') ;
                $offeringItem->trips_sold_seats = $request->get('trips_sold_seats') ;
                break ;
        }
        $offeringItem->save() ;

        $offerTransaction = new OfferTransaction;
        $offerTransaction->date = date('Y-m-d');
        $offerTransaction->user_id = $request->get('user_id') ;
        $offerTransaction->offering_id = $offeringItem->id ;
        $offerTransaction->transaction_type = "Create" ;
        $offerTransaction->save() ;
        return 1;
    }

    public function deleteOffering(Request $request, $id) {
        $OfferingItem = Offering::find($id) ;
        $OfferingItem->enabled = 0;
        $OfferingItem->save() ;

        $offerTransaction = new OfferTransaction;
        $offerTransaction->date = date('Y-m-d');
        $offerTransaction->user_id = $request->get('user_id') ;
        $offerTransaction->offering_id = $id ;
        $offerTransaction->transaction_type = "Delete" ;
        $offerTransaction->save() ;
        return $id;
    }

    public function getOfferingView($id) {
        $offeringItem = DB::table('offer_data')->where('id', $id)->first();
        $data = [$offeringItem];
        return response()->json($data);
    }

    public function updateOffering(Request $request,$id) {
        $offeringItem = Offering::find($id) ;
        $field_name = $request->get('field_name') ;
        $old_value = $offeringItem->$field_name ;
        $offeringItem->$field_name = $request->get('field_value') ;
        $offeringItem->save() ;

        $offerTransaction = new OfferTransaction;
        $offerTransaction->date = date('Y-m-d');
        $offerTransaction->user_id = $request->get('user_id') ;
        $offerTransaction->offering_id = $id ;
        $offerTransaction->transaction_type = "Update" ;
        $offerTransaction->field = $field_name ;
        $offerTransaction->old_value = $old_value ;
        $offerTransaction->new_value = $request->get('field_value') ;
        $offerTransaction->save() ;
        return 1;
    }

    public function RetailList() {
        $data = DB::table('offer_data')->where('type','=',2)->get() ;
        return $data ;
    }
}
