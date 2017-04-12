
class Functor {
    constructor(exec) {
        this.exec = exec;
    }

    map(f) {
        var exec = this.exec;
        return new Functor(function (resovle) {
            return exec(function (a) {
                return resovle(f(a));
            });
        });
    }
}



var prop = function (propertyName) {
    return function (object) {
        return object[propertyName];
    }
}


var toUpperCase = function (str) {
    return str.toUpperCase();
}

var head = function (str) {
    return str[0];
}

new Functor(function (resovle) {
    setTimeout(function () {
        resovle({ title: 'xxxxxxx' });
    }, 1000);

}).map(prop('title')).map(head).map(toUpperCase).exec(function (data) {
    console.log(data)
});


