
const TZ = function (birthdate) {
    this.birthdate = birthdate;
}


TZ.prototype.shengchan = function (month) {
    var age = month - this.birthdate;
    const _r = [];
    if (age >= 2) {
        _r.push(new TZ(month));
    }

    return _r;
}


var list = [new TZ(1)];
for (var i = 1; i <= 22; i++) {
    var _list = list.map(t => t.shengchan(i));
    var _result = [].concat.apply([], _list);

    list.push(..._result);
    console.log(i, "", list.length)
}

console.log(list.length);
