
const { reduce, curry } = require('lodash');

const compose = function (f, g) {
    return function (x) {
        return f(g(x));
    }
}


const x = compose(f => f * 2, g => g * 3);

const result = x(22);
console.log(result);


const head = function (x) { return x[0] };

const split = curry((sp) => (str) => str.split(sp));

const map = curry((f) => array => array.map(f))

const toUpperCase = (str) => str.toUpperCase();
const join = curry(p => str => str.join(p));

console.log('hunter stockton thompson'.split(' '))
//head
const r3 = compose(join('. '), compose(map(compose(toUpperCase, head)), split(' ')));
const r4 = r3('hunter stockton thompson');
console.log(r4);
