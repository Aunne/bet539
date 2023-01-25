<?php

namespace app\Controllers;

use vendor\Controller;

use app\Models\Bet539 as Bet539Model;

class Bet539 extends Controller
{
    private $bet;

    public function __construct()
    {
        $this->bet = new Bet539Model();
    }

    public function getBet()
    {
        $nickname = $_POST['nickname'];
        isset($_POST['phase']) ? $phase = (int) $_POST['phase'] : $phase = null;
        isset($_POST['number1']) ? $number1 = (int) $_POST['number1'] : $number1 = null;
        isset($_POST['number2']) ? $number2 = (int) $_POST['number1'] : $number2 = null;
        isset($_POST['number3']) ? $number3 = (int) $_POST['number1'] : $number3 = null;
        isset($_POST['number4']) ? $number4 = (int) $_POST['number1'] : $number4 = null;
        isset($_POST['number5']) ? $number5 = (int) $_POST['number1'] : $number5 = null;

        return $this->bet->getUserBet($nickname, $phase, $number1, $number2, $number3, $number4, $number5);
    }

    public function getBets()
    {
        if (!isset($_POST['phase'])) {
            return;
        }

        $nickname = $_POST['nickname'];
        $phase = (int) $_POST['phase'];

        return $this->bet->getUserBets($nickname, $phase);
    }

    public function newBet()
    {
        $nickname = $_POST['nickname'];
        $id = $_POST['id'];
        $phase = $_POST['phase'];
        $number1 = $_POST['number1'];
        $number2 = $_POST['number2'];
        $number3 = $_POST['number3'];
        $number4 = $_POST['number4'];
        $number5 = $_POST['number5'];

        $check = $this->bet->getUserBet($nickname, $phase, $number1, $number2, $number3, $number4, $number5);

        if (!empty($check["result"][0])) {
            $response['message'] = "Repeat Number";
            return $response;
        }

        return $this->bet->newBet($nickname, $id, $phase, $number1, $number2, $number3, $number4, $number5);
    }

    public function getDebt()
    {
        $nickname = $_POST['nickname'];
        return $this->bet->getDebt($nickname);
    }

}