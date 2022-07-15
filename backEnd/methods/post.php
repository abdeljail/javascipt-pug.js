<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(array("REQUEST METHOD" => "error REQUEST_METHOD is not POST REQUEST !!! "));
    exit;
}
