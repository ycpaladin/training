require('babel-polyfill');

var s = Symbol('kk');
var s2 = Symbol('kk');

console.log(s);
console.log(typeof s);

var x = {
	[s]:'kevinxx',
	[s2]:'lll'
};

console.log(x[s]);
console.log(x[s2]);


console.log('==>',typeof null);

var array = [];

Array.prototype.push.apply(array, [1,2,3,4,5] );

// [].push.apply(array, [1,2,3,4,5]);
console.log(array);