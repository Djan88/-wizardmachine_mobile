var chain,
    queue,
    cb,
    then,
    phaseOne,
    count_animation,
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
    console.log('1');
    setTimeout(function() {
      phaseOne = setInterval(function(){
        if (count_animation <= 16){                                                                         //90
          jQuery('.draggable_d2').css({
            color: 'transparent',
            borderColor: 'transparent',
            background: '#fff url(/wp-content/themes/mobile/img/plod.png) 0 0/100% no-repeat',
            opacity: 0.8,
            transform: 'rotate(-'+count_animation+'deg) scale(2)'
          });
          count_animation += 1;
          console.log(count_animation);
        } else {
          clearInterval(phaseOne);
          count_animation = 1;
          jQuery('.draggable_d2').css({
            color: '#FFF0C7',
            borderColor: '#FFF0C7',
            background: 'rgba(83, 35, 69, 0.4)',
            opacity: 1,
            transform: 'scale(1)'
          });
          next();
        }
      }, 250);
    }, 0);
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
