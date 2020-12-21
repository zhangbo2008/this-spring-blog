/*   
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-21 22:18:07
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-22 01:20:55
*/
// 1. vue key  

// 2.
/**
 * ['1', '2', '3'].map(parseInt)  what & why
 * 1, NaN, NaN
 * 
 * 知识点：
 * 1. [].map((value, key, item) => {})
 * 2. parseInt(string, radius);解析一个字符串并返回指定基数的十进制整数， radix 是2-36之间的整数，表示被解析字符串的基数。radius代表进制。
 * eg: parseInt('123', 5) // 将'123'看作5进制数，返回十进制数38 => 1*5^2 + 2*5^1 + 3*5^0 = 38
 * 
 */

['1', '2', '3', '2'].map((value, key, item) => {
    console.log(parseInt(value, key));
    // 1: 当radius是0的时候，且string不是以0X和0开头，那么就转成10进制，所以结果为10
    // 2: 当radius是1的时候，由于最大的string只能小于1而且，radius是2-36之间的数。所以为NaN
    // 3: 当radius是2的时候，由于最大的string只能小于2，所以为NaN
    // 2: 当radius是3的时候，2*3^0 = 2
})

//  3. 防抖和节流  
// 防抖是一个事件延迟ns执行，如果ns内触发就重新计算时间。
function doubble(fn, time) {
    let timerId = -1;
    let content = this;
    let arg = arguments;
    return function() {
        globalThis.clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.apply(content, arg);
        }, time);
    }
}
let dou = doubble((...arg) => {
    console.log('1', ...arg);
}, 3000);
setInterval(() => {
    dou();
}, 1000);

// 节流是一个事件延迟ns执行，如果ns内触发则取消上一次，只执行最后一次。
function trottle(fn, time) {
    let exe = false;
    let content = this;
    let arg = arguments;
    console.log(arg);
    return function() {
        if (exe) return;
        exe = true;
        setTimeout(() => {
            exe = false;
            fn.apply(content, arg);
        }, time);
    }
}
let tro = trottle(trottle((...arg) => {
    console.log('1', ...arg);
}, 3000));
setInterval(() => {
    tro();
}, 1000);

// 4. 闭包: 一个函数m被调用返回另外一个函数n，n引用了m函数中的变量是的n函数运行时候能引用到变量这就叫做闭包。    
function bibao() {
    let flag = true;
    return function change() {
        console.log(flag);
        flag = !flag;
    }
}

res = bibao();
res(); // true
res(); // false
res(); // true