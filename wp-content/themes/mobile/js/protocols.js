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
    protocol,
    protocolName,
    phaseOne,
    count_animation = 0,
    rotate_one = 0,
    rotate_two = 0,
    rotate_three = 0,
    rotate_four = 0,
    rotate_lovushka = 0,
    v1,
    endStatus = false;

onEnd = function(){
  jQuery('.btn_start').removeAttr('disabled');
  jQuery('.zone_x, .zone_l, .zone').css('transform', 'rotate(0deg)');
  jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
  rotate_one = 0;
  rotate_two = 0;
  rotate_three = 0;
  rotate_four = 0;
  rotate_lovushka = 0;
  count_animation = 0;

  protocolName = localStorage.getItem('protocolName');
  swal({
    title: "Протокол "+protocolName+" завершен",   
    text: "Что делать дальше?",   
    type: "success",   
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Другой протокол",   
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
    type: "error",   
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Другой протокол",   
    cancelButtonText: "Новый клиент"
  },
  function(isConfirm){
    var protocol = undefined; 
    jQuery('.btn-to_endNow').addClass('hidden');
    endStatus == false;  
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
}


chain = function (callback) {
  queue = [];

  function _next() {
      if (endStatus == true) {
        endNow();
        return;
      } else {
        cb = queue.shift();
        if (cb) {
            cb(_next);
        }
      }
  }

  setTimeout(_next, 0);

  then = function(cb) {
      queue.push(cb);
      return { then: then }
  }
  return then(callback);
}

v1 = function(){
  chain(function(next) {
    console.log('Фаза 1');
    jQuery('.status').removeClass('hidden');
    jQuery('.status_pahaze_all').text('5');
    jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'scale(1)');
    r_top = jQuery('.draggable_v5').css('top');
    r_bottom = jQuery('.draggable_v-').css('top');
    l_top = jQuery('.draggable_v0').css('top');
    l_bottom = jQuery('.draggable_v1').css('top');
// Фаза 1.1
    jQuery('.status_percent').text('0%');
    jQuery('.status_pahaze_now').text('1');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
        } else if (count_animation <= 8) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
        } else if (count_animation <= 12) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
        }
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
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
// Фаза 1.2
        jQuery('.status_percent').text('2%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_v5').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
            } else if (count_animation <= 8) {
              jQuery('.draggable_v5').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
            } else if (count_animation <= 12) {
              jQuery('.draggable_v5').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
            }
            jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
            jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
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
// Фаза 1.3
            jQuery('.status_percent').text('4%');
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_v-').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v-').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v-').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                }
                jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
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
// Фаза 1.4
                jQuery('.status_percent').text('6%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_v1').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_v1').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_v1').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                    }
                    jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                    jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
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
// Фаза 1.5
                    jQuery('.status_percent').text('8%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_v5').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_v5').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_v5').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                        }
                        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
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
// Фаза 1.6
                        jQuery('.status_percent').text('10%');
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_v-').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_v-').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_v-').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                            }
                            jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                            jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
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
// Фаза 1.7
                            jQuery('.status_percent').text('12%');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v1').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_bottom);
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v1').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v1').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_bottom);
                                }
                                jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_two+'deg)');
                                jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_one+'deg)');
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
// Фаза 1.8
                                jQuery('.status_percent').text('14%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v5').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', l_top);
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v5').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v5').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', l_top);
                                    }
                                    jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_two+'deg)');
                                    jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_one+'deg)');
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
// Фаза 1.9
                                    jQuery('.status_percent').text('16%');
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_v-').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_v-').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_v-').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                        }
                                        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_two+'deg)');
                                        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_one+'deg)');
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
// Фаза 1.10
                                        jQuery('.status_percent').text('18%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_v1').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_v1').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_v1').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                            }
                                            jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_two+'deg)');
                                            jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_one+'deg)');
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
// Фаза 1.11
                                            jQuery('.status_percent').text('20%');
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_v5').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_bottom);
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_v5').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_bottom);
                                                  jQuery('.zone_l').css('top', l_top);
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_v5').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_bottom);
                                                }
                                                jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_two+'deg)');
                                                jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_one+'deg)');
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
// Фаза 1.12
                                                jQuery('.status_percent').text('22%');
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_v-').css({
                                                        color: 'transparent',
                                                        transform: 'scale(1.3)',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', l_top);
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_v-').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_v-').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', l_top);
                                                    }
                                                    jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_two+'deg)');
                                                    jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_one+'deg)');
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
                                                    jQuery('.zone_x, .zone_l').css('transform', 'rotate(0deg)');
                                                    jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
                                                    next();
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
  }).then(function(next) {
    console.log('Фаза 2/1');
    r_top = jQuery('.draggable_v1').css('top');
    r_bottom = jQuery('.draggable_s2').css('top');
    l_top = jQuery('.draggable_s5').css('top');
    l_bottom = jQuery('.draggable_s6').css('top');
// Фаза 2.1
    jQuery('.status_percent').text('24%');
    jQuery('.status_pahaze_now').text('2');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 4;
          rotate_two += 20;
        } else if (count_animation <= 8) {
          jQuery('.draggable_d5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 6;
          rotate_two += 8;
        } else if (count_animation <= 12) {
          jQuery('.draggable_d5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 4;
          rotate_two += 20;
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
// Фаза 2.2
        jQuery('.status_percent').text('26%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_d6').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 6;
              rotate_two += 8;
            } else if (count_animation <= 8) {
              jQuery('.draggable_d6').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 4;
              rotate_two += 20;
            } else if (count_animation <= 12) {
              jQuery('.draggable_d6').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 6;
              rotate_two += 8;
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
// Фаза 2.3
            jQuery('.status_percent').text('28%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_s5').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 4;
                  rotate_two += 20;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_s5').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 6;
                  rotate_two += 8;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_s5').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 4;
                  rotate_two += 20;
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
// Фаза 2.4
                jQuery('.status_percent').text('30%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_s6').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 6;
                      rotate_two += 8;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_s6').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 4;
                      rotate_two += 20;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_s6').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 6;
                      rotate_two += 8;
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
// Фаза 2.5
                    jQuery('.status_percent').text('32%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_d2').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 4;
                          rotate_two += 20;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_d2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 6;
                          rotate_two += 8;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_d2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 4;
                          rotate_two += 20;
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
// Фаза 2.6
                        jQuery('.status_percent').text('34%');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_s2').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 6;
                              rotate_two += 8;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 4;
                              rotate_two += 20;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 6;
                              rotate_two += 8;
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
// Фаза 2.7
                            jQuery('.status_percent').text('36%');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_d5').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 4;
                                  rotate_two += 20;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_d5').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_top);
                                  jQuery('.zone_l').css('top', r_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 6;
                                  rotate_two += 8;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_d5').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 4;
                                  rotate_two += 20;
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
// Фаза 2.8
                                jQuery('.status_percent').text('38%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_d6').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 6;
                                      rotate_two += 8;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_d6').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', r_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 4;
                                      rotate_two += 20;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_d6').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 6;
                                      rotate_two += 8;
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
// Фаза 2.9
                                    jQuery('.status_percent').text('40%');
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_s5').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 4;
                                          rotate_two += 20;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_top);
                                          jQuery('.zone_l').css('top', r_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 6;
                                          rotate_two += 8;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 4;
                                          rotate_two += 20;
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
// Фаза 2.10
                                        jQuery('.status_percent').text('42%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_s6').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 6;
                                              rotate_two += 8;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_bottom);
                                              jQuery('.zone_l').css('top', r_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 4;
                                              rotate_two += 20;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 6;
                                              rotate_two += 8;
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
// Фаза 2.11
                                            jQuery('.status_percent').text('44%');
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_d2').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', l_bottom);
                                                  jQuery('.zone_l').css('top', r_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 4;
                                                  rotate_two += 20;
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_d2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', l_top);
                                                  jQuery('.zone_l').css('top', r_bottom);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 6;
                                                  rotate_two += 8;
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_d2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', l_bottom);
                                                  jQuery('.zone_l').css('top', r_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 4;
                                                  rotate_two += 20;
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
// Фаза 2.12
                                                jQuery('.status_percent').text('46%');
                                                count_animation = 0;
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_s2').css({
                                                        color: 'transparent',
                                                        transform: 'scale(1.3)',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', l_top);
                                                      jQuery('.zone_l').css('top', r_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 6;
                                                      rotate_two += 8;
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_s2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', l_bottom);
                                                      jQuery('.zone_l').css('top', r_top);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 4;
                                                      rotate_two += 20;
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_s2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', l_top);
                                                      jQuery('.zone_l').css('top', r_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 6;
                                                      rotate_two += 8;
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
                                                    rotate_one = 0;
                                                    rotate_two = 0;
                                                    jQuery('.zone_x, .zone_l').css('transform', 'rotate(0deg)');
                                                    jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
                                                    next();
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
  }).then(function(next) {
    console.log('Фаза 2/2');
    r_top = jQuery('.draggable_v1').css('top');
    r_bottom = jQuery('.draggable_s2').css('top');
    l_top = jQuery('.draggable_s5').css('top');
    l_bottom = jQuery('.draggable_s6').css('top');
// Фаза 2.1
    jQuery('.status_percent').text('48%');
    jQuery('.status_pahaze_now').text('3');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 8;
          rotate_two += 6;
        } else if (count_animation <= 8) {
          jQuery('.draggable_d5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_top);
          jQuery('.zone_l').css('top', l_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 20;
          rotate_two += 4;
        } else if (count_animation <= 12) {
          jQuery('.draggable_d5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 8;
          rotate_two += 6;
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
// Фаза 2.2
        jQuery('.status_percent').text('50%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_d6').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 20;
              rotate_two += 4;
            } else if (count_animation <= 8) {
              jQuery('.draggable_d6').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_bottom);
              jQuery('.zone_l').css('top', l_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 6;
            } else if (count_animation <= 12) {
              jQuery('.draggable_d6').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 20;
              rotate_two += 4;
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
// Фаза 2.3
            jQuery('.status_percent').text('52%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_s5').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 8;
                  rotate_two += 6;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_s5').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_top);
                  jQuery('.zone_l').css('top', l_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 20;
                  rotate_two += 4;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_s5').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 8;
                  rotate_two += 6;
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
// Фаза 2.4
                jQuery('.status_percent').text('54%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_s6').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 20;
                      rotate_two += 4;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_s6').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_bottom);
                      jQuery('.zone_l').css('top', l_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 6;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_s6').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 20;
                      rotate_two += 4;
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
// Фаза 2.5
                    jQuery('.status_percent').text('56%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_d2').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 8;
                          rotate_two += 6;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_d2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_top);
                          jQuery('.zone_l').css('top', l_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 20;
                          rotate_two += 4;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_d2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 8;
                          rotate_two += 6;
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
// Фаза 2.6
                        jQuery('.status_percent').text('58%');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_s2').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 20;
                              rotate_two += 4;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_bottom);
                              jQuery('.zone_l').css('top', l_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 8;
                              rotate_two += 6;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 20;
                              rotate_two += 4;
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
// Фаза 2.7
                            jQuery('.status_percent').text('60%');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_d5').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 6;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_d5').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 20;
                                  rotate_two += 4;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_d5').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 6;
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
// Фаза 2.8
                                jQuery('.status_percent').text('62%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_d6').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 4;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_d6').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', l_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 8;
                                      rotate_two += 6;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_d6').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 4;
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
// Фаза 2.9
                                    jQuery('.status_percent').text('64%');
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_s5').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 6;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 20;
                                          rotate_two += 4;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 6;
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
// Фаза 2.10
                                        jQuery('.status_percent').text('66%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_s6').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 4;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 8;
                                              rotate_two += 6;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 4;
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
// Фаза 2.11
                                            jQuery('.status_percent').text('68%');
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_d2').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', r_bottom);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 8;
                                                  rotate_two += 6;
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_d2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_bottom);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 20;
                                                  rotate_two += 4;
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_d2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_bottom);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 8;
                                                  rotate_two += 6;
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
// Фаза 2.12
                                                jQuery('.status_percent').text('70%');
                                                count_animation = 0;
                                                console.log('test');
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_s2').css({
                                                        color: 'transparent',
                                                        transform: 'scale(1.3)',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 20;
                                                      rotate_two += 4;
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_s2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', l_top);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 8;
                                                      rotate_two += 6;
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_s2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 20;
                                                      rotate_two += 4;
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
                                                    rotate_one = 0;
                                                    rotate_two = 0;
                                                    jQuery('.zone_x, .zone_l').css('transform', 'scale(1) rotate(0deg)');
                                                    jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
                                                    setTimeout(function() {
                                                      jQuery('.zone_x, .zone_l').css('transform', 'scale(0.01)');
                                                      next();
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
  }).then(function(next) {
    console.log('Фаза 3/1');
    jQuery('.zone_x, .zone_l').addClass('hidden').css('transform', 'scale(1)');
// Фаза 3.1.1
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
// Фаза 3.1.2
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
// Фаза 3.1.3
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
// Фаза 3.1.4
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
// Фаза 3.2.1
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
// Фаза 3.2.2
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
// Фаза 3.2.3
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
// Фаза 3.2.4
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
// Фаза 3.3.1
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
// Фаза 3.3.2
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
// Фаза 3.3.3
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
// Фаза 3.3.4
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
                                                    next();
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
  }).then(function(next) {
// Фаза 4.1
    jQuery('.status_percent').text('96%');
    jQuery('.status_pahaze_now').text('5');
    count_animation = 0;
    console.log('Фаза 4.1');
    phaseOne = setInterval(function(){
      if (count_animation <= 36){
        if (count_animation <= 19) {
          jQuery('.draggable_v1, .draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.5)',
            borderColor: 'transparent',
            background: 'transparent url(/wp-content/themes/mobile/img/3_voda_lev.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
        } else {
          jQuery('.draggable_v1, .draggable_v4').css({
            background: 'transparent url(/wp-content/themes/mobile/img/2_voda_prav.png) 0 0/100% no-repeat'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v1, .draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          borderColor: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
// Фаза 4.2
        jQuery('.status_percent').text('98%');
        console.log('Фаза 4.2');
        phaseOne = setInterval(function(){
          if (count_animation <= 34){
            if (count_animation <= 17) {
              jQuery('.draggable_v1, .draggable_v5, .draggable_v-').css({
                color: 'transparent',
                transform: 'scale(1.5)',
                borderColor: 'transparent',
                background: 'transparent url(/wp-content/themes/mobile/img/4_ogon_lev.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
            } else {
              jQuery('.draggable_v1, .draggable_v5, .draggable_v-').css({
                background: 'transparent url(/wp-content/themes/mobile/img/1_ogon_prav.png) 0 0/100% no-repeat'
              });
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v1, .draggable_v5, .draggable_v-').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              borderColor: '#FFF0C7',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            count_animation = 0;
            next();
          }
        }, 1000);
      }
    }, 1000);
  }).then(function(next) {
    count_animation = 0;
// Фаза 5
    jQuery('.status_percent').text('99%');
    console.log('Фаза 5');
    phaseOne = setInterval(function(){
      if (count_animation <= 80){
        jQuery('.draggable_v5, .draggable_v3, .draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          borderColor: 'transparent',
          opacity: 0.8
        });
        jQuery('.draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/gold.png) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/chisty_vnutri.jpg) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v0').css({
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5, .draggable_v3, .draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          borderColor: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
        jQuery('.status_percent').text('100%');
        onEnd();
      }
    }, 1000);
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


// PROTOCOL V2
v2 = function(){
  chain(function(next) {
// Фаза 1.1
    jQuery('.status').removeClass('hidden');
    jQuery('.status_pahaze_all').text('7');
    jQuery('.status_percent').text('0%');
    jQuery('.status_pahaze_now').text('1');
    jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'scale(1)');
    console.log('Фаза 1/1');
    r_top = jQuery('.draggable_v0').css('top');
    r_bottom = jQuery('.draggable_s2').css('top');
    l_top = jQuery('.draggable_v5').css('top');
    l_bottom = jQuery('.draggable_v-').css('top');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        jQuery('.draggable_lovushka').css({
          color: 'transparent',
          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        if (count_animation <= 4) {
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 20;
        } else if (count_animation <= 8) {
          jQuery('.draggable_d2').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 8;
        } else if (count_animation <= 12) {
          jQuery('.draggable_d2').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 20;
        }
        count_animation += 1;
        rotate_lovushka += 8;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
// Фаза 1.2
        jQuery('.status_percent').text('1%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            jQuery('.draggable_lovushka').css({
              color: 'transparent',
              transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
              background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
            if (count_animation <= 4) {
              jQuery('.draggable_v2').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 8;
            } else if (count_animation <= 8) {
              jQuery('.draggable_v2').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 20;
            } else if (count_animation <= 12) {
              jQuery('.draggable_v2').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 8;
            }
            count_animation += 1;
            rotate_lovushka += 8;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v2').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
// Фаза 1.3
            jQuery('.status_percent').text('2%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                jQuery('.draggable_lovushka').css({
                  color: 'transparent',
                  transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
                if (count_animation <= 4) {
                  jQuery('.draggable_s2').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 20;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_s2').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 8;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_s2').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 20;
                }
                count_animation += 1;
                rotate_lovushka += 8;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_s2').css({
                  color: '#FFF0C7',
                  transform: 'scale(1)',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                count_animation = 0;
// Фаза 1.4
                jQuery('.status_percent').text('4%');
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    jQuery('.draggable_lovushka').css({
                      color: 'transparent',
                      transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                    if (count_animation <= 4) {
                      jQuery('.draggable_d2').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 8;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_d2').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 20;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_d2').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 8;
                    }
                    count_animation += 1;
                    rotate_lovushka += 8;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_d2').css({
                      color: '#FFF0C7',
                      transform: 'scale(1)',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
// Фаза 1.5
                    jQuery('.status_percent').text('5%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        jQuery('.draggable_lovushka').css({
                          color: 'transparent',
                          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                        if (count_animation <= 4) {
                          jQuery('.draggable_v2').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 20;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_v2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 8;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_v2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 20;
                        }
                        count_animation += 1;
                        rotate_lovushka += 8;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_v2').css({
                          color: '#FFF0C7',
                          transform: 'scale(1)',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
// Фаза 1.6
                        jQuery('.status_percent').text('6%');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            jQuery('.draggable_lovushka').css({
                              color: 'transparent',
                              transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                              background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                            if (count_animation <= 4) {
                              jQuery('.draggable_s2').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 8;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 20;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 8;
                            }
                            count_animation += 1;
                            rotate_lovushka += 8;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_s2').css({
                              color: '#FFF0C7',
                              transform: 'scale(1)',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
                            console.log('Фаза 1/2');
// Фаза 1.7
                            jQuery('.status_percent').text('8%');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                jQuery('.draggable_lovushka').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                                if (count_animation <= 4) {
                                  jQuery('.draggable_d2').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 2;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_d2').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 20;
                                  rotate_two += 2;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_d2').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 2;
                                }
                                count_animation += 1;
                                rotate_lovushka += 8;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_d2').css({
                                  color: '#FFF0C7',
                                  transform: 'scale(1)',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
// Фаза 1.8
                                jQuery('.status_percent').text('9%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    jQuery('.draggable_lovushka').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v2').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 2;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v2').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', l_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 8;
                                      rotate_two += 2;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v2').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 2;
                                    }
                                    count_animation += 1;
                                    rotate_lovushka += 8;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_v2').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
// Фаза 1.9
                                    jQuery('.status_percent').text('10%');
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        jQuery('.draggable_lovushka').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_s2').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 2;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_s2').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 20;
                                          rotate_two += 2;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_s2').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 2;
                                        }
                                        count_animation += 1;
                                        rotate_lovushka += 8;
                                      } else {
                                        clearInterval(phaseOne);
                                        count_animation = 1;
                                        rotate_lovushka = 0;
                                        jQuery('.draggable_s2').css({
                                          color: '#FFF0C7',
                                          transform: 'scale(1)',
                                          transform: 'rotate(0deg)',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
// Фаза 1.10
                                        jQuery('.status_percent').text('12%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            jQuery('.draggable_lovushka').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                              background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_d2').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 2;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_d2').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 8;
                                              rotate_two += 2;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_d2').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 2;
                                            }
                                            count_animation += 1;
                                            rotate_lovushka += 8;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_d2').css({
                                              color: '#FFF0C7',
                                              transform: 'scale(1)',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
// Фаза 1.11
                                            jQuery('.status_percent').text('13%');
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                jQuery('.draggable_lovushka').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_v2').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', r_bottom);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 8;
                                                  rotate_two += 2;
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_v2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_bottom);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 20;
                                                  rotate_two += 2;
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_v2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_bottom);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 8;
                                                  rotate_two += 2;
                                                }
                                                count_animation += 1;
                                                rotate_lovushka += 8;
                                              } else {
                                                clearInterval(phaseOne);
                                                jQuery('.draggable_v2').css({
                                                  color: '#FFF0C7',
                                                  transform: 'scale(1)',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
// Фаза 1.12
                                                jQuery('.status_percent').text('14%');
                                                count_animation = 0;
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    jQuery('.draggable_lovushka').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_s2').css({
                                                        color: 'transparent',
                                                        transform: 'scale(1.3)',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 20;
                                                      rotate_two += 2;
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_s2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', l_top);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 8;
                                                      rotate_two += 2;
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_s2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 20;
                                                      rotate_two += 2;
                                                    }
                                                    count_animation += 1;
                                                    rotate_lovushka += 8;
                                                  } else {
                                                    clearInterval(phaseOne);
                                                    count_animation = 1;
                                                    rotate_lovushka = 0;
                                                    jQuery('.draggable_s2, .draggable_lovushka').css({
                                                      color: '#FFF0C7',
                                                      transform: 'scale(1) rotate(0deg)',
                                                      background: 'rgba(83, 35, 69, 0.4)',
                                                      opacity: 1
                                                    });
                                                    next();
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
  }).then(function(next) {
    console.log('Фаза 2/1');
    jQuery('.status_pahaze_now').text('2');
// Фаза 2.1
    jQuery('.status_percent').text('16%');
    r_top = jQuery('.draggable_v5').css('top');
    r_bottom = jQuery('.draggable_v-').css('top');
    l_top = jQuery('.draggable_v0').css('top');
    l_bottom = jQuery('.draggable_d2').css('top');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 20;
        } else if (count_animation <= 8) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_top);
          jQuery('.zone_l').css('top', l_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 8;
        } else if (count_animation <= 12) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 20;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
// Фаза 2.2
        jQuery('.status_percent').text('17%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_v-').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 8;
            } else if (count_animation <= 8) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_bottom);
              jQuery('.zone_l').css('top', l_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 20;
            } else if (count_animation <= 12) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 8;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v-').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
// Фаза 2.3
            jQuery('.status_percent').text('18%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 20;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_top);
                  jQuery('.zone_l').css('top', l_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 8;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 20;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_v1').css({
                  color: '#FFF0C7',
                  transform: 'scale(1)',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
// Фаза 2.4
                jQuery('.status_percent').text('20%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_s5').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 8;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_s5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_bottom);
                      jQuery('.zone_l').css('top', l_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 20;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_s5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 8;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_s5').css({
                      color: '#FFF0C7',
                      transform: 'scale(1)',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
// Фаза 2.5
                    jQuery('.status_percent').text('21%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_s6').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 20;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_s6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_top);
                          jQuery('.zone_l').css('top', l_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 8;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_s6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 20;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_s6').css({
                          color: '#FFF0C7',
                          transform: 'scale(1)',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
// Фаза 2.6
                        jQuery('.status_percent').text('22%');
                        r_top = jQuery('.draggable_v5').css('top');
                        r_bottom = jQuery('.draggable_v-').css('top');
                        l_top = jQuery('.draggable_v0').css('top');
                        l_bottom = jQuery('.draggable_d2').css('top');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_v5').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 8;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_bottom);
                              jQuery('.zone_l').css('top', l_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 20;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 8;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_v5').css({
                              color: '#FFF0C7',
                              transform: 'scale(1)',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
// Фаза 2.7
                            jQuery('.status_percent').text('24%');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v-').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 20;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 8;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 20;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_v-').css({
                                  color: '#FFF0C7',
                                  transform: 'scale(1)',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
// Фаза 2.8
                                jQuery('.status_percent').text('25%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v1').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 8;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', l_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 20;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 8;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_v1').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
// Фаза 2.9
                                    jQuery('.status_percent').text('26%');
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_s5').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 20;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 8;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 20;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_s5').css({
                                          color: '#FFF0C7',
                                          transform: 'scale(1)',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
// Фаза 2.10
                                        jQuery('.status_percent').text('28%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_s6').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 8;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 20;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 8;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_s6').css({
                                              color: '#FFF0C7',
                                              transform: 'scale(1)',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
                                            next();
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
  }).then(function(next) {
    console.log('Фаза 2/2');
    jQuery('.status_pahaze_now').text('3');
    r_top = jQuery('.draggable_v5').css('top');
    r_bottom = jQuery('.draggable_v-').css('top');
    l_top = jQuery('.draggable_v0').css('top');
    l_bottom = jQuery('.draggable_d2').css('top');
// Фаза 2.11
    jQuery('.status_percent').text('29%');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 20;
          rotate_two += 2;
        } else if (count_animation <= 8) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 8;
          rotate_two += 2;
        } else if (count_animation <= 12) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 20;
          rotate_two += 2;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
// Фаза 2.12
        jQuery('.status_percent').text('30%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_v-').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 2;
            } else if (count_animation <= 8) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 20;
              rotate_two += 2;
            } else if (count_animation <= 12) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 2;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v-').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
// Фаза 2.13
            jQuery('.status_percent').text('32%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 20;
                  rotate_two += 2;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 8;
                  rotate_two += 2;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 20;
                  rotate_two += 2;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_v1').css({
                  color: '#FFF0C7',
                  transform: 'scale(1)',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
// Фаза 2.14
                jQuery('.status_percent').text('33%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_s5').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 2;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_s5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 20;
                      rotate_two += 2;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_s5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 2;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_s5').css({
                      color: '#FFF0C7',
                      transform: 'scale(1)',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
// Фаза 2.15
                    jQuery('.status_percent').text('34%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_s6').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 20;
                          rotate_two += 2;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_s6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 8;
                          rotate_two += 2;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_s6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 20;
                          rotate_two += 2;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_s6').css({
                          color: '#FFF0C7',
                          transform: 'scale(1)',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
// Фаза 2.16
                        jQuery('.status_percent').text('36%');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_v5').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 20;
                              rotate_two += 2;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 8;
                              rotate_two += 2;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 20;
                              rotate_two += 2;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_v5').css({
                              color: '#FFF0C7',
                              transform: 'scale(1)',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
// Фаза 2.17
                            jQuery('.status_percent').text('37%');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v-').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 2;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_top);
                                  jQuery('.zone_l').css('top', r_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 20;
                                  rotate_two += 2;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 2;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_v-').css({
                                  color: '#FFF0C7',
                                  transform: 'scale(1)',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
// Фаза 2.18
                                jQuery('.status_percent').text('38%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v1').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 2;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', r_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 8;
                                      rotate_two += 2;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 2;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_v1').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
// Фаза 2.19
                                    jQuery('.status_percent').text('40%');
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_s5').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 2;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_top);
                                          jQuery('.zone_l').css('top', r_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 20;
                                          rotate_two += 2;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 2;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_s5').css({
                                          color: '#FFF0C7',
                                          transform: 'scale(1)',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
// Фаза 2.20
                                        jQuery('.status_percent').text('41%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_s6').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 2;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_bottom);
                                              jQuery('.zone_l').css('top', r_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 8;
                                              rotate_two += 2;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 2;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_s6').css({
                                              color: '#FFF0C7',
                                              transform: 'scale(1)',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
                                            next();
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
  }).then(function(next) {
    console.log('Фаза 3/1');
    jQuery('.status_pahaze_now').text('4');
// Фаза 3.1
    jQuery('.status_percent').text('42%');
    r_top = jQuery('.draggable_v5').css('top');
    r_bottom = jQuery('.draggable_v-').css('top');
    l_top = jQuery('.draggable_v0').css('top');
    l_bottom = jQuery('.draggable_d2').css('top');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 20;
        } else if (count_animation <= 8) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_top);
          jQuery('.zone_l').css('top', l_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 8;
        } else if (count_animation <= 12) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 20;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
// Фаза 3.2
        jQuery('.status_percent').text('44%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_v-').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 8;
            } else if (count_animation <= 8) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_bottom);
              jQuery('.zone_l').css('top', l_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 20;
            } else if (count_animation <= 12) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 8;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v-').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
// Фаза 3.3
            jQuery('.status_percent').text('45%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 20;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_top);
                  jQuery('.zone_l').css('top', l_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 8;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 20;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_v1').css({
                  color: '#FFF0C7',
                  transform: 'scale(1)',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
// Фаза 3.4
                jQuery('.status_percent').text('46%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_d5').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 8;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_d5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_bottom);
                      jQuery('.zone_l').css('top', l_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 20;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_d5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 8;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_d5').css({
                      color: '#FFF0C7',
                      transform: 'scale(1)',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
// Фаза 3.5
                    jQuery('.status_percent').text('48%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_d6').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 20;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_d6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_top);
                          jQuery('.zone_l').css('top', l_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 8;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_d6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 20;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_d6').css({
                          color: '#FFF0C7',
                          transform: 'scale(1)',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
// Фаза 3.6
                        jQuery('.status_percent').text('49%');
                        r_top = jQuery('.draggable_v5').css('top');
                        r_bottom = jQuery('.draggable_v-').css('top');
                        l_top = jQuery('.draggable_v0').css('top');
                        l_bottom = jQuery('.draggable_d2').css('top');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_v5').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 8;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_bottom);
                              jQuery('.zone_l').css('top', l_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 20;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 8;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_v5').css({
                              color: '#FFF0C7',
                              transform: 'scale(1)',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
// Фаза 3.7
                            jQuery('.status_percent').text('50%');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v-').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 20;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 8;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 20;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_v-').css({
                                  color: '#FFF0C7',
                                  transform: 'scale(1)',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
// Фаза 3.8
                                jQuery('.status_percent').text('52%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v1').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 8;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', l_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 20;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 8;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_v1').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
// Фаза 3.9
                                    jQuery('.status_percent').text('53%');
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_d5').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 20;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_d5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 8;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_d5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 20;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_d5').css({
                                          color: '#FFF0C7',
                                          transform: 'scale(1)',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
// Фаза 3.10
                                        jQuery('.status_percent').text('54%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_d6').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 8;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_d6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 20;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_d6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 8;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_d6').css({
                                              color: '#FFF0C7',
                                              transform: 'scale(1)',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
                                            next();
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
  }).then(function(next) {
    console.log('Фаза 3/2');
    r_top = jQuery('.draggable_v5').css('top');
    r_bottom = jQuery('.draggable_v-').css('top');
    l_top = jQuery('.draggable_v0').css('top');
    l_bottom = jQuery('.draggable_d2').css('top');
    jQuery('.status_pahaze_now').text('5');
// Фаза 3.11
    jQuery('.status_percent').text('56%');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 20;
          rotate_two += 2;
        } else if (count_animation <= 8) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 8;
          rotate_two += 2;
        } else if (count_animation <= 12) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 20;
          rotate_two += 2;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
// Фаза 3.12
        jQuery('.status_percent').text('57%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_v-').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 2;
            } else if (count_animation <= 8) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 20;
              rotate_two += 2;
            } else if (count_animation <= 12) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 2;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v-').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
// Фаза 3.13
            jQuery('.status_percent').text('58%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 20;
                  rotate_two += 2;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 8;
                  rotate_two += 2;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 20;
                  rotate_two += 2;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_v1').css({
                  color: '#FFF0C7',
                  transform: 'scale(1)',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
// Фаза 3.14
                jQuery('.status_percent').text('60%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_d5').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 2;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_d5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 20;
                      rotate_two += 2;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_d5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 2;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_d5').css({
                      color: '#FFF0C7',
                      transform: 'scale(1)',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
// Фаза 3.15
                    jQuery('.status_percent').text('61%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_d6').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 20;
                          rotate_two += 2;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_d6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 8;
                          rotate_two += 2;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_d6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 20;
                          rotate_two += 2;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_d6').css({
                          color: '#FFF0C7',
                          transform: 'scale(1)',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
// Фаза 3.16
                        jQuery('.status_percent').text('62%');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_v5').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 20;
                              rotate_two += 2;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 8;
                              rotate_two += 2;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 20;
                              rotate_two += 2;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_v5').css({
                              color: '#FFF0C7',
                              transform: 'scale(1)',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
// Фаза 3.17
                            jQuery('.status_percent').text('64%');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v-').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 2;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_top);
                                  jQuery('.zone_l').css('top', r_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 20;
                                  rotate_two += 2;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 2;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_v-').css({
                                  color: '#FFF0C7',
                                  transform: 'scale(1)',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
// Фаза 3.18
                                jQuery('.status_percent').text('65%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v1').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 2;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', r_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 8;
                                      rotate_two += 2;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 2;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_v1').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
// Фаза 3.19
                                    jQuery('.status_percent').text('66%');
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_d5').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 2;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_d5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_top);
                                          jQuery('.zone_l').css('top', r_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 20;
                                          rotate_two += 2;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_d5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 2;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_d5').css({
                                          color: '#FFF0C7',
                                          transform: 'scale(1)',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
// Фаза 3.20
                                        jQuery('.status_percent').text('68%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_d6').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 2;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_d6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_bottom);
                                              jQuery('.zone_l').css('top', r_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 8;
                                              rotate_two += 2;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_d6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 2;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_d6').css({
                                              color: '#FFF0C7',
                                              transform: 'scale(1)',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
                                            rotate_one = 0;
                                            rotate_two = 0;
                                            jQuery('.zone_x, .zone_l').css('transform', 'rotate(0deg)');
                                            jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
                                            setTimeout(function() {
                                              jQuery('.zone_x, .zone_l').css('transform', 'scale(0.01)');
                                              next();
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
  }).then(function(next) {
    console.log('Фаза 4');
// Фаза 4.1.1
jQuery('.status_percent').text('69%');
jQuery('.status_pahaze_now').text('6');
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
// Фаза 4.1.2
        jQuery('.status_percent').text('70%');
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
// Фаза 4.1.3
            jQuery('.status_percent').text('72%');
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
// Фаза 4.1.4
                jQuery('.status_percent').text('73%');
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
// Фаза 4.2.1
                    jQuery('.status_percent').text('74%');
                    rotate_one = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 22){
                        jQuery('.draggable_v2').css({
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
                        jQuery('.draggable_v2').css({
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
                        count_animation = 0;
// Фаза 4.2.2
                        jQuery('.status_percent').text('76%');
                        rotate_one = 10;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 53){
                            jQuery('.draggable_v2').css({
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
                            jQuery('.draggable_v2').css({
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
                            count_animation = 0;
// Фаза 4.2.3
                            jQuery('.status_percent').text('77%');
                            rotate_one = 270;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 60){
                                jQuery('.draggable_v2').css({
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
                                jQuery('.draggable_v2').css({
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
                                count_animation = 0;
// Фаза 4.2.4
                                jQuery('.status_percent').text('78%');
                                rotate_one = 300;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 40){
                                    jQuery('.draggable_v2').css({
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
                                    jQuery('.draggable_v2').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
                                    count_animation = 0;
// Фаза 4.3.1
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
// Фаза 4.3.2
                                        jQuery('.status_percent').text('81%');
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
// Фаза 4.3.3
                                            jQuery('.status_percent').text('82%');
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
// Фаза 4.3.4
                                                jQuery('.status_percent').text('84%');
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
// Фаза 4.4.1
                                                    jQuery('.status_percent').text('85%');
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
// Фаза 4.4.2
                                                        jQuery('.status_percent').text('86%');
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
// Фаза 4.4.3
                                                            jQuery('.status_percent').text('88%');
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
// Фаза 4.4.4
                                                                jQuery('.status_percent').text('90%');
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
                                                                    next();
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
            }, 1000);
          }
        }, 1000);
      }
    }, 1000);
  }).then(function(next) {
    jQuery('.status_pahaze_now').text('7');
// Фаза 5.1
    jQuery('.status_percent').text('92%');
    jQuery('.zone_x, .zone_l').addClass('hidden').css('transform', 'scale(1)');
    count_animation = 0;
    console.log('Фаза 5.1');
    phaseOne = setInterval(function(){
      if (count_animation <= 36){
        if (count_animation <= 19) {
          jQuery('.draggable_v2').css({
            color: 'transparent',
            borderColor: 'transparent',
            transform: 'scale(1.5)',
            background: 'transparent url(/wp-content/themes/mobile/img/2_vozduh_lev.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
        } else {
          jQuery('.draggable_v2').css({
            background: 'transparent url(/wp-content/themes/mobile/img/3_vozduh_prav.png) 0 0/100% no-repeat'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          borderColor: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
// Фаза 5.2
        jQuery('.status_percent').text('94%');
        console.log('Фаза 5.2');
        phaseOne = setInterval(function(){
          if (count_animation <= 34){
            if (count_animation <= 17) {
              jQuery('.draggable_v1, .draggable_v5, .draggable_v-').css({
                color: 'transparent',
                transform: 'scale(1.5)',
                borderColor: 'transparent',
                background: 'transparent url(/wp-content/themes/mobile/img/4_ogon_lev.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
            } else {
              jQuery('.draggable_v1, .draggable_v5, .draggable_v-').css({
                background: 'transparent url(/wp-content/themes/mobile/img/1_ogon_prav.png) 0 0/100% no-repeat'
              });
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v1, .draggable_v5, .draggable_v-').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              borderColor: '#FFF0C7',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            count_animation = 0;
// Фаза 5.3
            jQuery('.status_percent').text('96%');
            console.log('Фаза 5.3');
            phaseOne = setInterval(function(){
              if (count_animation <= 36){
                if (count_animation <= 19) {
                  jQuery('.draggable_v1, .draggable_v4').css({
                    color: 'transparent',
                    transform: 'scale(1.5)',
                    borderColor: 'transparent',
                    background: 'transparent url(/wp-content/themes/mobile/img/3_voda_lev.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                } else {
                  jQuery('.draggable_v1, .draggable_v4').css({
                    background: 'transparent url(/wp-content/themes/mobile/img/2_voda_prav.png) 0 0/100% no-repeat'
                  });
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_v1, .draggable_v4').css({
                  color: '#FFF0C7',
                  transform: 'scale(1)',
                  borderColor: '#FFF0C7',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                count_animation = 0;
                next();
              }
            }, 1000);
          }
        }, 1000);
      }
    }, 1000);
  }).then(function(next) {
    count_animation = 0;
// Фаза 6
    jQuery('.status_percent').text('98%');
    console.log('Фаза 6');
    phaseOne = setInterval(function(){
      if (count_animation <= 80){
        jQuery('.draggable_v5, .draggable_v-, .draggable_v3, .draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          borderColor: 'transparent',
          opacity: 0.8
        });
        jQuery('.draggable_v5, .draggable_v-').css({
          background: '#fff url(/wp-content/themes/mobile/img/gold.png) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/chisty_vnutri.jpg) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v0').css({
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5, .draggable_v-, .draggable_v3, .draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          borderColor: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
        jQuery('.status_percent').text('100%');
        onEnd();
      }
    }, 1000);
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


v3 = function(){
  chain(function(next) {
// Фаза 1.1
    jQuery('.status').removeClass('hidden');
    jQuery('.status_pahaze_all').text('5');
    jQuery('.status_percent').text('0%');
    jQuery('.status_pahaze_now').text('1');
    console.log('Фаза 1/1');
    jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'scale(1)');
    r_top = jQuery('.draggable_s2').css('top');
    r_bottom = jQuery('.draggable_s3').css('top');
    l_top = jQuery('.draggable_s4').css('top');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        jQuery('.draggable_lovushka').css({
          color: 'transparent',
          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        if (count_animation <= 4) {
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', r_top);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 8;
          rotate_two += 4;
        } else if (count_animation <= 8) {
          jQuery('.draggable_s3').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 6;
          rotate_two += 6;
        } else if (count_animation <= 12) {
          jQuery('.draggable_s3').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 4;
          rotate_two += 8;
        }
        count_animation += 1;
        rotate_lovushka += 6;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_s3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
// Фаза 1.2
        jQuery('.status_percent').text('2%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            jQuery('.draggable_lovushka').css({
              color: 'transparent',
              transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
              background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
            if (count_animation <= 4) {
              jQuery('.draggable_s2').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', r_bottom);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 6;
              rotate_two += 6;
            } else if (count_animation <= 8) {
              jQuery('.draggable_s2').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 4;
            } else if (count_animation <= 12) {
              jQuery('.draggable_s2').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_bottom);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 6;
              rotate_two += 6;
            }
            count_animation += 1;
            rotate_lovushka += 6;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_s2').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
// Фаза 1.3
            jQuery('.status_percent').text('4%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                jQuery('.draggable_lovushka').css({
                  color: 'transparent',
                  transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
                if (count_animation <= 4) {
                  jQuery('.draggable_s4').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 4;
                  rotate_two += 8;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_s4').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 6;
                  rotate_two += 6;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_s4').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_top);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 8;
                  rotate_two += 4;
                }
                count_animation += 1;
                rotate_lovushka += 6;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_s4').css({
                  color: '#FFF0C7',
                  transform: 'scale(1)',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
// Фаза 1.4
                jQuery('.status_percent').text('6%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    jQuery('.draggable_lovushka').css({
                      color: 'transparent',
                      transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                    if (count_animation <= 4) {
                      jQuery('.draggable_v3').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', r_bottom);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 6;
                      rotate_two += 6;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_v3').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 4;
                      rotate_two += 8;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_v3').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_bottom);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 6;
                      rotate_two += 6;
                    }
                    count_animation += 1;
                    rotate_lovushka += 6;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_v3').css({
                      color: '#FFF0C7',
                      transform: 'scale(1)',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
// Фаза 1.5
                    jQuery('.status_percent').text('8%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        jQuery('.draggable_lovushka').css({
                          color: 'transparent',
                          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                        if (count_animation <= 4) {
                          jQuery('.draggable_s3').css({
                            color: 'transparent',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', r_top);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 8;
                          rotate_two += 4;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_s3').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 6;
                          rotate_two += 6;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_s3').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 4;
                          rotate_two += 8;
                        }
                        count_animation += 1;
                        rotate_lovushka += 6;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_s3').css({
                          color: '#FFF0C7',
                          transform: 'scale(1)',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
// Фаза 1.6
                        jQuery('.status_percent').text('10%');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            jQuery('.draggable_lovushka').css({
                              color: 'transparent',
                              transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                              background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                            if (count_animation <= 4) {
                              jQuery('.draggable_s2').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', r_bottom);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 6;
                              rotate_two += 6;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 8;
                              rotate_two += 4;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_bottom);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 6;
                              rotate_two += 6;
                            }
                            count_animation += 1;
                            rotate_lovushka += 6;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_s2').css({
                              color: '#FFF0C7',
                              transform: 'scale(1)',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
// Фаза 1.7
                            jQuery('.status_percent').text('12%');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                jQuery('.draggable_lovushka').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                                if (count_animation <= 4) {
                                  jQuery('.draggable_s4').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', l_top);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 4;
                                  rotate_two += 8;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_s4').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', r_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 6;
                                  rotate_two += 6;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_s4').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 4;
                                }
                                count_animation += 1;
                                rotate_lovushka += 6;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_s4').css({
                                  color: '#FFF0C7',
                                  transform: 'scale(1)',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
// Фаза 1.8
                                jQuery('.status_percent').text('14%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    jQuery('.draggable_lovushka').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v3').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 6;
                                      rotate_two += 6;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v3').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 4;
                                      rotate_two += 8;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v3').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 6;
                                      rotate_two += 6;
                                    }
                                    count_animation += 1;
                                    rotate_lovushka += 6;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_v3').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
// Фаза 1.9
                                    jQuery('.status_percent').text('16%');
                                    console.log('Фаза 1/2');
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        jQuery('.draggable_lovushka').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_s3').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 4;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_s3').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', r_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 6;
                                          rotate_two += 6;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_s3').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_top);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 4;
                                          rotate_two += 8;
                                        }
                                        count_animation += 1;
                                        rotate_lovushka += 6;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_s3').css({
                                          color: '#FFF0C7',
                                          transform: 'scale(1)',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
// Фаза 1.10
                                        jQuery('.status_percent').text('18%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            jQuery('.draggable_lovushka').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                              background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_s2').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 6;
                                              rotate_two += 6;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_s2').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 8;
                                              rotate_two += 4;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_s2').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 6;
                                              rotate_two += 6;
                                            }
                                            count_animation += 1;
                                            rotate_lovushka += 6;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_s2').css({
                                              color: '#FFF0C7',
                                              transform: 'scale(1)',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
// Фаза 1.11
                                            jQuery('.status_percent').text('20%');
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                jQuery('.draggable_lovushka').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_s4').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', l_top);
                                                  jQuery('.zone_l').css('top', r_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 4;
                                                  rotate_two += 8;
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_s4').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_bottom);
                                                  jQuery('.zone_l').css('top', r_bottom);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 6;
                                                  rotate_two += 6;
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_s4').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 8;
                                                  rotate_two += 4;
                                                }
                                                count_animation += 1;
                                                rotate_lovushka += 6;
                                              } else {
                                                clearInterval(phaseOne);
                                                jQuery('.draggable_s4').css({
                                                  color: '#FFF0C7',
                                                  transform: 'scale(1)',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
// Фаза 1.12
                                                jQuery('.status_percent').text('22%');
                                                count_animation = 0;
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    jQuery('.draggable_lovushka').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_v3').css({
                                                        color: 'transparent',
                                                        transform: 'scale(1.3)',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', r_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 6;
                                                      rotate_two += 6;
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_v3').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', l_top);
                                                      jQuery('.zone_l').css('top', r_top);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 4;
                                                      rotate_two += 8;
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_v3').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', r_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 6;
                                                      rotate_two += 6;
                                                    }
                                                    count_animation += 1;
                                                    rotate_lovushka += 6;
                                                  } else {
                                                    clearInterval(phaseOne);
                                                    jQuery('.draggable_v3').css({
                                                      color: '#FFF0C7',
                                                      transform: 'scale(1)',
                                                      background: 'rgba(83, 35, 69, 0.4)',
                                                      opacity: 1
                                                    });
// Фаза 1.13
                                                    jQuery('.status_percent').text('24%');
                                                    count_animation = 0;
                                                    phaseOne = setInterval(function(){
                                                      if (count_animation <= 12){
                                                        jQuery('.draggable_lovushka').css({
                                                          color: 'transparent',
                                                          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                          opacity: 0.8
                                                        });
                                                        if (count_animation <= 4) {
                                                          jQuery('.draggable_s3').css({
                                                            color: 'transparent',
                                                            transform: 'scale(1.3)',
                                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                            opacity: 0.8
                                                          });
                                                          jQuery('.zone_x').css('top', r_top);
                                                          jQuery('.zone_l').css('top', l_top);
                                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                          rotate_one += 8;
                                                          rotate_two += 4;
                                                        } else if (count_animation <= 8) {
                                                          jQuery('.draggable_s3').css({
                                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                          });
                                                          jQuery('.zone_x').css('top', r_bottom);
                                                          jQuery('.zone_l').css('top', r_bottom);
                                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                          rotate_one += 6;
                                                          rotate_two += 6;
                                                        } else if (count_animation <= 12) {
                                                          jQuery('.draggable_s3').css({
                                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                          });
                                                          jQuery('.zone_x').css('top', l_top);
                                                          jQuery('.zone_l').css('top', r_top);
                                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                          rotate_one += 4;
                                                          rotate_two += 8;
                                                        }
                                                        count_animation += 1;
                                                        rotate_lovushka += 6;
                                                      } else {
                                                        clearInterval(phaseOne);
                                                        jQuery('.draggable_s3').css({
                                                          color: '#FFF0C7',
                                                          transform: 'scale(1)',
                                                          background: 'rgba(83, 35, 69, 0.4)',
                                                          opacity: 1
                                                        });
// Фаза 1.14
                                                        jQuery('.status_percent').text('26%');
                                                        count_animation = 0;
                                                        phaseOne = setInterval(function(){
                                                          if (count_animation <= 12){
                                                            jQuery('.draggable_lovushka').css({
                                                              color: 'transparent',
                                                              transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                              background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                              opacity: 0.8
                                                            });
                                                            if (count_animation <= 4) {
                                                              jQuery('.draggable_s2').css({
                                                                color: 'transparent',
                                                                transform: 'scale(1.3)',
                                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                opacity: 0.8
                                                              });
                                                              jQuery('.zone_x').css('top', r_bottom);
                                                              jQuery('.zone_l').css('top', r_bottom);
                                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                              rotate_one += 6;
                                                              rotate_two += 6;
                                                            } else if (count_animation <= 8) {
                                                              jQuery('.draggable_s2').css({
                                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                              });
                                                              jQuery('.zone_x').css('top', r_top);
                                                              jQuery('.zone_l').css('top', l_top);
                                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                              rotate_one += 8;
                                                              rotate_two += 4;
                                                            } else if (count_animation <= 12) {
                                                              jQuery('.draggable_s2').css({
                                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                              });
                                                              jQuery('.zone_x').css('top', r_bottom);
                                                              jQuery('.zone_l').css('top', r_bottom);
                                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                              rotate_one += 6;
                                                              rotate_two += 6;
                                                            }
                                                            count_animation += 1;
                                                            rotate_lovushka += 6;
                                                          } else {
                                                            clearInterval(phaseOne);
                                                            jQuery('.draggable_s2').css({
                                                              color: '#FFF0C7',
                                                              transform: 'scale(1)',
                                                              background: 'rgba(83, 35, 69, 0.4)',
                                                              opacity: 1
                                                            });
// Фаза 1.15
                                                            jQuery('.status_percent').text('28%');
                                                            count_animation = 0;
                                                            phaseOne = setInterval(function(){
                                                              if (count_animation <= 12){
                                                                jQuery('.draggable_lovushka').css({
                                                                  color: 'transparent',
                                                                  transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                                  opacity: 0.8
                                                                });
                                                                if (count_animation <= 4) {
                                                                  jQuery('.draggable_s4').css({
                                                                    color: 'transparent',
                                                                    transform: 'scale(1.3)',
                                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                    opacity: 0.8
                                                                  });
                                                                  jQuery('.zone_x').css('top', l_top);
                                                                  jQuery('.zone_l').css('top', r_top);
                                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                  rotate_one += 4;
                                                                  rotate_two += 8;
                                                                } else if (count_animation <= 8) {
                                                                  jQuery('.draggable_s4').css({
                                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                  });
                                                                  jQuery('.zone_x').css('top', r_bottom);
                                                                  jQuery('.zone_l').css('top', r_bottom);
                                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                  rotate_one += 6;
                                                                  rotate_two += 6;
                                                                } else if (count_animation <= 12) {
                                                                  jQuery('.draggable_s4').css({
                                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                  });
                                                                  jQuery('.zone_x').css('top', r_top);
                                                                  jQuery('.zone_l').css('top', l_top);
                                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                  rotate_one += 8;
                                                                  rotate_two += 4;
                                                                }
                                                                count_animation += 1;
                                                                rotate_lovushka += 6;
                                                              } else {
                                                                clearInterval(phaseOne);
                                                                jQuery('.draggable_s4').css({
                                                                  color: '#FFF0C7',
                                                                  transform: 'scale(1)',
                                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                                  opacity: 1
                                                                });
// Фаза 1.16
                                                                jQuery('.status_percent').text('30%');
                                                                count_animation = 0;
                                                                phaseOne = setInterval(function(){
                                                                  if (count_animation <= 12){
                                                                    jQuery('.draggable_lovushka').css({
                                                                      color: 'transparent',
                                                                      transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                                      opacity: 0.8
                                                                    });
                                                                    if (count_animation <= 4) {
                                                                      jQuery('.draggable_v3').css({
                                                                        color: 'transparent',
                                                                        transform: 'scale(1.3)',
                                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                        opacity: 0.8
                                                                      });
                                                                      jQuery('.zone_x').css('top', r_bottom);
                                                                      jQuery('.zone_l').css('top', r_bottom);
                                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                      rotate_one += 6;
                                                                      rotate_two += 6;
                                                                    } else if (count_animation <= 8) {
                                                                      jQuery('.draggable_v3').css({
                                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                      });
                                                                      jQuery('.zone_x').css('top', l_top);
                                                                      jQuery('.zone_l').css('top', r_top);
                                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                      rotate_one += 4;
                                                                      rotate_two += 8;
                                                                    } else if (count_animation <= 12) {
                                                                      jQuery('.draggable_v3').css({
                                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                      });
                                                                      jQuery('.zone_x').css('top', r_bottom);
                                                                      jQuery('.zone_l').css('top', r_bottom);
                                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                      rotate_one += 6;
                                                                      rotate_two += 6;
                                                                    }
                                                                    count_animation += 1;
                                                                    rotate_lovushka += 6;
                                                                  } else {
                                                                    clearInterval(phaseOne);
                                                                    jQuery('.draggable_v3, .draggable_lovushka').css({
                                                                      color: '#FFF0C7',
                                                                      transform: 'scale(1)',
                                                                      background: 'rgba(83, 35, 69, 0.4)',
                                                                      opacity: 1
                                                                    });
                                                                    count_animation = 0;
                                                                    next();
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
            }, 1000);
          }
        }, 1000);
      }
    }, 1000);
  }).then(function(next) {
// Фаза 2.1
    console.log('Фаза 2/1');
    jQuery('.status_percent').text('32%');
    jQuery('.status_pahaze_now').text('2');
    r_top = jQuery('.draggable_s2').css('top');
    r_bottom = jQuery('.draggable_s3').css('top');
    l_top = jQuery('.draggable_s4').css('top');
    l_bottom = jQuery('.draggable_d3').css('top');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 6;
          rotate_two += 8;
        } else if (count_animation <= 8) {
          jQuery('.draggable_d3').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 6;
          rotate_two += 6;
        } else if (count_animation <= 12) {
          jQuery('.draggable_d3').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 6;
          rotate_two += 4;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
// Фаза 2.2
        jQuery('.status_percent').text('34%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_v3').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 6;
              rotate_two += 6;
            } else if (count_animation <= 8) {
              jQuery('.draggable_v3').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 6;
              rotate_two += 8;
            } else if (count_animation <= 12) {
              jQuery('.draggable_v3').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 6;
              rotate_two += 6;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v3').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
// Фаза 2.3
            jQuery('.status_percent').text('36%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_v4').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 6;
                  rotate_two += 4;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v4').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 6;
                  rotate_two += 6;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v4').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 6;
                  rotate_two += 8;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_v4').css({
                  color: '#FFF0C7',
                  transform: 'scale(1)',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
// Фаза 2.4
                jQuery('.status_percent').text('38%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_d4').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 6;
                      rotate_two += 6;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_d4').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', l_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 6;
                      rotate_two += 4;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_d4').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 6;
                      rotate_two += 6;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_d4').css({
                      color: '#FFF0C7',
                      transform: 'scale(1)',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
// Фаза 2.5
                    jQuery('.status_percent').text('40%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_d3').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 6;
                          rotate_two += 8;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_d3').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 6;
                          rotate_two += 6;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_d3').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 6;
                          rotate_two += 4;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_d3').css({
                          color: '#FFF0C7',
                          transform: 'scale(1)',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
// Фаза 2.6
                        jQuery('.status_percent').text('42%');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_v3').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 6;
                              rotate_two += 6;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_v3').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 6;
                              rotate_two += 8;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_v3').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 6;
                              rotate_two += 6;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_v3').css({
                              color: '#FFF0C7',
                              transform: 'scale(1)',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
// Фаза 2.7
                            jQuery('.status_percent').text('44%');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v4').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 6;
                                  rotate_two += 4;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v4').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 6;
                                  rotate_two += 6;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v4').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 6;
                                  rotate_two += 8;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_v4').css({
                                  color: '#FFF0C7',
                                  transform: 'scale(1)',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
// Фаза 2.8
                                jQuery('.status_percent').text('46%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_d4').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 6;
                                      rotate_two += 6;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_d4').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', l_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 6;
                                      rotate_two += 4;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_d4').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 6;
                                      rotate_two += 6;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_d4').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
// Фаза 2.9
                                    jQuery('.status_percent').text('48%');
                                    console.log('Фаза 2/2');
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_d3').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 6;
                                          rotate_two += 8;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_d3').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 6;
                                          rotate_two += 6;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_d3').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 6;
                                          rotate_two += 4;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_d3').css({
                                          color: '#FFF0C7',
                                          transform: 'scale(1)',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
// Фаза 2.10
                                        jQuery('.status_percent').text('50%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_v3').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', l_bottom);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 6;
                                              rotate_two += 6;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_v3').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_bottom);
                                              jQuery('.zone_l').css('top', r_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 6;
                                              rotate_two += 8;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_v3').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_bottom);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 6;
                                              rotate_two += 6;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_v3').css({
                                              color: '#FFF0C7',
                                              transform: 'scale(1)',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
// Фаза 2.11
                                            jQuery('.status_percent').text('52%');
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_v4').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', l_bottom);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 6;
                                                  rotate_two += 4;
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_v4').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', l_bottom);
                                                  jQuery('.zone_l').css('top', r_bottom);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 6;
                                                  rotate_two += 6;
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_v4').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', l_bottom);
                                                  jQuery('.zone_l').css('top', r_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 6;
                                                  rotate_two += 8;
                                                }
                                                count_animation += 1;
                                              } else {
                                                clearInterval(phaseOne);
                                                jQuery('.draggable_v4').css({
                                                  color: '#FFF0C7',
                                                  transform: 'scale(1)',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
// Фаза 2.12
                                                jQuery('.status_percent').text('54%');
                                                count_animation = 0;
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_d4').css({
                                                        color: 'transparent',
                                                        transform: 'scale(1.3)',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', l_bottom);
                                                      jQuery('.zone_l').css('top', r_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 6;
                                                      rotate_two += 6;
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_d4').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', l_bottom);
                                                      jQuery('.zone_l').css('top', l_top);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 6;
                                                      rotate_two += 4;
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_d4').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', l_bottom);
                                                      jQuery('.zone_l').css('top', r_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 6;
                                                      rotate_two += 6;
                                                    }
                                                    count_animation += 1;
                                                  } else {
                                                    clearInterval(phaseOne);
                                                    jQuery('.draggable_d4').css({
                                                      color: '#FFF0C7',
                                                      transform: 'scale(1)',
                                                      background: 'rgba(83, 35, 69, 0.4)',
                                                      opacity: 1
                                                    });
// Фаза 2.13
                                                    jQuery('.status_percent').text('56%');
                                                    count_animation = 0;
                                                    phaseOne = setInterval(function(){
                                                      if (count_animation <= 12){
                                                        if (count_animation <= 4) {
                                                          jQuery('.draggable_d3').css({
                                                            color: 'transparent',
                                                            transform: 'scale(1.3)',
                                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                            opacity: 0.8
                                                          });
                                                          jQuery('.zone_x').css('top', l_bottom);
                                                          jQuery('.zone_l').css('top', r_top);
                                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                          rotate_one += 6;
                                                          rotate_two += 8;
                                                        } else if (count_animation <= 8) {
                                                          jQuery('.draggable_d3').css({
                                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                          });
                                                          jQuery('.zone_x').css('top', l_bottom);
                                                          jQuery('.zone_l').css('top', r_bottom);
                                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                          rotate_one += 6;
                                                          rotate_two += 6;
                                                        } else if (count_animation <= 12) {
                                                          jQuery('.draggable_d3').css({
                                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                          });
                                                          jQuery('.zone_x').css('top', l_bottom);
                                                          jQuery('.zone_l').css('top', l_top);
                                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                          rotate_one += 6;
                                                          rotate_two += 4;
                                                        }
                                                        count_animation += 1;
                                                      } else {
                                                        clearInterval(phaseOne);
                                                        jQuery('.draggable_d3').css({
                                                          color: '#FFF0C7',
                                                          transform: 'scale(1)',
                                                          background: 'rgba(83, 35, 69, 0.4)',
                                                          opacity: 1
                                                        });
// Фаза 2.14
                                                        jQuery('.status_percent').text('58%');
                                                        count_animation = 0;
                                                        phaseOne = setInterval(function(){
                                                          if (count_animation <= 12){
                                                            if (count_animation <= 4) {
                                                              jQuery('.draggable_v3').css({
                                                                color: 'transparent',
                                                                transform: 'scale(1.3)',
                                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                opacity: 0.8
                                                              });
                                                              jQuery('.zone_x').css('top', l_bottom);
                                                              jQuery('.zone_l').css('top', r_bottom);
                                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                              rotate_one += 6;
                                                              rotate_two += 6;
                                                            } else if (count_animation <= 8) {
                                                              jQuery('.draggable_v3').css({
                                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                              });
                                                              jQuery('.zone_x').css('top', l_bottom);
                                                              jQuery('.zone_l').css('top', r_top);
                                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                              rotate_one += 6;
                                                              rotate_two += 8;
                                                            } else if (count_animation <= 12) {
                                                              jQuery('.draggable_v3').css({
                                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                              });
                                                              jQuery('.zone_x').css('top', l_bottom);
                                                              jQuery('.zone_l').css('top', r_bottom);
                                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                              rotate_one += 6;
                                                              rotate_two += 6;
                                                            }
                                                            count_animation += 1;
                                                          } else {
                                                            clearInterval(phaseOne);
                                                            jQuery('.draggable_v3').css({
                                                              color: '#FFF0C7',
                                                              transform: 'scale(1)',
                                                              background: 'rgba(83, 35, 69, 0.4)',
                                                              opacity: 1
                                                            });
// Фаза 2.15
                                                            jQuery('.status_percent').text('60%');
                                                            count_animation = 0;
                                                            phaseOne = setInterval(function(){
                                                              if (count_animation <= 12){
                                                                if (count_animation <= 4) {
                                                                  jQuery('.draggable_v4').css({
                                                                    color: 'transparent',
                                                                    transform: 'scale(1.3)',
                                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                    opacity: 0.8
                                                                  });
                                                                  jQuery('.zone_x').css('top', l_bottom);
                                                                  jQuery('.zone_l').css('top', l_top);
                                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                  rotate_one += 6;
                                                                  rotate_two += 4;
                                                                } else if (count_animation <= 8) {
                                                                  jQuery('.draggable_v4').css({
                                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                  });
                                                                  jQuery('.zone_x').css('top', l_bottom);
                                                                  jQuery('.zone_l').css('top', r_bottom);
                                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                  rotate_one += 6;
                                                                  rotate_two += 6;
                                                                } else if (count_animation <= 12) {
                                                                  jQuery('.draggable_v4').css({
                                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                  });
                                                                  jQuery('.zone_x').css('top', l_bottom);
                                                                  jQuery('.zone_l').css('top', r_top);
                                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                  rotate_one += 6;
                                                                  rotate_two += 8;
                                                                }
                                                                count_animation += 1;
                                                              } else {
                                                                clearInterval(phaseOne);
                                                                jQuery('.draggable_v4').css({
                                                                  color: '#FFF0C7',
                                                                  transform: 'scale(1)',
                                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                                  opacity: 1
                                                                });
// Фаза 2.16
                                                                jQuery('.status_percent').text('62%');
                                                                count_animation = 0;
                                                                phaseOne = setInterval(function(){
                                                                  if (count_animation <= 12){
                                                                    if (count_animation <= 4) {
                                                                      jQuery('.draggable_d4').css({
                                                                        color: 'transparent',
                                                                        transform: 'scale(1.3)',
                                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                        opacity: 0.8
                                                                      });
                                                                      jQuery('.zone_x').css('top', l_bottom);
                                                                      jQuery('.zone_l').css('top', r_bottom);
                                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                      rotate_one += 6;
                                                                      rotate_two += 6;
                                                                    } else if (count_animation <= 8) {
                                                                      jQuery('.draggable_d4').css({
                                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                      });
                                                                      jQuery('.zone_x').css('top', l_bottom);
                                                                      jQuery('.zone_l').css('top', l_top);
                                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                      rotate_one += 6;
                                                                      rotate_two += 4;
                                                                    } else if (count_animation <= 12) {
                                                                      jQuery('.draggable_d4').css({
                                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                      });
                                                                      jQuery('.zone_x').css('top', l_bottom);
                                                                      jQuery('.zone_l').css('top', r_bottom);
                                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                      rotate_one += 6;
                                                                      rotate_two += 6;
                                                                    }
                                                                    count_animation += 1;
                                                                  } else {
                                                                    clearInterval(phaseOne);
                                                                    jQuery('.draggable_d4').css({
                                                                      color: '#FFF0C7',
                                                                      transform: 'scale(1)',
                                                                      background: 'rgba(83, 35, 69, 0.4)',
                                                                      opacity: 1
                                                                    });
                                                                    count_animation = 0;
                                                                    jQuery('.zone_l').css('transform', 'scale(0.01)');
                                                                    next();
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
            }, 1000);
          }
        }, 1000);
      }
    }, 1000);
  }).then(function(next) {
// Фаза 3.1
    console.log('Фаза 3');
    jQuery('.status_percent').text('64%');
    jQuery('.status_pahaze_now').text('3');
    x1 = jQuery('.draggable_v0').css('top');
    x2 = jQuery('.draggable_v1').css('top');
    x3 = jQuery('.draggable_d2').css('top');
    x4 = jQuery('.draggable_d3').css('top');
    x5 = jQuery('.draggable_d4').css('top');
    x6 = jQuery('.draggable_v-').css('top');
    count_animation = 0;
    rotate_lovushka = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 140){
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_lovushka+'deg)');
        if (count_animation <= 4) {
          jQuery('.zone_x').css('top', x1);
          rotate_lovushka += 36
        } else if (count_animation <= 8) {
          rotate_lovushka += 35
        } else if (count_animation <= 12) {
          rotate_lovushka += 34
        } else if (count_animation <= 16) {
          rotate_lovushka += 33
        } else if (count_animation <= 20) {
          rotate_lovushka += 32
        } else if (count_animation <= 24) {
          rotate_lovushka += 31
        } else if (count_animation <= 28) {
          rotate_lovushka += 30
        } else if (count_animation <= 32) {
          rotate_lovushka += 29
        } else if (count_animation <= 36) {
          rotate_lovushka += 28
        } else if (count_animation <= 40) {
          rotate_lovushka += 27
        } else if (count_animation <= 44) {
          rotate_lovushka += 26
        } else if (count_animation <= 48) {
          rotate_lovushka += 25
          jQuery('.status_percent').text('66%');
        } else if (count_animation <= 52) {
          rotate_lovushka += 24
        } else if (count_animation <= 56) {
          rotate_lovushka += 23
        } else if (count_animation <= 60) {
          rotate_lovushka += 22
        } else if (count_animation <= 64) {
          rotate_lovushka += 21
        } else if (count_animation <= 68) {
          rotate_lovushka += 20
        } else if (count_animation <= 72) {
          rotate_lovushka += 19
        } else if (count_animation <= 76) {
          rotate_lovushka += 18
        } else if (count_animation <= 80) {
          rotate_lovushka += 17
        } else if (count_animation <= 84) {
          rotate_lovushka += 16
        } else if (count_animation <= 88) {
          rotate_lovushka += 15
        } else if (count_animation <= 92) {
          rotate_lovushka += 14
        } else if (count_animation <= 96) {
          rotate_lovushka += 13
        } else if (count_animation <= 100) {
          jQuery('.zone_x').css('top', x2);
          jQuery('.status_percent').text('68%');
          rotate_lovushka += 12
        } else if (count_animation <= 104) {
          rotate_lovushka += 11
        } else if (count_animation <= 108) {
          rotate_lovushka += 10
        } else if (count_animation <= 112) {
          rotate_lovushka += 9
        } else if (count_animation <= 116) {
          jQuery('.zone_x').css('top', x3);
          rotate_lovushka += 8
        } else if (count_animation <= 120) {
          rotate_lovushka += 7
        } else if (count_animation <= 124) {
          jQuery('.zone_x').css('top', x4);
          rotate_lovushka += 6
        } else if (count_animation <= 128) {
          rotate_lovushka += 5
        } else if (count_animation <= 132) {
          jQuery('.zone_x').css('top', x5);
          rotate_lovushka += 4
        } else if (count_animation <= 136) {
          rotate_lovushka += 3
        } else if (count_animation <= 140) {
          jQuery('.zone_x').css('top', x6);
          rotate_lovushka += 2
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.zone_x').css('transform', 'scale(0.01)');
        next();
      }
    }, 1000);
  }).then(function(next) {
    console.log('Фаза 4/1');
    jQuery('.status_pahaze_now').text('4');
    jQuery('.status_percent').text('70%');
// Фаза 4.1.1
    rotate_one = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 22){
        jQuery('.draggable_v3').css({
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
        jQuery('.draggable_v3').css({
          color: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
// Фаза 4.1.2
        jQuery('.status_percent').text('72%');
        rotate_one = 10;
        phaseOne = setInterval(function(){
          if (count_animation <= 53){
            jQuery('.draggable_v3').css({
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
            jQuery('.draggable_v3').css({
              color: '#FFF0C7',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            count_animation = 0;
// Фаза 4.1.3
            jQuery('.status_percent').text('74%');
            rotate_one = 270;
            phaseOne = setInterval(function(){
              if (count_animation <= 60){
                jQuery('.draggable_v3').css({
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
                jQuery('.draggable_v3').css({
                  color: '#FFF0C7',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                count_animation = 0;
// Фаза 4.1.4
                jQuery('.status_percent').text('76%');
                rotate_one = 300;
                phaseOne = setInterval(function(){
                  if (count_animation <= 40){
                    jQuery('.draggable_v3').css({
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
                    jQuery('.draggable_v3').css({
                      color: '#FFF0C7',
                      transform: 'scale(1)',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
                    count_animation = 0;
// Фаза 4.2.1
                    jQuery('.status_percent').text('78%');
                    rotate_one = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 22){
                        jQuery('.draggable_v4').css({
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
                        jQuery('.draggable_v4').css({
                          color: '#FFF0C7',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
                        count_animation = 0;
// Фаза 4.2.2
                        jQuery('.status_percent').text('80%');
                        rotate_one = 10;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 53){
                            jQuery('.draggable_v4').css({
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
                            jQuery('.draggable_v4').css({
                              color: '#FFF0C7',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
                            count_animation = 0;
// Фаза 4.2.3
                            jQuery('.status_percent').text('82%');
                            rotate_one = 270;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 60){
                                jQuery('.draggable_v4').css({
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
                                jQuery('.draggable_v4').css({
                                  color: '#FFF0C7',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
                                count_animation = 0;
// Фаза 4.2.4
                                jQuery('.status_percent').text('84%');
                                rotate_one = 300;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 40){
                                    jQuery('.draggable_v4').css({
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
                                    jQuery('.draggable_v4').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
                                    count_animation = 0;
// Фаза 4.3.1
                                    jQuery('.status_percent').text('86%');
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
                                          color: '#FFF0C7',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
                                        count_animation = 0;
// Фаза 4.3.2
                                        jQuery('.status_percent').text('88%');
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
                                              color: '#FFF0C7',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
                                            count_animation = 0;
// Фаза 4.3.3
                                            jQuery('.status_percent').text('90%');
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
                                                  color: '#FFF0C7',
                                                  transform: 'scale(1)',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
                                                count_animation = 0;
// Фаза 4.3.4
                                                jQuery('.status_percent').text('92%');
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
                                                    next();
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
  }).then(function(next) {
// Фаза 5.1
    jQuery('.status_pahaze_now').text('5');
    jQuery('.status_percent').text('94%');
    jQuery('.zone_x, .zone_l').addClass('hidden').css('transform', 'scale(1)');
    count_animation = 0;
    console.log('Фаза 5.1');
    phaseOne = setInterval(function(){
      if (count_animation <= 36){
        if (count_animation <= 19) {
          jQuery('.draggable_v3').css({
            color: 'transparent',
            transform: 'scale(1.5)',
            background: 'transparent url(/wp-content/themes/mobile/img/1_zemlya_lev.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
        } else {
          jQuery('.draggable_v3').css({
            background: 'transparent url(/wp-content/themes/mobile/img/4_zemlya_prav_lit.png) 0 0/100% no-repeat'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
// Фаза 5.2
        console.log('Фаза 5.2');
        jQuery('.status_percent').text('96%');
        phaseOne = setInterval(function(){
          if (count_animation <= 34){
            if (count_animation <= 17) {
              jQuery('.draggable_v1, .draggable_v4').css({
                color: 'transparent',
                transform: 'scale(1.5)',
                background: 'transparent url(/wp-content/themes/mobile/img/3_voda_lev.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
            } else {
              jQuery('.draggable_v1, .draggable_v4').css({
                background: 'transparent url(/wp-content/themes/mobile/img/2_voda_prav.png) 0 0/100% no-repeat'
              });
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v1, .draggable_v4').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            count_animation = 0;
            next();
          }
        }, 1000);
      }
    }, 1000);
  }).then(function(next) {
    count_animation = 0;
    // Фаза 6
    console.log('Фаза 6');
    jQuery('.status_percent').text('98%');
    phaseOne = setInterval(function(){
      if (count_animation <= 80){
        jQuery('.draggable_v5, .draggable_v-, .draggable_v3, .draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          opacity: 0.8
        });
        jQuery('.draggable_v5, .draggable_v-').css({
          background: '#fff url(/wp-content/themes/mobile/img/gold.png) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/chisty_vnutri.jpg) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v0').css({
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5, .draggable_v-, .draggable_v3, .draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
        jQuery('.status_percent').text('100%');
        onEnd();
      }
    }, 1000);
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////



v4 = function(){
  chain(function(next) {
    jQuery('.zone_l').css('transform', 'scale(0.01)');
    jQuery('.status').removeClass('hidden');
    jQuery('.status_pahaze_all').text('5');
    jQuery('.status_percent').text('0%');
    jQuery('.status_pahaze_now').text('1');
    jQuery('.zone_x').removeClass('hidden').css('transform', 'scale(1)');
    console.log('Фаза 1');
// Фаза 1.1
    jQuery('.status_percent').text('0%');
    x1 = jQuery('.draggable_v0').css('top');
    x2 = jQuery('.draggable_v1').css('top');
    x3 = jQuery('.draggable_d2').css('top');
    x4 = jQuery('.draggable_d3').css('top');
    x5 = jQuery('.draggable_d4').css('top');
    x6 = jQuery('.draggable_v-').css('top');
    count_animation = 0;
    rotate_lovushka = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 140){
        jQuery('.draggable_v4').css({
          color: 'transparent',
          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_lovushka+'deg)');
        if (count_animation <= 4) {
          jQuery('.zone_x').css('top', x1);
          rotate_lovushka += 36
        } else if (count_animation <= 8) {
          rotate_lovushka += 35
        } else if (count_animation <= 12) {
          rotate_lovushka += 34
        } else if (count_animation <= 16) {
          rotate_lovushka += 33
        } else if (count_animation <= 20) {
          jQuery('.status_percent').text('2%');
          rotate_lovushka += 32
        } else if (count_animation <= 24) {
          rotate_lovushka += 31
        } else if (count_animation <= 28) {
          rotate_lovushka += 30
        } else if (count_animation <= 32) {
          rotate_lovushka += 29
        } else if (count_animation <= 36) {
          rotate_lovushka += 28
        } else if (count_animation <= 40) {
          rotate_lovushka += 27
        } else if (count_animation <= 44) {
          rotate_lovushka += 26
        } else if (count_animation <= 48) {
          rotate_lovushka += 25
          jQuery('.status_percent').text('4%');
        } else if (count_animation <= 52) {
          rotate_lovushka += 24
        } else if (count_animation <= 56) {
          rotate_lovushka += 23
        } else if (count_animation <= 60) {
          rotate_lovushka += 22
        } else if (count_animation <= 64) {
          rotate_lovushka += 21
        } else if (count_animation <= 68) {
          rotate_lovushka += 20
        } else if (count_animation <= 72) {
          rotate_lovushka += 19
        } else if (count_animation <= 76) {
          rotate_lovushka += 18
        } else if (count_animation <= 80) {
          rotate_lovushka += 17
        } else if (count_animation <= 84) {
          rotate_lovushka += 16
        } else if (count_animation <= 88) {
          rotate_lovushka += 15
        } else if (count_animation <= 92) {
          rotate_lovushka += 14
        } else if (count_animation <= 96) {
          rotate_lovushka += 13
        } else if (count_animation <= 100) {
          jQuery('.zone_x').css('top', x2);
          jQuery('.status_percent').text('7%');
          rotate_lovushka += 12
        } else if (count_animation <= 104) {
          rotate_lovushka += 11
        } else if (count_animation <= 108) {
          rotate_lovushka += 10
        } else if (count_animation <= 112) {
          rotate_lovushka += 9
        } else if (count_animation <= 116) {
          jQuery('.zone_x').css('top', x3);
          rotate_lovushka += 8
        } else if (count_animation <= 120) {
          rotate_lovushka += 7
        } else if (count_animation <= 124) {
          jQuery('.zone_x').css('top', x4);
          rotate_lovushka += 6
        } else if (count_animation <= 128) {
          rotate_lovushka += 5
        } else if (count_animation <= 132) {
          jQuery('.zone_x').css('top', x5);
          rotate_lovushka += 4
        } else if (count_animation <= 136) {
          rotate_lovushka += 3
        } else if (count_animation <= 140) {
          jQuery('.zone_x').css('top', x6);
          rotate_lovushka += 2
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        next();
      }
    }, 1000);
  }).then(function(next) {
    jQuery('.zone_l').removeClass('hidden').css('transform', 'scale(1)');
// Фаза 2.1
    jQuery('.status_percent').text('10%');
    console.log('Фаза 2/1');
    jQuery('.status_pahaze_now').text('2');
    jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'scale(1)');
    r_top = jQuery('.draggable_s3').css('top');
    r_bottom = jQuery('.draggable_d3').css('top');
    l_top = jQuery('.draggable_s4').css('top');
    l_bottom = jQuery('.draggable_d4').css('top');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        jQuery('.draggable_lovushka').css({
          color: 'transparent',
          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        if (count_animation <= 4) {
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        } else if (count_animation <= 8) {
          jQuery('.draggable_v4').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_top);
          jQuery('.zone_l').css('top', l_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        } else if (count_animation <= 12) {
          jQuery('.draggable_v4').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        }
        count_animation += 1;
        rotate_lovushka += 2;
        rotate_one += 4;
        rotate_two += 2;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
// Фаза 2.2
        jQuery('.status_percent').text('13%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            jQuery('.draggable_lovushka').css({
              color: 'transparent',
              transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
              background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
            if (count_animation <= 4) {
              jQuery('.draggable_v3').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
            } else if (count_animation <= 8) {
              jQuery('.draggable_v3').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_bottom);
              jQuery('.zone_l').css('top', l_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
            } else if (count_animation <= 12) {
              jQuery('.draggable_v3').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
            }
            count_animation += 1;
            rotate_lovushka += 2;
            rotate_one += 4;
            rotate_two += 2;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v3').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
// Фаза 2.3
            jQuery('.status_percent').text('16%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                jQuery('.draggable_lovushka').css({
                  color: 'transparent',
                  transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
                if (count_animation <= 4) {
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_top);
                  jQuery('.zone_l').css('top', l_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                }
                count_animation += 1;
                rotate_lovushka += 2;
                rotate_one += 4;
                rotate_two += 2;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_v1').css({
                  color: '#FFF0C7',
                  transform: 'scale(1)',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
// Фаза 2.4
                jQuery('.status_percent').text('19%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    jQuery('.draggable_lovushka').css({
                      color: 'transparent',
                      transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                    if (count_animation <= 4) {
                      jQuery('.draggable_v4').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_v4').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_bottom);
                      jQuery('.zone_l').css('top', l_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_v4').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                    }
                    count_animation += 1;
                    rotate_lovushka += 2;
                    rotate_one += 4;
                    rotate_two += 2;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_v4').css({
                      color: '#FFF0C7',
                      transform: 'scale(1)',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
// Фаза 2.5
                    jQuery('.status_percent').text('22%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        jQuery('.draggable_lovushka').css({
                          color: 'transparent',
                          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                        if (count_animation <= 4) {
                          jQuery('.draggable_v3').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_v3').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_top);
                          jQuery('.zone_l').css('top', l_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_v3').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                        }
                        count_animation += 1;
                        rotate_lovushka += 2;
                        rotate_one += 4;
                        rotate_two += 2;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_v3').css({
                          color: '#FFF0C7',
                          transform: 'scale(1)',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
// Фаза 2.6
                        jQuery('.status_percent').text('24%');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            jQuery('.draggable_lovushka').css({
                              color: 'transparent',
                              transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                              background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                            if (count_animation <= 4) {
                              jQuery('.draggable_v1').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_v1').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_bottom);
                              jQuery('.zone_l').css('top', l_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_v1').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                            }
                            count_animation += 1;
                            rotate_lovushka += 2;
                            rotate_one += 4;
                            rotate_two += 2;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_v1').css({
                              color: '#FFF0C7',
                              transform: 'scale(1)',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
// Фаза 2.7
                            jQuery('.status_percent').text('26%');
                            console.log('Фаза 2/2');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                jQuery('.draggable_lovushka').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v4').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v4').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_top);
                                  jQuery('.zone_l').css('top', r_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v4').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                }
                                count_animation += 1;
                                rotate_lovushka += 2;
                                rotate_one += 4;
                                rotate_two += 2;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_v4').css({
                                  color: '#FFF0C7',
                                  transform: 'scale(1)',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
// Фаза 2.8
                                jQuery('.status_percent').text('28%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    jQuery('.draggable_lovushka').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v3').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v3').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', r_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v3').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                    }
                                    count_animation += 1;
                                    rotate_lovushka += 2;
                                    rotate_one += 4;
                                    rotate_two += 2;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_v3').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
// Фаза 2.9
                                    jQuery('.status_percent').text('30%');
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        jQuery('.draggable_lovushka').css({
                                          color: 'transparent',
                                          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_v1').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_v1').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_top);
                                          jQuery('.zone_l').css('top', r_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_v1').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                        }
                                        count_animation += 1;
                                        rotate_lovushka += 2;
                                        rotate_one += 4;
                                        rotate_two += 2;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_v1').css({
                                          color: '#FFF0C7',
                                          transform: 'scale(1)',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
// Фаза 2.10
                                        jQuery('.status_percent').text('32%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            jQuery('.draggable_lovushka').css({
                                              color: 'transparent',
                                              transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                              background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_v4').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_v4').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_bottom);
                                              jQuery('.zone_l').css('top', r_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_v4').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                            }
                                            count_animation += 1;
                                            rotate_lovushka += 2;
                                            rotate_one += 4;
                                            rotate_two += 2;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_v4').css({
                                              color: '#FFF0C7',
                                              transform: 'scale(1)',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
// Фаза 2.11
                                            jQuery('.status_percent').text('34%');
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                jQuery('.draggable_lovushka').css({
                                                  color: 'transparent',
                                                  transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_v3').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', l_bottom);
                                                  jQuery('.zone_l').css('top', r_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_v3').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', l_top);
                                                  jQuery('.zone_l').css('top', r_bottom);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_v3').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', l_bottom);
                                                  jQuery('.zone_l').css('top', r_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                }
                                                count_animation += 1;
                                                rotate_lovushka += 2;
                                                rotate_one += 4;
                                                rotate_two += 2;
                                              } else {
                                                clearInterval(phaseOne);
                                                jQuery('.draggable_v3').css({
                                                  color: '#FFF0C7',
                                                  transform: 'scale(1)',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
// Фаза 2.12
                                                jQuery('.status_percent').text('36%');
                                                count_animation = 0;
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    jQuery('.draggable_lovushka').css({
                                                      color: 'transparent',
                                                      transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_v1').css({
                                                        color: 'transparent',
                                                        transform: 'scale(1.3)',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', l_top);
                                                      jQuery('.zone_l').css('top', r_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_v1').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', l_bottom);
                                                      jQuery('.zone_l').css('top', r_top);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_v1').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', l_top);
                                                      jQuery('.zone_l').css('top', r_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                    }
                                                    count_animation += 1;
                                                    rotate_lovushka += 2;
                                                    rotate_one += 4;
                                                    rotate_two += 2;
                                                  } else {
                                                    clearInterval(phaseOne);
                                                    jQuery('.draggable_v1, .draggable_lovushka').css({
                                                      color: '#FFF0C7',
                                                      transform: 'scale(1)',
                                                      background: 'rgba(83, 35, 69, 0.4)',
                                                      opacity: 1
                                                    });
                                                    next();
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
  }).then(function(next) {
// Фаза 3.1
    jQuery('.status_percent').text('38%');
    jQuery('.status_pahaze_now').text('3');
    console.log('Фаза 3/1');
    r_top = jQuery('.draggable_d3').css('top');
    r_bottom = jQuery('.draggable_d4').css('top');
    l_top = jQuery('.draggable_s3').css('top');
    l_bottom = jQuery('.draggable_s4').css('top');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 4;
          rotate_two += 6;
        } else if (count_animation <= 8) {
          jQuery('.draggable_d3').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 6;
          rotate_two += 4;
        } else if (count_animation <= 12) {
          jQuery('.draggable_d3').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 4;
          rotate_two += 6;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_d3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
// Фаза 3.2
        jQuery('.status_percent').text('40%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_d4').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 6;
              rotate_two += 4;
            } else if (count_animation <= 8) {
              jQuery('.draggable_d4').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 4;
              rotate_two += 6;
            } else if (count_animation <= 12) {
              jQuery('.draggable_d4').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 6;
              rotate_two += 4;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_d4').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
// Фаза 3.3
            jQuery('.status_percent').text('42%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_s3').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 4;
                  rotate_two += 6;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_s3').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 6;
                  rotate_two += 4;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_s3').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 4;
                  rotate_two += 6;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_s3').css({
                  color: '#FFF0C7',
                  transform: 'scale(1)',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
// Фаза 3.4
                jQuery('.status_percent').text('44%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_s4').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 6;
                      rotate_two += 4;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_s4').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 4;
                      rotate_two += 6;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_s4').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 6;
                      rotate_two += 4;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_s4').css({
                      color: '#FFF0C7',
                      transform: 'scale(1)',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
// Фаза 3.5
                    jQuery('.status_percent').text('46%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_d3').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 4;
                          rotate_two += 6;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_d3').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 6;
                          rotate_two += 4;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_d3').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 4;
                          rotate_two += 6;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_d3').css({
                          color: '#FFF0C7',
                          transform: 'scale(1)',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
// Фаза 3.6
                        jQuery('.status_percent').text('48%');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_d4').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 6;
                              rotate_two += 4;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_d4').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 4;
                              rotate_two += 6;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_d4').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 6;
                              rotate_two += 4;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_d4').css({
                              color: '#FFF0C7',
                              transform: 'scale(1)',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
// Фаза 3.7
                            jQuery('.status_percent').text('50%');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_s3').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', l_top);
                                  jQuery('.zone_l').css('top', r_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 4;
                                  rotate_two += 6;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_s3').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 6;
                                  rotate_two += 4;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_s3').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_top);
                                  jQuery('.zone_l').css('top', r_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 4;
                                  rotate_two += 6;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_s3').css({
                                  color: '#FFF0C7',
                                  transform: 'scale(1)',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
// Фаза 3.8
                                jQuery('.status_percent').text('52%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_s4').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', r_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 6;
                                      rotate_two += 4;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_s4').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 4;
                                      rotate_two += 6;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_s4').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', r_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 6;
                                      rotate_two += 4;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_s4').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
// Фаза 3.9
                                    jQuery('.status_percent').text('54%');
                                    console.log('Фаза 3/2');
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_d3').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 4;
                                          rotate_two += 6;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_d3').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 6;
                                          rotate_two += 4;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_d3').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 4;
                                          rotate_two += 6;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_d3').css({
                                          color: '#FFF0C7',
                                          transform: 'scale(1)',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
// Фаза 3.10
                                        jQuery('.status_percent').text('56%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_d4').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 6;
                                              rotate_two += 4;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_d4').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 4;
                                              rotate_two += 6;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_d4').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 6;
                                              rotate_two += 4;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_d4').css({
                                              color: '#FFF0C7',
                                              transform: 'scale(1)',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
// Фаза 3.11
                                            jQuery('.status_percent').text('58%');
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_s3').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_bottom);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 4;
                                                  rotate_two += 6;
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_s3').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_bottom);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 6;
                                                  rotate_two += 4;
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_s3').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_bottom);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 4;
                                                  rotate_two += 6;
                                                }
                                                count_animation += 1;
                                              } else {
                                                clearInterval(phaseOne);
                                                jQuery('.draggable_s3').css({
                                                  color: '#FFF0C7',
                                                  transform: 'scale(1)',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
// Фаза 3.12
                                                jQuery('.status_percent').text('60%');
                                                count_animation = 0;
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_s4').css({
                                                        color: 'transparent',
                                                        transform: 'scale(1.3)',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', l_top);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 6;
                                                      rotate_two += 4;
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_s4').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 4;
                                                      rotate_two += 6;
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_s4').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', l_top);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 6;
                                                      rotate_two += 4;
                                                    }
                                                    count_animation += 1;
                                                  } else {
                                                    clearInterval(phaseOne);
                                                    jQuery('.draggable_s4').css({
                                                      color: '#FFF0C7',
                                                      transform: 'scale(1)',
                                                      background: 'rgba(83, 35, 69, 0.4)',
                                                      opacity: 1
                                                    });
// Фаза 3.13
                                                    jQuery('.status_percent').text('62%');
                                                    count_animation = 0;
                                                    phaseOne = setInterval(function(){
                                                      if (count_animation <= 12){
                                                        if (count_animation <= 4) {
                                                          jQuery('.draggable_d3').css({
                                                            color: 'transparent',
                                                            transform: 'scale(1.3)',
                                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                            opacity: 0.8
                                                          });
                                                          jQuery('.zone_x').css('top', r_top);
                                                          jQuery('.zone_l').css('top', l_bottom);
                                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                          rotate_one += 4;
                                                          rotate_two += 6;
                                                        } else if (count_animation <= 8) {
                                                          jQuery('.draggable_d3').css({
                                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                          });
                                                          jQuery('.zone_x').css('top', r_bottom);
                                                          jQuery('.zone_l').css('top', l_top);
                                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                          rotate_one += 6;
                                                          rotate_two += 4;
                                                        } else if (count_animation <= 12) {
                                                          jQuery('.draggable_d3').css({
                                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                          });
                                                          jQuery('.zone_x').css('top', r_top);
                                                          jQuery('.zone_l').css('top', l_bottom);
                                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                          rotate_one += 4;
                                                          rotate_two += 6;
                                                        }
                                                        count_animation += 1;
                                                      } else {
                                                        clearInterval(phaseOne);
                                                        jQuery('.draggable_d3').css({
                                                          color: '#FFF0C7',
                                                          transform: 'scale(1)',
                                                          background: 'rgba(83, 35, 69, 0.4)',
                                                          opacity: 1
                                                        });
// Фаза 3.14
                                                        jQuery('.status_percent').text('64%');
                                                        count_animation = 0;
                                                        phaseOne = setInterval(function(){
                                                          if (count_animation <= 12){
                                                            if (count_animation <= 4) {
                                                              jQuery('.draggable_d4').css({
                                                                color: 'transparent',
                                                                transform: 'scale(1.3)',
                                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                opacity: 0.8
                                                              });
                                                              jQuery('.zone_x').css('top', r_bottom);
                                                              jQuery('.zone_l').css('top', l_top);
                                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                              rotate_one += 6;
                                                              rotate_two += 4;
                                                            } else if (count_animation <= 8) {
                                                              jQuery('.draggable_d4').css({
                                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                              });
                                                              jQuery('.zone_x').css('top', r_top);
                                                              jQuery('.zone_l').css('top', l_bottom);
                                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                              rotate_one += 4;
                                                              rotate_two += 6;
                                                            } else if (count_animation <= 12) {
                                                              jQuery('.draggable_d4').css({
                                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                              });
                                                              jQuery('.zone_x').css('top', r_bottom);
                                                              jQuery('.zone_l').css('top', l_top);
                                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                              rotate_one += 6;
                                                              rotate_two += 4;
                                                            }
                                                            count_animation += 1;
                                                          } else {
                                                            clearInterval(phaseOne);
                                                            jQuery('.draggable_d4').css({
                                                              color: '#FFF0C7',
                                                              transform: 'scale(1)',
                                                              background: 'rgba(83, 35, 69, 0.4)',
                                                              opacity: 1
                                                            });
// Фаза 3.15
                                                            jQuery('.status_percent').text('66%');
                                                            count_animation = 0;
                                                            phaseOne = setInterval(function(){
                                                              if (count_animation <= 12){
                                                                if (count_animation <= 4) {
                                                                  jQuery('.draggable_s3').css({
                                                                    color: 'transparent',
                                                                    transform: 'scale(1.3)',
                                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                    opacity: 0.8
                                                                  });
                                                                  jQuery('.zone_x').css('top', r_top);
                                                                  jQuery('.zone_l').css('top', l_bottom);
                                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                  rotate_one += 4;
                                                                  rotate_two += 6;
                                                                } else if (count_animation <= 8) {
                                                                  jQuery('.draggable_s3').css({
                                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                  });
                                                                  jQuery('.zone_x').css('top', r_bottom);
                                                                  jQuery('.zone_l').css('top', l_top);
                                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                  rotate_one += 6;
                                                                  rotate_two += 4;
                                                                } else if (count_animation <= 12) {
                                                                  jQuery('.draggable_s3').css({
                                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                  });
                                                                  jQuery('.zone_x').css('top', r_top);
                                                                  jQuery('.zone_l').css('top', l_bottom);
                                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                  rotate_one += 4;
                                                                  rotate_two += 6;
                                                                }
                                                                count_animation += 1;
                                                              } else {
                                                                clearInterval(phaseOne);
                                                                jQuery('.draggable_s3').css({
                                                                  color: '#FFF0C7',
                                                                  transform: 'scale(1)',
                                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                                  opacity: 1
                                                                });
// Фаза 3.16
                                                                jQuery('.status_percent').text('68%');
                                                                count_animation = 0;
                                                                phaseOne = setInterval(function(){
                                                                  if (count_animation <= 12){
                                                                    if (count_animation <= 4) {
                                                                      jQuery('.draggable_s4').css({
                                                                        color: 'transparent',
                                                                        transform: 'scale(1.3)',
                                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                        opacity: 0.8
                                                                      });
                                                                      jQuery('.zone_x').css('top', r_bottom);
                                                                      jQuery('.zone_l').css('top', l_top);
                                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                      rotate_one += 6;
                                                                      rotate_two += 4;
                                                                    } else if (count_animation <= 8) {
                                                                      jQuery('.draggable_s4').css({
                                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                      });
                                                                      jQuery('.zone_x').css('top', r_top);
                                                                      jQuery('.zone_l').css('top', l_bottom);
                                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                      rotate_one += 4;
                                                                      rotate_two += 6;
                                                                    } else if (count_animation <= 12) {
                                                                      jQuery('.draggable_s4').css({
                                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                      });
                                                                      jQuery('.zone_x').css('top', r_bottom);
                                                                      jQuery('.zone_l').css('top', l_top);
                                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                      rotate_one += 6;
                                                                      rotate_two += 4;
                                                                    }
                                                                    count_animation += 1;
                                                                  } else {
                                                                    clearInterval(phaseOne);
                                                                    jQuery('.draggable_s4').css({
                                                                      color: '#FFF0C7',
                                                                      transform: 'scale(1)',
                                                                      background: 'rgba(83, 35, 69, 0.4)',
                                                                      opacity: 1
                                                                    });
                                                                    count_animation = 0;
                                                                    jQuery('.zone_l, .zone_x').css('transform', 'scale(0.01)');
                                                                    next();
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
            }, 1000);
          }
        }, 1000);
      }
    }, 1000);
  }).then(function(next) {
    console.log('Фаза 4/1');
// Фаза 4.1.1
    jQuery('.status_percent').text('70%');
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
          color: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
// Фаза 4.1.2
        jQuery('.status_percent').text('72%');
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
              color: '#FFF0C7',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            count_animation = 0;
// Фаза 4.1.3
            jQuery('.status_percent').text('74%');
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
                  color: '#FFF0C7',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                count_animation = 0;
// Фаза 4.1.4
                jQuery('.status_percent').text('76%');
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
// Фаза 4.2.1
                    jQuery('.status_percent').text('78%');
                    rotate_one = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 22){
                        jQuery('.draggable_v3').css({
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
                        jQuery('.draggable_v3').css({
                          color: '#FFF0C7',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
                        count_animation = 0;
// Фаза 4.2.2
                        jQuery('.status_percent').text('80%');
                        rotate_one = 10;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 53){
                            jQuery('.draggable_v3').css({
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
                            jQuery('.draggable_v3').css({
                              color: '#FFF0C7',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
                            count_animation = 0;
// Фаза 4.2.3
                            jQuery('.status_percent').text('82%');
                            rotate_one = 270;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 60){
                                jQuery('.draggable_v3').css({
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
                                jQuery('.draggable_v3').css({
                                  color: '#FFF0C7',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
                                count_animation = 0;
// Фаза 4.2.4
                                jQuery('.status_percent').text('84%');
                                rotate_one = 300;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 40){
                                    jQuery('.draggable_v3').css({
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
                                    jQuery('.draggable_v3').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
                                    count_animation = 0;
// Фаза 4.3.1
                                    jQuery('.status_percent').text('86%');
                                    rotate_one = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 22){
                                        jQuery('.draggable_v4').css({
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
                                        jQuery('.draggable_v4').css({
                                          color: '#FFF0C7',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
                                        count_animation = 0;
// Фаза 4.3.2
                                        jQuery('.status_percent').text('88%');
                                        rotate_one = 10;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 53){
                                            jQuery('.draggable_v4').css({
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
                                            jQuery('.draggable_v4').css({
                                              color: '#FFF0C7',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
                                            count_animation = 0;
// Фаза 4.3.3
                                            jQuery('.status_percent').text('90%');
                                            rotate_one = 270;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 60){
                                                jQuery('.draggable_v4').css({
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
                                                jQuery('.draggable_v4').css({
                                                  color: '#FFF0C7',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
                                                count_animation = 0;
// Фаза 4.3.4
                                                jQuery('.status_percent').text('92%');
                                                rotate_one = 300;
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 40){
                                                    jQuery('.draggable_v4').css({
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
                                                    jQuery('.draggable_v4').css({
                                                      color: '#FFF0C7',
                                                      transform: 'scale(1)',
                                                      background: 'rgba(83, 35, 69, 0.4)',
                                                      opacity: 1
                                                    });
                                                    count_animation = 0;
                                                    next();
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
  }).then(function(next) {
// Фаза 5.1
    jQuery('.status_percent').text('94%');
    jQuery('.zone_x, .zone_l').addClass('hidden').css('transform', 'scale(1)');
    count_animation = 0;
    console.log('Фаза 5.1');
    jQuery('.status_pahaze_now').text('5');
    phaseOne = setInterval(function(){
      if (count_animation <= 36){
        if (count_animation <= 19) {
          jQuery('.draggable_v3').css({
            color: 'transparent',
            transform: 'scale(1.5)',
            background: 'transparent url(/wp-content/themes/mobile/img/1_zemlya_lev.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
        } else {
          jQuery('.draggable_v3').css({
            background: 'transparent url(/wp-content/themes/mobile/img/4_zemlya_prav_lit.png) 0 0/100% no-repeat'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
// Фаза 5.2
        jQuery('.status_percent').text('96%');
        console.log('Фаза 5.2');
        phaseOne = setInterval(function(){
          if (count_animation <= 34){
            if (count_animation <= 17) {
              jQuery('.draggable_v1, .draggable_v4').css({
                color: 'transparent',
                transform: 'scale(1.5)',
                background: 'transparent url(/wp-content/themes/mobile/img/3_voda_lev.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
            } else {
              jQuery('.draggable_v1, .draggable_v4').css({
                background: 'transparent url(/wp-content/themes/mobile/img/2_voda_prav.png) 0 0/100% no-repeat'
              });
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v1, .draggable_v4').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            count_animation = 0;
            next();
          }
        }, 1000);
      }
    }, 1000);
  }).then(function(next) {
    count_animation = 0;
// Фаза 6
    jQuery('.status_percent').text('98%');
    console.log('Фаза 6');
    phaseOne = setInterval(function(){
      if (count_animation <= 80){
        jQuery('.draggable_v5, .draggable_v-, .draggable_v3, .draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          opacity: 0.8
        });
        jQuery('.draggable_v5, .draggable_v-').css({
          background: '#fff url(/wp-content/themes/mobile/img/gold.png) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/chisty_vnutri.jpg) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v0').css({
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5, .draggable_v-, .draggable_v3, .draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
        jQuery('.status_percent').text('100%');
        onEnd();
      }
    }, 1000);
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


v5 = function(){
  chain(function(next) {
    jQuery('.status').removeClass('hidden');
    jQuery('.status_pahaze_all').text('5');
    jQuery('.status_percent').text('0%');
    jQuery('.status_pahaze_now').text('1');
    jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'scale(1)');
// Фаза 1.1
    console.log('Фаза 1/1');
    r_top = jQuery('.draggable_v0').css('top');
    r_middle_1 = jQuery('.draggable_d2').css('top');
    r_middle_2 = jQuery('.draggable_v5').css('top');
    r_bottom = jQuery('.draggable_v-').css('top');

    l_top = jQuery('.draggable_v0').css('top');
    l_middle_1 = jQuery('.draggable_s2').css('top');
    l_middle_2 = jQuery('.draggable_s5').css('top');
    l_bottom = jQuery('.draggable_v-').css('top');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        jQuery('.draggable_lovushka').css({
          color: 'transparent',
          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        if (count_animation <= 4) {
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 14;
        } else if (count_animation <= 8) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_middle_2);
          jQuery('.zone_l').css('top', l_middle_1);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 8;
        } else if (count_animation <= 12) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_middle_1);
          jQuery('.zone_l').css('top', l_middle_2);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 8;
          rotate_two += 2;
        }
        count_animation += 1;
        rotate_lovushka += 2;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
// Фаза 1.2
        jQuery('.status_percent').text('2%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            jQuery('.draggable_lovushka').css({
              color: 'transparent',
              transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
              background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
              opacity: 0.8
            });
            if (count_animation <= 4) {
              jQuery('.draggable_v-').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 36;
              rotate_two += 2;
            } else if (count_animation <= 8) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_middle_1);
              jQuery('.zone_l').css('top', l_middle_2);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 2;
            } else if (count_animation <= 12) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_middle_2);
              jQuery('.zone_l').css('top', l_middle_1);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 8;
            }
            count_animation += 1;
            rotate_lovushka += 2;
            rotate_one += 4;
            rotate_two += 2;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v-').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
// Фаза 1.3
            jQuery('.status_percent').text('4%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                jQuery('.draggable_lovushka').css({
                  color: 'transparent',
                  transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                  opacity: 0.8
                });
                if (count_animation <= 4) {
                  jQuery('.draggable_v5').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 14;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v5').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_middle_2);
                  jQuery('.zone_l').css('top', l_middle_1);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 8;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v5').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_middle_1);
                  jQuery('.zone_l').css('top', l_middle_2);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 8;
                  rotate_two += 2;
                }
                count_animation += 1;
                rotate_lovushka += 2;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_v5').css({
                  color: '#FFF0C7',
                  transform: 'scale(1)',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
// Фаза 1.4
                jQuery('.status_percent').text('6%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    jQuery('.draggable_lovushka').css({
                      color: 'transparent',
                      transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                    if (count_animation <= 4) {
                      jQuery('.draggable_v-').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 36;
                      rotate_two += 2;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_v-').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_middle_1);
                      jQuery('.zone_l').css('top', l_middle_2);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 2;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_v-').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_middle_2);
                      jQuery('.zone_l').css('top', l_middle_1);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 8;
                    }
                    count_animation += 1;
                    rotate_lovushka += 2;
                    rotate_one += 4;
                    rotate_two += 2;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_v-').css({
                      color: '#FFF0C7',
                      transform: 'scale(1)',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
// Фаза 1.5
                    jQuery('.status_percent').text('8%');
                    console.log('Фаза 1/2');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        jQuery('.draggable_lovushka').css({
                          color: 'transparent',
                          transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                          background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                        if (count_animation <= 4) {
                          jQuery('.draggable_v5').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 36;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_v5').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_middle_2);
                          jQuery('.zone_l').css('top', r_middle_1);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 8;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_v5').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_middle_1);
                          jQuery('.zone_l').css('top', r_middle_2);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 8;
                          rotate_two += 2;
                        }
                        count_animation += 1;
                        rotate_lovushka += 2;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_v5').css({
                          color: '#FFF0C7',
                          transform: 'scale(1)',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
// Фаза 1.6
                        jQuery('.status_percent').text('10%');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            jQuery('.draggable_lovushka').css({
                              color: 'transparent',
                              transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                              background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                            if (count_animation <= 4) {
                              jQuery('.draggable_v-').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 14;
                              rotate_two += 2;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_v-').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_middle_1);
                              jQuery('.zone_l').css('top', r_middle_2);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 8;
                              rotate_two += 2;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_v-').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_middle_2);
                              jQuery('.zone_l').css('top', r_middle_1);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 8;
                            }
                            count_animation += 1;
                            rotate_lovushka += 2;
                            rotate_one += 4;
                            rotate_two += 2;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_v-').css({
                              color: '#FFF0C7',
                              transform: 'scale(1)',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
// Фаза 1.7
                            jQuery('.status_percent').text('12%');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                jQuery('.draggable_lovushka').css({
                                  color: 'transparent',
                                  transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v5').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 36;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v5').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_middle_2);
                                  jQuery('.zone_l').css('top', r_middle_1);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 8;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v5').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_middle_1);
                                  jQuery('.zone_l').css('top', r_middle_2);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 2;
                                }
                                count_animation += 1;
                                rotate_lovushka += 2;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_v5').css({
                                  color: '#FFF0C7',
                                  transform: 'scale(1)',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
// Фаза 1.8
                                jQuery('.status_percent').text('14%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    jQuery('.draggable_lovushka').css({
                                      color: 'transparent',
                                      transform: 'scale(1.3) rotate(-'+rotate_lovushka+'deg)',
                                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.png) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v-').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 14;
                                      rotate_two += 2;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v-').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_middle_1);
                                      jQuery('.zone_l').css('top', r_middle_2);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 8;
                                      rotate_two += 2;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v-').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_middle_2);
                                      jQuery('.zone_l').css('top', r_middle_1);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 8;
                                    }
                                    count_animation += 1;
                                    rotate_lovushka += 2;
                                    rotate_one += 4;
                                    rotate_two += 2;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_v-, .draggable_lovushka').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
                                    next();
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
  }).then(function(next) {
// Фаза 2.1
    jQuery('.status_percent').text('16%');
    jQuery('.status_pahaze_now').text('2');
    console.log('Фаза 2/1');
    r_top = jQuery('.draggable_d5').css('top');
    r_bottom = jQuery('.draggable_d6').css('top');
    l_top = jQuery('.draggable_s5').css('top');
    l_bottom = jQuery('.draggable_s6').css('top');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 6;
        } else if (count_animation <= 8) {
          jQuery('.draggable_d5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 4;
        } else if (count_animation <= 12) {
          jQuery('.draggable_d5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 2;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
// Фаза 2.2
        jQuery('.status_percent').text('18%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_d6').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 2;
            } else if (count_animation <= 8) {
              jQuery('.draggable_d6').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 2;
            } else if (count_animation <= 12) {
              jQuery('.draggable_d6').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 2;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_d6').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
// Фаза 2.3
            jQuery('.status_percent').text('20%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_s5').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 2;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_s5').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 2;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_s5').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 2;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_s5').css({
                  color: '#FFF0C7',
                  transform: 'scale(1)',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
// Фаза 2.4
                jQuery('.status_percent').text('22%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_s6').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 2;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_s6').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 2;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_s6').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 2;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_s6').css({
                      color: '#FFF0C7',
                      transform: 'scale(1)',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
// Фаза 2.5
                    jQuery('.status_percent').text('24%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_d5').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 2;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_d5').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 2;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_d5').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 2;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_d5').css({
                          color: '#FFF0C7',
                          transform: 'scale(1)',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
// Фаза 2.6
                        jQuery('.status_percent').text('26%');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_d6').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 2;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_d6').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 2;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_d6').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 2;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_d6').css({
                              color: '#FFF0C7',
                              transform: 'scale(1)',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
// Фаза 2.7
                            jQuery('.status_percent').text('28%');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_s5').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', l_top);
                                  jQuery('.zone_l').css('top', r_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 2;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_s5').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 2;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_s5').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_top);
                                  jQuery('.zone_l').css('top', r_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 2;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_s5').css({
                                  color: '#FFF0C7',
                                  transform: 'scale(1)',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
// Фаза 2.8
                                jQuery('.status_percent').text('30%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_s6').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', r_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 2;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_s6').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 2;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_s6').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', r_top);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 2;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_s6').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
// Фаза 2.9
                                    jQuery('.status_percent').text('32%');
                                    console.log('Фаза 2/2');
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_d5').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 2;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_d5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 2;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_d5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 2;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_d5').css({
                                          color: '#FFF0C7',
                                          transform: 'scale(1)',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
// Фаза 2.10
                                        jQuery('.status_percent').text('34%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_d6').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 2;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_d6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 2;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_d6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 2;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_d6').css({
                                              color: '#FFF0C7',
                                              transform: 'scale(1)',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
// Фаза 2.11
                                            jQuery('.status_percent').text('36%');
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_s5').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_bottom);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 2;
                                                  rotate_two += 2;
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_s5').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_bottom);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 2;
                                                  rotate_two += 2;
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_s5').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_bottom);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 2;
                                                  rotate_two += 2;
                                                }
                                                count_animation += 1;
                                              } else {
                                                clearInterval(phaseOne);
                                                jQuery('.draggable_s5').css({
                                                  color: '#FFF0C7',
                                                  transform: 'scale(1)',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
// Фаза 2.12
                                                jQuery('.status_percent').text('38%');
                                                count_animation = 0;
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_s6').css({
                                                        color: 'transparent',
                                                        transform: 'scale(1.3)',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', l_top);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 2;
                                                      rotate_two += 2;
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_s6').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 2;
                                                      rotate_two += 2;
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_s6').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', l_top);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 2;
                                                      rotate_two += 2;
                                                    }
                                                    count_animation += 1;
                                                  } else {
                                                    clearInterval(phaseOne);
                                                    jQuery('.draggable_s6').css({
                                                      color: '#FFF0C7',
                                                      transform: 'scale(1)',
                                                      background: 'rgba(83, 35, 69, 0.4)',
                                                      opacity: 1
                                                    });
// Фаза 2.13
                                                    jQuery('.status_percent').text('40%');
                                                    count_animation = 0;
                                                    phaseOne = setInterval(function(){
                                                      if (count_animation <= 12){
                                                        if (count_animation <= 4) {
                                                          jQuery('.draggable_d5').css({
                                                            color: 'transparent',
                                                            transform: 'scale(1.3)',
                                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                            opacity: 0.8
                                                          });
                                                          jQuery('.zone_x').css('top', r_top);
                                                          jQuery('.zone_l').css('top', l_bottom);
                                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                          rotate_one += 2;
                                                          rotate_two += 2;
                                                        } else if (count_animation <= 8) {
                                                          jQuery('.draggable_d5').css({
                                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                          });
                                                          jQuery('.zone_x').css('top', r_bottom);
                                                          jQuery('.zone_l').css('top', l_top);
                                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                          rotate_one += 2;
                                                          rotate_two += 2;
                                                        } else if (count_animation <= 12) {
                                                          jQuery('.draggable_d5').css({
                                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                          });
                                                          jQuery('.zone_x').css('top', r_top);
                                                          jQuery('.zone_l').css('top', l_bottom);
                                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                          rotate_one += 2;
                                                          rotate_two += 2;
                                                        }
                                                        count_animation += 1;
                                                      } else {
                                                        clearInterval(phaseOne);
                                                        jQuery('.draggable_d5').css({
                                                          color: '#FFF0C7',
                                                          transform: 'scale(1)',
                                                          background: 'rgba(83, 35, 69, 0.4)',
                                                          opacity: 1
                                                        });
// Фаза 2.14
                                                        jQuery('.status_percent').text('42%');
                                                        count_animation = 0;
                                                        phaseOne = setInterval(function(){
                                                          if (count_animation <= 12){
                                                            if (count_animation <= 4) {
                                                              jQuery('.draggable_d6').css({
                                                                color: 'transparent',
                                                                transform: 'scale(1.3)',
                                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                opacity: 0.8
                                                              });
                                                              jQuery('.zone_x').css('top', r_bottom);
                                                              jQuery('.zone_l').css('top', l_top);
                                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                              rotate_one += 2;
                                                              rotate_two += 2;
                                                            } else if (count_animation <= 8) {
                                                              jQuery('.draggable_d6').css({
                                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                              });
                                                              jQuery('.zone_x').css('top', r_top);
                                                              jQuery('.zone_l').css('top', l_bottom);
                                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                              rotate_one += 2;
                                                              rotate_two += 2;
                                                            } else if (count_animation <= 12) {
                                                              jQuery('.draggable_d6').css({
                                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                              });
                                                              jQuery('.zone_x').css('top', r_bottom);
                                                              jQuery('.zone_l').css('top', l_top);
                                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                              rotate_one += 2;
                                                              rotate_two += 2;
                                                            }
                                                            count_animation += 1;
                                                          } else {
                                                            clearInterval(phaseOne);
                                                            jQuery('.draggable_d6').css({
                                                              color: '#FFF0C7',
                                                              transform: 'scale(1)',
                                                              background: 'rgba(83, 35, 69, 0.4)',
                                                              opacity: 1
                                                            });
// Фаза 2.15
                                                            jQuery('.status_percent').text('44%');
                                                            count_animation = 0;
                                                            phaseOne = setInterval(function(){
                                                              if (count_animation <= 12){
                                                                if (count_animation <= 4) {
                                                                  jQuery('.draggable_s5').css({
                                                                    color: 'transparent',
                                                                    transform: 'scale(1.3)',
                                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                    opacity: 0.8
                                                                  });
                                                                  jQuery('.zone_x').css('top', r_top);
                                                                  jQuery('.zone_l').css('top', l_bottom);
                                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                  rotate_one += 2;
                                                                  rotate_two += 2;
                                                                } else if (count_animation <= 8) {
                                                                  jQuery('.draggable_s5').css({
                                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                  });
                                                                  jQuery('.zone_x').css('top', r_bottom);
                                                                  jQuery('.zone_l').css('top', l_top);
                                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                  rotate_one += 2;
                                                                  rotate_two += 2;
                                                                } else if (count_animation <= 12) {
                                                                  jQuery('.draggable_s5').css({
                                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                  });
                                                                  jQuery('.zone_x').css('top', r_top);
                                                                  jQuery('.zone_l').css('top', l_bottom);
                                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                  rotate_one += 2;
                                                                  rotate_two += 2;
                                                                }
                                                                count_animation += 1;
                                                              } else {
                                                                clearInterval(phaseOne);
                                                                jQuery('.draggable_s5').css({
                                                                  color: '#FFF0C7',
                                                                  transform: 'scale(1)',
                                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                                  opacity: 1
                                                                });
// Фаза 2.16
                                                                jQuery('.status_percent').text('46%');
                                                                count_animation = 0;
                                                                phaseOne = setInterval(function(){
                                                                  if (count_animation <= 12){
                                                                    if (count_animation <= 4) {
                                                                      jQuery('.draggable_s6').css({
                                                                        color: 'transparent',
                                                                        transform: 'scale(1.3)',
                                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                                        opacity: 0.8
                                                                      });
                                                                      jQuery('.zone_x').css('top', r_bottom);
                                                                      jQuery('.zone_l').css('top', l_top);
                                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                      rotate_one += 2;
                                                                      rotate_two += 2;
                                                                    } else if (count_animation <= 8) {
                                                                      jQuery('.draggable_s6').css({
                                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                                      });
                                                                      jQuery('.zone_x').css('top', r_top);
                                                                      jQuery('.zone_l').css('top', l_bottom);
                                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                      rotate_one += 2;
                                                                      rotate_two += 2;
                                                                    } else if (count_animation <= 12) {
                                                                      jQuery('.draggable_s6').css({
                                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                                      });
                                                                      jQuery('.zone_x').css('top', r_bottom);
                                                                      jQuery('.zone_l').css('top', l_top);
                                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                                      rotate_one += 2;
                                                                      rotate_two += 2;
                                                                    }
                                                                    count_animation += 1;
                                                                  } else {
                                                                    clearInterval(phaseOne);
                                                                    jQuery('.draggable_s6').css({
                                                                      color: '#FFF0C7',
                                                                      transform: 'scale(1)',
                                                                      background: 'rgba(83, 35, 69, 0.4)',
                                                                      opacity: 1
                                                                    });
                                                                    count_animation = 0;
                                                                    next();
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
            }, 1000);
          }
        }, 1000);
      }
    }, 1000);
  }).then(function(next) {
// Фаза 3.1
    jQuery('.status_percent').text('48%');
    jQuery('.status_pahaze_now').text('3');
    console.log('Фаза 3/1');
    r_top = jQuery('.draggable_d2').css('top');
    l_top = jQuery('.draggable_s2').css('top');
    l_bottom = jQuery('.draggable_v0').css('top');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', r_top);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 8;
          rotate_two += 8;
        } else if (count_animation <= 8) {
          jQuery('.draggable_v2').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_top);
          jQuery('.zone_l').css('top', l_bottom);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 8;
          rotate_two += 14;
        } else if (count_animation <= 12) {
          jQuery('.draggable_v2').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_top);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
          rotate_one += 8;
          rotate_two += 8;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
// Фаза 3.2
        jQuery('.status_percent').text('50%');
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_s2').css({
                color: 'transparent',
                transform: 'scale(1.3)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 14;
            } else if (count_animation <= 8) {
              jQuery('.draggable_s2').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 8;
            } else if (count_animation <= 12) {
              jQuery('.draggable_s2').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 14;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_s2').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
// Фаза 3.3
            jQuery('.status_percent').text('52%');
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_d2').css({
                    color: 'transparent',
                    transform: 'scale(1.3)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', r_top);
                  jQuery('.zone_l').css('top', l_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 8;
                  rotate_two += 8;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_d2').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_top);
                  jQuery('.zone_l').css('top', l_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 8;
                  rotate_two += 14;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_d2').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_top);
                  jQuery('.zone_l').css('top', l_bottom);
                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                  rotate_one += 8;
                  rotate_two += 8;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_d2').css({
                  color: '#FFF0C7',
                  transform: 'scale(1)',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
// Фаза 3.4
                jQuery('.status_percent').text('54%');
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_v2').css({
                        color: 'transparent',
                        transform: 'scale(1.3)',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 14;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_v2').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_top);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 8;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_v2').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 14;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_v2').css({
                      color: '#FFF0C7',
                      transform: 'scale(1)',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
// Фаза 3.5
                    jQuery('.status_percent').text('56%');
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_s2').css({
                            color: 'transparent',
                            transform: 'scale(1.3)',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', r_top);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 8;
                          rotate_two += 8;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_s2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_top);
                          jQuery('.zone_l').css('top', l_bottom);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 8;
                          rotate_two += 14;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_s2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_top);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                          rotate_one += 8;
                          rotate_two += 8;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_s2').css({
                          color: '#FFF0C7',
                          transform: 'scale(1)',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
// Фаза 3.6
                        jQuery('.status_percent').text('58%');
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_d2').css({
                                color: 'transparent',
                                transform: 'scale(1.3)',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 8;
                              rotate_two += 14;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_d2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_top);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 8;
                              rotate_two += 8;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_d2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                              rotate_one += 8;
                              rotate_two += 14;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_d2').css({
                              color: '#FFF0C7',
                              transform: 'scale(1)',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
// Фаза 3.7
                            jQuery('.status_percent').text('60%');
                            console.log('Фаза 3/2');
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v2').css({
                                    color: 'transparent',
                                    transform: 'scale(1.3)',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 8;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v2').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_bottom);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 14;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v2').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 8;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_v2').css({
                                  color: '#FFF0C7',
                                  transform: 'scale(1)',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
// Фаза 3.8
                                jQuery('.status_percent').text('62%');
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_s2').css({
                                        color: 'transparent',
                                        transform: 'scale(1.3)',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 8;
                                      rotate_two += 14;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_s2').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 8;
                                      rotate_two += 8;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_s2').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                      rotate_one += 8;
                                      rotate_two += 14;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_s2').css({
                                      color: '#FFF0C7',
                                      transform: 'scale(1)',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
// Фаза 3.9
                                    jQuery('.status_percent').text('64%');
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_d2').css({
                                            color: 'transparent',
                                            transform: 'scale(1.3)',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 8;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_d2').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 14;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_d2').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 8;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_d2').css({
                                          color: '#FFF0C7',
                                          transform: 'scale(1)',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
// Фаза 3.10
                                        jQuery('.status_percent').text('66%');
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_v2').css({
                                                color: 'transparent',
                                                transform: 'scale(1.3)',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 8;
                                              rotate_two += 14;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_v2').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 8;
                                              rotate_two += 8;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_v2').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                              rotate_one += 8;
                                              rotate_two += 14;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_v2').css({
                                              color: '#FFF0C7',
                                              transform: 'scale(1)',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
// Фаза 3.11
                                            jQuery('.status_percent').text('68%');
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_s2').css({
                                                    color: 'transparent',
                                                    transform: 'scale(1.3)',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 8;
                                                  rotate_two += 8;
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_s2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_bottom);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 8;
                                                  rotate_two += 14;
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_s2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 8;
                                                  rotate_two += 8;
                                                }
                                                count_animation += 1;
                                              } else {
                                                clearInterval(phaseOne);
                                                jQuery('.draggable_s2').css({
                                                  color: '#FFF0C7',
                                                  transform: 'scale(1)',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
// Фаза 3.12
                                                jQuery('.status_percent').text('70%');
                                                count_animation = 0;
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_d2').css({
                                                        color: 'transparent',
                                                        transform: 'scale(1.3)',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 8;
                                                      rotate_two += 14;
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_d2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_top);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 8;
                                                      rotate_two += 8;
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_d2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                      jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 8;
                                                      rotate_two += 14;
                                                    }
                                                    count_animation += 1;
                                                  } else {
                                                    clearInterval(phaseOne);
                                                    jQuery('.draggable_d2').css({
                                                      color: '#FFF0C7',
                                                      transform: 'scale(1)',
                                                      background: 'rgba(83, 35, 69, 0.4)',
                                                      opacity: 1
                                                    });
                                                    jQuery('.zone_x, .zone_l').css('transform', 'scale(0.01)');
                                                    next();
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
  }).then(function(next) {
    console.log('Фаза 4/1');
// Фаза 4.1.1
    jQuery('.status_percent').text('72%');
    jQuery('.status_pahaze_now').text('4');
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
          color: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
// Фаза 4.1.2
        jQuery('.status_percent').text('74%');
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
              color: '#FFF0C7',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            count_animation = 0;
// Фаза 4.1.3
            jQuery('.status_percent').text('76%');
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
                  color: '#FFF0C7',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                count_animation = 0;
// Фаза 4.1.4
                jQuery('.status_percent').text('78%');
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
// Фаза 4.2.1
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
                          color: '#FFF0C7',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
                        count_animation = 0;
// Фаза 4.2.2
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
                              color: '#FFF0C7',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
                            count_animation = 0;
// Фаза 4.2.3
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
                                  color: '#FFF0C7',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
                                count_animation = 0;
// Фаза 4.2.4
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
// Фаза 4.3.1
                                    jQuery('.status_percent').text('88%');
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
                                          color: '#FFF0C7',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
                                        count_animation = 0;
// Фаза 4.3.2
                                        jQuery('.status_percent').text('90%');
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
                                              color: '#FFF0C7',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
                                            count_animation = 0;
// Фаза 4.3.3
                                            jQuery('.status_percent').text('92%');
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
                                                  color: '#FFF0C7',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
                                                count_animation = 0;
// Фаза 4.3.4
                                                jQuery('.status_percent').text('94%');
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
                                                    next();
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
  }).then(function(next) {
// Фаза 5.1
    jQuery('.status_percent').text('95%');
    jQuery('.status_pahaze_now').text('5');
    jQuery('.zone_x, .zone_l').addClass('hidden').css('transform', 'scale(1)');
    count_animation = 0;
    console.log('Фаза 5.1');
    phaseOne = setInterval(function(){
      if (count_animation <= 36){
        if (count_animation <= 19) {
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.5)',
            background: 'transparent url(/wp-content/themes/mobile/img/3_voda_lev.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
        } else {
          jQuery('.draggable_v2').css({
            background: 'transparent url(/wp-content/themes/mobile/img/2_voda_prav.png) 0 0/100% no-repeat'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v2').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
// Фаза 5.2
        jQuery('.status_percent').text('96%');
        console.log('Фаза 5.2');
        phaseOne = setInterval(function(){
          if (count_animation <= 34){
            if (count_animation <= 17) {
              jQuery('.draggable_v1, .draggable_v5, .draggable_v-').css({
                color: 'transparent',
                transform: 'scale(1.5)',
                background: 'transparent url(/wp-content/themes/mobile/img/4_ogon_lev.png) 0 0/100% no-repeat',
                opacity: 0.8
              });
            } else {
              jQuery('.draggable_v1, .draggable_v5, .draggable_v-').css({
                background: 'transparent url(/wp-content/themes/mobile/img/1_ogon_prav.png) 0 0/100% no-repeat'
              });
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v1, .draggable_v5, .draggable_v-').css({
              color: '#FFF0C7',
              transform: 'scale(1)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            count_animation = 0;
            next();
          }
        }, 1000);
      }
    }, 1000);
  }).then(function(next) {
    count_animation = 0;
// Фаза 6
    jQuery('.status_percent').text('98%');
    console.log('Фаза 6');
    phaseOne = setInterval(function(){
      if (count_animation <= 80){
        jQuery('.draggable_v5, .draggable_v-, .draggable_v3, .draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          opacity: 0.8
        });
        jQuery('.draggable_v5, .draggable_v-').css({
          background: '#fff url(/wp-content/themes/mobile/img/gold.png) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/chisty_vnutri.jpg) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v0').css({
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5, .draggable_v-, .draggable_v3, .draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
        jQuery('.status_percent').text('100%');
        onEnd();
      }
    }, 1000);
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


drenag = function(){
  chain(function(next) {
    console.log('Фаза 1');
    jQuery('.status').removeClass('hidden');
    jQuery('.status_pahaze_all').text('12');
    jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'scale(1)');
    r_top = jQuery('.draggable_v5').css('top');
    r_bottom = jQuery('.draggable_v-').css('top');
    l_top = jQuery('.draggable_v0').css('top');
    l_bottom = jQuery('.draggable_v1').css('top');
// Фаза 1
    jQuery('.status_percent').text('0%');
    jQuery('.status_pahaze_now').text('1');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 120){
        jQuery('.draggable_v3').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          background: '#fff url(/wp-content/themes/mobile/img/edinenie_s_tvorcom.png) 0 0/100% no-repeat',
          opacity: 0.8
        });
        if (count_animation > 0 && count_animation <= 5) {
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 5 && count_animation <= 10) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 10 && count_animation <= 15) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 15 && count_animation <= 20) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 20 && count_animation <= 25) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 25 && count_animation <= 30) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        } else if (count_animation > 30 && count_animation <= 35) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('2%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 35 && count_animation <= 40) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 40 && count_animation <= 45) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 45 && count_animation <= 50) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 50 && count_animation <= 55) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 55 && count_animation <= 60) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        } else if (count_animation > 60 && count_animation <= 65) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('4%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 65 && count_animation <= 70) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 70 && count_animation <= 75) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 75 && count_animation <= 80) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 80 && count_animation <= 85) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 85 && count_animation <= 90) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        } else if (count_animation > 90 && count_animation <= 95) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('6%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 95 && count_animation <= 100) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 100 && count_animation <= 105) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 105 && count_animation <= 110) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 110 && count_animation <= 115) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 115 && count_animation <= 120) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        }
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        count_animation += 1;
        rotate_one += 2;
        rotate_two += 20;
      } else {
        clearInterval(phaseOne);
        count_animation = 0;
        next();
      }
    }, 1000);
  }).then(function(next) {
// Фаза 2
    jQuery('.status_pahaze_now').text('2');
    phaseOne = setInterval(function(){
      if (count_animation <= 120){
        if (count_animation > 0 && count_animation <= 5) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('8%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 5 && count_animation <= 10) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 10 && count_animation <= 15) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 15 && count_animation <= 20) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 20 && count_animation <= 25) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 25 && count_animation <= 30) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('10%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 30 && count_animation <= 35) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 35 && count_animation <= 40) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 40 && count_animation <= 45) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 45 && count_animation <= 50) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 50 && count_animation <= 55) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('12%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 55 && count_animation <= 60) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 60 && count_animation <= 65) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 65 && count_animation <= 70) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 70 && count_animation <= 75) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 75 && count_animation <= 80) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('14%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 80 && count_animation <= 85) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 85 && count_animation <= 90) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 90 && count_animation <= 95) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 95 && count_animation <= 100) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 100 && count_animation <= 105) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('16%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 105 && count_animation <= 110) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 110 && count_animation <= 115) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 115 && count_animation <= 120) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        }
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        count_animation += 1;
        rotate_one += 2;
        rotate_two += 20;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        next();
      }
    }, 1000);
  }).then(function(next) {
// Фаза 3
    jQuery('.status_pahaze_now').text('3');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 120){
        if (count_animation > 0 && count_animation <= 5) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('18%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 5 && count_animation <= 10) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 10 && count_animation <= 15) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 15 && count_animation <= 20) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 20 && count_animation <= 25) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 25 && count_animation <= 30) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        } else if (count_animation > 30 && count_animation <= 35) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('20%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 35 && count_animation <= 40) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 40 && count_animation <= 45) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 45 && count_animation <= 50) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 50 && count_animation <= 55) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 55 && count_animation <= 60) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        } else if (count_animation > 60 && count_animation <= 65) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('22%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 65 && count_animation <= 70) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 70 && count_animation <= 75) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 75 && count_animation <= 80) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 80 && count_animation <= 85) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 85 && count_animation <= 90) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        } else if (count_animation > 90 && count_animation <= 95) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('24%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 95 && count_animation <= 100) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 100 && count_animation <= 105) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 105 && count_animation <= 110) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 110 && count_animation <= 115) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 115 && count_animation <= 120) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        }
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        count_animation += 1;
        rotate_one += 2;
        rotate_two += 20;
      } else {
        clearInterval(phaseOne);
        count_animation = 0;
        next();
      }
    }, 1000);
  }).then(function(next) {
// Фаза 4
    jQuery('.status_pahaze_now').text('4');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 120){
        if (count_animation > 0 && count_animation <= 5) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('26%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 5 && count_animation <= 10) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 10 && count_animation <= 15) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 15 && count_animation <= 20) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 20 && count_animation <= 25) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 25 && count_animation <= 30) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        } else if (count_animation > 30 && count_animation <= 35) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('28%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 35 && count_animation <= 40) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 40 && count_animation <= 45) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 45 && count_animation <= 50) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 50 && count_animation <= 55) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 55 && count_animation <= 60) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        } else if (count_animation > 60 && count_animation <= 65) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('30%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 65 && count_animation <= 70) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 70 && count_animation <= 75) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 75 && count_animation <= 80) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 80 && count_animation <= 85) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 85 && count_animation <= 90) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        } else if (count_animation > 90 && count_animation <= 95) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('32%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 95 && count_animation <= 100) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 100 && count_animation <= 105) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 105 && count_animation <= 110) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 110 && count_animation <= 115) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 115 && count_animation <= 120) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        }
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        count_animation += 1;
        rotate_one += 2;
        rotate_two += 20;
      } else {
        clearInterval(phaseOne);
        count_animation = 0;
        next();
      }
    }, 1000);
  }).then(function(next) {
// Фаза 5
    jQuery('.status_pahaze_now').text('5');
    phaseOne = setInterval(function(){
      if (count_animation <= 120){
        if (count_animation > 0 && count_animation <= 5) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('34%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 5 && count_animation <= 10) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 10 && count_animation <= 15) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 15 && count_animation <= 20) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 20 && count_animation <= 25) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 25 && count_animation <= 30) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('36%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 30 && count_animation <= 35) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 35 && count_animation <= 40) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 40 && count_animation <= 45) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 45 && count_animation <= 50) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 50 && count_animation <= 55) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('38%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 55 && count_animation <= 60) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 60 && count_animation <= 65) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 65 && count_animation <= 70) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 70 && count_animation <= 75) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 75 && count_animation <= 80) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('40%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 80 && count_animation <= 85) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 85 && count_animation <= 90) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 90 && count_animation <= 95) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 95 && count_animation <= 100) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 100 && count_animation <= 105) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('42%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 105 && count_animation <= 110) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 110 && count_animation <= 115) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 115 && count_animation <= 120) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        }
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        count_animation += 1;
        rotate_one += 2;
        rotate_two += 20;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        next();
      }
    }, 1000);
  }).then(function(next) {
// Фаза 6
    jQuery('.status_pahaze_now').text('6');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 120){
        if (count_animation > 0 && count_animation <= 5) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('44%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 5 && count_animation <= 10) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 10 && count_animation <= 15) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 15 && count_animation <= 20) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 20 && count_animation <= 25) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 25 && count_animation <= 30) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        } else if (count_animation > 30 && count_animation <= 35) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('46%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 35 && count_animation <= 40) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 40 && count_animation <= 45) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 45 && count_animation <= 50) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 50 && count_animation <= 55) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 55 && count_animation <= 60) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        } else if (count_animation > 60 && count_animation <= 65) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('48%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 65 && count_animation <= 70) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 70 && count_animation <= 75) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 75 && count_animation <= 80) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 80 && count_animation <= 85) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 85 && count_animation <= 90) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        } else if (count_animation > 90 && count_animation <= 95) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('50%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 95 && count_animation <= 100) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 100 && count_animation <= 105) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 105 && count_animation <= 110) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 110 && count_animation <= 115) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 115 && count_animation <= 120) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        }
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        count_animation += 1;
        rotate_one += 2;
        rotate_two += 20;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        next();
      }
    }, 1000);
  }).then(function(next) {
// Фаза 7
    jQuery('.status_pahaze_now').text('7');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 120){
        if (count_animation > 0 && count_animation <= 5) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('52%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 5 && count_animation <= 10) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 10 && count_animation <= 15) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 15 && count_animation <= 20) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 20 && count_animation <= 25) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 25 && count_animation <= 30) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        } else if (count_animation > 30 && count_animation <= 35) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('54%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 35 && count_animation <= 40) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 40 && count_animation <= 45) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 45 && count_animation <= 50) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 50 && count_animation <= 55) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 55 && count_animation <= 60) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        } else if (count_animation > 60 && count_animation <= 65) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('56%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 65 && count_animation <= 70) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 70 && count_animation <= 75) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 75 && count_animation <= 80) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 80 && count_animation <= 85) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 85 && count_animation <= 90) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        } else if (count_animation > 90 && count_animation <= 95) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('58%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 95 && count_animation <= 100) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 100 && count_animation <= 105) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 105 && count_animation <= 110) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 110 && count_animation <= 115) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 115 && count_animation <= 120) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        }
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        count_animation += 1;
        rotate_one += 2;
        rotate_two += 20;
      } else {
        clearInterval(phaseOne);
        count_animation = 0;
        next();
      }
    }, 1000);
  }).then(function(next) {
// Фаза 8
    jQuery('.status_pahaze_now').text('8');
    phaseOne = setInterval(function(){
      if (count_animation <= 120){
        if (count_animation > 0 && count_animation <= 5) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('60%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 5 && count_animation <= 10) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 10 && count_animation <= 15) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 15 && count_animation <= 20) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 20 && count_animation <= 25) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 25 && count_animation <= 30) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('62%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 30 && count_animation <= 35) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 35 && count_animation <= 40) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 40 && count_animation <= 45) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 45 && count_animation <= 50) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 50 && count_animation <= 55) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('64%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 55 && count_animation <= 60) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 60 && count_animation <= 65) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 65 && count_animation <= 70) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 70 && count_animation <= 75) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 75 && count_animation <= 80) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('66%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 80 && count_animation <= 85) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 85 && count_animation <= 90) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 90 && count_animation <= 95) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 95 && count_animation <= 100) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 100 && count_animation <= 105) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('68%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 105 && count_animation <= 110) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 110 && count_animation <= 115) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 115 && count_animation <= 120) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        }
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        count_animation += 1;
        rotate_one += 2;
        rotate_two += 20;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        next();
      }
    }, 1000);
  }).then(function(next) {
// Фаза 9
    jQuery('.status_pahaze_now').text('9');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 120){
        if (count_animation > 0 && count_animation <= 5) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('70%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 5 && count_animation <= 10) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 10 && count_animation <= 15) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 15 && count_animation <= 20) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 20 && count_animation <= 25) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 25 && count_animation <= 30) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        } else if (count_animation > 30 && count_animation <= 35) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('72%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 35 && count_animation <= 40) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 40 && count_animation <= 45) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 45 && count_animation <= 50) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 50 && count_animation <= 55) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 55 && count_animation <= 60) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        } else if (count_animation > 60 && count_animation <= 65) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('74%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 65 && count_animation <= 70) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 70 && count_animation <= 75) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 75 && count_animation <= 80) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 80 && count_animation <= 85) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 85 && count_animation <= 90) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        } else if (count_animation > 90 && count_animation <= 95) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('76%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 95 && count_animation <= 100) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 100 && count_animation <= 105) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 105 && count_animation <= 110) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 110 && count_animation <= 115) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 115 && count_animation <= 120) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        }
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        count_animation += 1;
        rotate_one += 2;
        rotate_two += 20;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        next();
      }
    }, 1000);
  }).then(function(next) {
// Фаза 10
    jQuery('.status_pahaze_now').text('10');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 120){
        if (count_animation > 0 && count_animation <= 5) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('78%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 5 && count_animation <= 10) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 10 && count_animation <= 15) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 15 && count_animation <= 20) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 20 && count_animation <= 25) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 25 && count_animation <= 30) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        } else if (count_animation > 30 && count_animation <= 35) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('80%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 35 && count_animation <= 40) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 40 && count_animation <= 45) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 45 && count_animation <= 50) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 50 && count_animation <= 55) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 55 && count_animation <= 60) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        } else if (count_animation > 60 && count_animation <= 65) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('82%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 65 && count_animation <= 70) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 70 && count_animation <= 75) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 75 && count_animation <= 80) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 80 && count_animation <= 85) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 85 && count_animation <= 90) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        } else if (count_animation > 90 && count_animation <= 95) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('84%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 95 && count_animation <= 100) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d2').css('top'));
        } else if (count_animation > 100 && count_animation <= 105) {
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d3').css('top'));
        } else if (count_animation > 105 && count_animation <= 110) {
          jQuery('.draggable_d3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d4').css('top'));
        } else if (count_animation > 110 && count_animation <= 115) {
          jQuery('.draggable_d4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d5').css('top'));
        } else if (count_animation > 115 && count_animation <= 120) {
          jQuery('.draggable_d5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_d6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_d6').css('top'));
        }
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        count_animation += 1;
        rotate_one += 2;
        rotate_two += 20;
      } else {
        clearInterval(phaseOne);
        count_animation = 0;
        next();
      }
    }, 1000);
  }).then(function(next) {
// Фаза 11
    jQuery('.status_pahaze_now').text('11');
    phaseOne = setInterval(function(){
      if (count_animation <= 120){
        if (count_animation > 0 && count_animation <= 5) {
          jQuery('.draggable_d6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 5 && count_animation <= 10) {
          jQuery('.status_percent').text('86%');
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 10 && count_animation <= 15) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 15 && count_animation <= 20) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 20 && count_animation <= 25) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 25 && count_animation <= 30) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('88%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 30 && count_animation <= 35) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 35 && count_animation <= 40) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 40 && count_animation <= 45) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 45 && count_animation <= 50) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 50 && count_animation <= 55) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('90%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 55 && count_animation <= 60) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 60 && count_animation <= 65) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 65 && count_animation <= 70) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 70 && count_animation <= 75) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 75 && count_animation <= 80) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('92%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 80 && count_animation <= 85) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 85 && count_animation <= 90) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 90 && count_animation <= 95) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        } else if (count_animation > 95 && count_animation <= 100) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v-').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v-').css('top'));
        } else if (count_animation > 100 && count_animation <= 105) {
          jQuery('.draggable_v-').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('94%');
          jQuery('.draggable_v0').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v0').css('top'));
        } else if (count_animation > 105 && count_animation <= 110) {
          jQuery('.draggable_v0').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v2').css('top'));
        } else if (count_animation > 110 && count_animation <= 115) {
          jQuery('.draggable_v2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v4').css('top'));
        } else if (count_animation > 115 && count_animation <= 120) {
          jQuery('.draggable_v4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v5').css('top'));
        }
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        count_animation += 1;
        rotate_one += 2;
        rotate_two += 20;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        next();
      }
    }, 1000);
  }).then(function(next) {
// Фаза 12
    jQuery('.status_pahaze_now').text('12');
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 120){
        if (count_animation > 0 && count_animation <= 5) {
          jQuery('.draggable_v5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('96%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 5 && count_animation <= 10) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 10 && count_animation <= 15) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 15 && count_animation <= 20) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 20 && count_animation <= 25) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 25 && count_animation <= 30) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        } else if (count_animation > 30 && count_animation <= 35) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('97%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 35 && count_animation <= 40) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 40 && count_animation <= 45) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 45 && count_animation <= 50) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 50 && count_animation <= 55) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 55 && count_animation <= 60) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        } else if (count_animation > 60 && count_animation <= 65) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.status_percent').text('98%');
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 65 && count_animation <= 70) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 70 && count_animation <= 75) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 75 && count_animation <= 80) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 80 && count_animation <= 85) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 85 && count_animation <= 90) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        } else if (count_animation > 90 && count_animation <= 95) {
          jQuery('.draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.status_percent').text('99%');
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v1').css('top'));
        } else if (count_animation > 95 && count_animation <= 100) {
          jQuery('.draggable_v1').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s2').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s2').css('top'));
        } else if (count_animation > 100 && count_animation <= 105) {
          jQuery('.draggable_s2').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s3').css('top'));
        } else if (count_animation > 105 && count_animation <= 110) {
          jQuery('.draggable_s3').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s4').css('top'));
        } else if (count_animation > 110 && count_animation <= 115) {
          jQuery('.draggable_s4').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s5').css('top'));
        } else if (count_animation > 115 && count_animation <= 120) {
          jQuery('.draggable_s5').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
          jQuery('.draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_s6').css('top'));
        }
        jQuery('.zone_x').css('transform', 'scale(1.3) rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'scale(1.3) rotate(-'+rotate_two+'deg)');
        count_animation += 1;
        rotate_one += 2;
        rotate_two += 20;
      } else {
        jQuery('.draggable_s6, .draggable_v3').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.zone_x, .zone_l').css('top', jQuery('.draggable_v3').css('top'));
        clearInterval(phaseOne);
        count_animation = 0;
        jQuery('.status_percent').text('100%');
        onEnd();
      }
    }, 1000);
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

solis = function(){
  chain(function(next) {
    console.log('Фаза 1');
    jQuery('.status').removeClass('hidden');
    jQuery('.status_pahaze_all').text('5');
    jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'scale(1)');
    r_top = jQuery('.draggable_v3').css('top');
    l_top = jQuery('.draggable_v3').css('top');
// Фаза 1
    jQuery('.status_percent').text('0%');
    jQuery('.status_pahaze_now').text('1');
    jQuery('.draggable_v-').css({
      color: 'transparent',
      transform: 'scale(1.3)',
      background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
      opacity: 0.8
    });
    jQuery('.zone_x').css('top', l_top);
    jQuery('.zone_l').css('top', r_top);
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 48){
        if (count_animation <= 4) {
          jQuery('.draggable_v3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
        } else if (count_animation <= 8) {
          jQuery('.draggable_v3').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 12) {
          jQuery('.draggable_v3').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 16) {
          jQuery('.draggable_v3').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 20) {
          jQuery('.draggable_v3').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 24) {
          jQuery('.draggable_v3').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 28) {
          jQuery('.draggable_v3').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 32) {
          jQuery('.draggable_v3').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 36) {
          jQuery('.draggable_v3').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 40) {
          jQuery('.draggable_v3').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 44) {
          jQuery('.draggable_v3').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 48) {
          jQuery('.draggable_v3').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v3, .draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        next();
      }
    }, 1000);
  }).then(function(next) {
    r_top = jQuery('.draggable_v2').css('top');
    l_top = jQuery('.draggable_v4').css('top');
// Фаза 2
    jQuery('.status_percent').text('14%');
    jQuery('.status_pahaze_now').text('2');
    jQuery('.zone_x').css('top', l_top);
    jQuery('.zone_l').css('top', r_top);
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 48){
        if (count_animation <= 4) {
          jQuery('.draggable_v2, .draggable_v4').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
        } else if (count_animation <= 8) {
          jQuery('.draggable_v2, .draggable_v4').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 12) {
          jQuery('.draggable_v2, .draggable_v4').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 16) {
          jQuery('.draggable_v2, .draggable_v4').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 20) {
          jQuery('.draggable_v2, .draggable_v4').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 24) {
          jQuery('.draggable_v2, .draggable_v4').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 28) {
          jQuery('.draggable_v2, .draggable_v4').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 32) {
          jQuery('.draggable_v2, .draggable_v4').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 36) {
          jQuery('.draggable_v2, .draggable_v4').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 40) {
          jQuery('.draggable_v2, .draggable_v4').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 44) {
          jQuery('.draggable_v2, .draggable_v4').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 48) {
          jQuery('.draggable_v2, .draggable_v4').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v2, .draggable_v4').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        next();
      }
    }, 1000);
  }).then(function(next) {
    r_top = jQuery('.draggable_v1').css('top');
    l_top = jQuery('.draggable_v5').css('top');
// Фаза 3
    jQuery('.status_percent').text('28%');
    jQuery('.status_pahaze_now').text('3');
    jQuery('.draggable_v-').css({
      color: 'transparent',
      transform: 'scale(1.3)',
      background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
      opacity: 0.8
    });
    jQuery('.zone_x').css('top', l_top);
    jQuery('.zone_l').css('top', r_top);
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 48){
        if (count_animation <= 4) {
          jQuery('.draggable_v1, .draggable_v5').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
        } else if (count_animation <= 8) {
          jQuery('.draggable_v1, .draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 12) {
          jQuery('.draggable_v1, .draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 16) {
          jQuery('.draggable_v1, .draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 20) {
          jQuery('.draggable_v1, .draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 24) {
          jQuery('.draggable_v1, .draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 28) {
          jQuery('.draggable_v1, .draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 32) {
          jQuery('.draggable_v1, .draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 36) {
          jQuery('.draggable_v1, .draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 40) {
          jQuery('.draggable_v1, .draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 44) {
          jQuery('.draggable_v1, .draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 48) {
          jQuery('.draggable_v1, .draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v1, .draggable_v5, .draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        next();
      }
    }, 1000);
  }).then(function(next) {
    r_top = jQuery('.draggable_v1').css('top');
    l_top = jQuery('.draggable_s6').css('top');
// Фаза 4.1
    jQuery('.status_percent').text('42%');   
    jQuery('.status_pahaze_now').text('4');
    jQuery('.draggable_v-').css({
      color: 'transparent',
      transform: 'scale(1.3)',
      background: '#fff url(/wp-content/themes/mobile/img/veter.png) 0 0/100% no-repeat',
      opacity: 0.8
    });
    jQuery('.zone_x').css('top', l_top);
    jQuery('.zone_l').css('top', r_top);
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 96){
        if (count_animation <= 4) {
          jQuery('.draggable_s5, .draggable_s6').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
        } else if (count_animation <= 8) {
          jQuery('.draggable_s5, .draggable_s6').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 12) {
          jQuery('.draggable_s5, .draggable_s6').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 16) {
          jQuery('.draggable_s5, .draggable_s6').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 20) {
          jQuery('.draggable_s5, .draggable_s6').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 24) {
          jQuery('.draggable_s5, .draggable_s6').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 28) {
          jQuery('.draggable_s5, .draggable_s6').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 32) {
          jQuery('.draggable_s5, .draggable_s6').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 36) {
          jQuery('.draggable_s5, .draggable_s6').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 40) {
          jQuery('.draggable_s5, .draggable_s6').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 44) {
          jQuery('.draggable_s5, .draggable_s6').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 48) {
          jQuery('.draggable_s5, .draggable_s6').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 52) {
          jQuery('.draggable_s5, .draggable_s6').css({
            color: '#FFF0C7',
            transform: 'scale(1)',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1
          });
// Фаза 4.2
          jQuery('.status_percent').text('56%');
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 56) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 60) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 64) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 68) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 72) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 76) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 80) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 84) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 88) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 92) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.png) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 96) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.png) 0 0/100% no-repeat'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v1, .draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        jQuery('.zone_x, .zone_l').css('transform', 'scale(0.01)');
        jQuery('.zone_x, .zone_l').css('top', '20px');
        next();
      }
    }, 1000);
  }).then(function(next) {
// Фаза 5
    jQuery('.status_percent').text('70%');
    jQuery('.status_pahaze_now').text('5');
    jQuery('.draggable_v3').css({
      color: 'transparent',
      transform: 'scale(1.3)',
      background: '#fff url(/wp-content/themes/mobile/img/resurs.png) 0 0/100% no-repeat',
      opacity: 0.8
    });
    jQuery('.draggable_v0').css({
      color: 'transparent',
      transform: 'scale(1.3)',
      background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
      opacity: 0.8
    });
    jQuery('.draggable_v-').css({
      color: 'transparent',
      transform: 'scale(1.3)',
      background: '#fff url(/wp-content/themes/mobile/img/x.png) 0 0/100% no-repeat',
      opacity: 0.8
    });
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 60){
        if (count_animation > 30 && count_animation < 60) {
          jQuery('.draggable_v3').css({
            color: 'transparent',
            transform: 'scale(1.3)',
            background: '#fff url(/wp-content/themes/mobile/img/power.png) 0 0/100% no-repeat',
            opacity: 0.8
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v0, .draggable_v3, .draggable_v-').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        next();
      }
    }, 1000);
  }).then(function(next) {
    count_animation = 0;
// Фаза 6
    jQuery('.status_percent').text('84%');
    console.log('Фаза 6');
    phaseOne = setInterval(function(){
      if (count_animation <= 80){
        jQuery('.draggable_v5, .draggable_v-, .draggable_v3, .draggable_v0').css({
          color: 'transparent',
          transform: 'scale(1.3)',
          opacity: 0.8
        });
        jQuery('.draggable_v5, .draggable_v-').css({
          background: '#fff url(/wp-content/themes/mobile/img/gold.png) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/chisty_vnutri.jpg) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v0').css({
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5, .draggable_v-, .draggable_v3, .draggable_v0').css({
          color: '#FFF0C7',
          transform: 'scale(1)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
        jQuery('.status_percent').text('100%');
        onEnd();
      }
    }, 1000);
  });
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


mmt = function(){
  chain(function(next) {
    next();
  }).then(function(next) {
    next();
  });
}

// START
jQuery('.btn_start').on('click', function(event) {
  if (jQuery(this).attr('disabled')) {

  } else {
    protocol = localStorage.getItem('protocol');
    jQuery('.btn-to_endNow').removeClass('hidden');
    if (protocol == 'v1') {
      v1();
      jQuery('.status_title').text('Протокол V1');
    } else if (protocol == 'v2') {
      v2();
      jQuery('.status_title').text('Протокол V2-5');
    } else if (protocol == 'v3') {
      v3();
      jQuery('.status_title').text('Протокол V3-4');
    } else if (protocol == 'v4') {
      v4();
      jQuery('.status_title').text('Протокол V4-3');
    } else if (protocol == 'v5') {
      v5();
      jQuery('.status_title').text('Протокол V5-2');
    } else if (protocol == 'solis') {
      solis();
      jQuery('.status_title').text('Протокол V5-2');
    } else if (protocol == 'drenag') {
      drenag();
      jQuery('.status_title').text('Дренажный протокол');
    }
    jQuery('.header-title').text('Программа выполняется');
    jQuery('.btn_start').attr('disabled', 'disabled');
  }
});
// STOP
function hideNote() {
  jQuery('.btn-to_endNow').popover('hide');
}
jQuery('.btn-to_endNow').on('click', function(event) {
  jQuery('.btn-to_endNow').css('color', 'crimson');
  jQuery('.header-title').text('Программа останавливается');
  endStatus = true;
  jQuery('.btn-to_endNow').popover('show');
  setTimeout(hideNote, 5000);
});
