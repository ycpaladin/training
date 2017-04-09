const { prop, concat, match, split } = require('ramda');
// const Container = function (__value) {
//     this.__value = __value;
// }


// Container.of = (value) => {
//     return new Container(value);
// }


// Container.prototype.map = function (f) {
//     return Container.of(f(this.__value));
// }

// const result = Container.of(2).map((two) => two + 2);
// console.log(result);

// const r2 = Container.of('abcdefg').map(t => t.toUpperCase());
// console.log(r2);


// const r3 = Container.of('bombs').map(concat('kevin')).map(prop('length'));

// console.log(r3);


const Maybe = function (__value) {
    this.__value = __value;
}

Maybe.of = function (__value) {
    return new Maybe(__value);
}


Maybe.prototype.isNothing = function () {
    return (this.__value === null || this.__value === undefined);
}

Maybe.prototype.map = function (f) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}

const r = Maybe.of('Malkovich Malkovich').map(split(' '));//.map(match(/a/ig));
console.log(r);



