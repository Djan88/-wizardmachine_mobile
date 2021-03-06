jQuery(document).ready(function () {
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
      count_animation = 0,
      rotate_one = 0,
      rotate_two = 0,
      rotate_three = 0,
      rotate_four = 0,
      rotate_lovushka = 0,
      v1,
      session = 0,
      session_text,
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
      // cur_cards = ['3', '10', '11', '12'],
      cur_cards = [],
      cur_cards_length,
      cur_card,
      remove_card_num,
      checkPoints_,
      pointsStat = true,
      cur_card_in_stack = 0;

  checkPoints_ = function(){
    jQuery('.zone_movable').each(function() {
      if(parseFloat(jQuery(this).css('top')) < 20){
        pointsStat = false;
        console.log('status '+' '+jQuery(this).text()+' '+jQuery(this).css('top')+' '+pointsStatus);
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
    session += 1;
    localStorage.removeItem('paused');
    localStorage.removeItem('pausedPhoto');
    localStorage.removeItem('pausedPhases');
    localStorage.removeItem('pausedProtName');
    pausedStatus = false;
    if (session >= 4) {
      session_text = "Проведено 4+ сессий. Рекомендуем завершить терапию";
    } else {
      session_text = "Что делать дальше?"
    }

    protocolName = localStorage.getItem('protocolName');
    swal({
      title:"Сессия #"+session+" завершена",
      text: session_text,
      type: "success",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Продолжить работу",
      cancelButtonText: "Завершить"
    },
    function(isConfirm){
      var protocol = undefined;
      if (isConfirm) {
        cur_cards = [];
        jQuery('.card_protocol').addClass('hidden').removeAttr("style");
        jQuery('.card_codes_top, .card_codes_bottom').addClass('hidden');
        jQuery('.card_in_action').removeAttr("style");
        jQuery('.card').removeClass('card_move_fast');
        jQuery('.line_area').removeClass('hidden');
        jQuery('.line_area').addClass('line_area_red');
        jQuery('.zone').removeClass('zone_choiced');
        

        card_heigth = parseInt(jQuery('.card_solis').css('height'))/2;
        card_width = parseInt(jQuery('.card_solis').css('width'));
        drag_zone_w = parseInt(jQuery('.drag_container').css('width'));
        diag_zone_w = parseInt(jQuery('.work-area_inner').css('width'));

        jQuery('.line_area').attr('height', parseInt(jQuery('.work-area').css('height')));
        jQuery('.line_area').attr('width', parseInt(jQuery('.work-area').css('width')));
        solis_x = jQuery('.card_solis').position().left + card_width;
        solis_y = jQuery('.card_solis').position().top + card_heigth;
        devil_x = jQuery('.card_devil').position().left + drag_zone_w + diag_zone_w;
        devil_y = jQuery('.card_devil').position().top + card_heigth;

        jQuery('.line').attr('x1', solis_x - 10);
        jQuery('.line').attr('y1', solis_y);
        jQuery('.line').attr('x2', devil_x + 10);
        jQuery('.line').attr('y2', devil_y);

        jQuery('.dragger_rate').detach();
        jQuery('.clear_graph').addClass('hidden');

        jQuery('.zones_template').removeAttr('style');
      } else {
        localStorage.removeItem('tarot_mode');
        jQuery(location).attr('href','/');
        session = 0;
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

  // show card in modal
  jQuery('.zone').on('click', function(event) {
    jQuery('.card_modal_img').attr('src', jQuery(this).data('card'));
    jQuery('.card_modal_tarot').text(jQuery(this).data('tarot'));
    jQuery('.card_modal_elem').text(jQuery(this).data('elem'));
    choiced_card = String(jQuery(this).data('number'));
    console.log(choiced_card);
    checkPoints_();
    if(pointsStat == false){
      pointsStat = true;
    } else {
      if (choiced_card == '18'||choiced_card == '17') {
        jQuery('.card_modal_footer').addClass('hidden'); 
      } else {
        jQuery('.card_modal_footer').removeClass('hidden');
      }
      pointsStat = true;
    }
    zone_operated = jQuery(this);
  });

  // choice card
  jQuery('.zone_choice').on('click', function(event) {
    jQuery('.card_codes_top, .card_codes_bottom').removeClass('hidden');
    if (cur_cards.indexOf(choiced_card) != -1) {
      cur_cards.splice(cur_cards.indexOf(choiced_card), 1);
    }
    cur_cards.push(choiced_card);
    jQuery('.card_codes_bottom').find(jQuery('[data-number =' + choiced_card + ']')).removeClass('hidden');
    console.log(cur_cards);
    zone_operated.addClass('zone_choiced');
    jQuery('#card_modal').modal('hide');
  });

  // unchoice card
  jQuery('.card_protocol_bottom').on('click', function(event) {
    remove_card_num = String(jQuery(this).data('number'));
    console.log(remove_card_num);
    swal({
      title: "Отменить выбор этой карты?",   
      text: "Это действие удалит карту из набора.",   
      type: "info",   
      showCancelButton: true,   
      confirmButtonColor: "#DD6B55",   
      confirmButtonText: "Да",   
      cancelButtonText: "Нет"
    },
    function(isConfirm){
      var protocol = undefined;
      if (isConfirm) {
        console.log(cur_cards.indexOf(remove_card_num));
        cur_cards.splice(cur_cards.indexOf(remove_card_num), 1);
        console.log(cur_cards);
        jQuery('.card_codes_bottom').find(jQuery('[data-number =' + remove_card_num + ']')).addClass('hidden');
        jQuery('.zones').find(jQuery('[data-number =' + remove_card_num + ']')).removeClass('zone_choiced');
      } else {    
        
      } 
    });
  });


  tarot = function(){
    cur_cards_length = cur_cards.length - 1;
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
      left: card_zone_left + 65 +'px',
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
      } else if (count_animation > 8 && count_animation <= 16) {
        count_animation += 1;
      } else if (count_animation > 16 && count_animation <= 22) {
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
          cur_card = 0;
          cur_card_in_stack = 0;
          onEnd();
        }
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
    } else if (cur_cards.length == 0) {
      swal("Диагностика не проведена", "Проведите диагностику по лунному дню и выберите актульные зоны", "info");
    } else {
      jQuery('.header-title').text('Программа выполняется');
      jQuery('.btn-to_protocols').addClass('hidden');
      jQuery('.zones_template').removeAttr('style');
      tarot();
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
});
