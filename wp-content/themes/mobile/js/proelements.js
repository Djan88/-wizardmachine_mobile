jQuery(document).ready(function () {
  var tarot_modes,
      elem_type,
      zone_left,
      zone_top,
      count_animation = 0,
    supportsStorage = function(){
      try {
        return 'localStorage' in window && window['localStorage'] !== null;
      } catch (e) {
        return false;
      }
    }

// chose element
  jQuery('.elements_item').on('click', function(event) {
    jQuery('.elements_item').removeClass('active');
    jQuery('.btn_start_elems').removeClass('hidden');
    jQuery('.zone_elem').css({
      left: '50px',
      top: '50px'
    });
    jQuery('.elem_card_queen, .elem_card_king, .elem_card_page, .elem_card_knight').addClass('hidden');
    jQuery('.elems_card_1, .elems_card_2, .elems_card_3, .elems_card_4').addClass('hidden').css('display', 'none');
    jQuery(this).addClass('active');
    jQuery('.hand_wrap').fadeIn(500);
    elem_type = jQuery(this).data('elem');
    if (elem_type == 'air') {
      jQuery('.elem_mode_title').text('Воздух');
      jQuery('.elem_mode_card').text('Жезлы');
      jQuery('.elem_card_sun').removeClass('hidden');
      jQuery('.elem_card_queen_wands, .elem_card_king_wands, .elem_card_page_wands, .elem_card_knight_wands').removeClass('hidden');
    } else if (elem_type == 'earth') {
      jQuery('.elem_mode_title').text('Земля');
      jQuery('.elem_mode_card').text('Мечи');
      jQuery('.elem_card_queen_swords, .elem_card_king_swords, .elem_card_page_swords, .elem_card_knight_swords').removeClass('hidden');
    } else if (elem_type == 'fire') {
      jQuery('.elem_mode_title').text('Огонь');
      jQuery('.elem_mode_card').text('Пентакли');
      jQuery('.elem_card_queen_pents, .elem_card_king_pents, .elem_card_page_pents, .elem_card_knight_pents').removeClass('hidden');
    } else if (elem_type == 'water') {
      jQuery('.elem_mode_title').text('Вода');
      jQuery('.elem_mode_card').text('Кубки');
      jQuery('.elem_card_queen_cups, .elem_card_king_cups, .elem_card_page_cups, .elem_card_knight_cups').removeClass('hidden');
    }
  });


// start_protocol
 jQuery('.btn_start_elems').on('click', function(event) {
  count_animation = 0;
  jQuery(this).addClass('hidden');
  zone_left = parseInt(jQuery('.zone_elem').css('left'));
  zone_top = parseInt(jQuery('.zone_elem').css('top'));
  if (zone_top >= 100) {
    phaseOne = setInterval(function(){
      console.log(count_animation);
      if (count_animation == 0){
        jQuery('.elems_card_1').fadeIn(500);
        jQuery('.elems_card_1').css('left', zone_left - 78 +'px');
        jQuery('.elems_card_1').css('top', zone_top - 140 +'px');
      } else if (count_animation == 2) {
        jQuery('.elems_card_2').fadeIn(500);
        jQuery('.elems_card_2').css('left', zone_left - 140 +'px');
        jQuery('.elems_card_2').css('top', zone_top - 48 +'px');
      } else if (count_animation == 4) {

      } else if (count_animation == 6) {
        
      } else if (count_animation == 8) {
        
      } else if (count_animation == 9)  {
        count_animation = 0;
        clearInterval(phaseOne);
        console.log('exit');
      }
      count_animation += 1;
    }, 1000);
    
  } else {
    swal("Зона не на руке", "Перед стартом перенесите зону на руку", "info");
  }
  

  // count_animation = 0;
  // phaseOne = setInterval(function(){
  //   if (count_animation <= 4){
  //     jQuery('.card_devil').css('top', card_zone_top - 32 + 'px');
  //     count_animation += 1;
  //   } else if (count_animation > 4 && count_animation <= 8) {
  //     jQuery('.card_solis').css('top', card_zone_top - 32 + 'px');
  //     card_id.css('transform', 'rotate(270deg)');
  //     count_animation += 1;
  //   } else if (count_animation > 8 && count_animation <= 16) {
  //     count_animation += 1;
  //   } else if (count_animation > 16 && count_animation <= 22) {
  //     card_id.css('transform', 'rotate(360deg)');
  //     count_animation += 1;
  //   } else {
  //     clearInterval(phaseOne);
  //     count_animation = 0;
  //     card_id.css('top', parseInt(card_id.css('top')) - 200 + 'px');
  //     card_id.css({
  //       transform: 'scale(0.5) rotate(360deg)',
  //       left: '-400px',
  //       top: '-80px'
  //     });
  //     card_id.fadeOut(1000);
  //     jQuery('.card_devil, .card_solis').removeClass('card_move').addClass('card_move_fast');
  //     jQuery('.card_devil').css('top', jQuery('.card_ghost_devil').css('top'));
  //     jQuery('.card_solis').css('top', jQuery('.card_ghost_solis').css('top'));
  //     jQuery('.card_codes_top').find(jQuery('[data-number =' + cur_card + ']')).fadeIn(500);
  //     if (cur_card_in_stack < cur_cards_length) {
  //       cur_card_in_stack += 1;
  //       tarot();
  //     } else {
  //       cur_card = 0;
  //       cur_card_in_stack = 0;
  //       onEnd();
  //     }
  //    }
  //  }, 1000);
 });
});
