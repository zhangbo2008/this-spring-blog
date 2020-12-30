/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-29 16:00:43
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-29 16:05:45
*/
function MyNew(F, ...arg) {
    const obj = new Object();
    F.apply(obj, arg);
    obj.__proto__ = F.prototype;
    return obj;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(this.name);
}

const x = MyNew(Person, 'xxq', '21');
console.log(x.sayHello());