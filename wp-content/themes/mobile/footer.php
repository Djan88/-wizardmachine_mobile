            <div class="col col-md-2 col-lg-3 col-xl-3"></div>
          </div>
          <div id="menu" class="row hidden">
            <ul class="main_menu">
              <?php if(is_user_logged_in()) { ?>
              <li class="user_avatar">
                <?php echo get_avatar( $user_ID, 65 ); ?>
              </li>
              <?php } ?>
              <li>
                <a href="#" class=" row align-items-center">
                  <span class="menu_item_img"><i class="fas fa-home"></i></span>Главная
                </a>
              </li>
              <li>
                <a href="#" class=" row align-items-center">
                  <span class="menu_item_img"><i class="far fa-check-square"></i></span>Выбор протокола
                </a>
              </li>
              <li>
                <a href="#" class=" row align-items-center">
                  <span class="menu_item_img"><i class="fas fa-fingerprint"></i></span>Ручная диагностика
                </a>
              </li>
              <li>
                <a href="#" class=" row align-items-center">
                  <span class="menu_item_img"><i class="fas fa-user"></i></span>Личный кабинет
                </a>
              </li>
              <?php if(is_user_logged_in() && current_user_can('administrator')) { ?>
              <li>
                <a href="/wp-admin" class=" row align-items-center">
                  <span class="menu_item_img"><i class="fas fa-screwdriver"></i></span>Панель
                </a>
              </li>
              <?php } ?>
              <?php if(is_user_logged_in()) { ?>
              <li>
                <a href="<?php echo home_url(); ?>/wp-login.php?action=logout&amp;_wpnonce=a6cad512ba" class=" row align-items-center">
                  <span class="menu_item_img"><i class="fas fa-sign-out-alt"></i></span>Выход
                </a>
              </li>
              <?php } ?>
            </ul>
            <div class="credits">
              <div class="credits_heading">Юрий Чикуров</div>
              <div><a href="https://chikurov.com" target="_blank" class="btn btn-outline-info btn-lg">www.chikurov.com</a></div>
              <div>Все права защищены</div>
            </div>
          </div>
        </div>
      </div>
    </div>
<?php wp_footer(); ?>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/fonts/js/all.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/superslide-std.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
  </body>
</html>
