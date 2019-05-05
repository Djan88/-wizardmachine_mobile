            <div class="col col-md-2 col-lg-3 col-xl-3"></div>
          </div>
          <?php if(is_user_logged_in()) { ?>
          <div id="menu" class="row hidden">
            <a href="/" class="sidebar_logo"><img src="<?php echo get_template_directory_uri(); ?>/img/tarot_logo_white.png" alt="logo"></a>
            <ul class="main_menu">
              <?php if(current_user_can('contributor') || current_user_can('administrator')) { ?>
              <li>
                <a href="/" class=" row align-items-center">
                  <span class="menu_item_img"><i class="fas fa-th"></i></span>В начало
                </a>
              </li>
              <?php } ?>
              <li>
                <a href="/kabinet" class="row align-items-center user_avatar">
                  <span class="menu_item_img"><?php echo get_avatar( $user_ID, 40 ); ?></span>Личный кабинет
                </a>
              </li>
              <?php if(current_user_can('contributor') || current_user_can('administrator')) { ?>
              <li>
                <a href="#" class="row align-items-center user_history">
                  <span class="menu_item_img"><i class="fas fa-history"></i></span>История
                </a>
              </li>
              <?php } ?>
              <?php if(current_user_can('administrator')) { ?>
              <li>
                <a href="/wp-admin" class=" row align-items-center">
                  <span class="menu_item_img"><i class="fas fa-screwdriver"></i></span>Панель
                </a>
              </li>
              <?php } ?>
              <li style="padding-left: 16px;text-align: center; border-bottom: 1px solid #080808;
    position: relative; height: 60px;position: relative; display: none;">
              <span class="menu_item_img" style="position: absolute;left: 35px;"><i class="fas fa-sync"></i></span>
                <?php echo do_shortcode( '[theme_switcha_select text="Выберите версию"]' ); ?>
              </li>
              <li>
                <a href="<?php echo home_url(); ?>/wp-login.php?action=logout&amp;_wpnonce=a6cad512ba" class=" row align-items-center">
                  <span class="menu_item_img"><i class="fas fa-sign-out-alt"></i></span>Выход
                </a>
              </li>
            </ul>
            <div class="credits">
              <div class="credits_heading">Юрий Чикуров</div>
              <div><a href="https://chikurov.com" target="_blank" class="btn btn-outline-info btn-lg">www.chikurov.com</a></div>
              <div>Все права защищены</div>
            </div>
          </div>
          <?php } ?>
        </div>
      </div>
    </div>
