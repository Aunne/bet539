<?php

namespace app\Models;

use vendor\DB;

class User
{
    public function getUserID($username)
    {
        $sql = "SELECT `id` FROM `user` WHERE `username`=?";
        $arg = array($username);
        return DB::select($sql, $arg);
    }

    public function getUser($username)
    {
        $sql = "SELECT * FROM `user` WHERE `username` = ?";
        $arg = array($username);
        return DB::select($sql, $arg);
    }

    public function newUser($username, $password, $nickname)
    {
        $sql = "INSERT INTO `user` (`username`, `password`,`nickname`) VALUES (?, ?, ?)";
        return DB::insert($sql, array($username, $password, $nickname));
    }
}
