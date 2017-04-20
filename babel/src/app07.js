// function fetch(url, { body = '', method = 'GET', headers = {} }) {
//     console.log(method);
// }

// fetch('http://example.com', {})
// // "GET"

// fetch('http://example.com')
// // 报错



// function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
//     console.log(method);
// }

// fetch('http://example.com', {})
// // "GET"

// fetch('http://example.com', undefined)
// // 报错


// const func = (a = 1, { b = 10.1 } = {}, f = (callback) => {
//     callback(a);
// }) => {
//     f((p) => {
//         console.log(p);
//     })
// }

// func(10, { d: 10 })

// function func() {
//     console.log(this);
//     console.log(this.id);
// }

// func.call({ id: 1 });

require('babel-polyfill');

const object = {
    name: 'kevin',
    age: 31,
    sex: 1
}


var r = Object.values(object);
console.log(r);


var obj = Object.create({}, {
    p: {
        value: 44,
        enumerable: true
    }
});

obj.__proto__.a = function () {
    return 11;
}

console.log(Object.keys(obj));


console.log(Object.entries(obj))