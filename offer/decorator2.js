var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

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
let Math = (_class = class Math {
  add(a, b) {
    return a + b;
  }

}, (_applyDecoratedDescriptor(_class.prototype, "add", [log], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype)), _class);

function log(target, name, descriptor) {
  console.log(target, name, descriptor);
}

const math = new Math();
math.add();
