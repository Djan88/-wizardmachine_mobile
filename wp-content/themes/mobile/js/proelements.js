jQuery(document).ready(function () {
  var tarot_modes,
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
    swal({
      title:"Title",
      imageUrl: 'http://yuchikurov.ru/wp-content/themes/mobile/img/hand_alt.gif',
      imageHeight: 499,
      imageAlt: 'Hand',
      animation: false
    });
  });
});
