<!DOCTYPE html>
<html lang="ru-RU">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>WizardMachine(Mobile)</title>
    <?php wp_head(); ?>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/bootstrap.min.css type=text/css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/jquery.Jcrop.min.css type=text/css">
    
  </head>
  <body>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col wrapper">
          <div class="header master_header shadow row align-items-center">
            <div class="col-3">
              <?php if(is_user_logged_in()) { ?>
                <button type="button" class="btn btn-lg btn-link side_menu"><i class="fas fa-bars"></i></button>
              <?php } ?>
            </div>
            <div class="col-6 header-title">
              Выберите режим
            </div>
            <div class="col-3" style="text-align: right;">
              <button type="button" class="btn btn-lg btn-link justify-content-end">
                <i class="fas fa-diagnoses"></i>
              </button>
            </div>
          </div>
          <div id="content" class="content row">
            <div class="col col-md-2 col-lg-3 col-xl-3"></div>
