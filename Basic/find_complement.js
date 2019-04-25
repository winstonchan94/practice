var findComplement = function(num) {
    var number = num.toString(2);
    var str = '';
    for(let i of number) {
        str += +!(i-0);
    }
    return parseInt(str, 2)
};
//find complement, also extra stuff haha
