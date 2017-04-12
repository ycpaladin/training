// 使用 _.add(x,y) 和 _.map(f,x) 创建一个能让 functor 里的值增加的函数
const { add, map, head, compose, curry } = require('ramda');


const Functor = function (value) {
    this.__value = value;
}

Functor.of = function (value) {
    return new Functor(value);
}

Functor.prototype.map = function (f) {
    return Functor.of(f(this.__value))
}

// var r = map(new Functor(add(2))) //new Functor(add(2)).map(add(3))
// console.log(r(3));

var r = Functor.of(2).map(add(3));
console.log(r);

//----------------------------------------------

const Identity = function (value) {
    this.__value = value;
}

Identity.of = function (value) {
    return new Identity(value);
}

Identity.prototype.map = function (f) {
    return Identity.of(f(this.__value))
}


// 使用 _.head 获取列表的第一个元素
var xs = Identity.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);

var r2 = xs.map(head);
console.log(r2);

// 使用 safeProp 和 _.head 找到 user 的名字的首字母
var safeProp = curry(function (x, o) {
    return Maybe.of(o[x]);
});

const Maybe = function (value) {
    this.__value = value;
}

Maybe.of = function (value) {
    return new Maybe(value);
}

Maybe.prototype.map = function (f) {
    return this.isNothing() ?
        Maybe.of(null) :
        Maybe.of(f(this.__value));
}


Maybe.prototype.isNothing = function () {
    return this.__value === null || this.__value === undefined;
}


var user = {
    userName: 'kevin'
}



var r4 = compose(map(head), safeProp('userName'))

var r5 = safeProp('userName')
console.log(r4(user).__value)




