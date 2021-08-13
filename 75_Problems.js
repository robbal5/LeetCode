//Two Sum

//Hash (45% Speed, 54% space)
var twoSum = function (nums, target) {
    let targets = {};
    for (let i = 0; i < nums.length; i++) {
        let subTarget = target - nums[i];
        if (targets[subTarget] !== undefined) {
            return [targets[subTarget], i];
        } else {
            targets[nums[i]] = i
        }
    }
    return []
};

//Two for loops (12% speed, 97% space)
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }

};

// Buy and Sell Stock

// One iteration through (13% speed, 74% space)
var maxProfit = function (prices) {
    let maxReturn = 0;
    let currentMin = prices[0];
    for (let i = 1; i < prices.length; i++) {
        let currentDay = prices[i];
        if (currentDay - currentMin > maxReturn) {
            maxReturn = (currentDay - currentMin)
        }
        currentMin = Math.min(currentDay, currentMin)
    }
    return maxReturn;
};

//Contains Duplicates
// One iteration through (22% speed, 73% space)
var containsDuplicate = function (nums) {
    let values = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (values.has(nums[i])) {
            return true
        } else {
            values.add(nums[i])
        }
    }
    return false
};

//Sort first (92% speed, 80.5% space)
var containsDuplicate = function (nums) {
    let sorted = nums.sort((a, b) => {
        return a - b
    })
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) return true;
    }
    return false
};

//Product of array except self

//two nested loops, failed on time
var productExceptSelf = function (nums) {
    let newArr = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                newArr[i] *= nums[j]
            }
        }
    }
    return newArr
};

//two independent loops (time 18%, space 40%)
var productExceptSelf = function (nums) {
    let lefts = new Array(nums.length)
    lefts[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        lefts[i] = lefts[i - 1] * nums[i - 1]
    }

    let right = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        lefts[j] *= right;
        right *= nums[j]
    }
    return lefts
};
