/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-09-02 12:28:55
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-09-02 16:15:53
 */
// 二叉树遍历: 前序，中序，后续  
// 代码实现包括：递归，非递归实现前中后序遍历
// 二叉树结构:  
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

// 前序遍历  递归  0 1 3 4 2 5 6
function preOrder(root) {
    if (!root) return;
    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right);
}

// 前序遍历 非递归  0 1 3 4 2 5 6
function preOrder2(root) {
    let rt = root;
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack.shift();
        console.log(item.value);
        const left = item.left;
        const right= item.right;
        if (right) {
            stack.unshift(right);
        }
        if (left) {
            stack.unshift(left);
        }
    }
}
// preOrder(root);
preOrder2(root);