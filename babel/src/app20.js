const { prop, curry, compose, map, concat, add } = require('ramda');
const moment = require('moment');

const Left = function (x) {
  this.__value = x;
};

Left.of = function (x) {
  return new Left(x);
};

Left.prototype.map = function (f) {
  return this;
};

const Right = function (x) {
  this.__value = x;
};

Right.of = function (x) {
  return new Right(x);
};

Right.prototype.map = function (f) {
  return Right.of(f(this.__value));
};

const r1 = Right.of('rain').map(str => `b${str}`);
console.log(r1);

const r2 = Left.of('rain').map(str => `b${str}`);
console.log(r2);

const r3 = Right.of({ host: 'localhost', port: 8080 }).map(prop('host'));
console.log(r3);

const r4 = Left.of('rolls eyes...').map(prop('host'));
console.log(r4);

const getAge = curry((now, user) => {
  const birthdate = moment(user.birthdate, 'YYYY-MM-DD');
  if (!birthdate.isValid()) return Left.of('Birth date could not be parsed.');
  return Right.of(now.diff(birthdate, 'years'));
});

const r5 = getAge(moment(), { birthdate: '2005-12-12' });
console.log(r5);


const r6 = getAge(moment(), '20101010');
console.log(r6);

console.log('----------------------------------------------------');


const fortune = compose(concat('If you survive ,you will be '), add(1));

const zoltar = compose(map(console.log), map(fortune), getAge(moment()));

const r7 = zoltar({ birthdate: '2005-10-1' });
console.log(r7);

const r8 = zoltar({ birthdate: 'balloons!' });
console.log(r8);

