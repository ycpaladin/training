
const { compose, curry, head, toUpper, prop } = require('ramda');
const Task = require('data.task')
// 写一个函数，先 getPost 获取一篇文章，然后 toUpperCase 让这片文章标题变为大写
// data.ta
// getPost :: Int -> Future({id: Int, title: String})
var getPost = function (i) {
    return new Task(function (rej, res) {
        setTimeout(function () {
            res({ id: i, title: 'Love them futures' })
        }, 300)
    });
}



// const xx = compose(toUpper, prop('title'), getPost);
const xx = getPost(1).map(prop('title')).map(toUpper).fork(error => {
    console.log(error)
}, data => {
    console.log(data)
});
// console.log(xx)















