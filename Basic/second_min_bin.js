//find second minimum value in binary tree 
var findSecondMinimumValue = function(root) {
    let min = [],
        stack = []

    stack.push(root)
    while(stack.length != 0) {
        let curr = stack.shift()

        if(curr.left) stack.push(curr.left)
        if(curr.right) stack.push(curr.right)

       if(min.length > 2) {
           min.pop()
       }
        if(!min.includes(curr.val)) min.push(curr.val)
        min.sort((a, b) => a - b)
    }
    return min[1] ? min[1] : -1
};
