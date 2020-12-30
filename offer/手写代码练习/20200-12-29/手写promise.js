/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-29 11:48:16
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-29 15:08:25
*/

const p = new Promise((ok, no) => {
    setTimeout(() => {
        ok('success');
    }, 2 * 100);
});

p.then((res) => {
    console.log(res);
});

const status = {
    pedding: 'pedding',
    fulfilled: 'fulfilled',
    reject: 'reject',
}

// class MyPromise {
//     constructor(exe) {
//         this._status = status.pedding;
//         this._resolveQue = [];
//         this._rejectQue = [];
//         const resolve = (value) => {
//             if (this._status)
//         };
//         const reject = () => {

//         }

//         exe(resolve, reject);
//     }

//     then() {
        
//     }
// }



