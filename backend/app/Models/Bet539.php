<?php

namespace app\Models;

use vendor\DB;

class Bet539
{
    public function getUserBet($nickname, $phase, $number1, $number2, $number3, $number4, $number5)
    {
        $sql = "SELECT * FROM `user_bet` WHERE `nickname` = ? AND `phase` = ? AND `number1` = ? AND `number2` = ? AND `number3` = ? AND `number4` = ? AND `number5` = ?";
        $arg = array($nickname, $phase, $number1, $number2, $number3, $number4, $number5);
        return DB::select($sql, $arg);
    }

    public function getUserBets($nickname, $phase)
    {
        $sql = "SELECT * FROM `user_bet` WHERE `nickname` = ? AND `phase` = ?";
        $arg = array($nickname, $phase);
        return DB::select($sql, $arg);
    }

    public function newBet($nickname, $user_id, $phase, $number1, $number2, $number3, $number4, $number5)
    {
        $sql = "INSERT INTO `user_bet` (`nickname`, `user_id`,`phase`,`number1`,`number2`,`number3`,`number4`,`number5`,`isCashed`,`isExchanged`) VALUES (?, ?, ?,?, ?, ?,?, ?,?,?)";
        return DB::insert($sql, array($nickname, $user_id, $phase, $number1, $number2, $number3, $number4, $number5, "no", "no"));
    }

    public function getDebt($nickname)
    {
        $sql = "SELECT count(*) FROM `user_bet` WHERE `nickname` = ? AND `isCashed` = ?";
        $arg = array($nickname, "no");
        return DB::select($sql, $arg);
    }
}