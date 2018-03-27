

// console.log(Object.is('foo', 'foo'));//true
// console.log('foo' === 'foo');//true


// console.log(Object.is(NaN, NaN));//true
// console.log(NaN === NaN);//false


// var obj = {
//     a: 'kevin',
//     get c() {
//         return 'c'
//     },
//     set c(value) {

//     }
// };

// Object.defineProperty(obj, 'name', {
//     __proto__: null,
//     // value: 'kevin',
//     get() {
//         return this.a;
//     },
//     // set(value) {

//     // },
//     // writable: false,
//     configurable: true,
//     enumerable: true
// })

// //obj.name = 'lxy';// 严格模式下只读属性会抛异常
// console.log(obj.name);


// Object.keys(obj).forEach(key => {
//     console.log(key);
// })


// var obj1 = {
//     a: { b: 1 }
// }
// var obj2 = Object.assign({}, obj1);// Object.assign 是浅拷贝，如果有属性是一个对象，那么便会拷贝引用地址

// console.log(obj2);

// obj1.a.b = 2; // a 是一个对象，so. 当obj1的a中的属性被更改后，

// console.log(obj2);//obj2中的a.b也会被更改

const propertyName = ['index'];
class Point {
  constructor(x, y, { z } = { z: 122 }) {
    const _private = {
      [propertyName[0]]: 0,
    };
    Object.assign(this, { x,
      y,
      z,
      get index() {
        return _private.index;
      },
      set index(value) {
        _private.index = value || undefined;
      },

    });
  }
}

const point = new Point(12, 15);
// console.log(point);

// point.index = 111;
Object.assign(Point.prototype, {
  render() {
    const { x, y, z, index } = this;
    console.log(x, y, z, index);
  },
});

point.render();

