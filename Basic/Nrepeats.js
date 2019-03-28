//2n length array has n elements of the same value. find value
var repeatedNTimes = function(A) {
    let seen = {};
    for (let i = 0; i < A.length + 1; i++) {
        if (!seen[A[i]]) {
            seen[A[i]] = 1;
        } else {
            seen[A[i]]++;
            if (seen[A[i]] > 1) {
                return A[i];
            }
        }
    }
};
