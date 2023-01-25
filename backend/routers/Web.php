<?php

assert(isset($router) && $router instanceof \vendor\Router);

$router->register('register', 'Register', 'register');
$router->register('doBet', 'Bet539', 'newBet');
$router->register("selectBet", "Bet539", "getBets");
$router->register("doSelectPrize", "Prize", "getPrize");
$router->register("checkDebt","Bet539","getDebt");
