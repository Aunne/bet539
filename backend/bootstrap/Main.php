<?php

require_once __DIR__ . '/../vendor/Autoload.php';

use app\Middleware\AuthMiddleware;
use vendor\DB;
use vendor\Router;

class Main
{
    static function run()
    {
        $conf = parse_ini_file(__DIR__ . '/../vendor/.env');
        DB::$dbHost = $conf['dbHost'];
        DB::$dbName = $conf['dbName'];
        DB::$dbUser = $conf['dbUser'];
        DB::$dbPassword = $conf['dbPassword'];

        if (isset($_GET['action'])) {
            $action = $_GET['action'];
        } else {
            $action = "no_action";
        }

        //檢查帳密(以後說明)
        //判斷權限(以後說明)
        if ($action == "register") {
            $router = new Router();
            require_once __DIR__ . "/../routers/web.php";
            $response = $router->run($action);
        } else {
            $response = $responseToken = AuthMiddleware::checkToken();
            if ($responseToken['status'] == 200) {
                if ($action != "no_action") {
                    $router = new Router();
                    require_once __DIR__ . "/../routers/web.php";
                    $response = $router->run($action);
                    $response['token'] = $responseToken['token'];
                }
            } else {
                switch ($action) {
                    case 'doLogin':
                        $response = AuthMiddleware::doLogin();
                        break;
                    default:
                        break;
                }
            }
        }
        echo json_encode($response);
    }
}