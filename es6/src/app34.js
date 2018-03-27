// const fs = require('fs');
// const path = require('path');
require('babel-polyfill');
// const co = require('co');
// function* doStuff(){
//     yield fs.readFileSync.bind(null, path.resolve(__dirname,'../index.html'),'utf-8');
//     yield fs.readFileSync.bind(null,path.resolve(__dirname,'../index2.1.html'),'utf-8');
//     yield fs.readFileSync.bind(null,path.resolve(__dirname,'../index2.2.html'),'utf-8');
// }


// for(var text of doStuff()){
//     console.log(text());
// }


// function* gen(p){
//     var y = yield p+2;
//     var y2 = yield y + 1;
//      return y;
// }

// var g = gen(2);
// var { value} = g.next();
// // console.log(value);
// // console.log(g.next(value));
// // console.log(g.next(3));
// // var prev = 0;
// for(var x of gen(2)){
//     console.log(x);
// }

// var readFile = function(fileName){
//     return new Promise((resovle,reject)=>{
//         fs.readFile(fileName,'utf-8',(error, data)=>{
//             if(error) reject(error)
//             else
//              resovle(data);
//         });
//     });
// }


// var gen = function*(){
//     var f1 = yield readFile(path.resolve(__dirname, '../index.html'));
//     var f2 = yield readFile(path.resolve(__dirname,'../index2.1.html'));
//     // console.log(f1)
//     // console.log(f2);
//     console.log.call(null, f1);
//     console.log.call(null,f2);
// }

// co(gen).then(()=>{
//     console.log('done...')
// });


function getNumber1() {
  console.log('1..');
  return new Promise((resovle) => {
    setTimeout(() => {
      resovle(100);
    }, 2000);
  });
}

function getNumber2() {
  console.log('2..');
  return new Promise((resovle) => {
    setTimeout(() => {
      resovle(1000);
    }, 3000);
  });
}


// function* gen(){
//     // 第一种方法 数组 快 并行执行
//     // var [n1, n2] = yield [getNumber1(), getNumber2()];
//     // return n1+n2;

//     //第二种方法 普通 慢  第一步完了再走第二步
//     // var n1 = yield getNumber1();
//     // var n2 = yield getNumber2();
//     // return n1+n2;

//     //第三种方法  对象 快 并行执行
//     var { n1,n2} = yield {
//         "n1":getNumber1(),
//         "n2":getNumber2()
//     }
//     // result.length = Object.keys(result).length;
//     // var [n1,n2] = Array.from(result);
//     return n1 + n2;
// }


// co(gen).then((r)=>{
//     console.log('done.==>',r)
// });;

// ------------------------------异步

const gen = async function () {
    // var {n1,n2} = await {
    //     "n1":getNumber1(),
    //     "n2":getNumber2()
    // }
    // return n1 + n2;

    // var n1 = await getNumber1();
    // var n2 = await getNumber2();
    // return n1+ n2;

    // 最佳方式  并行 并转换值
    // let [n1,n2] = await Promise.all([getNumber1(), getNumber2()]);
    // return  n1+n2;

    // 代码太多，看应用场景
  const [n1, n2] = [getNumber1, getNumber2].map(async (func, index) => {
    const r = await func();
    console.log(index, '====>', r);
    return r;
  });
  console.log('n1=>', n1);
  return await n1 + await n2;
};


// // // co(gen)

//  gen().then(r=>{
//     console.log('done..', r)
// })
