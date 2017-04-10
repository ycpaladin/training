const { compose, prop, curry, map } = require('ramda');

var Maybe = function (value) {
    this.__value = value;
}

Maybe.of = function (value) {
    return new Maybe(value);
}

Maybe.prototype.isNothing = function () {
    return this.__value === null || this.__value === undefined;
}

// const map = curry((f, array) => {
//     return array.map(f);
// });

Maybe.prototype.map = function (f) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}


var trace = curry((log, value) => {
    console.log(log, value);
    return value;
});

var safeHead = function (xs) {
    return Maybe.of(xs[0]);
}


var streetName = compose(map(prop('street')), trace('===>'), safeHead, prop('address'))

// const result = streetName({ address: [{ street: 'Beijing China.', name: 'fuck.' }] });
// console.log(result);


// var x = map(prop('value'));
// console.log(x(Maybe.of({ value: 100 })));



var withdraw = curry(function (amount, account) {
    return account.balance >= amount ?
        Maybe.of({ balance: account.balance - amount }) :
        Maybe.of(null);
});


var maybe = curry(function (x, f, m) {
    return m.isNothing() ? x : f(m.__value);
});

//  getTwenty :: Account -> String
var getTwenty = compose(
    maybe("You're broke!", finishTransaction), withdraw(20)
);


var r4 = getTwenty({ balance: 200.00 });
// "Your balance is $180.00"
console.log(r4);

var r5 = getTwenty({ balance: 10.00 });
// "You're broke!"
console.log(r5);
