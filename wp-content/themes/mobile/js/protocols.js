var chain,
    onEnd,
    queue,
    cb,
    then,
    l_top,
    l_bottom,
    r_top,
    r_bottom,
    stop_func = true,
    wait,
    protocol,
    protocolName,
    phaseOne,
    count_animation = 0,
    rotate_one = 0,
    rotate_two = 0,
    rotate_three = 0,
    rotate_four = 0,
    rotate_lovushka = 0,
    v1;

onEnd = function(){
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
}


chain = function (callback) {
  queue = [];

  function _next() {
      cb = queue.shift();
      if (cb) {
          cb(_next);
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
    jQuery('.zone_x, .zone_l').removeClass('hidden').css('transform', 'scale(1)');
    r_top = jQuery('.draggable_v5').css('top');
    r_bottom = jQuery('.draggable_v-').css('top');
    l_top = jQuery('.draggable_v0').css('top');
    l_bottom = jQuery('.draggable_v1').css('top');
    // Фаза 1.1
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_v1').css({
            color: 'transparent',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
        } else if (count_animation <= 8) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
        } else if (count_animation <= 12) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
        }
        jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
        jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
        count_animation += 1;
        rotate_one += 2;
        rotate_two += 20;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        // Фаза 1.2
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_v5').css({
                color: 'transparent',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
            } else if (count_animation <= 8) {
              jQuery('.draggable_v5').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
            } else if (count_animation <= 12) {
              jQuery('.draggable_v5').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
            }
            jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
            jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
            count_animation += 1;
            rotate_one += 2;
            rotate_two += 20;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.draggable_v5').css({
              color: '#FFF0C7',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            count_animation = 0;
            // Фаза 1.3
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_v-').css({
                    color: 'transparent',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v-').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v-').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                }
                jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                count_animation += 1;
                rotate_one += 2;
                rotate_two += 20;
              } else {
                clearInterval(phaseOne);
                count_animation = 1;
                jQuery('.draggable_v-').css({
                  color: '#FFF0C7',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                // Фаза 1.4
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_v1').css({
                        color: 'transparent',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_v1').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_v1').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                    }
                    jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                    jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                    count_animation += 1;
                    rotate_one += 2;
                    rotate_two += 20;
                  } else {
                    clearInterval(phaseOne);
                    count_animation = 1;
                    jQuery('.draggable_v1').css({
                      color: '#FFF0C7',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
                    // Фаза 1.5
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_v5').css({
                            color: 'transparent',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_v5').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_v5').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                        }
                        jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                        jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                        count_animation += 1;
                        rotate_one += 2;
                        rotate_two += 20;
                      } else {
                        clearInterval(phaseOne);
                        count_animation = 1;
                        jQuery('.draggable_v5').css({
                          color: '#FFF0C7',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
                        count_animation = 0;
                        // Фаза 1.6
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_v-').css({
                                color: 'transparent',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_v-').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_v-').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                            }
                            jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                            jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                            count_animation += 1;
                            rotate_one += 2;
                            rotate_two += 20;
                          } else {
                            clearInterval(phaseOne);
                            count_animation = 1;
                            jQuery('.draggable_v-').css({
                              color: '#FFF0C7',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
                            // Фаза 1.7
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v1').css({
                                    color: 'transparent',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_bottom);
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v1').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v1').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_bottom);
                                }
                                jQuery('.zone_x').css('transform', 'rotate('+rotate_two+'deg)');
                                jQuery('.zone_l').css('transform', 'rotate(-'+rotate_one+'deg)');
                                count_animation += 1;
                                rotate_one += 2;
                                rotate_two += 20;
                              } else {
                                clearInterval(phaseOne);
                                count_animation = 1;
                                jQuery('.draggable_v1').css({
                                  color: '#FFF0C7',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
                                // Фаза 1.8
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v5').css({
                                        color: 'transparent',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', l_top);
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v5').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v5').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', l_top);
                                    }
                                    jQuery('.zone_x').css('transform', 'rotate('+rotate_two+'deg)');
                                    jQuery('.zone_l').css('transform', 'rotate(-'+rotate_one+'deg)');
                                    count_animation += 1;
                                    rotate_one += 2;
                                    rotate_two += 20;
                                  } else {
                                    clearInterval(phaseOne);
                                    count_animation = 1;
                                    jQuery('.draggable_v5').css({
                                      color: '#FFF0C7',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
                                    count_animation = 0;
                                    // Фаза 1.9
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_v-').css({
                                            color: 'transparent',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_v-').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_v-').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                        }
                                        jQuery('.zone_x').css('transform', 'rotate('+rotate_two+'deg)');
                                        jQuery('.zone_l').css('transform', 'rotate(-'+rotate_one+'deg)');
                                        count_animation += 1;
                                        rotate_one += 2;
                                        rotate_two += 20;
                                      } else {
                                        clearInterval(phaseOne);
                                        count_animation = 1;
                                        jQuery('.draggable_v-').css({
                                          color: '#FFF0C7',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
                                        // Фаза 1.10
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_v1').css({
                                                color: 'transparent',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_v1').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_v1').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                            }
                                            jQuery('.zone_x').css('transform', 'rotate('+rotate_two+'deg)');
                                            jQuery('.zone_l').css('transform', 'rotate(-'+rotate_one+'deg)');
                                            count_animation += 1;
                                            rotate_one += 2;
                                            rotate_two += 20;
                                          } else {
                                            clearInterval(phaseOne);
                                            count_animation = 1;
                                            jQuery('.draggable_v1').css({
                                              color: '#FFF0C7',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
                                            // Фаза 1.11
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_v5').css({
                                                    color: 'transparent',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_bottom);
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_v5').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_bottom);
                                                  jQuery('.zone_l').css('top', l_top);
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_v5').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_bottom);
                                                }
                                                jQuery('.zone_x').css('transform', 'rotate('+rotate_two+'deg)');
                                                jQuery('.zone_l').css('transform', 'rotate(-'+rotate_one+'deg)');
                                                count_animation += 1;
                                                rotate_one += 2;
                                                rotate_two += 20;
                                              } else {
                                                clearInterval(phaseOne);
                                                count_animation = 1;
                                                jQuery('.draggable_v5').css({
                                                  color: '#FFF0C7',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
                                                count_animation = 0;
                                                // Фаза 1.12
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_v-').css({
                                                        color: 'transparent',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', l_top);
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_v-').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_v-').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', l_top);
                                                    }
                                                    jQuery('.zone_x').css('transform', 'rotate('+rotate_two+'deg)');
                                                    jQuery('.zone_l').css('transform', 'rotate(-'+rotate_one+'deg)');
                                                    count_animation += 1;
                                                    rotate_one += 2;
                                                    rotate_two += 20;
                                                  } else {
                                                    clearInterval(phaseOne);
                                                    count_animation = 1;
                                                    jQuery('.draggable_v-').css({
                                                      color: '#FFF0C7',
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
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_d5').css({
            color: 'transparent',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
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
            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 6;
          rotate_two += 8;
        } else if (count_animation <= 12) {
          jQuery('.draggable_d5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 4;
          rotate_two += 20;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        // Фаза 2.2
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_d6').css({
                color: 'transparent',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 6;
              rotate_two += 8;
            } else if (count_animation <= 8) {
              jQuery('.draggable_d6').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 4;
              rotate_two += 20;
            } else if (count_animation <= 12) {
              jQuery('.draggable_d6').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 6;
              rotate_two += 8;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.draggable_d6').css({
              color: '#FFF0C7',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            // Фаза 2.3
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_s5').css({
                    color: 'transparent',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 4;
                  rotate_two += 20;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_s5').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 6;
                  rotate_two += 8;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_s5').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 4;
                  rotate_two += 20;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                count_animation = 1;
                jQuery('.draggable_s5').css({
                  color: '#FFF0C7',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                // Фаза 2.4
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_s6').css({
                        color: 'transparent',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 6;
                      rotate_two += 8;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_s6').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 4;
                      rotate_two += 20;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_s6').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 6;
                      rotate_two += 8;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    count_animation = 1;
                    jQuery('.draggable_s6').css({
                      color: '#FFF0C7',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
                    // Фаза 2.5
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_d2').css({
                            color: 'transparent',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 4;
                          rotate_two += 20;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_d2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 6;
                          rotate_two += 8;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_d2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 4;
                          rotate_two += 20;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        count_animation = 1;
                        jQuery('.draggable_d2').css({
                          color: '#FFF0C7',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
                        // Фаза 2.6
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_s2').css({
                                color: 'transparent',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 6;
                              rotate_two += 8;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 4;
                              rotate_two += 20;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 6;
                              rotate_two += 8;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            count_animation = 1;
                            jQuery('.draggable_s2').css({
                              color: '#FFF0C7',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
                            // Фаза 2.7
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_d5').css({
                                    color: 'transparent',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
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
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_top);
                                  jQuery('.zone_l').css('top', r_bottom);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 6;
                                  rotate_two += 8;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_d5').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 4;
                                  rotate_two += 20;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                count_animation = 1;
                                jQuery('.draggable_d5').css({
                                  color: '#FFF0C7',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
                                // Фаза 2.8
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_d6').css({
                                        color: 'transparent',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 6;
                                      rotate_two += 8;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_d6').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', r_top);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 4;
                                      rotate_two += 20;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_d6').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 6;
                                      rotate_two += 8;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    count_animation = 1;
                                    jQuery('.draggable_d6').css({
                                      color: '#FFF0C7',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
                                    // Фаза 2.9
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_s5').css({
                                            color: 'transparent',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 4;
                                          rotate_two += 20;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_top);
                                          jQuery('.zone_l').css('top', r_bottom);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 6;
                                          rotate_two += 8;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 4;
                                          rotate_two += 20;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        count_animation = 1;
                                        jQuery('.draggable_s5').css({
                                          color: '#FFF0C7',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
                                        // Фаза 2.10
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_s6').css({
                                                color: 'transparent',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 6;
                                              rotate_two += 8;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_bottom);
                                              jQuery('.zone_l').css('top', r_top);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 4;
                                              rotate_two += 20;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 6;
                                              rotate_two += 8;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            count_animation = 1;
                                            jQuery('.draggable_s6').css({
                                              color: '#FFF0C7',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
                                            // Фаза 2.11
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_d2').css({
                                                    color: 'transparent',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', l_bottom);
                                                  jQuery('.zone_l').css('top', r_top);
                                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 4;
                                                  rotate_two += 20;
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_d2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', l_top);
                                                  jQuery('.zone_l').css('top', r_bottom);
                                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 6;
                                                  rotate_two += 8;
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_d2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', l_bottom);
                                                  jQuery('.zone_l').css('top', r_top);
                                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 4;
                                                  rotate_two += 20;
                                                }
                                                count_animation += 1;
                                              } else {
                                                clearInterval(phaseOne);
                                                count_animation = 1;
                                                jQuery('.draggable_d2').css({
                                                  color: '#FFF0C7',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
                                                // Фаза 2.12
                                                count_animation = 0;
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_s2').css({
                                                        color: 'transparent',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', l_top);
                                                      jQuery('.zone_l').css('top', r_bottom);
                                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 6;
                                                      rotate_two += 8;
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_s2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', l_bottom);
                                                      jQuery('.zone_l').css('top', r_top);
                                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 4;
                                                      rotate_two += 20;
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_s2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', l_top);
                                                      jQuery('.zone_l').css('top', r_bottom);
                                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 6;
                                                      rotate_two += 8;
                                                    }
                                                    count_animation += 1;
                                                  } else {
                                                    clearInterval(phaseOne);
                                                    count_animation = 1;
                                                    jQuery('.draggable_s2').css({
                                                      color: '#FFF0C7',
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
    // Фаза 2.13
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_d5').css({
            color: 'transparent',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 8;
          rotate_two += 6;
        } else if (count_animation <= 8) {
          jQuery('.draggable_d5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_top);
          jQuery('.zone_l').css('top', l_bottom);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 20;
          rotate_two += 4;
        } else if (count_animation <= 12) {
          jQuery('.draggable_d5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 8;
          rotate_two += 6;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.draggable_d5').css({
          color: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        // Фаза 2.2
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_d6').css({
                color: 'transparent',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 20;
              rotate_two += 4;
            } else if (count_animation <= 8) {
              jQuery('.draggable_d6').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_bottom);
              jQuery('.zone_l').css('top', l_top);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 6;
            } else if (count_animation <= 12) {
              jQuery('.draggable_d6').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 20;
              rotate_two += 4;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.draggable_d6').css({
              color: '#FFF0C7',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            // Фаза 2.3
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_s5').css({
                    color: 'transparent',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 8;
                  rotate_two += 6;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_s5').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_top);
                  jQuery('.zone_l').css('top', l_bottom);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 20;
                  rotate_two += 4;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_s5').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 8;
                  rotate_two += 6;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                count_animation = 1;
                jQuery('.draggable_s5').css({
                  color: '#FFF0C7',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                // Фаза 2.4
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_s6').css({
                        color: 'transparent',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 20;
                      rotate_two += 4;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_s6').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_bottom);
                      jQuery('.zone_l').css('top', l_top);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 6;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_s6').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 20;
                      rotate_two += 4;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    count_animation = 1;
                    jQuery('.draggable_s6').css({
                      color: '#FFF0C7',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
                    // Фаза 2.5
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_d2').css({
                            color: 'transparent',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 8;
                          rotate_two += 6;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_d2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_top);
                          jQuery('.zone_l').css('top', l_bottom);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 20;
                          rotate_two += 4;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_d2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 8;
                          rotate_two += 6;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        count_animation = 1;
                        jQuery('.draggable_d2').css({
                          color: '#FFF0C7',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
                        // Фаза 2.6
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_s2').css({
                                color: 'transparent',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 20;
                              rotate_two += 4;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_bottom);
                              jQuery('.zone_l').css('top', l_top);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 8;
                              rotate_two += 6;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 20;
                              rotate_two += 4;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            count_animation = 1;
                            jQuery('.draggable_s2').css({
                              color: '#FFF0C7',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
                            // Фаза 2.7
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_d5').css({
                                    color: 'transparent',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 6;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_d5').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_bottom);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 20;
                                  rotate_two += 4;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_d5').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 6;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                count_animation = 1;
                                jQuery('.draggable_d5').css({
                                  color: '#FFF0C7',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
                                // Фаза 2.8
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_d6').css({
                                        color: 'transparent',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 4;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_d6').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', l_top);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 8;
                                      rotate_two += 6;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_d6').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 4;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    count_animation = 1;
                                    jQuery('.draggable_d6').css({
                                      color: '#FFF0C7',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
                                    // Фаза 2.9
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_s5').css({
                                            color: 'transparent',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 6;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 20;
                                          rotate_two += 4;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 6;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        count_animation = 1;
                                        jQuery('.draggable_s5').css({
                                          color: '#FFF0C7',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
                                        // Фаза 2.10
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_s6').css({
                                                color: 'transparent',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 4;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 8;
                                              rotate_two += 6;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 4;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            count_animation = 1;
                                            jQuery('.draggable_s6').css({
                                              color: '#FFF0C7',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
                                            // Фаза 2.11
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_d2').css({
                                                    color: 'transparent',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', r_bottom);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 8;
                                                  rotate_two += 6;
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_d2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_bottom);
                                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 20;
                                                  rotate_two += 4;
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_d2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_bottom);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 8;
                                                  rotate_two += 6;
                                                }
                                                count_animation += 1;
                                              } else {
                                                clearInterval(phaseOne);
                                                count_animation = 1;
                                                jQuery('.draggable_d2').css({
                                                  color: '#FFF0C7',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
                                                // Фаза 2.12
                                                count_animation = 0;
                                                console.log('test');
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_s2').css({
                                                        color: 'transparent',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 20;
                                                      rotate_two += 4;
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_s2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', l_top);
                                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 8;
                                                      rotate_two += 6;
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_s2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 20;
                                                      rotate_two += 4;
                                                    }
                                                    count_animation += 1;
                                                  } else {
                                                    clearInterval(phaseOne);
                                                    count_animation = 1;
                                                    jQuery('.draggable_s2').css({
                                                      color: '#FFF0C7',
                                                      background: 'rgba(83, 35, 69, 0.4)',
                                                      opacity: 1
                                                    });
                                                    count_animation = 0;
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
          }
        }, 1000);
      }
    }, 1000);
  }).then(function(next) {
    console.log('Фаза 3/1');
    jQuery('.zone_x, .zone_l').addClass('hidden').css('transform', 'scale(1)');
// Фаза 3.1.1
    rotate_one = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 22){
        jQuery('.draggable_v1').css({
          color: 'transparent',
          transform: 'rotate(-'+rotate_one+'deg)',
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
// Фаза 3.1.2
        rotate_one = 10;
        phaseOne = setInterval(function(){
          if (count_animation <= 53){
            jQuery('.draggable_v1').css({
              color: 'transparent',
              transform: 'rotate('+rotate_one+'deg)',
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
// Фаза 3.1.3
            rotate_one = 270;
            phaseOne = setInterval(function(){
              if (count_animation <= 60){
                jQuery('.draggable_v1').css({
                  color: 'transparent',
                  transform: 'rotate('+rotate_one+'deg)',
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
// Фаза 3.1.4
                rotate_one = 300;
                phaseOne = setInterval(function(){
                  if (count_animation <= 40){
                    jQuery('.draggable_v1').css({
                      color: 'transparent',
                      transform: 'rotate(-'+rotate_one+'deg)',
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
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
                    count_animation = 0;
// Фаза 3.2.1
                    rotate_one = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 22){
                        jQuery('.draggable_v5').css({
                          color: 'transparent',
                          transform: 'rotate(-'+rotate_one+'deg)',
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
// Фаза 3.2.2
                        rotate_one = 10;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 53){
                            jQuery('.draggable_v5').css({
                              color: 'transparent',
                              transform: 'rotate('+rotate_one+'deg)',
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
// Фаза 3.2.3
                            rotate_one = 270;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 60){
                                jQuery('.draggable_v5').css({
                                  color: 'transparent',
                                  transform: 'rotate('+rotate_one+'deg)',
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
// Фаза 3.2.4
                                rotate_one = 300;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 40){
                                    jQuery('.draggable_v5').css({
                                      color: 'transparent',
                                      transform: 'rotate(-'+rotate_one+'deg)',
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
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
                                    count_animation = 0;
// Фаза 3.3.1
                                    rotate_one = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 22){
                                        jQuery('.draggable_v-').css({
                                          color: 'transparent',
                                          transform: 'rotate(-'+rotate_one+'deg)',
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
// Фаза 3.3.2
                                        rotate_one = 10;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 53){
                                            jQuery('.draggable_v-').css({
                                              color: 'transparent',
                                              transform: 'rotate('+rotate_one+'deg)',
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
// Фаза 3.3.3
                                            rotate_one = 270;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 60){
                                                jQuery('.draggable_v-').css({
                                                  color: 'transparent',
                                                  transform: 'rotate('+rotate_one+'deg)',
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
// Фаза 3.3.4
                                                rotate_one = 300;
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 40){
                                                    jQuery('.draggable_v-').css({
                                                      color: 'transparent',
                                                      transform: 'rotate(-'+rotate_one+'deg)',
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
    count_animation = 0;
    console.log('Фаза 4.1');
    phaseOne = setInterval(function(){
      if (count_animation <= 36){
        if (count_animation <= 19) {
          jQuery('.draggable_v1, .draggable_v4').css({
            color: 'transparent',
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
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
        // Фаза 4.2
        console.log('Фаза 4.2');
        phaseOne = setInterval(function(){
          if (count_animation <= 34){
            if (count_animation <= 17) {
              jQuery('.draggable_v1, .draggable_v5, .draggable_v-').css({
                color: 'transparent',
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
    console.log('Фаза 5');
    phaseOne = setInterval(function(){
      if (count_animation <= 80){
        jQuery('.draggable_v5, .draggable_v3, .draggable_v0').css({
          color: 'transparent',
          opacity: 0.8
        });
        jQuery('.draggable_v5').css({
          background: '#fff url(/wp-content/themes/mobile/img/gold.png) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/chisty_vnutri.jpg) 0 0/100% no-repeat'
        });
        jQuery('.draggable_v3').css({
          background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat'
        });
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5, .draggable_v3, .draggable_v0').css({
          color: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        count_animation = 0;
        onEnd();
      }
    }, 1000);
  });
}




// PROTOCOL V2
v2 = function(){
  chain(function(next) {
    // Фаза 1.1
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
          transform: 'rotate(-'+rotate_lovushka+'deg)',
          background: '#fff url(/wp-content/themes/mobile/img/lovushka.jpg) 0 0/100% no-repeat',
          opacity: 0.8
        });
        if (count_animation <= 4) {
          jQuery('.draggable_d2').css({
            color: 'transparent',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 20;
        } else if (count_animation <= 8) {
          jQuery('.draggable_d2').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 8;
        } else if (count_animation <= 12) {
          jQuery('.draggable_d2').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 20;
        }
        count_animation += 1;
        rotate_lovushka += 8;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_d2').css({
          color: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        // Фаза 1.2
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            jQuery('.draggable_lovushka').css({
              color: 'transparent',
              transform: 'rotate(-'+rotate_lovushka+'deg)',
              background: '#fff url(/wp-content/themes/mobile/img/lovushka.jpg) 0 0/100% no-repeat',
              opacity: 0.8
            });
            if (count_animation <= 4) {
              jQuery('.draggable_v2').css({
                color: 'transparent',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 8;
            } else if (count_animation <= 8) {
              jQuery('.draggable_v2').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 20;
            } else if (count_animation <= 12) {
              jQuery('.draggable_v2').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 8;
            }
            count_animation += 1;
            rotate_lovushka += 8;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v2').css({
              color: '#FFF0C7',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            // Фаза 1.3
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                jQuery('.draggable_lovushka').css({
                  color: 'transparent',
                  transform: 'rotate(-'+rotate_lovushka+'deg)',
                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.jpg) 0 0/100% no-repeat',
                  opacity: 0.8
                });
                if (count_animation <= 4) {
                  jQuery('.draggable_s2').css({
                    color: 'transparent',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 20;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_s2').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 8;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_s2').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 20;
                }
                count_animation += 1;
                rotate_lovushka += 8;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_s2').css({
                  color: '#FFF0C7',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                count_animation = 0;
                // Фаза 1.4
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    jQuery('.draggable_lovushka').css({
                      color: 'transparent',
                      transform: 'rotate(-'+rotate_lovushka+'deg)',
                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.jpg) 0 0/100% no-repeat',
                      opacity: 0.8
                    });
                    if (count_animation <= 4) {
                      jQuery('.draggable_d2').css({
                        color: 'transparent',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 8;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_d2').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 20;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_d2').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 8;
                    }
                    count_animation += 1;
                    rotate_lovushka += 8;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_d2').css({
                      color: '#FFF0C7',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
                    // Фаза 1.5
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        jQuery('.draggable_lovushka').css({
                          color: 'transparent',
                          transform: 'rotate(-'+rotate_lovushka+'deg)',
                          background: '#fff url(/wp-content/themes/mobile/img/lovushka.jpg) 0 0/100% no-repeat',
                          opacity: 0.8
                        });
                        if (count_animation <= 4) {
                          jQuery('.draggable_v2').css({
                            color: 'transparent',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 20;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_v2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 8;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_v2').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 20;
                        }
                        count_animation += 1;
                        rotate_lovushka += 8;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_v2').css({
                          color: '#FFF0C7',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
                        // Фаза 1.6
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            jQuery('.draggable_lovushka').css({
                              color: 'transparent',
                              transform: 'rotate(-'+rotate_lovushka+'deg)',
                              background: '#fff url(/wp-content/themes/mobile/img/lovushka.jpg) 0 0/100% no-repeat',
                              opacity: 0.8
                            });
                            if (count_animation <= 4) {
                              jQuery('.draggable_s2').css({
                                color: 'transparent',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 8;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 20;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_s2').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 8;
                            }
                            count_animation += 1;
                            rotate_lovushka += 8;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_s2').css({
                              color: '#FFF0C7',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
                            console.log('Фаза 1/2');
                            // Фаза 1.7
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                jQuery('.draggable_lovushka').css({
                                  color: 'transparent',
                                  transform: 'rotate(-'+rotate_lovushka+'deg)',
                                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.jpg) 0 0/100% no-repeat',
                                  opacity: 0.8
                                });
                                if (count_animation <= 4) {
                                  jQuery('.draggable_d2').css({
                                    color: 'transparent',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 2;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_d2').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_bottom);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 20;
                                  rotate_two += 2;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_d2').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 2;
                                }
                                count_animation += 1;
                                rotate_lovushka += 8;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_d2').css({
                                  color: '#FFF0C7',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
                                // Фаза 1.8
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    jQuery('.draggable_lovushka').css({
                                      color: 'transparent',
                                      transform: 'rotate(-'+rotate_lovushka+'deg)',
                                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.jpg) 0 0/100% no-repeat',
                                      opacity: 0.8
                                    });
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v2').css({
                                        color: 'transparent',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 2;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v2').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', l_top);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 8;
                                      rotate_two += 2;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v2').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 2;
                                    }
                                    count_animation += 1;
                                    rotate_lovushka += 8;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_v2').css({
                                      color: '#FFF0C7',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
                                    // Фаза 1.9
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        jQuery('.draggable_lovushka').css({
                                          color: 'transparent',
                                          transform: 'rotate(-'+rotate_lovushka+'deg)',
                                          background: '#fff url(/wp-content/themes/mobile/img/lovushka.jpg) 0 0/100% no-repeat',
                                          opacity: 0.8
                                        });
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_s2').css({
                                            color: 'transparent',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 2;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_s2').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 20;
                                          rotate_two += 2;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_s2').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
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
                                          transform: 'rotate(0deg)',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
                                        // Фаза 1.10
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            jQuery('.draggable_lovushka').css({
                                              color: 'transparent',
                                              transform: 'rotate(-'+rotate_lovushka+'deg)',
                                              background: '#fff url(/wp-content/themes/mobile/img/lovushka.jpg) 0 0/100% no-repeat',
                                              opacity: 0.8
                                            });
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_d2').css({
                                                color: 'transparent',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 2;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_d2').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 8;
                                              rotate_two += 2;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_d2').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 2;
                                            }
                                            count_animation += 1;
                                            rotate_lovushka += 8;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_d2').css({
                                              color: '#FFF0C7',
                                              background: 'rgba(83, 35, 69, 0.4)',
                                              opacity: 1
                                            });
                                            // Фаза 1.11
                                            count_animation = 0;
                                            phaseOne = setInterval(function(){
                                              if (count_animation <= 12){
                                                jQuery('.draggable_lovushka').css({
                                                  color: 'transparent',
                                                  transform: 'rotate(-'+rotate_lovushka+'deg)',
                                                  background: '#fff url(/wp-content/themes/mobile/img/lovushka.jpg) 0 0/100% no-repeat',
                                                  opacity: 0.8
                                                });
                                                if (count_animation <= 4) {
                                                  jQuery('.draggable_v2').css({
                                                    color: 'transparent',
                                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                    opacity: 0.8
                                                  });
                                                  jQuery('.zone_x').css('top', r_bottom);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 8;
                                                  rotate_two += 2;
                                                } else if (count_animation <= 8) {
                                                  jQuery('.draggable_v2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_top);
                                                  jQuery('.zone_l').css('top', l_bottom);
                                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 20;
                                                  rotate_two += 2;
                                                } else if (count_animation <= 12) {
                                                  jQuery('.draggable_v2').css({
                                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                                  });
                                                  jQuery('.zone_x').css('top', r_bottom);
                                                  jQuery('.zone_l').css('top', l_top);
                                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                  rotate_one += 8;
                                                  rotate_two += 2;
                                                }
                                                count_animation += 1;
                                                rotate_lovushka += 8;
                                              } else {
                                                clearInterval(phaseOne);
                                                jQuery('.draggable_v2').css({
                                                  color: '#FFF0C7',
                                                  background: 'rgba(83, 35, 69, 0.4)',
                                                  opacity: 1
                                                });
                                                // Фаза 1.12
                                                count_animation = 0;
                                                phaseOne = setInterval(function(){
                                                  if (count_animation <= 12){
                                                    jQuery('.draggable_lovushka').css({
                                                      color: 'transparent',
                                                      transform: 'rotate(-'+rotate_lovushka+'deg)',
                                                      background: '#fff url(/wp-content/themes/mobile/img/lovushka.jpg) 0 0/100% no-repeat',
                                                      opacity: 0.8
                                                    });
                                                    if (count_animation <= 4) {
                                                      jQuery('.draggable_s2').css({
                                                        color: 'transparent',
                                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                        opacity: 0.8
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 20;
                                                      rotate_two += 2;
                                                    } else if (count_animation <= 8) {
                                                      jQuery('.draggable_s2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_bottom);
                                                      jQuery('.zone_l').css('top', l_top);
                                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                                      rotate_one += 8;
                                                      rotate_two += 2;
                                                    } else if (count_animation <= 12) {
                                                      jQuery('.draggable_s2').css({
                                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                                      });
                                                      jQuery('.zone_x').css('top', r_top);
                                                      jQuery('.zone_l').css('top', l_bottom);
                                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
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
                                                      transform: 'rotate(0deg)',
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
    // Фаза 2.1
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
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 20;
        } else if (count_animation <= 8) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_top);
          jQuery('.zone_l').css('top', l_bottom);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 8;
        } else if (count_animation <= 12) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 20;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        // Фаза 2.2
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_v-').css({
                color: 'transparent',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 8;
            } else if (count_animation <= 8) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_bottom);
              jQuery('.zone_l').css('top', l_top);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 20;
            } else if (count_animation <= 12) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 8;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v-').css({
              color: '#FFF0C7',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            // Фаза 2.3
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 20;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_top);
                  jQuery('.zone_l').css('top', l_bottom);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 8;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 20;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_v1').css({
                  color: '#FFF0C7',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                // Фаза 2.4
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_s5').css({
                        color: 'transparent',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 8;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_s5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_bottom);
                      jQuery('.zone_l').css('top', l_top);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 20;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_s5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 8;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_s5').css({
                      color: '#FFF0C7',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
                    // Фаза 2.5
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_s6').css({
                            color: 'transparent',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 20;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_s6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_top);
                          jQuery('.zone_l').css('top', l_bottom);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 8;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_s6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 20;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_s6').css({
                          color: '#FFF0C7',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
                        // Фаза 2.6
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
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 8;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_bottom);
                              jQuery('.zone_l').css('top', l_top);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 20;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 8;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_v5').css({
                              color: '#FFF0C7',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
                            // Фаза 2.7
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v-').css({
                                    color: 'transparent',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 20;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_bottom);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 8;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 20;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_v-').css({
                                  color: '#FFF0C7',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
                                // Фаза 2.8
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v1').css({
                                        color: 'transparent',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 8;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', l_top);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 20;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 8;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_v1').css({
                                      color: '#FFF0C7',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
                                    // Фаза 2.9
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_s5').css({
                                            color: 'transparent',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 20;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 8;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 20;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_s5').css({
                                          color: '#FFF0C7',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
                                        // Фаза 2.10
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_s6').css({
                                                color: 'transparent',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 8;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 20;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 8;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_s6').css({
                                              color: '#FFF0C7',
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
    r_top = jQuery('.draggable_v5').css('top');
    r_bottom = jQuery('.draggable_v-').css('top');
    l_top = jQuery('.draggable_v0').css('top');
    l_bottom = jQuery('.draggable_d2').css('top');
    // Фаза 2.11
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_v5').css({
            color: 'transparent',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 20;
          rotate_two += 2;
        } else if (count_animation <= 8) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 8;
          rotate_two += 2;
        } else if (count_animation <= 12) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 20;
          rotate_two += 2;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        // Фаза 2.12
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_v-').css({
                color: 'transparent',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 2;
            } else if (count_animation <= 8) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 20;
              rotate_two += 2;
            } else if (count_animation <= 12) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 2;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v-').css({
              color: '#FFF0C7',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            // Фаза 2.13
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 20;
                  rotate_two += 2;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 8;
                  rotate_two += 2;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 20;
                  rotate_two += 2;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_v1').css({
                  color: '#FFF0C7',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                // Фаза 2.14
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_s5').css({
                        color: 'transparent',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 2;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_s5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 20;
                      rotate_two += 2;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_s5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 2;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_s5').css({
                      color: '#FFF0C7',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
                    // Фаза 2.15
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_s6').css({
                            color: 'transparent',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 20;
                          rotate_two += 2;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_s6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 8;
                          rotate_two += 2;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_s6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 20;
                          rotate_two += 2;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_s6').css({
                          color: '#FFF0C7',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
                        // Фаза 2.16
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_v5').css({
                                color: 'transparent',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 20;
                              rotate_two += 2;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 8;
                              rotate_two += 2;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 20;
                              rotate_two += 2;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_v5').css({
                              color: '#FFF0C7',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
                            // Фаза 2.17
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v-').css({
                                    color: 'transparent',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 2;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_top);
                                  jQuery('.zone_l').css('top', r_bottom);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 20;
                                  rotate_two += 2;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 2;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_v-').css({
                                  color: '#FFF0C7',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
                                // Фаза 2.18
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v1').css({
                                        color: 'transparent',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 2;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', r_top);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 8;
                                      rotate_two += 2;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 2;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_v1').css({
                                      color: '#FFF0C7',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
                                    // Фаза 2.19
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_s5').css({
                                            color: 'transparent',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 2;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_top);
                                          jQuery('.zone_l').css('top', r_bottom);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 20;
                                          rotate_two += 2;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_s5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 2;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_s5').css({
                                          color: '#FFF0C7',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
                                        // Фаза 2.20
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_s6').css({
                                                color: 'transparent',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 2;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_bottom);
                                              jQuery('.zone_l').css('top', r_top);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 8;
                                              rotate_two += 2;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_s6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 2;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_s6').css({
                                              color: '#FFF0C7',
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
    // Фаза 3.1
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
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 20;
        } else if (count_animation <= 8) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_top);
          jQuery('.zone_l').css('top', l_bottom);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 8;
        } else if (count_animation <= 12) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', r_bottom);
          jQuery('.zone_l').css('top', l_top);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 2;
          rotate_two += 20;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        // Фаза 3.2
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_v-').css({
                color: 'transparent',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 8;
            } else if (count_animation <= 8) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_bottom);
              jQuery('.zone_l').css('top', l_top);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 20;
            } else if (count_animation <= 12) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', r_top);
              jQuery('.zone_l').css('top', l_bottom);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 2;
              rotate_two += 8;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v-').css({
              color: '#FFF0C7',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            // Фаза 3.3
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 20;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_top);
                  jQuery('.zone_l').css('top', l_bottom);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 8;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', r_bottom);
                  jQuery('.zone_l').css('top', l_top);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 2;
                  rotate_two += 20;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_v1').css({
                  color: '#FFF0C7',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                // Фаза 3.4
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_d5').css({
                        color: 'transparent',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 8;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_d5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_bottom);
                      jQuery('.zone_l').css('top', l_top);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 20;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_d5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', r_top);
                      jQuery('.zone_l').css('top', l_bottom);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 2;
                      rotate_two += 8;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_d5').css({
                      color: '#FFF0C7',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
                    // Фаза 3.5
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_d6').css({
                            color: 'transparent',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 20;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_d6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_top);
                          jQuery('.zone_l').css('top', l_bottom);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 8;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_d6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', r_bottom);
                          jQuery('.zone_l').css('top', l_top);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 2;
                          rotate_two += 20;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_d6').css({
                          color: '#FFF0C7',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
                        // Фаза 3.6
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
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 8;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_bottom);
                              jQuery('.zone_l').css('top', l_top);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 20;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', r_top);
                              jQuery('.zone_l').css('top', l_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 2;
                              rotate_two += 8;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_v5').css({
                              color: '#FFF0C7',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
                            // Фаза 3.7
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v-').css({
                                    color: 'transparent',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 20;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_top);
                                  jQuery('.zone_l').css('top', l_bottom);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 8;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', r_bottom);
                                  jQuery('.zone_l').css('top', l_top);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 2;
                                  rotate_two += 20;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_v-').css({
                                  color: '#FFF0C7',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
                                // Фаза 3.8
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v1').css({
                                        color: 'transparent',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 8;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_bottom);
                                      jQuery('.zone_l').css('top', l_top);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 20;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', r_top);
                                      jQuery('.zone_l').css('top', l_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 2;
                                      rotate_two += 8;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_v1').css({
                                      color: '#FFF0C7',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
                                    // Фаза 3.9
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_d5').css({
                                            color: 'transparent',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 20;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_d5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_top);
                                          jQuery('.zone_l').css('top', l_bottom);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 8;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_d5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', r_bottom);
                                          jQuery('.zone_l').css('top', l_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 2;
                                          rotate_two += 20;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_d5').css({
                                          color: '#FFF0C7',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
                                        // Фаза 3.10
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_d6').css({
                                                color: 'transparent',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 8;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_d6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_bottom);
                                              jQuery('.zone_l').css('top', l_top);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 20;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_d6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', r_top);
                                              jQuery('.zone_l').css('top', l_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 2;
                                              rotate_two += 8;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_d6').css({
                                              color: '#FFF0C7',
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
    // Фаза 3.11
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_v5').css({
            color: 'transparent',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
            opacity: 0.8
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 20;
          rotate_two += 2;
        } else if (count_animation <= 8) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_bottom);
          jQuery('.zone_l').css('top', r_top);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 8;
          rotate_two += 2;
        } else if (count_animation <= 12) {
          jQuery('.draggable_v5').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
          });
          jQuery('.zone_x').css('top', l_top);
          jQuery('.zone_l').css('top', r_bottom);
          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
          rotate_one += 20;
          rotate_two += 2;
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        jQuery('.draggable_v5').css({
          color: '#FFF0C7',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        // Фаза 3.12
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_v-').css({
                color: 'transparent',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                opacity: 0.8
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 2;
            } else if (count_animation <= 8) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_top);
              jQuery('.zone_l').css('top', r_bottom);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 20;
              rotate_two += 2;
            } else if (count_animation <= 12) {
              jQuery('.draggable_v-').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
              });
              jQuery('.zone_x').css('top', l_bottom);
              jQuery('.zone_l').css('top', r_top);
              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
              rotate_one += 8;
              rotate_two += 2;
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            jQuery('.draggable_v-').css({
              color: '#FFF0C7',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            // Фаза 3.13
            count_animation = 0;
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_v1').css({
                    color: 'transparent',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 20;
                  rotate_two += 2;
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_bottom);
                  jQuery('.zone_l').css('top', r_top);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 8;
                  rotate_two += 2;
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v1').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                  });
                  jQuery('.zone_x').css('top', l_top);
                  jQuery('.zone_l').css('top', r_bottom);
                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                  rotate_one += 20;
                  rotate_two += 2;
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                jQuery('.draggable_v1').css({
                  color: '#FFF0C7',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                // Фаза 3.14
                count_animation = 0;
                phaseOne = setInterval(function(){
                  if (count_animation <= 12){
                    if (count_animation <= 4) {
                      jQuery('.draggable_d5').css({
                        color: 'transparent',
                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                        opacity: 0.8
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 2;
                    } else if (count_animation <= 8) {
                      jQuery('.draggable_d5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_top);
                      jQuery('.zone_l').css('top', r_bottom);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 20;
                      rotate_two += 2;
                    } else if (count_animation <= 12) {
                      jQuery('.draggable_d5').css({
                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                      });
                      jQuery('.zone_x').css('top', l_bottom);
                      jQuery('.zone_l').css('top', r_top);
                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                      rotate_one += 8;
                      rotate_two += 2;
                    }
                    count_animation += 1;
                  } else {
                    clearInterval(phaseOne);
                    jQuery('.draggable_d5').css({
                      color: '#FFF0C7',
                      background: 'rgba(83, 35, 69, 0.4)',
                      opacity: 1
                    });
                    // Фаза 3.15
                    count_animation = 0;
                    phaseOne = setInterval(function(){
                      if (count_animation <= 12){
                        if (count_animation <= 4) {
                          jQuery('.draggable_d6').css({
                            color: 'transparent',
                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                            opacity: 0.8
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 20;
                          rotate_two += 2;
                        } else if (count_animation <= 8) {
                          jQuery('.draggable_d6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_bottom);
                          jQuery('.zone_l').css('top', r_top);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 8;
                          rotate_two += 2;
                        } else if (count_animation <= 12) {
                          jQuery('.draggable_d6').css({
                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                          });
                          jQuery('.zone_x').css('top', l_top);
                          jQuery('.zone_l').css('top', r_bottom);
                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                          rotate_one += 20;
                          rotate_two += 2;
                        }
                        count_animation += 1;
                      } else {
                        clearInterval(phaseOne);
                        jQuery('.draggable_d6').css({
                          color: '#FFF0C7',
                          background: 'rgba(83, 35, 69, 0.4)',
                          opacity: 1
                        });
                        // Фаза 3.16
                        count_animation = 0;
                        phaseOne = setInterval(function(){
                          if (count_animation <= 12){
                            if (count_animation <= 4) {
                              jQuery('.draggable_v5').css({
                                color: 'transparent',
                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                opacity: 0.8
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 20;
                              rotate_two += 2;
                            } else if (count_animation <= 8) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_bottom);
                              jQuery('.zone_l').css('top', r_top);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 8;
                              rotate_two += 2;
                            } else if (count_animation <= 12) {
                              jQuery('.draggable_v5').css({
                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                              });
                              jQuery('.zone_x').css('top', l_top);
                              jQuery('.zone_l').css('top', r_bottom);
                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                              rotate_one += 20;
                              rotate_two += 2;
                            }
                            count_animation += 1;
                          } else {
                            clearInterval(phaseOne);
                            jQuery('.draggable_v5').css({
                              color: '#FFF0C7',
                              background: 'rgba(83, 35, 69, 0.4)',
                              opacity: 1
                            });
                            // Фаза 3.17
                            count_animation = 0;
                            phaseOne = setInterval(function(){
                              if (count_animation <= 12){
                                if (count_animation <= 4) {
                                  jQuery('.draggable_v-').css({
                                    color: 'transparent',
                                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                    opacity: 0.8
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 2;
                                } else if (count_animation <= 8) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_top);
                                  jQuery('.zone_l').css('top', r_bottom);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 20;
                                  rotate_two += 2;
                                } else if (count_animation <= 12) {
                                  jQuery('.draggable_v-').css({
                                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                  });
                                  jQuery('.zone_x').css('top', l_bottom);
                                  jQuery('.zone_l').css('top', r_top);
                                  jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                  jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                  rotate_one += 8;
                                  rotate_two += 2;
                                }
                                count_animation += 1;
                              } else {
                                clearInterval(phaseOne);
                                jQuery('.draggable_v-').css({
                                  color: '#FFF0C7',
                                  background: 'rgba(83, 35, 69, 0.4)',
                                  opacity: 1
                                });
                                // Фаза 3.18
                                count_animation = 0;
                                phaseOne = setInterval(function(){
                                  if (count_animation <= 12){
                                    if (count_animation <= 4) {
                                      jQuery('.draggable_v1').css({
                                        color: 'transparent',
                                        background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                        opacity: 0.8
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 2;
                                    } else if (count_animation <= 8) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_bottom);
                                      jQuery('.zone_l').css('top', r_top);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 8;
                                      rotate_two += 2;
                                    } else if (count_animation <= 12) {
                                      jQuery('.draggable_v1').css({
                                        background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                      });
                                      jQuery('.zone_x').css('top', l_top);
                                      jQuery('.zone_l').css('top', r_bottom);
                                      jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                      jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                      rotate_one += 20;
                                      rotate_two += 2;
                                    }
                                    count_animation += 1;
                                  } else {
                                    clearInterval(phaseOne);
                                    jQuery('.draggable_v1').css({
                                      color: '#FFF0C7',
                                      background: 'rgba(83, 35, 69, 0.4)',
                                      opacity: 1
                                    });
                                    // Фаза 3.19
                                    count_animation = 0;
                                    phaseOne = setInterval(function(){
                                      if (count_animation <= 12){
                                        if (count_animation <= 4) {
                                          jQuery('.draggable_d5').css({
                                            color: 'transparent',
                                            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                            opacity: 0.8
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 2;
                                        } else if (count_animation <= 8) {
                                          jQuery('.draggable_d5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_top);
                                          jQuery('.zone_l').css('top', r_bottom);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 20;
                                          rotate_two += 2;
                                        } else if (count_animation <= 12) {
                                          jQuery('.draggable_d5').css({
                                            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                          });
                                          jQuery('.zone_x').css('top', l_bottom);
                                          jQuery('.zone_l').css('top', r_top);
                                          jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                          jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                          rotate_one += 8;
                                          rotate_two += 2;
                                        }
                                        count_animation += 1;
                                      } else {
                                        clearInterval(phaseOne);
                                        jQuery('.draggable_d5').css({
                                          color: '#FFF0C7',
                                          background: 'rgba(83, 35, 69, 0.4)',
                                          opacity: 1
                                        });
                                        // Фаза 3.20
                                        count_animation = 0;
                                        phaseOne = setInterval(function(){
                                          if (count_animation <= 12){
                                            if (count_animation <= 4) {
                                              jQuery('.draggable_d6').css({
                                                color: 'transparent',
                                                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                                                opacity: 0.8
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 2;
                                            } else if (count_animation <= 8) {
                                              jQuery('.draggable_d6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_bottom);
                                              jQuery('.zone_l').css('top', r_top);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 8;
                                              rotate_two += 2;
                                            } else if (count_animation <= 12) {
                                              jQuery('.draggable_d6').css({
                                                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                                              });
                                              jQuery('.zone_x').css('top', l_top);
                                              jQuery('.zone_l').css('top', r_bottom);
                                              jQuery('.zone_x').css('transform', 'rotate('+rotate_one+'deg)');
                                              jQuery('.zone_l').css('transform', 'rotate(-'+rotate_two+'deg)');
                                              rotate_one += 20;
                                              rotate_two += 2;
                                            }
                                            count_animation += 1;
                                          } else {
                                            clearInterval(phaseOne);
                                            jQuery('.draggable_d6').css({
                                              color: '#FFF0C7',
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
    console.log('4');
    next();
  }).then(function(next) {
    console.log('5');
    onEnd();
  });
}

v3 = function(){
  chain(function(next) {
    next();
  }).then(function(next) {
    next();
  });
}

// START
jQuery('.btn_start').on('click', function(event) {
  protocol = localStorage.getItem('protocol');
  if (protocol == 'v1') {
    v1();
  } else if (protocol == 'v2') {
    v2();
  }
});
