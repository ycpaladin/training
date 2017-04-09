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



class Point {
    constructor(x, y) {
        Object.assign(this, {
            x, y,
            move(x, y) {
                Object.assign(this, { x, y });
            }

        });
    }


    render() {
        const { x, y, move } = this;
        // console.log(x, y);
        // move(22, 23);
        move.call(this, 11, 23)
    }
    // get x() {
    //     return this._x;
    // }

    // set x(value) {
    //     this._x = value;
    // }
}


const p = new Point(11, 12);
p.render();
// p.move(20, 22)
// console.log(p.x);
console.log(p);