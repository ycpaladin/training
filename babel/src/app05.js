// let s = "𠮷";
// console.log(s.length);


var total = 30;
var msg = passthru`The total is ${total} (${total * 1.05} with tax)`;

function passthru(literals) {
    var result = '';
    var i = 0;

    while (i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }

    return result;
}

console.log(msg);


console.log`123${1 + 1}==>11${2 + 2}`;
// echo