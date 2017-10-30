// require('babel-polyfill');

function func1() {
    return new Promise((resove, reject) => {
        setTimeout(function () {
            resove(1000);
        }, 1000);
    })
}

function func2() {
    return new Promise((resove, reject) => {
        setTimeout(function () {
            resove(1500);
        }, 1230);
    })
}

async function gen() {
    const [r1, r2] = await Promise.all([func1(), func2()]);
    return r1 + r2;
}

// var g = gen();
// var v = g.next().value;
// var v2 = g.next(v).value;
// console.log(v2);

gen().then(v => {
    console.log(v);
})