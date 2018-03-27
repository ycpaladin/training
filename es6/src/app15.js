
const { compose, join, map, toUpperCase, head, split, trace } = require('./curry');

const tmp = compose(join('. '), trace('after map..'), map(compose(toUpperCase, head)), trace('splice map..'), split(' '));

console.log(tmp('hunter stockton thompson'));

const r = split(' ');

console.log(r('111 222 333'));
