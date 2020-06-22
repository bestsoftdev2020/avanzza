<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user-list/users','UserController@userList');
Route::post('/user-list/users/{id}', 'UserController@updateUser');
Route::delete('/user-list/users/{id}', 'UserController@deleteUser');
Route::post('/user-list/users', 'UserController@addUser');
Route::post('/auth/login','UserController@loginUser') ;

Route::get('/client-list/clients','ClientController@clientList');
Route::get('/client-list/clients_deleted','ClientController@clientListDeleted');
Route::get('/client-list/clients_requested','ClientController@clientListRequested');
Route::get('/client-list/branches','ClientController@branchList');
Route::post('/client-list/client/add','ClientController@addClient');
Route::post('/client-list/clients/{id}', 'ClientController@deleteClient');
Route::post('/client-list/client_request/{id}', 'ClientController@deleteRequest');
Route::get('/client-list/client/{id}','ClientController@getClient');
Route::get('/client-list/client-view/{id}','ClientController@getClientView');
Route::post('/client-list/client/update/{id}','ClientController@updateClient');
Route::post('/client-list/client/update_quota','ClientController@updateQuota');
Route::post('/client-list/client/update_quota_all','ClientController@updateQuotaAll');
Route::post('/client-list/client/approve_quota','ClientController@approveQuota');
Route::post('/client-list/client/reject_quota','ClientController@rejectQuota');

Route::get('/offering-list/offerings','OfferingController@offeringList');
Route::post('/offering-list/offering/add','OfferingController@addOffering');
Route::post('/offering-list/offering/{id}', 'OfferingController@deleteOffering');
Route::get('/offering-list/offering-view/{id}','OfferingController@getOfferingView');
Route::post('/offering-list/offering/update/{id}','OfferingController@updateOffering');
Route::get('/offering-list/retails','OfferingController@RetailList');

Route::post('/sales-list/sales/add','SalesController@addSales');
Route::get('/sales-list/sales/{id}','SalesController@salesList');