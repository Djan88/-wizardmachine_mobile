jQuery(document).ready(function () {
  // Unhide menu after load
  jQuery('#menu').removeClass('hidden');

  // Render menu
  var myMenu = new OSREC.superslide
  ({
      slider: document.getElementById('menu'),
      content: document.getElementById('content'),
      closeOnBlur: true,
      width: '250px'
  });

  // Promise resolves once menu is open
  jQuery('.side_menu').on('click', function(event) {
    myMenu.toggle();
  });// Promise resolves once menu is close
  jQuery('.side_menu_close').on('click', function(event) {
    myMenu.close();
  });

  // Protocol choice
  jQuery('.protocols_item').on('click', function(event) {
    jQuery('.protocols_item').removeClass('active');
    jQuery(this).addClass('active');
    jQuery('.current_protocol_img').html(jQuery(this).find('.protocols_item_img').html());
    jQuery('.current_protocol_title, .current_protocol_title_2').text(jQuery(this).find('.protocols_item_title').text())
    jQuery('.current_protocol_content').text(jQuery(this).find('.protocols_item_content').text())
    jQuery('.choice_protocol').removeClass('hidden');
  });
});
