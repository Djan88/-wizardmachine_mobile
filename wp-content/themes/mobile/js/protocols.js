var chain,
    onEnd,
    queue,
    cb,
    then,
    l_top,
    l_middle_1,
    l_middle_2,
    l_bottom,
    r_top,
    r_middle_1,
    r_middle_2,
    r_bottom,
    x1,
    x2,
    x3,
    x4,
    x5,
    x6,
    pausedStatus = false,
    pausedProtName,
    pausedPhases,
    protocol,
    protocolfromMemory,
    protocolName,
    phaseOne,
    checkPoints,
    pointsStatus = true,
    count_animation = 0,
    rotate_one = 0,
    rotate_two = 0,
    rotate_three = 0,
    rotate_four = 0,
    rotate_lovushka = 0,
    v1,
    endStatus = false,
    card_zones = {
      '0' : '.draggable_v5',
      '1' : '.draggable_v1',
      '2' : '.draggable_v2',
      '3' : '.draggable_s3',
      '4' : '.draggable_d4',
      '5' : '.draggable_s4',
      '6' : '.draggable_s5',
      '7' : '.draggable_s2',
      '8' : '.draggable_v3',
      '9' : '.draggable_v3-4',
      '10' : '.draggable_v4',
      '11' : '.draggable_d3',
      '12' : '.draggable_d5',
      '13' : '.draggable_d2_1',
      '14' : '.draggable_v4-5',
      '16' : '.draggable_v5_1',
      '17' : '.draggable_v0',
      '18' : '.draggable_v-',
      '20' : '.draggable_s2_1',
      '21' : '.draggable_d2'
    },
    card_zone,
    card_zone_top,
    card_zone_left,
    card_ids = {
      '0' : '#draggable_v5',
      '1' : '#draggable_v1',
      '2' : '#draggable_v2',
      '3' : '#draggable_s3',
      '4' : '#draggable_d4',
      '5' : '#draggable_s4',
      '6' : '#draggable_s5',
      '7' : '#draggable_s2',
      '8' : '#draggable_v3',
      '9' : '#draggable_v3-4',
      '10' : '#draggable_v4',
      '11' : '#draggable_d3',
      '12' : '#draggable_d5',
      '13' : '#draggable_d2_1',
      '14' : '#draggable_v4-5',
      '16' : '#draggable_v5_1',
      '17' : '#draggable_v0',
      '18' : '#draggable_v-',
      '20' : '#draggable_s2_1',
      '21' : '#draggable_d2'
    },
    card_id,
    cur_cards = ['3', '10', '11', '12'],
    cur_cards_length = cur_cards.length - 1,
    cur_card;
    cur_card_in_stack = 0;



// if paused procedure is exist
if (localStorage.getItem('paused')) {
  pausedStatus = true;
  swal({
    title: "У Вас есть незавершенный протокол",   
    text: "Хотите продолжить его выполнение?",   
    type: "info",   
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Продолжить",   
    cancelButtonText: "Новый клиент"
  },
  function(isConfirm){
    if (isConfirm) {    
      jQuery('.btn-to_endNow').css('color', '#fff');
      jQuery('.mobile_screen_protocols').addClass('hidden').css('display', 'none');
      jQuery('.mobile_screen_load').addClass('hidden').css('display', 'none');
      jQuery('.mobile_screen_what_way').addClass('hidden').css('display', 'none');
      jQuery('.mobile_screen_final').fadeIn(500);
      jQuery('.btn-to_mode, .btn-to_manual, .btn-to_protocols, .btn-to_img').addClass('hidden');
      jQuery('.btn-to_protocols, .btn_man_with_zones, .btn_start').removeClass('hidden');
      jQuery('.zone_final').css('height', jQuery('.zone_final').css('width'));
      jQuery('.loaded_img').attr('src', localStorage.getItem('pausedPhoto'));
      protocolfromMemory = eval(localStorage.getItem('paused'))
      jQuery('.btn-to_endNow').css('color', '#fff');
      jQuery('.header-title').text('Программа выполняется');
    } else {    
      jQuery(location).attr('href','/');
      localStorage.removeItem('paused');
      localStorage.removeItem('pausedPhoto');
      localStorage.removeItem('pausedPhases');
      localStorage.removeItem('pausedProtName'); 
      pausedStatus = false;
    } 
  });
}

