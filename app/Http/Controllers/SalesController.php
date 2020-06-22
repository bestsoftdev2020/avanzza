<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Sales;

class SalesController extends Controller
{
    public function salesList(Request $request, $id) {
        $data = DB::table('sales')
            ->select('sales.id', 'sales.client_id', 'sales.offer_id', 'sales.created_at' ,'clients.avatar', 'clients.first_name', 'clients.last_name', 'offer_data.type', 'offer_data.description', 'offer_data.minimum_risk')
            ->leftJoin('clients','sales.client_id', '=', 'clients.id')
            ->leftJoin('offer_data','sales.offer_id', '=', 'offer_data.id')
            ->where('sales.client_id', '=', $id)
            ->get() ;
        return response()->json($data);
    }

    public function addSales(Request $request) {
        $SalesItem = new Sales;
        $SalesItem->client_id = $request->get('client_id') ;
        $SalesItem->offer_id = $request->get('offer_id') ;
        $SalesItem->loan_amount = $request->get('loan_amount') ;
        $SalesItem->retail_amount = $request->get('retail_amount') ;
        $SalesItem->seats_amount = $request->get('seats_amount') ;
        $SalesItem->save() ;
        return $SalesItem->client_id;
    }
}
