var co = require('co');
var fs = require('fs');
var path = require('path');

const stream = fs.createReadStream(path.resolve(__dirname,'../index2.txt'));



let valjeanCount = 0;

co(function*(){
    while(true){
        const res = yield Promise.race([
            new Promise(r=>stream.once('data', r)),
            new Promise(r=>stream.once('end',r)),
            new Promise((r,reject)=>stream.once('error',reject))
        ]);
        if(!res){
            break;
        }

        stream.removeAllListeners('data').removeAllListeners('end').removeAllListeners('error');
        valjeanCount += (res.toString().match(/valjean/ig) || []).length;
    }

    console.log('count==>', valjeanCount)
})