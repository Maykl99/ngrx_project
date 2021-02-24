<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\CssSelector\Parser\Token;
use Laravel\Passport\HasApiTokens;
use Laravel\Sanctum\Sanctum;
use Symfony\Component\HttpFoundation;
use Facade\FlareClient\Http\Response as HttpResponse;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;
use App\Http\Controllers\ResponseInterface;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $user= User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return response([
                    'message' => ['credenziali non valide']
                ], 404);
            }

            $token = $user->createToken('my-app-token')->plainTextToken;

            $response = [
                'user' => $user,
                'token' => $token
            ];

            return response($response, 201);
    }

    public function register(Request $request)
    {
        $credentials = $request->all();
        $credentials['password'] = Hash::make($credentials['password']);

        $user = User::create($credentials);
        return response()->json($user);
    }

    public function logout(Request $request, User $user)
    {
        $user->tokens()->where('id', Auth::id())->delete();
        $userInfo= User::where('email', $request->email)->first();
        return $response = [
            'user' => $userInfo,
            'message' => "User is logout"
        ];
    }
}
