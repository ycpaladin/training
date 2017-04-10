// const _ = require('lodash');
// 柯里化之前

// function add(x, y) {
//     return x + y;
// }

// add(1, 2);

// 柯里化之后
// function add(x) {
//     return function (y) {
//         return x + y;
//     }
// }

// 等同于
// const add = (x) => (y) => x + y;

// const r = add(1)(2);
// console.log(r);


class Functor {
    constructor(val) {
        this.val = val;
    }

    map(f) {
        return new Functor(f(this.val));
    }
}

// Functor.of = val => {
//     console.log(this);
//     // return new Functor(val);
//     // return new this.prototype.constructor(val);
//     console.log(this.prototype)
//     return this.prototype.constructor.call(this, val);
// };

class Maybe extends Functor {
    map(f) {
        return this.val ? Maybe.of(f(this.val)) : Maybe.of(null);
    }
}

Maybe.of = val => new Maybe(val);

// const func = new Functor(10);
// console.log(func);

// const func2 = func.map((v) => v + 10);

// console.log(func2);
// ''.concat()
// const result = Maybe.of().map(function (v) {
//     return v.concat(' away');
// }).map(function (v) {
//     return v.length;
// });
// console.log(result);


Maybe.of(null).map(function (s) {
    return s.toUpperCase();
});




class Either extends Functor {
    constructor(left, right) {
        super();
        // Object.assign(this, { left, right });
        this.left = left;
        this.right = right;
    }

    map(f) {
        return this.right ?
            Either.of(this.left, f(this.right)) :
            Either.of(f(this.left), this.right);
    }
}

Either.of = (left, right) => {
    return new Either(left, right);
};

const addOne = (x) => x + 1;

const r1 = Either.of(1, 2).map(addOne);
const r2 = Either.of(1, null).map(addOne);

console.log(r1, r2);

