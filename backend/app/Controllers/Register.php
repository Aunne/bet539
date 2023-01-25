<?php

namespace app\Controllers;

use vendor\Controller;
use app\Models\User as RegisterModel;
use app\Models\UserRole as UserRoleModel;

class Register extends Controller
{
    private $register;
    private $UserRole;

    public function __construct()
    {
        $this->register = new RegisterModel();
        $this->UserRole = new UserRoleModel();
    }

    public function register()
    {
        if (isset($_POST['username'])) {
            $username = $_POST['username'];
            $password = $_POST['password'];
            $nickname = $_POST['nickname'];
            if (!empty($this->register->getUser($username)['result'][0]['username'])){
               return '此用戶已存在';
            }else{
                $this->register->newUser($username, $password, $nickname);
                $user_id = $this->register->getUserID($username)['result'][0]['id'];
                return $this->UserRole->newRole($user_id);
            }
        }
    }

    public function getUserID($username){
        return $this->register->getUserID($username);
    }

    public function newUser($username, $password, $nickname){
        return $this->register->newUser($username, $password, $nickname);
    }

}
