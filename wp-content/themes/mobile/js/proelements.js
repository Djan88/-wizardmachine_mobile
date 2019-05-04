jQuery(document).ready(function () {
  var tarot_modes,
      elem_type,
      zone_left,
      zone_top,
      count_animation = 0,
      stop_status = 0,
      card_wrapper_width,
      end_elem_prot,
      hide_cards,
    supportsStorage = function(){
      try {
        return 'localStorage' in window && window['localStorage'] !== null;
      } catch (e) {
        return false;
      }
    }


end_elem_prot = function(){
  jQuery('.zone_elem').removeClass('hidden');
  jQuery('.elements_item').removeClass('active');
  jQuery('.elem_card_sun, .btn_stop_elems').addClass('hidden');
  jQuery('.zone_elem').css({
    left: '50px',
    top: '50px'
  });
  jQuery('.elems_card').css('left', card_wrapper_width / 2 - 110+'px');
  jQuery('.elems_card_2').css('left', card_wrapper_width / 2 - 150+'px');
  jQuery('.elems_card').css('top', '-200px');
  jQuery('.header-title').text('Выберите треугольник отличный от других');
  jQuery('.elems_card_1, .elems_card_2, .elems_card_3, .elems_card_4, .elems_card_5').fadeOut(1000);
}
hide_cards = function(){
  jQuery('.elem_card_queen, .elem_card_king, .elem_card_page, .elem_card_knight').addClass('hidden');
  jQuery('.elem_card_sun').removeClass('hidden');
}

// chose element
  jQuery('.elements_item').on('click', function(event) {
    jQuery('.btn_start_elems').removeClass('hidden');
    end_elem_prot();
    jQuery('.header-title').text('Переместите зону на ладонь');
    setTimeout(hide_cards, 1000);
    jQuery(this).addClass('active');
    jQuery('.hand_wrap').fadeIn(500);
    card_wrapper_width = zone_top = parseInt(jQuery('.hand_wrap').css('width'));
    jQuery('.elems_card').css('left', card_wrapper_width / 2 - 110+'px');
    jQuery('.elems_card_2').css('left', card_wrapper_width / 2 - 150+'px');
    elem_type = jQuery(this).data('elem');
    if (elem_type == 'air') {
      jQuery('.elem_mode_title').text('Воздух');
      jQuery('.elem_mode_card').text('Жезлы');
      jQuery('.elem_card_sun').removeClass('hidden').css('display', 'block');
      jQuery('.elem_card_queen_wands, .elem_card_king_wands, .elem_card_page_wands, .elem_card_knight_wands').removeClass('hidden').css('display', 'block');
    } else if (elem_type == 'earth') {
      jQuery('.elem_mode_title').text('Земля');
      jQuery('.elem_mode_card').text('Мечи');
      jQuery('.elem_card_queen_swords, .elem_card_king_swords, .elem_card_page_swords, .elem_card_knight_swords').removeClass('hidden').css('display', 'block');
    } else if (elem_type == 'fire') {
      jQuery('.elem_mode_title').text('Огонь');
      jQuery('.elem_mode_card').text('Пентакли');
      jQuery('.elem_card_queen_pents, .elem_card_king_pents, .elem_card_page_pents, .elem_card_knight_pents').removeClass('hidden').css('display', 'block');
    } else if (elem_type == 'water') {
      jQuery('.elem_mode_title').text('Вода');
      jQuery('.elem_mode_card').text('Кубки');
      jQuery('.elem_card_queen_cups, .elem_card_king_cups, .elem_card_page_cups, .elem_card_knight_cups').removeClass('hidden').css('display', 'block');
    }
  });


// start_protocol
 jQuery('.btn_start_elems').on('click', function(event) {
  count_animation = 0;
  stop_status = 0;
  zone_left = parseInt(jQuery('.zone_elem').css('left'));
  zone_top = parseInt(jQuery('.zone_elem').css('top'));
  if (zone_top >= 100) {
    jQuery(this).addClass('hidden');
    jQuery('.zone_elem').addClass('hidden');
    phaseOne = setInterval(function(){
      console.log(count_animation);
      if (count_animation == 0){
        jQuery('.elems_card_1').fadeIn(500);
        jQuery('.elems_card_1').css('left', zone_left - 78 +'px');
        jQuery('.elems_card_1').css('top', zone_top - 140 +'px');
      } else if (count_animation == 2) {
        jQuery('.elems_card_2').fadeIn(500);
        jQuery('.elems_card_2').css('left', zone_left - 140 +'px');
        jQuery('.elems_card_2').css('top', zone_top - 58 +'px');
      } else if (count_animation == 4) {
        jQuery('.elems_card_3').fadeIn(500);
        jQuery('.elems_card_3').css('left', zone_left - 78 +'px');
        jQuery('.elems_card_3').css('top', zone_top - 190 +'px');
      } else if (count_animation == 6) {
        jQuery('.elems_card_4').fadeIn(500);
        jQuery('.elems_card_4').css('left', zone_left - 78 +'px');
        jQuery('.elems_card_4').css('top', zone_top - 230 +'px');
      } else if (count_animation == 8) {
        jQuery('.elems_card_5').fadeIn(500);
        jQuery('.elems_card_5').css('left', zone_left - 78 +'px');
        jQuery('.elems_card_5').css('top', zone_top - 270 +'px');
      } else if (count_animation == 10)  {
        jQuery('.btn_stop_elems').removeClass('hidden');
      } else if (count_animation == 20)  {
        count_animation = 0;
        clearInterval(phaseOne);
        swal({
          title: "Протокол выполнен!",   
          text: "Программа завершает свою работу",   
          type: "info"
        },
        function(isConfirm){
          if (isConfirm) {    
            count_animation = 0;
            setTimeout(end_elem_prot, 1000);
            jQuery('.hand_wrap').css('display', 'none');
          } 
        });
      }
      if (stop_status == 1) {
        stop_status = 0;
        swal({
          title: "Протокол выполнен!",   
          text: "Программа завершает свою работу",   
          type: "info"
        },
        function(isConfirm){
          if (isConfirm) { 
            clearInterval(phaseOne);   
            count_animation = 0;
            setTimeout(end_elem_prot, 1000);
            jQuery('.hand_wrap').css('display', 'none');
          } 
        });
      } else {
        count_animation += 1;
      }
    }, 1000);
    
  } else {
    swal("Зона не на руке", "Перед стартом перенесите зону на руку", "info");
  }

// stop protocol
  jQuery('.btn_stop_elems').on('click', function(event) {
    stop_status = 1;
  });

 });
});
