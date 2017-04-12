const fetch = require('isomorphic-fetch');
// const Functor = function (value) {
//     this.test = value;
// }

// Functor.prototype.map = function (f) {
//     var test = this.test;
//     return new Functor(function (resovle) {
//         return test(function (a) {
//             return resovle(f(a))
//         });
//     });
// }

var prop = function (propertyName) {
    return function (object) {
        return object[propertyName];
    }
}

// new Functor(function (resovle) {
//     setTimeout(function () {
//         resovle({ title: 'xxxxxxx' });
//     }, 1000);

// }).map(prop('title')).test(function (data) {
//     console.log(data)
// });

// console.log(obj);







var Func = function (exec) {
    this.exec = exec;
}


Func.prototype.map = function (f) {
    var exec = this.exec;
    return Func.of(function (reject, resovle) {
        return exec(function (a) {
            reject(a);
        }, function (b) {
            resovle(f(b));
        });
    });
}


Func.of = function (exec) {
    return new Func(exec);
}

Func.of(function (reject, resovle) {
    var url = `https://cnodejs.org/api/v1/topics`;

    fetch(url).then(function (res) {
        return res.json()
    }).then(function ({ success, data }) {
        if (success)
            resovle(data);
        else
            reject('error..')
    }).catch(error => {
        reject(error);
    })
}).map(prop('length')).exec(function (error) {
    console.log(error);
}, function (data) {
    console.log(data);
});