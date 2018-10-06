var chain,
    queue,
    cb,
    then,
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

chain(function(next) {
    console.log('1');
    setTimeout(function() {
        console.log('2');
        next();
    }, 1000);
}).then(function(next) {
    console.log('3');
    setTimeout(function() {
        console.log('4');
        next();
    }, 1000);
}).then(function(next) {
    console.log('5');
    next();
});

jQuery('.btn_start').on('click', function(event) {
  chain();
});
