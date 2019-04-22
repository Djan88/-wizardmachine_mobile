jQuery(document).ready(function () {
  var cur_window_width,
      block_w,
      page_h,
      counter = -1,
      scroll_val,
      global_counter = 0,
      start_time,
      history_h,
      end_time,
      max_time = 0,
      curTrY,
      history_returned = JSON.parse(localStorage.getItem('history')),
      history_type,
      supportsStorage = function(){
          try {
              return 'localStorage' in window && window['localStorage'] !== null;
          } catch (e) {
              return false;
          }
      },
      cur_date,
      // history = [{'date': '07.04.2019 20:05','0':'6','1':'4','2':'8','3':'1','4':'6','type':'cups', 'name': 'Имя номер один'},{'date': '17.04.2019 18:17','0':'3','1':'1','2':'7','3':'2','4':'4','type':'pents', 'name': 'Имя номер два'},{'date': '27.04.2019 7:32','0':'4','1':'3','2':'6','3':'7','4':'9','type':'swords', 'name': 'Имя номер три'}],
      history,
      history_item = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0
      },
      hist_item_date,
      hist_item_1,
      hist_item_2,
      hist_item_3,
      hist_item_4,
      hist_item_5,
      hist_item_type,
      history_update,
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


// get current date
cur_date = function(){
  var formattedDate = new Date();
  var d = formattedDate.getDate();
  var m =  formattedDate.getMonth();
  var h =  formattedDate.getHours();
  var min =  formattedDate.getMinutes();
  m += 1;  // JavaScript months are 0-11
  if (m < 10) {
    m = '0'+m;
  }
  if (min < 10) {
    min = '0'+min;
  }
  var y = formattedDate.getFullYear();

  hist_item_date = (d + "." + m + "." + y+ ' ' + h + ":" + min);
  // console.log(hist_item_date);
}
// width of block
  cur_window_width = function(){
    block_w = parseFloat(jQuery(".marakata_sim.marakata_sim_prot").css('width'));
    page_h = jQuery("html").width();
    // jQuery('.marakata_sim-1').addClass('marakata_sim-active');
    // console.log(block_w);
    jQuery('.marakata_sim-wrap, .marakata_dot').height(block_w * 1.8+'px');
    jQuery('.marakata_sim_prot').height(block_w * 1.8 * 10 +'px');
    if (page_h < 1150) {
      scroll_val = block_w * 1.79;
    } else {
      scroll_val = block_w * 1.8;
    }
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
    if (jQuery(this).hasClass('marakata_sim_from')&&jQuery(this).hasClass('marakata_sim-active')) {
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
        max_time = 9 - max_time
        history_item[global_counter] = max_time;
        curTrY = curTrY-(scroll_val*max_time);
        jQuery(this).css('marginTop', curTrY+'px');
        jQuery('.marakata_sim').removeClass('marakata_sim-active');
        jQuery(this).removeClass('marakata_sim_from');
        if (global_counter <= 2) {
          cur_elem = global_counter+1
        } else {
          cur_elem = global_counter+2
        }
        jQuery('.marakata_sim-wrap').eq(cur_elem).find('.marakata_sim').addClass('marakata_sim-active');
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
        console.log(global_counter);
        global_counter += 1;
        if (global_counter >= 5) {
          // if all cards open
          jQuery('.save_history').removeClass('hidden');

        }
      }
    } else {
      if ("type" in history_item) {
        
      } else {
        swal("Выберите тип карты", "Перед началом сессии надо выбарть тип карты", "info");
      }
    }
  });