onEnd = function(){
  jQuery('.btn-to_endNow').addClass('hidden');
  jQuery('.btn_start').removeAttr('disabled');
  jQuery('.zone_x, .zone_l, .zone').css('transform', 'rotate(0deg)');
  jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
  rotate_one = 0;
  rotate_two = 0;
  rotate_three = 0;
  rotate_four = 0;
  rotate_lovushka = 0;
  count_animation = 0;
  localStorage.removeItem('paused');
  localStorage.removeItem('pausedPhoto');
  localStorage.removeItem('pausedPhases');
  localStorage.removeItem('pausedProtName');
  pausedStatus = false;

  protocolName = localStorage.getItem('protocolName');
  swal({
    title: "Протокол завершен",
    text: "Что делать дальше?",
    type: "success",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "В начало",
    cancelButtonText: "Новый клиент"
  },
  function(isConfirm){
    var protocol = undefined;
    if (isConfirm) {    
      jQuery('.mobile_screen').addClass('hidden').css('display', 'none');
      jQuery('.btn-to_protocols, .btn_man_with_zones, .btn_start').addClass('hidden');
      jQuery('.mobile_screen_protocols').fadeIn(500);
      jQuery('.btn-to_mode').removeClass('hidden');
      jQuery('.header-title').text('Выберите протокол');
    } else {    
      jQuery(location).attr('href','/');
    } 
  });
  jQuery('.status').addClass('hidden');
  jQuery('.status_title').text('');
  jQuery('.status_pahaze_now').text('0');
  jQuery('.status_pahaze_all').text('0');
}

endNow = function(){
  jQuery('.btn_start').removeAttr('disabled');
  jQuery('.zone_x, .zone_l, .zone').css('transform', 'rotate(0deg)');
  jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
  rotate_one = 0;
  rotate_two = 0;
  rotate_three = 0;
  rotate_four = 0;
  rotate_lovushka = 0;
  count_animation = 0;

  swal({
    title: "Приостановлено пользователем",   
    text: "Что делать дальше?",   
    type: "info",
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Продолжить",   
    cancelButtonText: "К Началу"
  },
  function(isConfirm){
    // var protocol = undefined; 
    // jQuery('.btn-to_endNow').addClass('hidden');
    endStatus == false;  
    if (isConfirm) {    
      
    } else { 
      jQuery(location).attr('href','/');
    } 
  });
}


tarot = function(){
  jQuery('.line_area').addClass('hidden');
  jQuery('.card_devil, .card_solis').removeClass('card_move_fast').addClass('card_move');
  count_animation = 0;
  cur_card = cur_cards[cur_card_in_stack];
  console.log(cur_card);
  card_id = jQuery(card_ids[cur_card]);
  card_zone_left = parseInt(jQuery(card_zones[cur_card]).css('left'));
  card_zone_top = parseInt(jQuery(card_zones[cur_card]).css('top'));
  card_id.fadeIn(500);
  card_id.css({
    transform: 'scale(1) rotate(180deg)',
    left: card_zone_left - 40 +'px',
    top: card_zone_top - 60 +'px'
  });
  jQuery('.card_codes_bottom').find(jQuery('[data-number =' + cur_card + ']')).fadeOut(500);
  phaseOne = setInterval(function(){
    if (count_animation <= 4){
      jQuery('.card_devil').css('top', card_zone_top - 32 + 'px');
      count_animation += 1;
    } else if (count_animation > 4 && count_animation <= 8) {
      jQuery('.card_solis').css('top', card_zone_top - 32 + 'px');
      card_id.css('transform', 'rotate(270deg)');
      count_animation += 1;
    } else if (count_animation > 8 && count_animation <= 12) {
      count_animation += 1;
    } else if (count_animation > 12 && count_animation <= 16) {
      card_id.css('transform', 'rotate(360deg)');
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      card_id.css('top', parseInt(card_id.css('top')) - 200 + 'px');
      card_id.css({
        transform: 'scale(0.5) rotate(360deg)',
        left: '-400px',
        top: '-80px'
      });
      card_id.fadeOut(1000);
      jQuery('.card_devil, .card_solis').removeClass('card_move').addClass('card_move_fast');
      jQuery('.card_devil').css('top', jQuery('.card_ghost_devil').css('top'));
      jQuery('.card_solis').css('top', jQuery('.card_ghost_solis').css('top'));
      jQuery('.card_codes_top').find(jQuery('[data-number =' + cur_card + ']')).fadeIn(500);
      if (cur_card_in_stack < cur_cards_length) {
        cur_card_in_stack += 1;
        tarot();
      } else {
        onEnd();
      }
    }
  }, 1000);
}

