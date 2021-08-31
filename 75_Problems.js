// ISSUES
//Trees: Maximum Path Sum, Serialize Binary Tree

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

// Number of Steps = Memoization
var climbStairs = function (n) {
    let memo = {}
    function climb(number) {
        if (number == 1) return 1;
        if (number == 0) return 1;
        let firstClimb = memo[number - 1] || climb(number - 1);
        let secondClimb = memo[number - 2] || climb(number - 2)
        memo[number - 1] = firstClimb;
        memo[number - 2] = secondClimb;
        return firstClimb + secondClimb
    }
    return climb(n)
};

//Coin Change

//Memo with recursion
var coinChange = function (coinsTotal, amountTotal) {
    let memo = {};
    function makeChange(coins, amount) {
        if (amount < 0) return -1;
        if (amount === 0) return 0;
        if (coins.includes(amount)) return 1;
        let ways = [];
        let result;
        for (let i = 0; i < coins.length; i++) {
            if (memo[amount - coins[i]] != undefined) {
                result = memo[amount - coins[i]]
            } else {
                result = makeChange(coins, amount - coins[i]);
                memo[amount - coins[i]] = result
            }
            if (result !== -1) {
                ways.push(result + 1)
            }
        }
        if (ways.length == 0) {
            return -1;
        } else {
            return Math.min(...ways)
        }
    }
    result = makeChange(coinsTotal, amountTotal)
    console.log(memo)
    return result;
};

//Longest Increasing Subsequence
var lengthOfLIS = function (nums) {
    let tails = [nums[0]];
    let value, placed;
    for (let i = 1; i < nums.length; i++) {
        value = nums[i];
        placed = false;
        for (let j = 0; j < tails.length; j++) {
            if (value <= tails[j]) {
                tails[j] = value;
                placed = true;
                break;
            }
        }
        if (!placed) tails.push(value)
    }
    console.log(tails)
    return tails.length
};

//Word Break
var wordBreak = function (s, wordDict) {
    let wordSet = new Set(wordDict)
    let results = new Array(s.length + 1).fill(false)
    results[0] = true;
    for (let i = 0; i < s.length; i++) {
        if (!results[i]) continue;
        for (let j = 1; j < s.length + 1; j++) {
            if (wordSet.has(s.slice(i, j))) {
                results[j] = true;
            }
        }
    }
    return results[results.length - 1]
};

// Intervals

var insert = function (intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval]
    }
    let start;
    let inserted = false;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] >= newInterval[0] && newInterval[1] >= intervals[i][0]) {
            intervals[i] = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])]
            start = i;
            inserted = true;
            break;
        }
    }
    if (!inserted) {
        intervals.push(newInterval)
        intervals.sort((a, b) => {
            return a[0] - b[0]
        })
        return intervals
    }
    console.log(intervals)
    let newSet = [intervals[0]];
    for (let i = 0; i < intervals.length; i++) {
        let lastInterval = newSet[newSet.length - 1];
        if (intervals[i][0] <= lastInterval[1]) {
            newSet[newSet.length - 1] = [lastInterval[0], Math.max(intervals[i][1], lastInterval[1])]
        } else {
            newSet.push(intervals[i])
        }
    }
    return newSet;
};

//TREES
var maxDepth = function (root) {
    let currentMaxDepth = 0;
    function getDepth(node, value) {
        if (node == null) {
            currentMaxDepth = value > currentMaxDepth ? value : currentMaxDepth;
        } else {
            getDepth(node.left, value + 1)
            getDepth(node.right, value + 1)
        }
    }

    getDepth(root, 0);
    return currentMaxDepth;
};

var isSameTree = function (p, q) {
    let pQueue = [p]
    let qQueue = [q]
    let pNode, qNode, pVal, qVal
    while (pQueue.length > 0) {
        pNode = pQueue.shift();
        qNode = qQueue.shift();
        if (qNode == null && pNode == null) {
            continue
        }
        pVal = pNode ? pNode.val : null;
        qVal = qNode ? qNode.val : null;
        if (pVal == qVal) {
            if (pVal != null) pQueue.push(pNode.left, pNode.right)
            if (qVal != null) qQueue.push(qNode.left, qNode.right)
        } else {
            return false
        }

    }
    return pQueue.length == qQueue.length
};

