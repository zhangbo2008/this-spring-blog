/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-23 19:34:13
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-23 19:37:55
*/
// new关键字的实现
// 1. 利用A的prototype属性创造一个对象
// 2. 利用apply调用A的构造函数this执行刚刚创建的对象
// 3. 返回创建的对象

function MyNew(F, ...rest) {
    let obj = new Object(F.prototype);
    F.apply(obj, rest);
    return obj;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

var x = MyNew(Person, 'xxq', 21);
console.log(x);