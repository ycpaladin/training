const { curry } = require('lodash');

const match = curry((what, str) => str.match(what));

const replace = curry((what, replacement, str) => str.replace(what, replacement));

const filter = curry((f, array) => array.filter(f));

const map = curry((f, array) => array.map(f));


const array = [1, 2, 3, 4, 5, 6];

const result = map((item, index) => ({ [index]: item }), array);

console.log(result);


const fetch = require('isomorphic-fetch');

const Thunk = method => (...params) => () => method(...params);

const method = Thunk(fetch);
const params = method('https://cnodejs.org/api/v1/topics', {});
params().then(res => res.json()).then((data) => {
  console.log(data);
});
