/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-09-02 12:28:55
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-09-06 02:22:43
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
// preOrder2(root);

// 中序遍历 递归 3 1 4 0 5 2 6
function middleOrder(root) {
    if (!root) return;
    middleOrder(root.left);
    console.log(root.value);
    middleOrder(root.right);
}

// 中序遍历 非递归 3 1 0 5 2 6
function middleOrder2(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack[stack.length - 1];
        const right = item.right;
        const left = item.left;
        if (left && !left.look) {
            left.look = true;
            stack.push(left);
        } else {
            stack.pop();
            console.log(item.value);
            right && stack.push(right);
        }
    }
}

// middleOrder(root);
// middleOrder2(root);

// 后序遍历 递归 3 4 1 5 6 2 0
function afterOrder(root) {
    if (!root) return;
    afterOrder(root.left);
    afterOrder(root.right);
    console.log(root.value);
}

// 后序遍历 非递归 3 4 1 5 6 2 0
function afterOrder2(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack[stack.length - 1];
        // console.log(item.value);
        const left = item.left;
        const right = item.right;
        // console.log(left.value, right.value);
        if (left && !left.look) {
            left.look = true;
            stack.push(left);
        } else if (right && !right.look) {
            right.look = true;
            stack.push(right);
        } else if ((!left && !right) || (left && left.look && right && right.look)) {
            stack.pop();
            console.log(item.value);
        } 
        // console.log(stack);
        // break;
    }
}

// afterOrder(root);
afterOrder2(root);
