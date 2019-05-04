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
    
    jQuery('.hand_wrap').fadeIn(500);
  });
});
