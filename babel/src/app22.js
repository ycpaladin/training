requirejs.config({
    paths: {
        ramda: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.13.0/ramda.min',
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min'
    }
});

require([
    'ramda'
], function ({ compose, prop, split }) {


    const IO = function (f) {
        this.__value = f;
    }

    IO.of = function (x) {
        return new IO(function () {
            return x;
        });
    }

    IO.prototype.map = function (f) {
        return new IO(compose(f, this.__value));
    }



    var io_window = new IO(function () { return window; });
    var r = io_window.map(function (w) {
        return w.innerWidth;
    });

    console.log(r);

    var r2 = io_window.map(prop('location')).map(prop('href')).map(split('/'));
    console.log(r2);
});