v1_5 = function(){
  count_animation = 0;
  jQuery('.status_percent').text('95%');
  console.log('Фаза 5');
  phaseOne = setInterval(function(){
    if (count_animation <= 8){
      sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
      if (count_animation <= 4) {
        jQuery('.draggable_v1, .draggable_v5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation > 4 && count_animation <= 8) {
        jQuery('.draggable_v1, .draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
      rotate_lovushka += 2;
    } else {
      clearInterval(phaseOne);
      count_animation = 0;
      jQuery('.status_percent').text('96%');
      clearInterval(phaseOne);
      phaseOne = setInterval(function(){
        if (count_animation <= 8){
          sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
          if (count_animation <= 4) {
            jQuery('.draggable_v1, .draggable_v5').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation > 4 && count_animation <= 8) {
            jQuery('.draggable_v1, .draggable_v5').css({
              background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_lovushka += 2;
        } else {
          clearInterval(phaseOne);
          count_animation = 0;
          jQuery('.status_percent').text('97%');
          clearInterval(phaseOne);
          phaseOne = setInterval(function(){
            if (count_animation <= 8){
              sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
              if (count_animation <= 4) {
                jQuery('.draggable_v1, .draggable_v5').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation > 4 && count_animation <= 8) {
                jQuery('.draggable_v1, .draggable_v5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_lovushka += 2;
            } else {
              clearInterval(phaseOne);
              count_animation = 0;
              jQuery('.status_percent').text('98%');
              clearInterval(phaseOne);
              phaseOne = setInterval(function(){
                if (count_animation <= 8){
                  sideFormulsTwo(count_animation, jQuery('.draggable_v0'), jQuery('.draggable_v-'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_v1, .draggable_v5').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation > 4 && count_animation <= 8) {
                    jQuery('.draggable_v1, .draggable_v5').css({
                      background: '#fff url(/wp-content/themes/mobile/img/life_vater.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_lovushka += 2;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 0;
                  jQuery('.status_percent').text('100%');
                  clearInterval(phaseOne);
                  jQuery('.draggable_v1, .draggable_v5').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  onEnd();
                }
              }, 1000); 
            }
          }, 1000); 
        }
      }, 1000); 
    }
  }, 1000);  
}

v1_4 = function(){
  console.log('Фаза 3/1');
  jQuery('.zone_x, .zone_l').addClass('hidden').css('transform', 'scale(1)');
  jQuery('.status_percent').text('72%');
  jQuery('.status_pahaze_now').text('4');
  rotate_one = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 22){
      jQuery('.draggable_v1').css({
        color: 'transparent',
        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
        opacity: 0.8
      });
      rotate_one += 1.5;
      count_animation += 1;
    } else if (count_animation <= 39) {
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.draggable_v1').css({
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      count_animation = 0;
      jQuery('.status_percent').text('74%');
      rotate_one = 10;
      phaseOne = setInterval(function(){
        if (count_animation <= 53){
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          rotate_one += 1.5;
          count_animation += 1;
        } else if (count_animation <= 70) {
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_v1').css({
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          count_animation = 0;
          jQuery('.status_percent').text('76%');
          rotate_one = 270;
          phaseOne = setInterval(function(){
            if (count_animation <= 60){
              jQuery('.draggable_v1').css({
                color: 'transparent',
                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              rotate_one += 1.5;
              count_animation += 1;
            } else if (count_animation <= 77) {
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.draggable_v1').css({
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              count_animation = 0;
              jQuery('.status_percent').text('78%');
              rotate_one = 300;
              phaseOne = setInterval(function(){
                if (count_animation <= 40){
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  rotate_one += 1.5;
                  count_animation += 1;
                } else if (count_animation <= 57) {
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.draggable_v1').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  count_animation = 0;
                  jQuery('.status_percent').text('80%');
                  rotate_one = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 22){
                      jQuery('.draggable_v5').css({
                        color: 'transparent',
                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      rotate_one += 1.5;
                      count_animation += 1;
                    } else if (count_animation <= 39) {
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_v5').css({
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      jQuery('.status_percent').text('82%');
                      rotate_one = 10;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 53){
                          jQuery('.draggable_v5').css({
                            color: 'transparent',
                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          rotate_one += 1.5;
                          count_animation += 1;
                        } else if (count_animation <= 70) {
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_v5').css({
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          count_animation = 0;
                          jQuery('.status_percent').text('84%');
                          rotate_one = 270;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 60){
                              jQuery('.draggable_v5').css({
                                color: 'transparent',
                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              rotate_one += 1.5;
                              count_animation += 1;
                            } else if (count_animation <= 77) {
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_v5').css({
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              count_animation = 0;
                              jQuery('.status_percent').text('86%');
                              rotate_one = 300;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 40){
                                  jQuery('.draggable_v5').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  rotate_one += 1.5;
                                  count_animation += 1;
                                } else if (count_animation <= 57) {
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_v5').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  count_animation = 0;
                                  jQuery('.status_percent').text('88%');
                                  rotate_one = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 22){
                                      jQuery('.draggable_v-').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                        background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      rotate_one += 1.5;
                                      count_animation += 1;
                                    } else if (count_animation <= 39) {
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      jQuery('.draggable_v-').css({
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      count_animation = 0;
                                      jQuery('.status_percent').text('90%');
                                      rotate_one = 10;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 53){
                                          jQuery('.draggable_v-').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                            background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          rotate_one += 1.5;
                                          count_animation += 1;
                                        } else if (count_animation <= 70) {
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          count_animation = 1;
                                          jQuery('.draggable_v-').css({
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          count_animation = 0;
                                          jQuery('.status_percent').text('92%');
                                          rotate_one = 270;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 60){
                                              jQuery('.draggable_v-').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3) rotate('+rotate_one+'deg)',
                                                background: '#fff url(/wp-content/themes/mobile/img/mo_left.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              rotate_one += 1.5;
                                              count_animation += 1;
                                            } else if (count_animation <= 77) {
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              count_animation = 1;
                                              jQuery('.draggable_v-').css({
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              count_animation = 0;
                                              jQuery('.status_percent').text('94%');
                                              rotate_one = 300;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 40){
                                                  jQuery('.draggable_v-').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3) rotate(-'+rotate_one+'deg)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/mo_right.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  rotate_one += 1.5;
                                                  count_animation += 1;
                                                } else if (count_animation <= 57) {
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  jQuery('.draggable_v-').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  count_animation = 0;
                                                  if (pausedStatus == true) {
                                                    localStorage.setItem('paused', 'v1_5');
                                                    endNow()
                                                  } else {
                                                    v1_5();
                                                  }
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000); 
}

v1_3 = function(){
  console.log('Фаза 2/2');
  jQuery('.status_percent').text('48%');
  jQuery('.status_pahaze_now').text('3');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_в5'));
      if (count_animation <= 4) {
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_d5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_d5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.draggable_d5').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('50%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_d6'));
          if (count_animation <= 4) {
            jQuery('.draggable_d6').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_d6').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_d6').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('52%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_s5'));
              if (count_animation <= 4) {
                jQuery('.draggable_s5').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_s5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_s5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.draggable_s5').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('54%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_s6'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_s6').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_s6').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_s6').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.draggable_s6').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('56%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_d2'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_d2').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_d2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_d2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_d2').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('58%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_s2'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_s2').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_s2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_s2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_s2').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('60%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_d5'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_d5').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_d5').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_d5').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_d5').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('62%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_d6'));
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_d6').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_d6').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_d6').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_d6').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('64%');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_s5'));
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_s5').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_s5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_s5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      jQuery('.draggable_s5').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('66%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_s6'));
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_s6').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_s6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_s6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          count_animation = 1;
                                          jQuery('.draggable_s6').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          jQuery('.status_percent').text('68%');
                                          count_animation = 0;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 12){
                                              sideFormuls(count_animation, jQuery('.draggable_d2'));
                                              if (count_animation <= 4) {
                                                jQuery('.draggable_d2').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                              } else if (count_animation <= 8) {
                                                jQuery('.draggable_d2').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                });
                                              } else if (count_animation <= 12) {
                                                jQuery('.draggable_d2').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                });
                                              }
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              count_animation = 1;
                                              jQuery('.draggable_d2').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              jQuery('.status_percent').text('70%');
                                              count_animation = 0;
                                              console.log('test');
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 12){
                                                  sideFormuls(count_animation, jQuery('.draggable_s2'));
                                                  if (count_animation <= 4) {
                                                    jQuery('.draggable_s2').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                  } else if (count_animation <= 8) {
                                                    jQuery('.draggable_s2').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                    });
                                                  } else if (count_animation <= 12) {
                                                    jQuery('.draggable_s2').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                    });
                                                  }
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  jQuery('.draggable_s2').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  count_animation = 0;
                                                  setTimeout(function() {
                                                    jQuery('.zone_x, .zone_l').css('transform', 'scale(0.01)');
                                                    if (pausedStatus == true) {
                                                      localStorage.setItem('paused', 'v1_4');
                                                      endNow()
                                                    } else {
                                                      v1_4();
                                                    }
                                                  }, 1000);
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);  
}

v1_2 = function(){
  console.log('Фаза 2/1');
  jQuery('.status_percent').text('24%');
  jQuery('.status_pahaze_now').text('2');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_d5'));
      if (count_animation <= 4) {
        jQuery('.draggable_d5').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_d5').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_d5').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.draggable_d5').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('26%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_d6'));
          if (count_animation <= 4) {
            jQuery('.draggable_d6').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_d6').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_d6').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('28%');
          count_animation = 0;
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_s5'));
              if (count_animation <= 4) {
                jQuery('.draggable_s5').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_s5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_s5').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.draggable_s5').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('30%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_s6'));
                  if (count_animation <= 4) {
                    jQuery('.draggable_s6').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_s6').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_s6').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.draggable_s6').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('32%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_d2'));
                      if (count_animation <= 4) {
                        jQuery('.draggable_d2').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_d2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_d2').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_d2').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      jQuery('.status_percent').text('34%');
                      count_animation = 0;
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_s2'));
                          if (count_animation <= 4) {
                            jQuery('.draggable_s2').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_s2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_s2').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_s2').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('36%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_d5'));
                              if (count_animation <= 4) {
                                jQuery('.draggable_d5').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_d5').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_d5').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_d5').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('38%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_d6'))
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_d6').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_d6').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_d6').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_d6').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  jQuery('.status_percent').text('40%');
                                  count_animation = 0;
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_s5'))
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_s5').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_s5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_s5').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      jQuery('.draggable_s5').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('42%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_s6'))
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_s6').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_s6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_s6').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                        } else {
                                          clearInterval(phaseOne);
                                          count_animation = 1;
                                          jQuery('.draggable_s6').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          jQuery('.status_percent').text('44%');
                                          count_animation = 0;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 12){
                                              sideFormuls(count_animation, jQuery('.draggable_d2'))
                                              if (count_animation <= 4) {
                                                jQuery('.draggable_d2').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                              } else if (count_animation <= 8) {
                                                jQuery('.draggable_d2').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                });
                                              } else if (count_animation <= 12) {
                                                jQuery('.draggable_d2').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                });
                                              }
                                              count_animation += 1;
                                            } else {
                                              clearInterval(phaseOne);
                                              count_animation = 1;
                                              jQuery('.draggable_d2').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              jQuery('.status_percent').text('46%');
                                              count_animation = 0;
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 12){
                                                  sideFormuls(count_animation, jQuery('.draggable_s2'))
                                                  if (count_animation <= 4) {
                                                    jQuery('.draggable_s2').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                  } else if (count_animation <= 8) {
                                                    jQuery('.draggable_s2').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                    });
                                                  } else if (count_animation <= 12) {
                                                    jQuery('.draggable_s2').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                    });
                                                  }
                                                  count_animation += 1;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  jQuery('.draggable_s2').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  count_animation = 0;
                                                  if (pausedStatus == true) {
                                                    localStorage.setItem('paused', 'v1_3');
                                                    endNow()
                                                  } else {
                                                    v1_3();
                                                  } 
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000); 
}

