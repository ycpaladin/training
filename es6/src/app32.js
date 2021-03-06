// const p = Promise.all([     new Promise((resovle, reject) => {
// setTimeout(resovle, 2000, 1);     }),     new Promise((resovle, reject) => {
//    setTimeout(resovle, 3000, 22);     }) ]).then(values => {
// console.log('===>', values) });

const preloadImage = url => new Promise((resovle, reject) => {
  const image = new Image();
  image.onload = resovle;
  image.onerror = reject;
  image.src = url;
});

preloadImage('http://www.baidu.com/img/bd_logo1.png').then((d) => {
    // console.log('sucess.')
  document.body.appendChild(d.target);
}, () => {
  console.log('error');
});
