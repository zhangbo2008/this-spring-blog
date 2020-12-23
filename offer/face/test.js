/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-22 16:04:28
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-22 16:13:16
*/


function handleCB(i) {
    const res = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 0);
    });
    // console.log(i);
    res.then((res) => {
        console.log(i);
    })
}

var i = 0;
while(i < 10) {
    i += 1;
    handleCB(i);
}

// for (let i = 0; i < 10; i += 1) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// }