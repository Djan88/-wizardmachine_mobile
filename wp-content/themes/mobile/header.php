<!DOCTYPE html>
<html lang="ru-RU">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_template_directory_uri(); ?>/img/fav180.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/img/fav32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/img/fav16.png">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico">
    <title>WizardMachine(Mobile)</title>
    <?php wp_head(); ?>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/jquery.Jcrop.min.css" type="text/css">
    <!-- <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/sweet-alert.css" type="text/css"> -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/sweetalert.css" type="text/css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css" type="text/css">
  </head>
  <body>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col wrapper">
          <div class="header master_header row align-items-center">
            <div class="col-4" style="padding: 0;">
              <?php if(is_user_logged_in()) { ?>
                <button type="button" class="btn btn-lg btn-link side_menu"><i class="fas fa-bars"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-to_img hidden"><i class="far fa-arrow-alt-circle-left"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-to_mode hidden"><i class="far fa-arrow-alt-circle-left"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-to_protocols hidden"><i class="far fa-arrow-alt-circle-left"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-paused hidden"><i class="far fa-pause-circle"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-played hidden"><i class="far fa-play-circle"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-to_manual hidden"><i class="far fa-arrow-alt-circle-left"></i></button>
                <button type="button" class="btn btn-lg btn-link btn-back btn-to_endNow hidden" data-toggle="popover" data-placement="bottom" title="Протокол остановлен!" data-content="Выполнение протокола будет приостановлено по окончании текущей фазы. Все данные будут сохранены"><i class="far fa-stop-circle"></i></button>
              <?php } ?>
            </div>
              <?php if(is_user_logged_in()) { ?>
                <?php if(current_user_can('contributor') || current_user_can('administrator')) { ?>
                  <div class="col-4 header-title header-title_logo"><img src="<?php echo get_template_directory_uri(); ?>/img/tarot_logo_alt.png" alt="logo"></div>
                <?php } else { ?>
                  <div class="col-4 header-title header-title_logo"><img src="<?php echo get_template_directory_uri(); ?>/img/tarot_logo_alt.png" alt="logo"></div>
                <?php } ?>
              <?php } else { ?>
                <div class="col-4 header-title header-title_logo"><img src="<?php echo get_template_directory_uri(); ?>/img/tarot_logo_alt.png" alt="logo"></div>
              <?php } ?>
            <div class="col-4" style="text-align: right; padding: 0;">
              <button type="button" class="btn btn-lg btn-link justify-content-end btn_crop hidden">
                <i class="fas fa-crop-alt"></i>
              </button>
              <button type="button" class="btn btn-lg btn-link clear_graph hidden justify-content-end">
                <i class="fas fa-broom"></i>
              </button>
              <?php if(is_user_logged_in()){ ?>
                <?php if(current_user_can('contributor') || current_user_can('administrator')) { ?>
                  <button type="button" class="btn btn-lg btn-link btn_history justify-content-end">
                    <i class="fas fa-history"></i>
                  </button>
                <?php } ?>
              <?php } ?>
              <!-- <button type="button" data-toggle="modal" data-target="#zones_template" class="btn btn-lg btn-link btn_man_with_zones hidden justify-content-end">
                <i class="fas fa-diagnoses"></i>
              </button> -->
              <button type="button" class="btn btn-lg btn-link btn_man_with_zones hidden justify-content-end">
                <i class="fas fa-diagnoses"></i>
              </button>
              <button type="button" class="btn btn-lg btn-link btn_moon_day hidden justify-content-end">
                <i class="fas fa-moon"></i>
              </button>
              <button type="button" class="btn btn-lg btn-link btn_start hidden justify-content-end">
                <i class="far fa-flag"></i>
              </button>
              <button type="button" class="btn btn-lg btn-link btn_start_elems hidden justify-content-end">
                <i class="far fa-play-circle"></i>
              </button>
              <button type="button" class="btn btn-lg btn-link btn_stop_elems hidden justify-content-end">
                <i class="far fa-stop-circle"></i>
              </button>
              <button type="button" class="btn btn-lg btn-link btn_protocols hidden justify-content-end">
                <i class="far fa-check-square"></i>
              </button>
              <button type="button" class="btn btn-lg btn-link btn_return hidden justify-content-end">
                <i class="far fa-arrow-alt-circle-right"></i>
              </button>
            </div>
          </div>
          <div id="content" class="content row">
            <div class="history col" style="top: -1000px">
              <button type="button" class="close history_close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="col history-title">История рецептов</div>
              <div class="history_wrapper"></div>
            </div>
            <div class="manual col" style="top: -1000px">
              <button type="button" class="close manual_close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div class="col manual-title">Свойства карт</div>
              <div class="modal_wrapper container">
                <div class="row">
                  <div id="accordion" class="col manual_wrap">
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
            </div>
            <div class="zones_template">
              <img src="<?php echo get_template_directory_uri(); ?>/img/zones.png" alt="zones">
            </div>
            <div class="col col-md-1 col-lg-1 col-xl-1"></div>
