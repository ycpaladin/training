let obj = {
    '0': 1, '1': 2,
    length: 3
}

let a1 = Array.prototype.slice.call(obj);
console.log(a1);
let array = Array.from(obj, x => {
    console.log(this)
    return (x + x);
});
console.log(array);

// let a3 = [...obj];
// console.log(a3);