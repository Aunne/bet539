<?php

namespace app\Models;

use vendor\DB;

class Employee
{
    public function getUsers()
    {
        $sql = "SELECT  *  FROM  `employees`";
        $arg = NULL;
        return DB::select($sql, $arg);
    }

    public function getUser($id)
    {
        $sql = "SELECT  *  FROM  `employees` WHERE `id`=?";
        $arg = array($id);
        return DB::select($sql, $arg);
    }

    public function newUser($name, $password, $workdate, $address, $email, $phone)
    {
        $sql = "INSERT INTO `employees` (`name`, `password`,`workdate`,`address`, `email`, `phone`) VALUES (?, ?, ?, ?, ?, ?)";
        return DB::insert($sql, array($name, $password, $workdate, $address, $email, $phone));
    }

    public function removeUser($id)
    {
        $sql = "DELETE FROM `employees` WHERE id=?";
        return DB::delete($sql, array($id));
    }

    public function updateUser($id, $name, $password, $email, $phone, $workdate, $address)
    {
        $sql = "UPDATE `employees` SET  `name`=?, `password`=?, `email`=?, `phone`=?, `workdate`=?,`address`=? WHERE id=?";
        return DB::update($sql, array( $name, $password, $email, $phone, $workdate, $address, $id));
    }
}
