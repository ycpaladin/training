require('babel-polyfill');

var s = Symbol("kk");
var s2 = Symbol('kk')

console.log(s);
console.log(typeof s)

var x = {
    [s]:'kevinxx',
    [s2]:'lll'
}

console.log(x[s]);
console.log(x[s2]);