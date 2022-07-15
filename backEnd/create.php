<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header("Access-Control-Allow-Headers: X-Requested-With");

define('INPUTS_CREATE_ACCOUNT', ["fullname", "phone", "email", "password"]);

$arrError = array();

require_once "./methods/post.php";

if (count(array_keys($_POST)) !== 4) {
    echo json_encode(array("counts" => "error count is not 4 !!! "));
    exit;
}

foreach (array_keys($_POST) as $field) {
    if (!in_array($field, INPUTS_CREATE_ACCOUNT)) {
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
    if ($c == 0) return true;
    return false;
}


function createAccount()
{
    global $conn;
    $stmt   =   $conn->prepare("INSERT INTO __users(`name`,email,password_,phone) VALUES(?,?,?,?)");
    $stmt->bindValue(1,  $_POST["fullname"]);
    $stmt->bindValue(2,  $_POST["email"]);
    $stmt->bindValue(3,  $_POST["password"]);
    $stmt->bindValue(4,  $_POST["phone"]);

    if ($stmt->execute())
        return true;

    return false;
}

require_once "./checkInputs/inputs.php";

try {
    if (count($arrError) !== 0)
        $arrError = array();
    if (!fullname())
        array_push($arrError, "name");

    if (!phone())
        array_push($arrError, "phone");

    if (!email())
        array_push($arrError, "email");

    if (!password())
        array_push($arrError, "password");

    if (count($arrError) !== 0) {
        echo json_encode(array("error" => $arrError));
        exit;
    }

    $_POST["email"]   =  filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $_POST["password"]   =  password_hash($_POST["password"], PASSWORD_DEFAULT);
    $inf = "*";
    require_once "./connection/connect.php";
    if (!userFound()) {
        echo json_encode(array("create" => false));
        exit;
    }
    if (createAccount()) {

        session_start();
        $_SESSION['token'] = password_hash($_POST["email"] . "php1", PASSWORD_DEFAULT);
        $_SESSION['email'] = $_POST["email"];
        echo json_encode(array("create" => $_POST["phone"]));

    }
} catch (Exception  $ex) {
    echo json_encode(array("exp" => exit($ex->getMessage())));
}