// reset
  jQuery('.btn_reset').on('click', function(event) {
    jQuery('.marakata_sim').css('marginTop', '0px');
    jQuery('.marakata_sim_prot').addClass('marakata_sim_from');
    jQuery('.btn_tarot_type').removeClass('active');
    jQuery('.save_history').addClass('hidden');
    jQuery('.marakata_sim').removeClass('marakata_sim-active');
    global_counter = 0;
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
    jQuery('.marakata_sim_prot').removeClass('marakata_sim_pents marakata_sim_wands marakata_sim_cups marakata_sim_swords');
    history_item = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0
    };
  });


  // local storage


  // upload history on DOM load
  history_update = function(){
    jQuery('.history_wrapper').empty();
    history_returned = JSON.parse(localStorage.getItem('history'));
    console.log(history_returned);
    jQuery.each(history_returned,function(key, data) {
      if (data['type'] == 'swords') {
        history_type = '/wp-content/themes/mobile/img/cards/tarot_numbers/sword.png';
      } else {
        history_type = '/wp-content/themes/mobile/img/cards/tarot_numbers/wand.png';
      }
      jQuery('.history_wrapper').append('<div class="history_item row" data-item_num="'+key+'"><div class="history_item_date col-3">'+data['date']+'</div><div class="history_item_code col-2"><div class="history_item_code_1">'+data['0']+'</div><div class="history_item_code_2">'+data['1']+'</div><div class="history_item_code_3">'+data['2']+'</div><div class="history_item_code_4">'+data['3']+'</div><div class="history_item_code_dot">.</div><div class="history_item_code_5">'+data['4']+'</div></div><div class="history_item_name col-4">'+data['name']+'</div><div class="history_item_type col-2" data-type="'+data['type']+'"><img src="'+history_type+'"></img></div><div class="history_item_type col-1"><div class="remove_history_item" data-date="'+data['date']+'" data-item_num_history="'+key+'"><i class="fas fa-backspace"></i></div></div></div>')
    });
  }
  history_update();

  jQuery('.history_wrapper').on('click', '.remove_history_item', function(event) {
    var delete_item_date = jQuery(this).data('date'),
        delete_item_index = jQuery(this).data('item_num_history');
    swal({
      title:"Уверены что хотите удалить этот рецепт?",
      text: "Рецепт от: "+delete_item_date+" будет удален",
      type: "warning",
      showCancelButton: true,
      closeOnConfirm: false,
      allowOutsideClick: false,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Да, удалить!",
      cancelButtonText: "Нет"
    },
    function(isConfirm){
      var protocol = undefined;
      if (isConfirm) {
        swal("Рецепт удален!", "Рецепт от: "+delete_item_date+" удален из истории!", "success");
        jQuery('.history_wrapper').find(jQuery('[data-item_num =' +delete_item_index+ ']')).detach();
        history_returned.splice(delete_item_index, 1)
        localStorage.setItem('history', JSON.stringify(history_returned));
      } else {    
        
      } 
    });
  });


  // history block
  history_h = jQuery("html").height()-100;
  jQuery('.history_wrapper').css('height', history_h+'px');
  jQuery('.history').css('top', "-"+history_h+'px');


  jQuery('.user_history').on('click', function(event) {
    if (jQuery('.history').hasClass('history_visible')) {
      jQuery('.history').removeClass('history_visible');
    } else {
      jQuery('.history').addClass('history_visible');
      history_update();
    }
  });
  jQuery('.history_close').on('click', function(event) {
    jQuery('.history').removeClass('history_visible');
  });


  // save history
  jQuery('.save_history').on('click', function(event) {
    swal({
      title:"Сохранить рецепт?",
      text: "Вы можете сохранить этот рецепт в истории. Для этого придумайте ему краткое название.",
      type: "input",
      inputPlaceholder: "Введите краткий заголовок в это поле.",
      showCancelButton: true,
      closeOnConfirm: false,
      allowOutsideClick: false,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Да",
      cancelButtonText: "Нет"
    }, function (inputValue) {
      if (inputValue === false) {
        return false;
      };
      if (inputValue === "") {
        swal.showInputError("Коротко озаглавьте рецепт!");
        return false
      }
      cur_date();
      history_item.date = hist_item_date;
      history_item.name = inputValue;
      history_item.type = jQuery('.btn_tarot_type.active').data('type');
      jQuery('.save_history').addClass('hidden');
      console.log(history_item);
      history_returned.push(history_item);
      localStorage.setItem('history', JSON.stringify(history_returned));
      swal("Рецепт сохранен в истории!", "Название: '" + inputValue + "'", "success");
    });
  });


  // choice type of cards
  jQuery('.btn_tarot_type').on('click', function(event) {
    jQuery('.marakata_sim-1').addClass('marakata_sim-active');
    jQuery('.btn_tarot_type').removeClass('active')
    jQuery(this).addClass('active')
    jQuery('.marakata_sim_prot').removeClass('marakata_sim_pents marakata_sim_wands marakata_sim_cups marakata_sim_swords');
    history_item.type = jQuery(this).data('type');
    console.log(history_item);
    if (jQuery(this).data('type') == 'pents') {
      jQuery('.marakata_sim_prot').addClass('marakata_sim_pents');
    } else if (jQuery(this).data('type') == 'wands') {
      jQuery('.marakata_sim_prot').addClass('marakata_sim_wands');
    } else if (jQuery(this).data('type') == 'cups') {
      jQuery('.marakata_sim_prot').addClass('marakata_sim_cups');
    } else if (jQuery(this).data('type') == 'swords') {
      jQuery('.marakata_sim_prot').addClass('marakata_sim_swords');
    }
  });


// TODO

});
