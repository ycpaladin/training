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



// var obj = {
//     a: '1',
//     b: function (c) {
//         console.log(this.a, c);
//     }
// }

var obj = {
    a: '1',
    b(c) {
        console.log(this.a, c);
    }
}


obj.b(11);