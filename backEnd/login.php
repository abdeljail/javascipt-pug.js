<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header("Access-Control-Allow-Headers: X-Requested-With");

define('INPUTS_LOGIN_ACCOUNT', ["email", "password"]);

$arrError = array();

require_once "./methods/post.php";

if (count(array_keys($_POST)) !== 2) {
    echo json_encode(array("counts" => "error count is not 2 !!! "));
    exit;
}

foreach (array_keys($_POST) as $field) {
    if (!in_array($field, INPUTS_LOGIN_ACCOUNT)) {
        echo json_encode(array("inputs" => "error not found " . $field));
        exit;
    }
}

function userFound()
{
    global $conn;
    global $inf;
    $email = $_POST["email"];
    $stmt = $conn->prepare("SELECT $inf FROM __users WHERE  email = '$email' ;");
    $stmt->execute();
    $c = $stmt->rowCount();
    if ($c == 0) return false;
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if (password_verify($_POST["password"], $row["password_"])) {
        session_start();
        // $_SESSION["name"]   = $row["name"];
        // $_SESSION["email"]  = $row["email"] ;
        // $_SESSION["id"]     = $row["id"];
        return true;
 
    }

    return password_verify($_POST["password"]."php", $row["password_"]);
}

require_once "./checkInputs/inputs.php";

try {
    if (count($arrError) !== 0)
        $arrError = array();

    if (!email())
        array_push($arrError, "email");

    if (!password())
        array_push($arrError, "password");

    if (count($arrError) !== 0) {
        echo json_encode(array("error" => $arrError));
        exit;
    }

    $_POST["email"]   =  filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $_POST["password"]   =  password_hash($_POST["password"] . "php", PASSWORD_DEFAULT);
    $inf = "*";
    require_once "./connection/connect.php";
    // if (!userFound()) {
    //     echo json_encode(array("login" => false));
    //     exit;
    // }
    echo json_encode(array("login" => userFound()));
    exit;
    // session_start();
    // $_SESSION['token'] = password_hash($_POST["email"] . "php1", PASSWORD_DEFAULT);
    // $_SESSION['email'] = $_POST["email"];
    // echo json_encode(array("create" => $_SESSION['token']));
} catch (Exception  $ex) {
    echo json_encode(array("exp" => exit($ex->getMessage())));
}
