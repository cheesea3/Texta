<?php

//database details
$GLOBALS['db_conf']['db_host'] = "127.0.0.1";
$GLOBALS['db_conf']['port'] = "3306";
$GLOBALS['db_conf']['db_db'] = "texta";
$GLOBALS['db_conf']['db_user'] = "root";
$GLOBALS['db_conf']['db_pass'] = "";
$GLOBALS['db_conf']['db_charset'] = "utf8";


//include classes
require("classes/class.database.php");
require("classes/class.text.php");
require("classes/class.log.php");

//include libraries
require("libraries/simple_html_dom.php");

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS")
{
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");
    die();
}

if ($_SERVER['REQUEST_METHOD'] == "GET"){
require("endpoints/get/routes.php");
}

?>