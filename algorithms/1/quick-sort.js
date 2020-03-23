/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-23 01:02:54
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-03-23 14:04:53
 */
function QuickSort(arr) {
  console.log(arr.length);
  if (arr.length <= 1) return arr;
  const flag = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] >= flag) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return QuickSort(left).concat(flag, QuickSort(right))
}

const test = [4,3,1,5,7,9,6];

console.log(QuickSort(test));
