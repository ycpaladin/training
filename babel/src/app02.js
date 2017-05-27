// async await 的使用   es7语法
require('babel-polyfill');

const sleep = timeout => new Promise((resovle) => {
  setTimeout(resovle, timeout);
});


(async () => {
  for (let i = 0; i < 5; i++) {
    await sleep(1000);
    console.log(new Date(), i);
  }
})();

