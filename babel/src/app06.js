const obj = {
  0: 1,
  1: 2,
  length: 3,
};

const a1 = Array.prototype.slice.call(obj);
console.log(a1);
const array = Array.from(obj, (x) => {
  console.log(this);
  return (x + x);
});
console.log(array);

// let a3 = [...obj];
// console.log(a3);
