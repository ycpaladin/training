// var Flock = function (n) {
//     this.seagulls = n;
// };

// Flock.prototype.conjoin = function (other) {
//     this.seagulls += other.seagulls;
//     return this;
// };

// Flock.prototype.breed = function (other) {
//     this.seagulls = this.seagulls * other.seagulls;
//     return this;
// };

// var flock_a = new Flock(4);
// var flock_b = new Flock(2);
// var flock_c = new Flock(0);
// //8+16
// var result = flock_a.conjoin(flock_c).breed(flock_b).conjoin(flock_a.breed(flock_b)).seagulls;
// console.log(result)


const memoize = function (f) {
  const cache = {};
  return function () {
    const arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    return cache[arg_str];
  };
};


// var r = memoize((x, y) => x + y);
// var xx = r(12, 13);
// console.log(xx);

// var xx2 = r(15, 15);
// console.log(xx2);

// var xx3 = r(10, 10);
// console.log(xx3);
const fetch = require('isomorphic-fetch');

const pureHttpCall = memoize((url, params) => () => fetch(url, params));

const ajax = pureHttpCall('https://cnodejs.org/api/v1/topics', {});

ajax().then(res => res.json()).then((data) => {
  console.log(data);
});
