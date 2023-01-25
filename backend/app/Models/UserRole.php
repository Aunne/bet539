<?php

namespace app\Models;

use vendor\DB;

class UserRole
{
    public function newRole( $user_id )
    {
        $sql = "INSERT INTO `user_role` (`user_id`, `role_id` ) VALUES ( ?, ?)";
        return DB::insert($sql, array($user_id,1));
    }
    public function getRoleID( $user_id){
        $sql = "SELECT `role_id` FROM `user_role` WHERE `user_id`=?";
        return DB::SELECT($sql,array($user_id));
    }
}
