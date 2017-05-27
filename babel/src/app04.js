//  对象/数组的解构

// let { z = 3 } = { x: 1, y: 2 };
// console.log(z);
// let z;
// ({ z =3 } = { x: 1, y: 2 });
// console.log(z);


// function move({ x, y } = { x: 0, y: 0 }) {
//     return [x, y];
// }

// move({ x: 3, y: 8 }); // [3, 8]
// move({ x: 3 }); // [3, 0]
// let y = move({}); // [undefined, undefined]
// console.log(y);
// let x = move(); // [0, 0]
// console.log(x);


// for...of对Map对象的遍历

const map = new Map([[1, 1], [2, 2], [3, 3], [4, 4], [4, 4]]);

Map.prototype.map = function (callback) {
  const result = [];
  let index = 0;
  for (const _item of this) {
    const item = callback(_item, index);
    result.push(item);
    index++;
  }
  return result;
};
const rs = map.map(([key, value], index) => ({
  key,
  value,
  index,
}));

console.log(rs);
// for (let [k, v] of map)
//     console.log(k, '===>', v)

