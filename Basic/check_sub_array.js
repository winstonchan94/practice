var checkSubarraySum = function(nums, k) {

    if (k === 0) {
        if (nums.length > 1 && nums.filter(Boolean).length ===0 ) return true;
        return false;
    }

    const map = {0: -1};
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map[sum % k] !== undefined && i - map[sum % k] > 1) {
            return true;
        }
        if (map[sum % k] === undefined) {map[sum % k] = i}
    }

    return false;
};
