const { curry, last } = require('lodash');

exports.compose = (...func) => value => {
    let _tmpResult = value;
    for (let i = func.length - 1; i >= 0; i--) {
        const f = func[i];
        _tmpResult = f(_tmpResult);
    }
    return _tmpResult;
};

// exports.split = curry(sp => str => str.split(sp));

exports.split = curry((sp, str) => str.split(sp));

exports.replace = curry((what, replace, str) => str.replace(what, replace));

exports.map = curry((f, array) => array.map(f))

exports.join = curry((p, array) => array.join(p));

exports.toUpperCase = curry(str => str.toUpperCase());

exports.head = curry(str => str[0]);

exports.trace = curry((tag, x) => {
    console.log(tag, x)
    return x;
})


// exports.last = curry()
exports.last = curry((array) => last(array));
exports.prop = curry((propertyName, obj) => obj[propertyName]);