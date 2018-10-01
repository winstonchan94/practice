//Two strings, J and S. Find out what you have in S that is also in J.

var numJewelsInStones = function(J, S) {
    let curr;
    let total = 0;

    for (let i = 0; i < S.length; i++) {
        curr = S.charAt(i);
        if (J.includes(curr)) {
            total++;
        }
    }
    return total;
};
