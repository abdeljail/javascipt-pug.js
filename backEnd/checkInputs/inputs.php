<?php
function filter($ipt){
    return htmlspecialchars($ipt, ENT_QUOTES);
}

function fullname()
{
    if ($_POST['fullname'] == '')
        return false;
    if ($_POST['fullname'] == NULL)
        return false;
    if (gettype($_POST['fullname']) !== "string")
        return false;
    $_POST['fullname'] = filter(trim($_POST['fullname']));
    define('REGEXP', "/(^[A-Za-z]{3,16}) ([ ]{0,1})([A-Za-z]{3,16})/");
    return preg_match(REGEXP, $_POST['fullname']) ? true : false;
}
function phone()
{
    if ($_POST['phone'] == '')
        return false;
    if ($_POST['phone'] == NULL)
        return false;
    if (gettype($_POST['phone']) !== "string")
        return false;
    $_POST['phone'] = filter($_POST['phone']);

    define('PHONE', "/[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}/");
    return preg_match(PHONE, $_POST['phone']) && str_replace("-" , " ", $_POST['phone']) ? true : false;
}
function email()
{
    if ($_POST['email'] == '')
        return false;
    if ($_POST['email'] == NULL)
        return false;
    if (gettype($_POST['email']) !== "string")
        return false;
    $_POST['email'] = filter(trim($_POST['email']));
    define('EMAIL', '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');
    return preg_match(EMAIL, $_POST['email']) ? true : false;
}
function password()
{
    if ($_POST['password'] == '')
        return false;
    if ($_POST['password'] == NULL)
        return false;
    if (gettype($_POST['password']) !== "string")
        return false;
    $_POST['password'] = filter(trim($_POST['password']));

    return true;
    
}
