/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-22 12:01:34
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-22 14:58:12
*/
// function testable(target) {
//     target.isTest = true;
// }

// @testable
// class Test {

// }

// console.log(Test.isTest);

// class MyClass {
//     @unenumerable
//     @readonly
//     method() {
        
//     }
// }

// function readonly(target, prop, descriptor) {
//     descriptor.writable = false;
//     return descriptor;
// }

// function unenumerable(target, prop, descriptor) {
//     descriptor.enumerable = false;
//     return descriptor;
// }

class Math {
    @log
    add(a, b) {
        return a + b;
    }
}

function log(target, name, descriptor) {
    console.log(target, name, descriptor);
}

const math = new Math();
math.add();