var invertTree = function (root) {
    if (root == null) return null;
    let right = invertTree(root.right)
    let left = invertTree(root.left)
    root.left = right
    root.right = left
    return root
};

var levelOrder = function (root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    let currNode;
    let nextQueue = [];
    let currResult = [];
    while (queue.length > 0) {
        queue.forEach((node) => {
            currResult.push(node.val)
            if (node.left) {
                nextQueue.push(node.left)
            }
            if (node.right) nextQueue.push(node.right)
        })
        result.push(currResult)
        queue = nextQueue;
        nextQueue = [];
        currResult = [];
    }
    return result;
};

var isSubtree = function (root, subRoot) {
    function isSame(node1, node2) {
        if (node1 == null && node2 == null) return true;
        let oneVal = node1 ? node1.val : null;
        let twoVal = node2 ? node2.val : null;
        if (oneVal == twoVal) {
            return isSame(node1.left, node2.left) && isSame(node1.right, node2.right)
        } else {
            return false;
        }
    }

    let queue = [root];
    let currNode;
    while (queue.length > 0) {
        currNode = queue.shift();
        if (currNode.val == subRoot.val) {
            if (isSame(currNode, subRoot)) {
                return true
            }
        }
        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right)
    }
    return false;
};

function preorderTraversal(root) {
    let values = [];
    function getValue(node) {
        if (node == null) return;

        values.push(node.val)
        getValue(node.left)
        getValue(node.right)
    }
    getValue(root)
    return values;
}

function inorderTraversal(root) {
    let values = [];
    function getValue(node) {
        if (node == null) return;
        
        getValue(node.left)
        values.push(node.val)
        getValue(node.right)
    }
    getValue(root)
    return values;
}

function postorderTraversal(root) {
    let values = [];
    function getValue(node) {
        if (node == null) return;

        getValue(node.left)
        getValue(node.right)
        values.push(node.val)
    }
    getValue(root)
    return values;
}

//build tree from pre and inorder arrays
var buildTree = function (preorder, inorder) {
    function makeTree(pre, inor) {
        if (pre.length == 0) {
            return null
        }
        let head = new TreeNode(pre[0]);
        let rootPos = inor.indexOf(pre[0]);
        head.left = makeTree(pre.slice(1, 1 + rootPos), inor.slice(0, rootPos))
        head.right = makeTree(pre.slice(rootPos + 1), inor.slice(rootPos + 1))
        return head;
    }
    return makeTree(preorder, inorder)

};

//Valid BST
var isValidBST = function (root) {
    function checkNode(node, minimum, maximum) {
        if (node == null) return true;
        if (node.val <= minimum || node.val >= maximum) {
            return false;
        }
        return (checkNode(node.left, minimum, node.val) && checkNode(node.right, node.val, maximum))
    }
    return checkNode(root);
};

//Kth smallest
var kthSmallest = function (root, k) {
    let values = [];
    function traverse(node) {
        if (node == null) return;
        traverse(node.left)
        if (values.length >= k) return;
        values.push(node.val)
        if (values.length >= k) return;
        traverse(node.right)
    }
    traverse(root)
    return values[k - 1]
};

//Lowest common Ancestor
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null;
    let queue = [[root, []]]
    let pAncestors, qAncestors, currNode, prev;
    let ancestors;
    while (!pAncestors || !qAncestors) {

        [currNode, prev] = queue.shift()
        ancestors = prev.concat(currNode)
        if (currNode == p) {
            pAncestors = ancestors
        }
        if (currNode == q) {
            qAncestors = ancestors
        }
        if (currNode.left) queue.push([currNode.left, ancestors])
        if (currNode.right) queue.push([currNode.right, ancestors])
    }

    let minLength = Math.min(pAncestors.length, qAncestors.length)
    for (let i = 0; i < minLength; i++) {
        if (pAncestors[i] !== qAncestors[i]) {
            return pAncestors[i - 1] ? pAncestors[i - 1] : pAncestors[i]
        }
        if (i == minLength - 1) {
            return pAncestors[i]
        }
    }
};

var lowestCommonAncestor = function (root, p, q) {
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left
        } else if (p.val > root.val && q.val > root.val) {
            root = root.right
        } else {
            break
        }
    }
    return root;
}