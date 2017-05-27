// Object.prototype.say = function () {
//     console.log(this.value)
// };


// var Foo = function () {
//     this.value = 25;
// }

// var Bar = function () {
//     this.value = 26
// }


// Bar.prototype = Foo;

// Bar.prototype.say2 = function () {
//     console.log(this.value, '====>')
// }


// var Bar2 = function () {
//     this.value = 27;
// }

// Bar2.prototype = Foo;

// var foo = new Foo();
// foo.say();

// var bar = new Bar()
// bar.say2();
// bar.value = 1111;

// var bar2 = new Bar();
// bar2.say2();


// console.log(bar)


function foo() {
  this.a = 1;
  this.add = (x, y) => x + y;
}

// 如果对象内部已经定义了方法，prototype上再次定义同名的方法就无效了，不会覆盖
// foo.prototype.add = function (x, y) {
//     return x + y + 10;
// }

Object.prototype.subtract = function (x, y) {
  return x - y;
};

Object.prototype.b = 2;

foo.prototype.c = 3;

const f = new foo();
// console.log(f.add(1, 2)); //结果是3，而不是13
console.log(f);

// var keys = Object.keys(f) // Object 会获取当前对象中所有的属性，并不包括prototype中的属性
// console.log(f.hasOwnProperty('a'));
// for.. in 会向上遍历当前对象的prototype所有的属性

// for (var x in f) {
//     console.log(x);
// }


console.log(f.__proto__ === foo.prototype);

console.log(foo.prototype.constructor === foo);

console.log(foo.prototype.constructor.prototype === foo.prototype);

console.log(foo.prototype.__proto__ === Object.prototype);

console.log(foo.prototype.constructor.__proto__ === Function.prototype);

console.log(f.add.prototype === foo.prototype);

console.log(f.add.__proto__ === Function.prototype);

console.log(Function.prototype.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__ === null);

console.log(Object.__proto__ === Function.prototype);
