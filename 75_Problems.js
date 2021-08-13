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


//Max Sum Subarray
var maxSubArray = function (nums) {
    let currMax = nums[0];
    let testMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (testMax <= 0 && nums[i] > testMax) {
            testMax = nums[i]
            currMax = currMax > testMax ? currMax : testMax;
        } else {
            testMax += nums[i];
            currMax = testMax > currMax ? testMax : currMax;
        }
        console.log('currMax', currMax)
    }
    return currMax;
};

// Time 60%, space 29%
var maxSubArray = function (nums) {
    let currentMax = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = nums[i]
        } else {
            currentSum += nums[i]
        }

        currentMax = currentSum > currentMax ? currentSum : currentMax;
    }
    return currentMax
};

//Max Product Subarray
// Time 16%, Space 73%
var maxProduct = function (nums) {
    let currMax = Number.NEGATIVE_INFINITY;
    let currProduct = 1;
    let currProduct2 = 1;
    let foundFalse = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            currMax = currMax > 0 ? currMax : 0;
            currProduct = 1;
            foundFalse = false;
            currProduct2 = 1;

        } else {
            currProduct *= nums[i]
            if (foundFalse) {
                currProduct2 *= nums[i]
                currMax = currProduct2 > currMax ? currProduct2 : currMax
            }
            else if (nums[i] < 0) {
                foundFalse = true;
            }

            currMax = currProduct > currMax ? currProduct : currMax
        }
    }
    return currMax;
};

//Time 58%, space 39%
var maxProduct = function (nums) {
    currMin = nums[0];
    currMax = nums[0];
    answer = nums[0];
    let min, max;
    for (let i = 1; i < nums.length; i++) {
        let val = nums[i];
        min = currMin;
        max = currMax;
        currMin = Math.min(val, min * val, max * val);
        currMax = Math.max(val, min * val, max * val);
        answer = Math.max(currMax, answer)
    }
    return answer
};

//Search for Min in rotated sorted array
var findMin = function (nums) {
    console.log(nums)
    if (nums.length <= 2) return Math.min(...nums);
    let middle = Math.floor(nums.length / 2);
    let end = nums[nums.length - 1];
    if (nums[middle] < nums[middle - 1]) {
        return nums[middle]
    } else if (nums[middle] < end) {
        return findMin(nums.slice(0, middle))
    } else {
        return findMin(nums.slice(middle + 1))
    }
};

//recursive
var findMin = function (nums) {
    if (nums.length === 1 || nums[0] < nums[nums.length - 1]) return nums[0]
    let middle = Math.floor(nums.length / 2);
    let start = nums[0];
    if (nums[middle] < nums[middle - 1]) {
        return nums[middle]
    } else if (nums[middle] < start) {
        return findMin(nums.slice(0, middle))
    } else {
        return findMin(nums.slice(middle + 1))
    }
};

//Two pointers
var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] < nums[right]) return nums[left];
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] > nums[right]) {
            left = middle + 1
        } else {
            right = middle
        }
    }
    return nums[left]
};


//DYNAMIC PROGRAMMING
