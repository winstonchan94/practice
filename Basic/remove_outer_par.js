var removeOuterParentheses = function(S) {
    let tmpString = "";
    let bracketCount = 0;
    for(let i = 0; i < S.length; i++) {
        if(S[i] === '(') {
            tmpString += !bracketCount ? '' : '('
            bracketCount++;
        } else {
            bracketCount--;
            tmpString += !bracketCount ? '' : ')'
        }
    }
    return tmpString
};

//remove t he outer parentheses of the thing
