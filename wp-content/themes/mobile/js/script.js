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

  // back buttons
  jQuery('.btn-to_img').on('click', function(event) {
    jQuery('.mobile_screen').addClass('hidden').css('display', 'none');
    jQuery('.btn-to_img').addClass('hidden');
    jQuery('.mobile_screen_load').fadeIn(500);
    jQuery('.header-title').text('Загрузите фото');
  });
  jQuery('.btn-to_mode').on('click', function(event) {
    jQuery('.mobile_screen').addClass('hidden').css('display', 'none');
    jQuery('.btn-to_mode').addClass('hidden');
    jQuery('.mobile_screen_what_way').fadeIn(500);
    jQuery('.btn-to_img').removeClass('hidden');
    jQuery('.header-title').text('Выберите режим');
  });
  // Protocol mode
  jQuery('.mode-item_protocol').on('click', function(event) {
    jQuery('.header-title').text('Выберите протокол');
    jQuery('.mobile_screen_what_way').addClass('hidden').css('display', 'none');
    jQuery('.mobile_screen_protocols').fadeIn(500);
    jQuery('.btn-to_img').addClass('hidden');
    jQuery('.btn-to_mode').removeClass('hidden');
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

  //Hide img if already cropped
  jQuery('.cropped_img').addClass('hidden');


  // If img already download
  croppedImg = jQuery('.protocols').children()[0];
  if (croppedImg && croppedImg.hasAttribute('src')) {
    jQuery('.mobile_screen_load').addClass('hidden');
    jQuery('.mobile_screen_what_way').fadeIn(500);
    jQuery('.loaded_img').attr('src', jQuery('.cropped_img').attr('src'));
    jQuery('.btn-back').addClass('hidden');
    jQuery('.btn-to_img').removeClass('hidden');
    jQuery('.header-title').text('Выберите режим');
  }

  // second crop btn
  jQuery('.btn_crop').on('click', function(event) {
    jQuery('.crop_photo').click();
  });

//CROPPING SCRIPT
    // convert bytes into friendly format
    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB'];
        if (bytes == 0) return 'n/a';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
    };

    // check for selected crop region
    function checkForm() {
        if (parseInt(jQuery('#w').val())) return true;
        jQuery('.error').html('Пожалуйста выделите область').show();
        return false;
    };

    // update info by cropping (onChange and onSelect events handler)
    function updateInfo(e) {
        jQuery('#x1').val(e.x);
        jQuery('#y1').val(e.y);
        jQuery('#x2').val(e.x2);
        jQuery('#y2').val(e.y2);
        jQuery('#w').val(e.w);
        jQuery('#h').val(e.h);
    };

    // clear info by cropping (onRelease event handler)
    function clearInfo() {
        jQuery('.info #w').val('');
        jQuery('.info #h').val('');
    };

    // Create variables (in this scope) to hold the Jcrop API and image size
    var jcrop_api, boundx, boundy;

    function fileSelectHandler() {

        // get selected file
        var oFile = jQuery('#image_file')[0].files[0];
        // console.log(oFile);
        // hide all errors
        jQuery('.error').hide();

        // check for image type (jpg and png are allowed)
        var rFilter = /^(image\/jpeg|image\/png)$/i;
        if (! rFilter.test(oFile.type)) {
            jQuery('.error').html('Доспустимы изображения только в формате ".jpg" и ".png"').show();
            return;
        }

        // check for file size
        if (oFile.size > 15 * 1024 * 1024) {
            jQuery('.error').html('Вы выбрали слишком большой файл, пожалуйста выберите изображение меньшего размера.').show();
            return;
        }

        // preview element
        var oImage = document.getElementById('preview');

        // prepare HTML5 FileReader
        var oReader = new FileReader();

        oReader.onload = function(e) {

            EXIF.getData(oFile, function(){

                var ort = this.exifdata.Orientation;

                // e.target.result contains the DataURL which we can use as a source of the image
                oImage.src = e.target.result;
                oImage.onload = function () {

                    var rotateImg = function(rad, rotateCanvas, cx, cy){
                        var canvas = document.createElement('canvas'),
//                        var canvas = document.getElementById('preview-canvas'),
                            ctx = canvas.getContext('2d');

                        if(rotateCanvas){
                            canvas.setAttribute('width', oImage.naturalHeight);
                            canvas.setAttribute('height', oImage.naturalWidth);
                        }else{
                            canvas.setAttribute('width', oImage.naturalWidth);
                            canvas.setAttribute('height', oImage.naturalHeight);
                        }

                        ctx.rotate(rad);
                        ctx.drawImage(oImage, cx, cy);

                        ort = 1;

                        oImage.src = canvas.toDataURL("image/png");
                    };

                    switch(ort){
                       case 6:
                           rotateImg(90 * Math.PI / 180, true, 0, oImage.naturalHeight * -1);
                           break;
                       case 3:
                           rotateImg(180 * Math.PI / 180, false, oImage.naturalWidth * -1, oImage.naturalHeight * -1);
                           break;
                       case 8:
                           rotateImg(-90 * Math.PI / 180, true, oImage.naturalWidth * -1, 0);
                           break;
                    }


                    // display step 2
                    jQuery('.step2').fadeIn(500);
                    jQuery('.btn_crop').fadeIn(500);
                    jQuery('.btn__crop').removeClass('hidden');
                    // display some basic image info
                    var sResultFileSize = bytesToSize(oFile.size);
                    jQuery('#filesize').val(sResultFileSize);
                    jQuery('#filetype').val(oFile.type);
                    jQuery('#filedim').val(oImage.naturalWidth + ' x ' + oImage.naturalHeight);

                    // destroy Jcrop if it is existed
                    if (typeof jcrop_api != 'undefined') {
                        jcrop_api.destroy();
                        jcrop_api = null;
                        jQuery('#preview').width(oImage.naturalWidth);
                        jQuery('#preview').height(oImage.naturalHeight);
                    }

                    setTimeout(function(){
                        // initialize Jcrop
                        console.log(jQuery('.step2').width());
                        jQuery('#preview').Jcrop({
                            minSize: [32, 32],// keep aspect ratio 1:1
                            bgFade: true, // use fade effect
                            bgOpacity: .3, // fade opacity
                            aspectRatio: 1/1.5,
                            boxWidth: jQuery('.step2').width(),
                            onChange: updateInfo,
                            onSelect: updateInfo,
                            onRelease: clearInfo
                        }, function(){

                            // use the Jcrop API to get the real image size
                            var bounds = this.getBounds();
                            boundx = bounds[0];
                            boundy = bounds[1];

                            // Store the Jcrop API in the jcrop_api variable
                            jcrop_api = this;
                        });
                    },3000);

                };




            });

        };

        // read selected file as DataURL
        oReader.readAsDataURL(oFile);
    }
    jQuery('#image_file').on('change', fileSelectHandler);
});
