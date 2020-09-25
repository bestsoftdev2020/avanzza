<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Users;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function userList() {
        $data = DB::table('users')->get() ;
        return $data ;
    }

    public function addUser(Request $request) {
        $testItem = Users::where('email', $request->get('email'))->first();
        if($testItem) {
            $error_response = (object) [
                'error' => 'Este correo electrónico ya está registrado',
                'status' => 0,
            ];
            return response()->json($error_response);
        }
        $userItem = new Users;
        $userItem->name = $request->get('name') ;
        $userItem->surname = validateString($request->get('surname'));
        $userItem->email = $request->get('email') ;
        $userItem->role = $request->get('role');
        $userItem->password = Hash::make($request->get('password'));
        $userItem->city = $request->get('city') ;
        $userItem->country = $request->get('country') ;
        $userItem->address = validateString($request->get('address')) ;
        $userItem->telephone = validateString($request->get('telephone')) ;
        $userItem->save() ;
        $data = DB::table('users')->where('id',DB::raw("(select max(`id`) from users)"))->first() ;
        $response = (object) [
            'userInfo' => (object) [
                'uid' => $data->id,
                'displayName' => $data->name,
            ],
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function addProviderUser(Request $request) {
        $testItem = Users::where('email', $request->get('email'))->first();
        if($testItem) {
            $error_response = (object) [
                'error' => 'Este correo electrónico ya está registrado',
                'status' => 0,
            ];
            return response()->json($error_response);
        }
        $userItem = new Users;
        $userItem->name = $request->get('name') ;
        $userItem->surname = $request->get('surname');
        $userItem->email = $request->get('email') ;
        $userItem->work_email = $request->get('work_email') ;
        $userItem->role = $request->get('role');
        $userItem->password = Hash::make($request->get('password'));
        $userItem->category = $request->get('category') ;
        $userItem->address = $request->get('address') ;
        $userItem->company_address = $request->get('company_address') ;
        $userItem->telephone = $request->get('telephone') ;
        $userItem->handphone = $request->get('handphone') ;
        $userItem->save() ;
        $data = DB::table('users')->where('id',DB::raw("(select max(`id`) from users)"))->first() ;
        $response = (object) [
            'userInfo' => (object) [
                'uid' => $data->id,
                'displayName' => $data->name,
            ],
            'status' => 1,
        ];
        return response()->json($response);
    }

    public function addTechnicalUser(Request $request) {
        $testItem = Users::where('email', $request->get('email'))->first();
        if($testItem) {
            $error_response = (object) [
                'error' => 'Este correo electrónico ya está registrado',
                'status' => 0,
            ];
            return response()->json($error_response);
        }
        $userItem = new Users;
        $userItem->name = $request->get('name') ;
        $userItem->surname = $request->get('surname');
        $userItem->email = $request->get('email') ;
        $userItem->birthday = validateString($request->get('birthday')) ;
        $userItem->role = $request->get('role');
        $userItem->password = Hash::make($request->get('password'));
        $userItem->city = $request->get('city') ;
        $userItem->country = $request->get('country') ;
        $userItem->taller_address = $request->get('taller_address') ;
        $userItem->taller_name = $request->get('taller_name') ;
        $userItem->taller_owner = $request->get('taller_owner') ;
        $userItem->taller_handphone = $request->get('taller_handphone') ;
        $userItem->handphone = $request->get('handphone') ;
        $userItem->save() ;
        $data = DB::table('users')->where('id',DB::raw("(select max(`id`) from users)"))->first() ;
        $response = (object) [
            'userInfo' => (object) [
                'uid' => $data->id,
                'displayName' => $data->name,
            ],
            'status' => 1,
        ];
        return response()->json($response);
    }


    public function deleteUser($id) {
        DB::table('users')->delete($id);
        return $id;
    }

    public function loginUser(Request $request) {
        $email = $request->get('email') ;
        $password = $request->get('password') ;

        $error = "Something went wrong" ;

        $user = Users::where('email',$email)->first() ;
        if($user) {
            if(Hash::check($password, $user->password)) {
                $accessToken = Str::random(60) ;
                $user->remember_token = $accessToken;
                $user->save() ;

                $response = (object) [
                    'userInfo' => (object) [
                        'uid' => $user->id,
                        'displayName' => $user->name,
                    ],
                    'userRole' => $user->role,
                    'accessToken' => $accessToken,
                    'status' => 1,
                ];
                return response()->json($response);
            }
            else {
                $error = "Email y/o contraseña inválidos." ;
            }
        }
        else {
            $error = "Email y/o contraseña inválidos." ;
        }
        $error_response = (object) [
            'error' => $error,
            'status' => 0,
        ];
        return response()->json($error_response);
    }
}
