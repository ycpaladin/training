// var ms = {
//     a: 1,
//     b: 2
// }

// var r = "a" in ms;
// console.log(r);


// var cart = {
//     _wheels: 4,

//     get wheels() {
//         return this._wheels;
//     },

//     set wheels(value) {
//         if (value < this._wheels) {
//             throw new Error('数值太小了！');
//         }
//         this._wheels = value;
//     }
// }

// // cart.wheels = 3
// console.log(cart._wheels)


// var obj = {
//     * m() {
//         yield 'hello world';
//         yield "bbb";
//     }
// };

// var r = obj.m();

// while (1) {
//     var x = r.next();
//     if (x.done) {
//         break;
//     }
//     console.log(x.value)
// }


// const getNewObj = () => {
//     var obj = {
//         a: 1,
//         b: 2,
//         c: 3
//     }

//     return Object.keys(obj).map((key, index) => {
//         const kv = `${key}_${index}`
//         return {
//             key,
//             [kv]: kv,
//             value: obj[key],
//             ['getValue']() {
//                 return obj[key];
//             }
//         }
//     });
// }


// var newObj = getNewObj();

// for (var item of newObj) {
//     console.log(item.getValue())
// }
