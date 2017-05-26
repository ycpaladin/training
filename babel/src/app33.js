require('babel-polyfill');
var fetch = require('node-fetch');
// const g = function * () {
//     yield 1;
//     yield 2;
//     yield "3";
//     yield 555;
//     return 7;
// }

// var gen = g();
// let x;
// while (x = gen.next().value) {
//     console.log(x);
// }

// var p  = new Promise((resovle,reject)=>{
//     //resovle(1);
//     console.log('.....==>')
// });



// const f = () => console.log('now');
// Promise.resolve().then(f);
// console.log('next');



// const f = async ()=>console.log('now');
// (async ()=> f())().then((d)=>{
//     console.log('===>',d)
// }).catch(e=>{
//     console.log('error,',e);
// });
// console.log('next');

// const f = async () => 111;

// f().then(d=>console.log(d));
// console.log('111xxxx')



// function * gen(){
//     var url = 'https://api.github.com/users/github';
//     var result = yield fetch(url);
//     console.log(result.bio);
//     console.log(result.bio,'=====>');
// }

// var g = gen();
// var result = g.next();
// result.value.then((data)=>{
//     return data.json();
// }).then((d)=>{
//     g.next(d);
// })


// var arr = [1,[[2,3],4],[5,6]];

// var flat = function*(a){
//     var length = a.length;
//     for(var i = 0;i < length; i++){
//         var item = a[i];
//         if(typeof item != 'number'){
//             yield* flat(item);
//         }else{
//             yield item;
//         }
//     }
// }

// for(var f of flat(arr)){
//     console.log(f);
// }




// var obj = {
//     [Symbol.iterator](){
//         var i = 0;
//         return {
//             next:function(){
//                 i++;
//                 if(i < 10)
//                     return { done:false, value:i}
//                 else{
//                     return {done:true,value:undefined}
//                 }
//             }
//         };
//     },


// }


// for(var x of obj){
//     console.log(x);
// }



// var obj = {
//     a:1,
//     b:2,
//     c:4,
//     // [Symbol.iterator]: objectEntities
// }
// // obj[Symbol.iterator] = objectEntities;


// function * objectEntities(){
//     let proKeys = Reflect.ownKeys(this);
//     for(let proKey of proKeys){
//         yield [proKey, obj[proKey]];
//     }
// }


// // Object.prototype

//  obj.__proto__[Symbol.iterator] = objectEntities;


// for(let [k,v] of obj){
//     console.log(k,'===>',v);
// }

// // console.log(obj.__proto__)
// console.log(...obj);

// var x = Array.from(obj);
// console.log(x);


// var clock = function*(){
//     while(true){
//         yield;
//         console.log('Tick!')
//         yield;
//         console.log("Tock!");
        
//     }
// }


// for(var x of clock()){
//     console.log(x);
// }

// function showLoadingScreen(){
//     console.log('showLoadingScreend..');
// }

// function loadUIDataAsynchronously(){
//     console.log("loadUIDataAsynchronously");
// }

// function hideLoadingScreen(){
//     console.log("hideLoadingScreen");
// }

// function* loadUI(){
//     showLoadingScreen();
//     yield loadUIDataAsynchronously();
//     hideLoadingScreen();
// }


// var loader = loadUI();
// console.log('1.')

// loader.next();
// console.log('2.')

// loader.next();
// console.log('3.')


function * gen(){
    var result = yield request();
    console.log(result.bio);
    console.log(result.bio,'=====>');
}


function request(){
    var url = 'https://api.github.com/users/github';
    fetch(url).then(d=>d.json()).then(d=>g.next(d));
}

var g = gen();
g.next();//.value.then(d =>d.json()).then(d=> g.next(d));
console.log('==<>')