var findMode = function(root) {
    let curVal;
    let curCount = 0, maxCount = 0, modeCount = 0;
    let modes = [];

    function handle(val){
        if(val !== curVal){
            curVal = val;
            curCount = 0;
        }
        curCount++;
        if(curCount > maxCount){
            maxCount = curCount;
            modeCount = 1;
        }else if(curCount === maxCount){
            modes[modeCount] = curVal;
            modeCount++;
        }
    }

    function inorder(root){
        if(root){
            inorder(root.left);
            handle(root.val);
            inorder(root.right);
        }
    }

    //FirstPass
    inorder(root);

    //SecondPass
    modes = new Array(modeCount);
    curCount = 0, modeCount = 0
    inorder(root);
    return modes;
};
//find the mode of a binary tree ( most prevalent number/ value)
