<?php

namespace app\Middleware;

use Exception;
use vendor\JWT\JWT;

class AuthMiddleware
{
    public static function checkToken()
    {
        $headers = getallheaders();
        $jwt = isset($headers['Authorization'])
            ? $headers['Authorization']
            : "";
        $secret_key = "YOUR_SECRET_KEY";
        try {
            $payload = JWT::decode($jwt, $secret_key, array('HS256'));
            $jwt = self::genToken($payload->data->id);
            $response['status'] = 200;
            $response['message'] = "Access granted";
            $response['token'] = $jwt;
        } catch (Exception $e) {
            $response['status'] = 403;
            $response['message'] = $e->getMessage();
        }
        return $response;
    }

    public static function doLogin()
    {
        $username = isset($_POST['username']) ? $_POST['username'] : "";
        $password = isset($_POST['password']) ? $_POST['password'] : "";
        //查詢 DB 驗證帳密的正確性
        $user_connection = new \app\Models\User();
        $user = $user_connection->getUser($username);
        if (!empty($user["result"]) && $user["result"][0]["password"] === $password) {
            $jwt = self::genToken($user["result"][0]["id"]);
            $role_connection = new \app\Models\UserRole();
            $role = $role_connection->getRoleID($user['result'][0]["id"]);
            $response['status'] = 200;
            $response['message'] = "Access granted";
            $response['role_id'] = $role['result'];
            $response['nickname'] = $user["result"][0]["nickname"];
            $response['id'] = $user["result"][0]["id"];
            $response['token'] = $jwt;
        } else {
            $response['status'] = 401;
            $response['message'] = "Access denied";
        }
        return $response;
    }

    private static function genToken($id)
    {
        $secret_key = "YOUR_SECRET_KEY";
        $issuer_claim = "http://localhost";
        $audience_claim = "http://localhost";
        $issue_date_claim = time(); // issued at
        $expire_claim = $issue_date_claim + 10000;
        $payload = array(
            "iss" => $issuer_claim,
            "aud" => $audience_claim,
            "iat" => $issue_date_claim,
            "exp" => $expire_claim,
            "data" => array(
                "id" => $id,
            )
        );
        return JWT::encode($payload, $secret_key);
    }
}