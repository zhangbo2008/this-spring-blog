/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-11 16:42:49
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-11 17:43:58
*/
// A, B, C

function* progress() {
    yield  setTimeout(() => {
        console.log('A');
    }, 2 * 1000);
    yield setTimeout(() => {
        console.log('B');
    }, 1 * 1000);
    return 'C';
}

const p = progress();
console.log(p.next());

function* add() {
    let y = 0;
    for (let i = 1; true; i += 1) {
        y = yield i + y;
    }
}

const a = add();
var t1 = a.next(0);

var t2 = a.next(t1.value);
var t3 = a.next(t2.value);