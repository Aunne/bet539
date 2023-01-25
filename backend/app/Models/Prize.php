<?php

namespace app\Models;

use vendor\DB;

class Prize
{
    public function getPrize($phase)
    {
        $sql = "SELECT * FROM `prize` WHERE `phase`=? ";
        $arg = array($phase);
        return DB::select($sql, $arg);
    }
}