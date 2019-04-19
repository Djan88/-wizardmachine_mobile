jQuery(document).ready(function () {
  var cur_window_width,
      block_w,
      page_h,
      counter = -1,
      scroll_val,
      global_counter = 0,
      start_time,
      end_time,
      max_time = 0,
      curTrY,
      elems_obj = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
      };

// width of block
  cur_window_width = function(){
    block_w = parseFloat(jQuery(".marakata_sim.marakata_sim_prot").css('width'));
    page_h = jQuery("html").width();
    console.log(block_w);
    jQuery('.marakata_sim-wrap').height(block_w * 1.8+'px');
    jQuery('.marakata_sim_prot').height(block_w * 1.8 * 10 +'px');
    scroll_val = block_w * 1.79;
    console.log("Высота карты — " + block_w * 1.8 + " Ширина карты — " + block_w);
    console.log("Прокрутка — " + scroll_val);
    // if (page_h > 1200) {
    //     scroll_val = 171;
    // } else if (page_h <= 1200 && page_h > 1001) {
    //     scroll_val = 171.4;
    // } else if (page_h <= 1000 && page_h > 769) {
    //     scroll_val = 125.5;
    // } else if (page_h <= 768 && page_h > 600) {
    //     scroll_val =  block_w * 1.220000017582302;
    //     jQuery(".marakata_sim-wrap").css('height', scroll_val+'px');
    //     jQuery(".marakata_dot").css('height', scroll_val+'px');
    // } else {
    //     scroll_val =  block_w * 1.14468085106383;
    //     jQuery(".marakata_sim-wrap").css('height', scroll_val+'px');
    //     jQuery(".marakata_dot").css('height', scroll_val+'px');
    // }
  };

  // onload
  jQuery('.mode-item_manual').on('click', function(event) {
    cur_window_width();
  });
  jQuery(window).on('resize', function(event) {
    cur_window_width();
  });

// click on block
  jQuery('.marakata_sim_prot').on('click', function(event) {
    if (jQuery(this).hasClass('marakata_sim_from')) {
      jQuery(this).addClass('marakata_sim-active');
      if (counter <= 9) {
        if (counter <= -1) {
          end_time = new Date();
        } else {
          start_time = end_time;
          end_time = new Date();
          elems_obj[counter] = end_time - start_time;
          if (elems_obj[max_time] < (end_time - start_time)) {
            max_time = counter;
          }
          console.log(elems_obj);
          console.log('Лучшее: '+ max_time+', Текущее: '+(end_time - start_time));
        }
        counter += 1;
      } else {
        curTrY = parseFloat(jQuery(this).css('marginTop'));
        curTrY = curTrY-(scroll_val*max_time);
        console.log(jQuery(this));
        jQuery(this).css('marginTop', curTrY+'px');
        jQuery('.marakata_sim').removeClass('marakata_sim-active');
        jQuery(this).removeClass('marakata_sim_from');
        if (global_counter <= 2) {
          cur_elem = global_counter+1
        } else {
          cur_elem = global_counter+2
        }
        console.log(global_counter);
        jQuery('.marakata_sim-wrap').eq(cur_elem).find('.marakata_sim').addClass('marakata_sim-active');
        jQuery('.marakata_sim-6').removeClass('marakata_sim-active');
        counter = -1;
        elems_obj = {
              0: 0,
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
              8: 0,
              9: 0,
            };
        global_counter += 1;
        if (global_counter >= 5) {
          // if all cards open
        }
      }
    }
  });

// reset
  jQuery('.btn_reset').on('click', function(event) {
    jQuery('.marakata_sim').css('marginTop', '0px');
    jQuery('.marakata_sim_prot').addClass('marakata_sim_from')
    jQuery('.marakata_sim').removeClass('marakata_sim-active');
    jQuery('.marakata_sim-1').addClass('marakata_sim-active');
    jQuery('.personal_history').val('');
    jQuery('.personal_history').removeAttr('disabled');
    jQuery('.marakata_sim_g').addClass('marakata_sim_game');
    elems_obj = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    };
  });


});
