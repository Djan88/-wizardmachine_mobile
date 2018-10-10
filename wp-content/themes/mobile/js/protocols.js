var chain,
    queue,
    cb,
    then,
    l_top,
    l_bottom,
    r_top,
    r_bottom,
    stop_func = true,
    wait,
    phaseOne,
    count_animation = 0,
    rotate_one = 0,
    rotate_two = 0,
    rotate_three = 0,
    rotate_four = 0,
    v1;

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
    console.log('Фаза 2/0');
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
    console.log('Фаза 2/1');
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
      jQuery('.zone_x, .zone_l').css('transform', 'scale(0.01)');
      setTimeout(function() {
          console.log('4');
          next();
      }, 1000);
  });
}

// PAUSE/PLAY
jQuery('.btn-paused').on('click', function(event) {
  jQuery('.btn-paused').addClass('hidden');
  jQuery('.btn-played').removeClass('hidden');
  stop_func = false
});

jQuery('.btn-played').on('click', function(event) {
  jQuery('.btn-played').addClass('hidden');
  jQuery('.btn-paused').removeClass('hidden');
  stop_func = true
});

// START
jQuery('.btn_start').on('click', function(event) {
  v1();
});
