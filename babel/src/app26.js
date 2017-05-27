
class Functor {
  constructor(exec) {
    this.exec = exec;
  }

  map(f) {
    const exec = this.exec;
    return new Functor(resovle => exec(a => resovle(f(a))));
  }
}


const prop = function (propertyName) {
  return function (object) {
    return object[propertyName];
  };
};


const toUpperCase = function (str) {
  return str.toUpperCase();
};

const head = function (str) {
  return str[0];
};

new Functor((resovle) => {
  setTimeout(() => {
    resovle({ title: 'xxxxxxx' });
  }, 1000);
}).map(prop('title')).map(head).map(toUpperCase)
.exec((data) => {
  console.log(data);
});

