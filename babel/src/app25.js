const fetch = require('isomorphic-fetch');
// const Functor = function (value) {
//     this.test = value;
// }

// Functor.prototype.map = function (f) {
//     var test = this.test;
//     return new Functor(function (resovle) {
//         return test(function (a) {
//             return resovle(f(a))
//         });
//     });
// }

const prop = function (propertyName) {
  return function (object) {
    return object[propertyName];
  };
};

// new Functor(function (resovle) {
//     setTimeout(function () {
//         resovle({ title: 'xxxxxxx' });
//     }, 1000);

// }).map(prop('title')).test(function (data) {
//     console.log(data)
// });

// console.log(obj);


const Func = function (exec) {
  this.exec = exec;
};


Func.prototype.map = function (f) {
  const exec = this.exec;
  return Func.of((reject, resovle) => exec((a) => {
    reject(a);
  }, (b) => {
    resovle(f(b));
  }));
};


Func.of = function (exec) {
  return new Func(exec);
};

Func.of((reject, resovle) => {
  const url = 'https://cnodejs.org/api/v1/topics';

  fetch(url).then(res => res.json()).then(({ success, data }) => {
    if (success) { resovle(data); } else { reject('error..'); }
  }).catch((error) => {
    reject(error);
  });
}).map(prop('length')).exec((error) => {
  console.log(error);
}, (data) => {
  console.log(data);
});