<?php wp_footer(); ?>
    <script src="<?php echo get_template_directory_uri(); ?>/fonts/js/all.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/superslide-std.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.Jcrop.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/exif.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/canvas.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-ui.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.ui.touch-punch.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/popper.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js"></script>
    <!-- <script src="<?php echo get_template_directory_uri(); ?>/js/sweet-alert.min.js"></script> -->
    <script src="<?php echo get_template_directory_uri(); ?>/js/sweetalert.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/harvi.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/protocols.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/html2canvas.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/master_of_reality.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/proelements.js"></script>
    <div class="modal" id="zones_template" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Система DSV</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img src="<?php echo get_template_directory_uri(); ?>/img/zones.png" alt="zones">
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="card_modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img class="card_modal_img" src="" alt="zones">
          </div>
          <div class="modal-footer card_modal_footer hidden">
            <button type="button" class="btn btn-primary zone_choice" data-zone="">Выбрать</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="history_item_modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content" id="history_item_modal_content">
          <div class="modal-header">
            <h5 class="modal-title" id="history_item_modal_title">Рецепт: "<span class="history_item_modal_sub_title"></span>"</h5>
            <button data-html2canvas-ignore="true" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h5 class="modal-title for_print" id="history_item_modal_title">применять 21 день</h5>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="marakata_sim_prot_modal marakata_modal_sim-1"></div>
              <div class="marakata_sim_prot_modal marakata_modal_sim-2"></div>
              <div class="marakata_sim_prot_modal marakata_modal_sim-3"></div>
              <div class="marakata_sim_prot_modal marakata_modal_sim-4"></div>
              <div class="marakata_modal_sim-dot"></div>
              <div class="marakata_sim_prot_modal marakata_modal_sim-5"></div>
            </div>
          </div>
          <div class="modal-footer card_modal_footer">
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <div class="history_item_modal_code"></div>
                </div>
                <div class="col-4">
                  <button data-html2canvas-ignore="true" class="btn btn-success save_img">Сохранить <i class="fas fa-download"></i></button>
                  <!-- <img class="saved_img hidden" src="" alt=""> -->
                  <a href="" download class="saved_img btn hidden">Скачать</a>
                </div>
                <div class="col-4">
                  <div class="history_item_modal_date"></div>
                </div>
              </div>
              <div class="row for_print">
                <div class="col" style="margin-top: 10px;text-align: center;">Рецепт создан в программе — <b>"TarotMachine"</b></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="mode_namerenie" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="history_item_modal_title">Намерение</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mode_content">
            <b>Управление «неоформленным»</b>
            <ul style="text-align: left;">
              <li>Движение к целям и желаниям</li>
              <li>Внутренний хаос </li>
            </ul>
            <p><b>Проведите предварительную коррекцию первоэлемента <span style="color: #bd2130;">«Огонь»</span> через Пентакли!</b></p>
          </div>
          <div class="modal-footer card_modal_footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" data-zone="">ОК</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="mode_deistvie" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="history_item_modal_title">Действие</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mode_content">
            <b>Управление «оформленным»</b>
            <ul style="text-align: left;">
              <li>Действия других людей.</li>
              <li>Расставание с отождествлённым.</li>
            </ul>
            <p><b>Проведите предварительную коррекцию первоэлемента <span style="color: #007bff;">«Вода»</span> через Кубки!</b></p>
          </div>
          <div class="modal-footer card_modal_footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" data-zone="">ОК</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="elem_mode" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Коррекция первоэлементов</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mode_content">
            <p>
              Первоэлемент: <span class="elem_mode_title"></span><br>
              Карты: <span class="elem_mode_card"></span>
            </p>
            <div class="how_to_elem">
              <p>Переместите зону <span class="zone_test"></span> на область руки, как продемострировано ниже. <br>За тем запустите выполнение программы. <span class="acent_text" style="transform: rotate(90deg); display: inline-block;"><i class="far fa-play-circle"></i></span></p>
              <p>После того как все карты будут выложены появится возможность завершить работу протокола по усмотрению оператора кликнув по кнопке <span class="acent_text"><i class="far fa-stop-circle"></i></span> в правом верхнем углу.</p>
              <img src="<?php echo get_template_directory_uri(); ?>/img/hand_alt.gif" alt="">
              <p>Программа автоматически завершится через 10 минут после старта.</p>
            </div>
          </div>
          <div class="modal-footer card_modal_footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" data-zone="">ОК</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="card_docs" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Свойства карт</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mode_content">
            <div class="container">
              <div id="accordion" class="manual_wrap">
                <h3>Карта Дурак (0)</h3>
                <div class="manual_content">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/cards/fool_1.png" alt="zones" alt="fool">
                  <p>
                  соответствует крестцу - фундаменту или основы всей телесной конструкции.
                  Карта находится сзади, на крестце, в отличие от остальных телесных карт, которые проецируются на переднюю поверхность тела.
                  </p>
                  <p>
                    Наш крестец на Латыни имеет название как «Sacrum» - что переводится, как «сакральный», а детородные органы, расположенные внутри малого таза у женщин или рядом снаружи у мужчин - традиционно всеми культурами мира ассоциировались с жизненной силой.
                  </p>
                  <p>
                    Любые расстройства Дурака  связаны с проблемами, которые наше телесное подсознание расценивает как угрозу жизни индивида! Через карту Дурак происходят энергетические подключи Нижних Миров
                  </p>
                  <p>
                    Проблемы карты Дурак могут возникнуть в разные возрастные периоды человека - от внутриутробного до взрослого.
                  </p>
                  <p>
                    Как только у карты Дурак возникает повреждение - то Дурак сразу "обижается" и отправляется бродить "куда глаза глядят", наподобие обиженного подростка, который обиделся на родителей и поехал на электричках по стране кататься.<br>«Ударившись в бега" Дурак попутно просаживает энергию карт Башня и Страшный Суд, и тогда человек будет страдать чувством вины и у него будут большие проблемы с восходящим потоком силы!
                  </p>
                  <p>
                    Основные причины повреждения карты Дурак:
                    <ol>
                      <li>В перинатальном возрасте - мать думала сделать аборт, но не сделала - Дурак все чувствует! </li>
                      <li>Внутриутробная гипоксия, обвитие пуповиной, патологические роды.</li>
                      <li>Депривация раннего детского возраста (нет с рождения матери рядом, детский дом). Кстати, повреждают даже только угрозы отдать в детский дом за плохое поведение!</li>
                      <li>Отсутствие поддержки отцом ребенка (неполные семьи, либо номинальный отец).Этот фактор повреждает Дурака также и в более взрослом возрасте</li>
                      <li>Невозможность сделать вдох, неважно по каким причинам - или тонул, или поперхнулся, или подушкой придавили добрые детки, или на копчик упал, или ударили в солнечное сплетение.</li>
                      <li>Кровотечение видимое клиенту, особенно свое. Это могут быть первые месячные.</li>
                      <li>Физическое и сексуальное насилие. Это может быть эквивалент первого посещение гинеколога или уролога/проктолога.</li>
                      <li>Физические травмы с потерей сознания или операции под общим наркозом.</li>
                      <li>Видеоигры и фильмы с убийствами и реками крови (за счет включения зеркальных нейронов у человека - смотрим на чужие страсти, но подсознательно примеряем на себя!).</li>
                    </ol>
                  </p>
                  <p><b>Примечание:</b><br>В процессе терапии Дурака клиент может испытывать интенсивное тепло в районе поясницы, также клиента может сильно качать в стороны, если терапия происходит в позиции клиента стоя.<br>После терапии меняется статика и моторика всего тела<br>Иногда клиенты могут плакать и/или смеяться.<br>Для пролеченного Дурака становятся очевидными многие жизненные ситуации, которые клиент не понимал до терапии!<br>Терапия Дурака устраняет нисходящий стрейн в краниосакральной системе, что благоприятно сказывается на все тело и голову пролеченного.<br>Дурак проблемный всегда будет привлекать к себе внимание - либо дурацкими выходками, либо болезнями, но чаще - обидами!</p>
                </div>
                <h3>Карта Маг (I)</h3>
                <div class="manual_content">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/cards/magician_1.png" alt="zones" alt="mag">
                  <p>
                    Мы часто наблюдаем проблемы Мага у лиц, которые занимаются всевозможными тонкими энергетическими  практиками, такими как Рейки, Краниосакральная терапия или Биодинамика.
                  </p>
                  <p>
                    Считается, что в этой зоне головы застревает всякий «тонкоматериальный хлам», наподобие того, как мелкая пыль застревает в фильтре тонкой очистки бытового пылесоса.
                  </p>
                  <p>
                    Маг символизирует «третий глаз», который видит слишком много всего такого, что его и засоряет, по примеру того, как смотреть на пыль или песок поднятые ветром, так и засорит глаза смотрящему эта пыль или песок. И тогда Маг теряет свои способности «видения» тонких планов.
                  </p>
                  <p>
                    Любой протокол лечебного Tarot рекомендуется завершать коррекцией Мага.
                  </p>
                  <p>
                    Любая работа, связанная с «видением» проблем телесного запределья, будь то зона редукции или кармы, или дорсальные поля БВО или корень Рода - все это требует последующей коррекции «Мага» у терапевта!
                  </p>
                  <p>
                    Терапия Мага может сопровождаться чиханием из-за улучшения кровотока в зоне верхних носовых ходов.
                  </p>
                  <p>
                    Терапия мага устраняет верхний стрейн в краниосакральной системе и расслабляет напряженный крестец, таз и ноги (нисходящее влияние).
                  </p>
                </div>
                <h3>Карта Башня (XVI)</h3>
                <div class="manual_content">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/cards/tower_1.png" alt="zones" alt="tower">
                  <p>
                    соответствует органам малого таза  (простата у мужчин, матка у женщин), Кундалини в Ведах.
                  </p>
                  <p>
                    Подъем Башни наверх - это подъем по вентральной оси DSV восходящего потока жизненной силы. Кто поднялся на самый верх, выше Мага и Звезды - тот смог восстановить ресурс нижних миров до уровня потенций Solis.
                  </p>
                  <p>
                    Через Башню осуществляется питание жизненной силой всех карт вентральной оси: Умеренность, колесо фортуны, Отшельник, Сила, Верховная жрица, Маг.
                  </p>
                  <p>
                    Башня покоится на основании - Sacrum (лат. крестец) - карта Дурак. Если основание башни будет смещено - Дурак «пойдет куда ему взбредится», то Башня сместится со своего места и разрушится и никто не сможет подняться по ее ступеням. Поток жизненной силы не может быть поднят, и ресурс нижних миров не может быть восстановлен.
                  </p>
                  <p>
                    В результате возникнет сильный дисбаланс между Луной в нижних мирах и Solis в верхней позиции, и закон продольного центрирования Tarot на полнолуние не может быть осуществлен.
                  </p>
                  <p>
                    Когда Башня повреждена, но она не может поднимать на верх восходящий поток силы, Башня отражает этот поток назад карте Луна вниз под ноги. Поэтому мы можем наблюдать участки флюэдического напряжения между бедер, колен или еще ниже.
                  </p>
                  <p>
                    Это похоже на рассеянный свет фонарика и называется как "нижнее расщепление потока силы".
                  </p>
                  <p>
                    Нижнее расщепление бывает только в сагиттальной (продольной) плоскости и всегда является достоверным критерием проблем карты Башня!
                  </p>
                </div>
                <!-- <h3>Дурак (0)</h3>
                <div class="manual_content">
                  <img src="<?php //echo get_template_directory_uri(); ?>/img/cards/magician_1.png" alt="zones" alt="mag">
                </div> -->
              </div>
            </div>
          </div>
          <div class="modal-footer card_modal_footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" data-zone="">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
