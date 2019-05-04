jQuery(document).ready(function () {
  var tarot_modes,
      elem_type,
    supportsStorage = function(){
      try {
        return 'localStorage' in window && window['localStorage'] !== null;
      } catch (e) {
        return false;
      }
    }


  jQuery('.elements_item').on('click', function(event) {
    jQuery('.elements_item').removeClass('active');
    jQuery(this).addClass('active');
    jQuery('.hand_wrap').fadeIn(500);
    elem_type = jQuery(this).data('elem');
    if (elem_type == 'air') {
      jQuery('.elem_mode_title').text('Воздух');
      jQuery('.elem_mode_card').text('Жезлы');
    } else if (elem_type == 'earth') {
      jQuery('.elem_mode_title').text('Земля');
      jQuery('.elem_mode_card').text('Мечи');
    } else if (elem_type == 'fire') {
      jQuery('.elem_mode_title').text('Огонь');
      jQuery('.elem_mode_card').text('Пентакли');
    } else if (elem_type == 'water') {
      jQuery('.elem_mode_title').text('Вода');
      jQuery('.elem_mode_card').text('Кубки');
    }
  });
});
