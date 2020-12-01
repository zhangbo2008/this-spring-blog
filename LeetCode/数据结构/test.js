/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-11-30 13:00:04
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-01 13:17:05
*/
// 二叉树结构
const root = {
    value: '0',
    left: {
        value: '1',
        left: {
            value: '3'
        },
        right: {
            value: '4'
        }
    },
    right: {
        value: '2',
        left: {
            value: '5'
        },
        right: {
            value: '6'
        }
    }
};
// 前序
function preOrder(root) {
  if (!root) return;
  console.log(root.value);
  preOrder(root.left);
  preOrder(root.right);
}

function preOrder2(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack.pop();
        console.log(item.value);
        if (item.right) stack.push(item.right);
        if (item.left) stack.push(item.left);
    }
}

// preOrder(root);
// preOrder2(root);

function midOrder(root) {
    if (!root) return;
    midOrder(root.left);
    console.log(root.value);
    midOrder(root.right);
}

function midOrder2(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack[stack.length - 1];
        if (item.left && !item.left.visit) {
            item.left.visit = true;
            stack.push(item.left);
        } else {
            stack.pop();
            console.log(item.value);
            item.right && stack.push(item.right);
        }
    }
}

midOrder(root);
midOrder2(root);