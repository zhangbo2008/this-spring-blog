<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-08 15:38:40
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-09 20:34:11
-->
## 基本类型  
最新的 ECMAScript 标准定义了 8 种数据类型:

7种原始类型：undefined, Null, boolean，number，string，bigint，symbol  
object  

NaN是nubmer类型  
bigint:  
使用：  
- 数字后面加n，例如 2n
- 构造函数 BigInt(100)
由于js采用的IEEE-753存储标准，也就是双精度64位，对应其他语言的float类型，所以导致他的精度范围在-(2^53 - 1) ~ (2^53 - 1)，这就导致超过这个值得整数进行运算就会出错，简单例子：  

```
99999999999999999 + 100 = 100000000000002000 // 浏览器会输出错误的数字  
```
这在银行领域或者其他数字精度要求比较高的领域会出现严重事故。   
出现这个问题的原因就是因为超过了js的精度范围。有了bigint就可以解决这个问题：  

```
99999999999999999n + 100n = 100000000000001999n // 浏览器会输出错误的数字  
```

Number.MAX_SAFE_INTEGER：js可以操作最大安全int  
Number.Min_SAFE_INTEGER：js可操作最小安全int  

Symbol  
使用：Symbol([description])   
类型判断：typeof Symbol = symbol  

eg:  
```
定义：var x = {[Symbol('x')]: 1, [Symbol('x')]: 2}
取值：Object.getOwnPropertySymbols(x) // [Symbol(x), Symbol(x)]
```  

## 类型检测  

### 1. typeof 输入一个原始数据反馈一个字符串 : 可以检测出es5：undefined，number，boolean，string，function，object，es6：symbol，bigint   

注：  
typeof null -> "object"  
typeof Array -> "object"
typeof NaN -> "number"

eg:  

```

```  

### 2. instanceof  返回值是boolean。使用 obj instanceof Object。可以检测出左侧的obj的prototype是否是右侧的Object。  

eg:  

```
[1,2] instanceof Array 返回 true  
new Object() instanceof Object 返回true
```  

### 3. Object.prototype.toString.apply: 返回字符串  
eg:  
```
Object.prototype.toString.apply(NaN)
"[object Number]"
Object.prototype.toString.apply('123');
"[object Number]"
Object.prototype.toString.apply('123');
"[object String]"
Object.prototype.toString.apply(true);
"[object Boolean]"
Object.prototype.toString.apply(null);
"[object Null]"
Object.prototype.toString.apply(undefined);
"[object Undefined]"
Object.prototype.toString.apply(new Object());
"[object Object]"
Object.prototype.toString.apply(1n);
"[object BigInt]"
Object.prototype.toString.apply(Symbol('ff'));
"[object Symbol]"
Object.prototype.toString.apply(() => {});
"[object Function]"
Object.prototype.toString.apply([]);
"[object Array]"
```  






## ES6相关  

### 字符串拓展  

#### 字符串模板  

```
const name = 'xiuquanxu';
const temp = `hello, my name is ${name}`;  
```  

#### 函数参数拓展  

#### 函数参数的默认值  
ES6之前不能给给函数传默认参数
```
function log(name, age=12) {
    console.log(' name:', name, ' age:', age);
}
log('xxq');
// name:xx1 age:12
```  

#### rest参数  
ES6引入了rest参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。  
```
function add(...values) {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    return sum;
}
add(1,2,3);

static Arr2Str(...args) {
    const len = args.length;
    let str = `${DateFormatter.format(new Date())}`;
    for (let i = 0; i < len; i += 1) {
    str += ` ${args[i]}`;
    }
    return str;
}
```  

#### 严格模式  

规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。  

#### name属性  

这个属性很早就有了，但是直到ES6才被纳入标准。  

```
var f = function() {}
f.name // es5 null
f.name // f
```  

#### 箭头函数  

函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。  

```  
eg1:  
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0
// 这个离职中s1使用箭头函数，所以this执行timer，s2是普通函数，执行this指向调用者也就是window

eg2:  

const cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
}

cat.jumps();
// NaN，由于箭头函数，此时指向定义时候的作用域，这个时候箭头函数定义在window下所以this.live为undefined -- 就是NaN  

eg3:  

var button = document.getElementById('press');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});

// 此时click中的this由于是箭头函数指向定义时作用域，所以执向window。如果是function这个时候就是运行时执行调用的对象，所以就是执行button
```  

#### 函数参数和调用尾加逗号  

```
function clownsEverywhere(
  param1,
  param2,
) { /* ... */ }

clownsEverywhere(
  'foo',
  'bar',
);
```  

#### Function.prototype.toString()  

toString()方法，明确要求返回一模一样的原始代码  

```
function /* foo comment */ foo () {}

foo.toString()
// "function /* foo comment */ foo () {}"
```   

#### 二进制和八进制表示方法   

0b表示二进制  
0o表示八进制  
0x表示十六进制（并不是es6规定）  
eg:  
```
二进制1：0b1 === 1 // true
二进制3：0b11 === 3 // true  
八进制1： 0o1 === 1 // true
八进制9：0o11 === 9  // true
```

#### Number.isFinite()和Number.isNaN  

Number.isFinite:  判断是否数字有界限  
eg:
```
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false
```  

Number.isNaN:   判断是否是NaN  

eg:  
```
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true
```  

相比较isFinite和isNaN：  
isFinite先调用Number()然后在判断，isNaN只判断里面的数是不是NaN。  
eg：  
```
Number.isFinite('15'); // false
isFinite('15') // true 
Number.isFinite(15); // false
isFinite('15') // true   

Number.isNaN(1 / 0); // true
isNaN(NaN); // true  
Number.isNaN(NaN) // true
```  

#### Number.parseInt(), Number.parseFloat()
原来这两个方法是全局方法，现在移植到了Number上，为了后面模块化管理。  

#### Number.isInteger()  
Number.isInteger()用来判断一个数值是否为整数。
JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。  

#### ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量  

#### ES6 引入BigInt  

### 数组拓展  

#### 1. 扩展运算符  
它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列  
```
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

<!-- 减少for循环书写 -->
[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]
```  

