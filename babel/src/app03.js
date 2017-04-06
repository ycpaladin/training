//代码块中声明的函数
"use strict"

// var x = 12;
// {
//     let x = 10;

//     console.log(x);
// }

// console.log(x)

function e() { console.log('i am outside'); }

if (true) { // 严格模式下，以下函数函数声明无效，但不会报错
    function e() { console.log('i am inside'); }
}

e();