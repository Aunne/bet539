<?php

namespace app\Controllers;

use vendor\Controller;

use app\Models\Prize as PrizeModel;

class Prize extends Controller
{
    private $prize;

    public function __construct()
    {
        $this->prize = new PrizeModel();
    }

    public function getPrize()
    {
        $phase = $_POST["phase"];
        return $this->prize->getPrize($phase);
    }
}