v1 = function(){
  console.log('Фаза 1');
  jQuery('.status').removeClass('hidden');
  jQuery('.status_pahaze_all').text('5');
  localStorage.setItem('pausedPhases', '5');
  localStorage.setItem('pausedProtName', 'Краниальный протокол');
  jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'rotate(-90deg) scale(1.3)');
  jQuery('.status_percent').text('0%');
  jQuery('.status_pahaze_now').text('1');
  count_animation = 0;
  phaseOne = setInterval(function(){
    if (count_animation <= 12){
      sideFormuls(count_animation, jQuery('.draggable_v1'))
      if (count_animation <= 4) {
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
      } else if (count_animation <= 8) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
        });
      } else if (count_animation <= 12) {
        jQuery('.draggable_v1').css({
          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
        });
      }
      count_animation += 1;
    } else {
      clearInterval(phaseOne);
      count_animation = 1;
      jQuery('.draggable_v1').css({
        color: '#FFF0C7',
        transform: 'scale(1)',
        background: 'rgba(83, 35, 69, 0.4)',
        opacity: 1
      });
      jQuery('.status_percent').text('2%');
      count_animation = 0;
      phaseOne = setInterval(function(){
        if (count_animation <= 12){
          sideFormuls(count_animation, jQuery('.draggable_v5'))
          if (count_animation <= 4) {
            jQuery('.draggable_v5').css({
              color: 'transparent',
              transform: 'scale(1.3)',
              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
          } else if (count_animation <= 8) {
            jQuery('.draggable_v5').css({
              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
            });
          } else if (count_animation <= 12) {
            jQuery('.draggable_v5').css({
              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
            });
          }
          count_animation += 1;
          rotate_one += 2;
          rotate_two += 20;
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          count_animation = 0;
          jQuery('.status_percent').text('4%');
          phaseOne = setInterval(function(){
            if (count_animation <= 12){
              sideFormuls(count_animation, jQuery('.draggable_v-'))
              if (count_animation <= 4) {
                jQuery('.draggable_v-').css({
                  color: 'transparent',
                  transform: 'scale(1.3)',
                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
              } else if (count_animation <= 8) {
                jQuery('.draggable_v-').css({
                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                });
              } else if (count_animation <= 12) {
                jQuery('.draggable_v-').css({
                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                });
              }
              count_animation += 1;
              rotate_one += 2;
              rotate_two += 20;
            } else {
              clearInterval(phaseOne);
              count_animation = 1;
              jQuery('.draggable_v-').css({
                color: '#FFF0C7',
                transform: 'scale(1)',
                background: 'rgba(83, 35, 69, 0.4)',
                opacity: 1
              });
              jQuery('.status_percent').text('6%');
              count_animation = 0;
              phaseOne = setInterval(function(){
                if (count_animation <= 12){
                  sideFormuls(count_animation, jQuery('.draggable_v1'))
                  if (count_animation <= 4) {
                    jQuery('.draggable_v1').css({
                      color: 'transparent',
                      transform: 'scale(1.3)',
                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                  } else if (count_animation <= 8) {
                    jQuery('.draggable_v1').css({
                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                    });
                  } else if (count_animation <= 12) {
                    jQuery('.draggable_v1').css({
                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                    });
                  }
                  count_animation += 1;
                  rotate_one += 2;
                  rotate_two += 20;
                } else {
                  clearInterval(phaseOne);
                  count_animation = 1;
                  jQuery('.draggable_v1').css({
                    color: '#FFF0C7',
                    transform: 'scale(1)',
                    background: 'rgba(83, 35, 69, 0.4)',
                    opacity: 1
                  });
                  jQuery('.status_percent').text('8%');
                  count_animation = 0;
                  phaseOne = setInterval(function(){
                    if (count_animation <= 12){
                      sideFormuls(count_animation, jQuery('.draggable_v5'))
                      if (count_animation <= 4) {
                        jQuery('.draggable_v5').css({
                          color: 'transparent',
                          transform: 'scale(1.3)',
                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                      } else if (count_animation <= 8) {
                        jQuery('.draggable_v5').css({
                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                        });
                      } else if (count_animation <= 12) {
                        jQuery('.draggable_v5').css({
                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                        });
                      }
                      count_animation += 1;
                      rotate_one += 2;
                      rotate_two += 20;
                    } else {
                      clearInterval(phaseOne);
                      count_animation = 1;
                      jQuery('.draggable_v5').css({
                        color: '#FFF0C7',
                        transform: 'scale(1)',
                        background: 'rgba(83, 35, 69, 0.4)',
                        opacity: 1
                      });
                      count_animation = 0;
                      jQuery('.status_percent').text('10%');
                      phaseOne = setInterval(function(){
                        if (count_animation <= 12){
                          sideFormuls(count_animation, jQuery('.draggable_v-'))
                          if (count_animation <= 4) {
                            jQuery('.draggable_v-').css({
                              color: 'transparent',
                              transform: 'scale(1.3)',
                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                          } else if (count_animation <= 8) {
                            jQuery('.draggable_v-').css({
                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                            });
                          } else if (count_animation <= 12) {
                            jQuery('.draggable_v-').css({
                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                            });
                          }
                          count_animation += 1;
                          rotate_one += 2;
                          rotate_two += 20;
                        } else {
                          clearInterval(phaseOne);
                          count_animation = 1;
                          jQuery('.draggable_v-').css({
                            color: '#FFF0C7',
                            transform: 'scale(1)',
                            background: 'rgba(83, 35, 69, 0.4)',
                            opacity: 1
                          });
                          jQuery('.status_percent').text('12%');
                          count_animation = 0;
                          phaseOne = setInterval(function(){
                            if (count_animation <= 12){
                              sideFormuls(count_animation, jQuery('.draggable_v1'))
                              if (count_animation <= 4) {
                                jQuery('.draggable_v1').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3)',
                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                              } else if (count_animation <= 8) {
                                jQuery('.draggable_v1').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                });
                              } else if (count_animation <= 12) {
                                jQuery('.draggable_v1').css({
                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                });
                              }
                              count_animation += 1;
                              rotate_one += 2;
                              rotate_two += 20;
                            } else {
                              clearInterval(phaseOne);
                              count_animation = 1;
                              jQuery('.draggable_v1').css({
                                color: '#FFF0C7',
                                transform: 'scale(1)',
                                background: 'rgba(83, 35, 69, 0.4)',
                                opacity: 1
                              });
                              jQuery('.status_percent').text('14%');
                              count_animation = 0;
                              phaseOne = setInterval(function(){
                                if (count_animation <= 12){
                                  sideFormuls(count_animation, jQuery('.draggable_v5'))
                                  if (count_animation <= 4) {
                                    jQuery('.draggable_v5').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3)',
                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                  } else if (count_animation <= 8) {
                                    jQuery('.draggable_v5').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                    });
                                  } else if (count_animation <= 12) {
                                    jQuery('.draggable_v5').css({
                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                    });
                                  }
                                  count_animation += 1;
                                  rotate_one += 2;
                                  rotate_two += 20;
                                } else {
                                  clearInterval(phaseOne);
                                  count_animation = 1;
                                  jQuery('.draggable_v5').css({
                                    color: '#FFF0C7',
                                    transform: 'scale(1)',
                                    background: 'rgba(83, 35, 69, 0.4)',
                                    opacity: 1
                                  });
                                  count_animation = 0;
                                  jQuery('.status_percent').text('16%');
                                  phaseOne = setInterval(function(){
                                    if (count_animation <= 12){
                                      sideFormuls(count_animation, jQuery('.draggable_v-'))
                                      if (count_animation <= 4) {
                                        jQuery('.draggable_v-').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3)',
                                          background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                      } else if (count_animation <= 8) {
                                        jQuery('.draggable_v-').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                        });
                                      } else if (count_animation <= 12) {
                                        jQuery('.draggable_v-').css({
                                          background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                        });
                                      }
                                      count_animation += 1;
                                      rotate_one += 2;
                                      rotate_two += 20;
                                    } else {
                                      clearInterval(phaseOne);
                                      count_animation = 1;
                                      jQuery('.draggable_v-').css({
                                        color: '#FFF0C7',
                                        transform: 'scale(1)',
                                        background: 'rgba(83, 35, 69, 0.4)',
                                        opacity: 1
                                      });
                                      jQuery('.status_percent').text('18%');
                                      count_animation = 0;
                                      phaseOne = setInterval(function(){
                                        if (count_animation <= 12){
                                          sideFormuls(count_animation, jQuery('.draggable_v1'))
                                          if (count_animation <= 4) {
                                            jQuery('.draggable_v1').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3)',
                                              background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                          } else if (count_animation <= 8) {
                                            jQuery('.draggable_v1').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                            });
                                          } else if (count_animation <= 12) {
                                            jQuery('.draggable_v1').css({
                                              background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                            });
                                          }
                                          count_animation += 1;
                                          rotate_one += 2;
                                          rotate_two += 20;
                                        } else {
                                          clearInterval(phaseOne);
                                          count_animation = 1;
                                          jQuery('.draggable_v1').css({
                                            color: '#FFF0C7',
                                            transform: 'scale(1)',
                                            background: 'rgba(83, 35, 69, 0.4)',
                                            opacity: 1
                                          });
                                          jQuery('.status_percent').text('20%');
                                          count_animation = 0;
                                          phaseOne = setInterval(function(){
                                            if (count_animation <= 12){
                                              sideFormuls(count_animation, jQuery('.draggable_v5'))
                                              if (count_animation <= 4) {
                                                jQuery('.draggable_v5').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                              } else if (count_animation <= 8) {
                                                jQuery('.draggable_v5').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                });
                                              } else if (count_animation <= 12) {
                                                jQuery('.draggable_v5').css({
                                                  background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                });
                                              }
                                              count_animation += 1;
                                              rotate_one += 2;
                                              rotate_two += 20;
                                            } else {
                                              clearInterval(phaseOne);
                                              count_animation = 1;
                                              jQuery('.draggable_v5').css({
                                                color: '#FFF0C7',
                                                transform: 'scale(1)',
                                                background: 'rgba(83, 35, 69, 0.4)',
                                                opacity: 1
                                              });
                                              count_animation = 0;
                                              jQuery('.status_percent').text('22%');
                                              phaseOne = setInterval(function(){
                                                if (count_animation <= 12){
                                                  sideFormuls(count_animation, jQuery('.draggable_v-'))
                                                  if (count_animation <= 4) {
                                                    jQuery('.draggable_v-').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                  } else if (count_animation <= 8) {
                                                    jQuery('.draggable_v-').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                    });
                                                  } else if (count_animation <= 12) {
                                                    jQuery('.draggable_v-').css({
                                                      background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                    });
                                                  }
                                                  count_animation += 1;
                                                  rotate_one += 2;
                                                  rotate_two += 20;
                                                } else {
                                                  clearInterval(phaseOne);
                                                  count_animation = 1;
                                                  jQuery('.draggable_v-').css({
                                                    color: '#FFF0C7',
                                                    transform: 'scale(1)',
                                                    background: 'rgba(83, 35, 69, 0.4)',
                                                    opacity: 1
                                                  });
                                                  count_animation = 0;
                                                  rotate_one = 0;
                                                  rotate_two = 0;
                                                  if (pausedStatus == true) {
                                                    localStorage.setItem('paused', 'v1_2');
                                                    endNow()
                                                  } else {
                                                    v1_2();
                                                  }
                                                }
                                              }, 1000);
                                            }
                                          }, 1000);
                                        }
                                      }, 1000);
                                    }
                                  }, 1000);
                                }
                              }, 1000);
                            }
                          }, 1000);
                        }
                      }, 1000);
                    }
                  }, 1000);
                }
              }, 1000);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////




// START
jQuery('.btn_start').on('click', function(event) {
    jQuery('.header-title').text('Программа выполняется');
    jQuery('.zone').css('background', 'rgba(83,35,69, 0.4)');
    jQuery('.btn-to_protocols').addClass('hidden');
    // jQuery('.btn-to_endNow').removeClass('hidden');
    if (jQuery(this).attr('disabled')) {

    } else if (pausedStatus == true) {
      jQuery('.status').removeClass('hidden');
      jQuery('.status_pahaze_all').text(localStorage.getItem('pausedPhases'));
      jQuery('.status_title').text(localStorage.getItem('pausedProtName'));
      jQuery('.loaded_img').attr('src', localStorage.getItem('pausedPhoto'));
      console.log(localStorage.getItem('pausedPhoto'));
      protocolfromMemory = eval(localStorage.getItem('paused'))
      protocolfromMemory();
      pausedStatus = false;
      jQuery('.btn-to_endNow').css('color', '#fff');
    } else {

      tarot();
      // protocol = localStorage.getItem('protocol');
      // jQuery('.btn-to_endNow').removeClass('hidden');
      // if (protocol == 'v1') {
      //   v1();
      //   jQuery('.status_title').text('Протокол V1');
      // } else if (protocol == 'v2') {
      //   v2();
      //   jQuery('.status_title').text('Протокол V2-5');
      // } else if (protocol == 'v3') {
      //   v3();
      //   jQuery('.status_title').text('Протокол V3-4');
      // } else if (protocol == 'v4') {
      //   v4();
      //   jQuery('.status_title').text('Протокол V4-3');
      // } else if (protocol == 'v5') {
      //   v5();
      //   jQuery('.status_title').text('Протокол V5-2');
      // } else if (protocol == 'solis') {
      //   solis();
      //   jQuery('.status_title').text('Протокол Solis');
      // } else if (protocol == 'drenag') {
      //   drenag();
      //   jQuery('.status_title').text('Дренажный протокол');
      // } else if (protocol == 'universal') {
      //   universal();
      //   jQuery('.status_title').text('Универсальный протокол');
      // } else if (protocol == 'visceral') {
      //   mmt();
      //   jQuery('.status_title').text('Висцеральный протокол');
      // }
      // jQuery('.header-title').text('Программа выполняется');
      // jQuery('.btn_start').attr('disabled', 'disabled');
    }
});
// STOP
function hideNote() {
  jQuery('.btn-to_endNow').popover('hide');
}

jQuery('.btn-to_endNow').on('click', function(event) {
  jQuery('.btn-to_endNow').css('color', 'crimson');
  jQuery('.header-title').text('Программа останавливается');
  // endStatus = true;
  jQuery('.btn-to_endNow').popover('show');
  setTimeout(hideNote, 5000);
  localStorage.setItem('pausedPhoto', jQuery('.loaded_img').attr('src'));
  pausedStatus = true;
  console.log('pausedStatus = true');
});
