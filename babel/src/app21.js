const { compose, curry, split, map } = require('ramda');
var str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';
//上面是一个字符串，请问其中最长的单词有多少个字符？

const trace = curry((log, value) => {
    console.log(log, value);
    return value;
})

// const split = curry(function (what, str) {
//     return str.split(what);
// });

// const split = what => str => str.split(what);

const length = str => str.length;

// const map = curry((f, array) => array.map(f));

const head = xs => xs[0]

const sortBy = (a, b) => a < b;

const sort = curry((f, array) => array.sort(f));

const result = compose(head, trace('===>'), sort(sortBy), map(length), split(' '));

// console.log(split(' ')(str))
console.log(result(str));


