var chain,
    queue,
    cb,
    then,
    phaseOne,
    count_animation = 0,
    v1,


chain = function (callback) {
    queue = [];
 
    function _next() {
        cb = queue.shift();
        if (cb) {
            cb(_next);
        }
    }
 
    setTimeout(_next, 0);
 
    then = function(cb) {
        queue.push(cb);
        return { then: then }
    }
 
    return then(callback);
}

v1 = function(){
  chain(function(next) {
    // Фаза 1.1
    count_animation = 0;
    phaseOne = setInterval(function(){
      if (count_animation <= 12){
        if (count_animation <= 4) {
          jQuery('.draggable_v1').css({
            color: 'transparent',
            transform: 'scale(1.5)',
            background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
            opacity: 0.8
          });
        } else if (count_animation <= 8) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
          });
        } else if (count_animation <= 12) {
          jQuery('.draggable_v1').css({
            background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
          });
        }
        count_animation += 1;
      } else {
        clearInterval(phaseOne);
        count_animation = 1;
        jQuery('.draggable_v1').css({
          color: '#FFF0C7',
          transform: 'scale(1.5)',
          background: 'rgba(83, 35, 69, 0.4)',
          opacity: 1
        });
        // Фаза 1.2
        count_animation = 0;
        phaseOne = setInterval(function(){
          if (count_animation <= 12){
            if (count_animation <= 4) {
              jQuery('.draggable_v5').css({
                color: 'transparent',
                transform: 'scale(1.5)',
                background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                opacity: 0.8
              });
            } else if (count_animation <= 8) {
              jQuery('.draggable_v5').css({
                background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
              });
            } else if (count_animation <= 12) {
              jQuery('.draggable_v5').css({
                background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
              });
            }
            count_animation += 1;
          } else {
            clearInterval(phaseOne);
            count_animation = 1;
            jQuery('.draggable_v5').css({
              color: '#FFF0C7',
              transform: 'scale(1.5)',
              background: 'rgba(83, 35, 69, 0.4)',
              opacity: 1
            });
            count_animation = 0;
            // Фаза 1.3
            phaseOne = setInterval(function(){
              if (count_animation <= 12){
                if (count_animation <= 4) {
                  jQuery('.draggable_v-').css({
                    color: 'transparent',
                    transform: 'scale(1.5)',
                    background: '#fff url(/wp-content/themes/mobile/img/disfunction.jpg) 0 0/100% no-repeat',
                    opacity: 0.8
                  });
                } else if (count_animation <= 8) {
                  jQuery('.draggable_v-').css({
                    background: '#fff url(/wp-content/themes/mobile/img/travma.jpg) 0 0/100% no-repeat'
                  });
                } else if (count_animation <= 12) {
                  jQuery('.draggable_v-').css({
                    background: '#fff url(/wp-content/themes/mobile/img/povregdenie_demona.jpg) 0 0/100% no-repeat'
                  });
                }
                count_animation += 1;
              } else {
                clearInterval(phaseOne);
                count_animation = 1;
                jQuery('.draggable_v-').css({
                  color: '#FFF0C7',
                  transform: 'scale(1.5)',
                  background: 'rgba(83, 35, 69, 0.4)',
                  opacity: 1
                });
                count_animation = 0;
                next();
              }
            }, 1000);
          }
        }, 1000);
      }
    }, 1000);
  }).then(function(next) {
      setTimeout(function() {
          console.log('3');
          next();
      }, 1000);
  }).then(function(next) {
      setTimeout(function() {
          console.log('4');
          next();
      }, 1000);
  });
}

jQuery('.btn_start').on('click', function(event) {
  v1();
});
