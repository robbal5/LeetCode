// 14 Longest Common Prefix
var longestCommonPrefix = function (strs) {
    var testValue;
    if (strs.some(word => word == '')) return '';
    if (strs.every(word => word[0] === strs[0][0])) {
        testValue = strs[0][0]
    } else {
        return ''
    }

    for (let i = 1; i < strs[0].length; i++) {
        let newVal = testValue + strs[0][i]
        if (strs.every(word => word.startsWith(newVal))) {
            testValue = newVal
        } else {
            return testValue
        }
    }
    return testValue
};

// 20 Valid Parentheses

var isValid = function (s) {
    let opening = {
        '(': 1,
        '[': 2,
        '{': 3
    }
    let closing = {
        ')': 1,
        ']': 2,
        '}': 3
    }

    let parentheses = [];
    for (let i = 0; i<s.length; i++) {
        if (opening[s[i]]) {
            parentheses.push(s[i])
        } else if (closing[s[i]] == opening[parentheses.pop()]) {
            continue;
        } else {
            return false;
        }
    }
    if (parentheses.length > 0) return false;
    return true;
};

//953 Alien Sorted
var isAlienSorted = function (words, order) {
    let lengths = words.map(word => word.length);
    let maxLength = Math.max(...lengths)
    for (i = 0; i < words.length - 1; i++) {
        let firstWord = words[i];
        let secondWord = words[i + 1];
        for (let j = 0; j < firstWord.length; j++) {
            let wordOneVal = firstWord[j] ? order.indexOf(firstWord[j]) : undefined;
            let wordTwoVal = secondWord[j] ? order.indexOf(secondWord[j]) : undefined;

            if (wordTwoVal == undefined) return false;
            if (wordOneVal == undefined) break;
            let value = wordOneVal - wordTwoVal;
            if (value == 0) {
                continue;
            } else if (value < 0) {
                break;
            } else {
                return false
            }
        }
    }
    return true;
}

//1006 Clumsy Factorial
var clumsy = function (n) {
    let ms = [];
    let ks = [];
    let subm = 1;

    for (i = n; i > 0; i--) {
        let diff = n - i;
        switch (diff % 4) {
            case 0:
                subm *= i;
                if (i == 1) ms.push(subm);
                break;
            case 1:
                subm *= i;
                if (i == 1) ms.push(subm);
                break;
            case 2:
                subm = Math.floor(subm / i);
                ms.push(subm);
                subm = 1;
                break
            case 3:
                ks.push(i);
                break;
        }
    }
    let result = 0;
    let start = true;
    while (ms.length != 0) {
        console.log(result)
        if (start) {
            result += ms.shift();
            start = false;
        } else {
            result -= ms.shift()
        }
        if (ks.length > 0) {
            result += ks.shift();
        }
    }
    return result;

};

//1704 Determine if String Halves are Alike
var halvesAreAlike = function (s) {
    let vowels = 'aeiouAEIOU'.split('');
    let midpoint = s.length / 2
    let firstHalf = s.slice(0, midpoint)
    let secondHalf = s.slice(midpoint)
    let testArr = [firstHalf, secondHalf]
    testArr = testArr.map(half => {
        return half.split('').filter(letter => vowels.includes(letter)).length
    })
    return testArr[0] == testArr[1]
};

//398 Random Pick Index
var Solution = function (nums) {
    this.nums = nums
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    let positions = [];

    for (i = 0; i < this.nums.length; i++) {
        if (this.nums[i] == target) {
            positions.push(i)
        }
    }

    return positions[Math.floor(Math.random() * positions.length)]
};

//155 Min Stack
var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.stack.length == 0) {
        this.stack.push({ val: val, min: val })
    } else {
        let currMin = this.stack[this.stack.length - 1].min
        if (val < currMin) {
            this.stack.push({ val: val, min: val })
        } else {
            this.stack.push({ val: val, min: currMin })
        }
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let value = this.stack.pop()
    return value.val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let value = this.stack[this.stack.length - 1]
    return value.val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack[this.stack.length - 1].min
};

//167 Two Sum II
var twoSum = function (numbers, target) {
    let i = 0;
    let j = numbers.length - 1
    while (j > i) {
        if (numbers[i] + numbers[j] == target) {
            return ([i + 1, j + 1])
        } else if (numbers[i] + numbers[j] > target) {
            j--
        } else {
            i++
        }
    }
};

//384 Shuffle an Array

//Fisher Yates algorithm is better implementation. Loop through once, swapping current index with random one after it
var Solution = function (nums) {
    this.nums = nums;

};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let shuffled = []
    let copy = this.nums.slice();
    let index;
    let num;
    while (copy.length > 0) {
        index = Math.floor(Math.random() * copy.length);
        console.log(index)
        num = copy.splice(index, 1);
        shuffled.push(num)
    }
    return shuffled;
};

//1753 Maximum Score removing stones
var maximumScore = function (a, b, c) {
    let max, others, min;
    if (a >= b && a >= c) {
        max = a;
        others = [b, c]
        min = c > b ? b : c;
    } else if (b >= a && b >= c) {
        max = b;
        others = [a, c];
        min = a > c ? c : a;
    } else {
        max = c;
        others = [a, b]
        min = a > b ? b : a;
    }

    if (others[0] + others[1] <= max) {
        return others[0] + others[1]
    } else {
        return max + (Math.floor((others[0] + others[1] - max) / 2))
    }

};

//Least common ancestor, deepest node in binary

let deepestLevel = -1;
let deepestNodes = [];

function findDeepest(root, level) {
    let nextLevel = level + 1
    if (root) {
        findDeepest(root.left, nextLevel)

        if (level = deepestLevel) {
            deepestNodes.push(root)
        } else if (level > deepestLevel) {
            deepestNodes = [root];
        }
        findDeepest(root.right, nextLevel)
    }
}

function deepestNodes(root) {
    findDeepest(root, 0);
    return deepestNodes;
}

function leastCommonAncestor(root) {
    let result = deepestNodes(root);
    if (result.length == 1) {
        return result[0].val
    } 
    let firstParent = result[0].parent;
    let secondParent = reslut[1].parent;
    while (firstParent != secondParent) {
        firstParent = firstParent.parent;
        secondParent = secondParent.parent;
    }

    return firstParent;

}

// OR
 function lcaDeepestLeaves(root) {
     let maxLevel = -1;
     let answer = root;
     function dfs(node, level) {
         if (level > maxLevel) {
             maxLevel = level;
         }

         if (!node) {
             return level
         }

         let left = dfs(node.left, level + 1);
         let right = dfs(node.right, level + 1);
         if (left == right && right == maxLevel ) {
             answer = node;
         }
         return left > right ? left : right;
     }

     dfs(root, 0);
     return answer;
 }


 // Problem 3, add Two Numbers
 function addTwoNumbers(l1, l2) {
     let first_node = l1
     let second_node = l2
     let sum_node = null
     let next_node
     let new_value
     let remainder = 0
     while ( first_node|| second_node){
         first_value = first_node ? first_node.val : 0;
         second_value = second_node ? second_node.val : 0;
         new_value = first_value + second_value + remainder
         if (new_value > 9) {
            remainder = 1
            new_value = new_value % 10
         } else {
             remainder = 0
         }
         if (sum_node) {
             next_node.next = new ListNode(new_value)
             next_node = next_node.next
         } else {
             sum_node = new ListNode(new_value)
             next_node = sum_node
         }
         first_node = first_node ? first_node.next : null
         second_node = second_node ? second_node.next : null
     }
     if (remainder == 1) {
         next_node.next = new ListNode(1)
     }

     return sum_node 
 }

 // Problem 4, Longest Substring w/o repeating

var lengthOfLongestSubstring = function (string) {
    if (string.length == 0) return 0
    let firstMarker = 0
    let secondMarker = 0
    let maxCount = 1
    let currentCount = 1
    let uniqueChars = {}
    uniqueChars[string[firstMarker]] = firstMarker
    while (secondMarker < string.length - 1) {
        secondMarker += 1
        if (string[secondMarker] in uniqueChars) {
            uniqueChars = filterObjectByIndex(uniqueChars, uniqueChars[string[secondMarker]])
            // console.log(uniqueChars)
            uniqueChars[string[secondMarker]] = secondMarker
            currentCount = Object.values(uniqueChars).length
        } else {
            uniqueChars[string[secondMarker]] = secondMarker
            currentCount += 1
            maxCount = maxCount > currentCount ? maxCount : currentCount
        }
        console.log(string[secondMarker])
        console.log(currentCount)
    }
    return maxCount
};

var filterObjectByIndex = function (object, index) {
    let newVal = Object.keys(object)
        .filter(key => object[key] > index)
        .reduce((res, key) => Object.assign(res, { [key]: object[key] }), {})
    // console.log(newVal)
    return newVal
}

// Better solution, two pointer and array
var lengthOfLongestSubstring = function (s) {
    let a = []
    let maximum = 0;
    let i = 0;
    let j = 0;
    while (i < s.length && j < s.length) {
        console.log('i is ', i)
        console.log('j is ', j)
        console.log(a)
        console.log('------')
        if (!a.includes(s[j])) {
            a.push(s[j])
            maximum = Math.max(maximum, a.length)
            j++;
        }
        else {
            a.shift(s[i])
            i++;
        }
    }
    return maximum
}

// Total Matches, problem 1688
var numberOfMatches = function (n) {
    totalMatches = 0
    while (n > 1) {
        if (n % 2 == 1) {
            totalMatches += ((n - 1) / 2 + 1)
            n = (n - 1) / 2
        }
        else {
            totalMatches += n / 2
            n = n / 2
        }

    }
    return totalMatches
};

// Problem 673, Number of Longest Increasing Subsequences

//35 Search Input Position
var searchInsert = function (nums, target) {
    console.log(nums)
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    let middle = Math.floor(nums.length / 2)
    if (nums[middle] == target) {
        return middle
    } else if (nums[middle] < target) {
        if (nums[middle + 1] > target) return middle + 1;
        return middle + 1 + searchInsert(nums.slice(middle + 1), target)
    } else {
        if (nums[middle - 1] < target) return middle;
        return searchInsert(nums.slice(0, middle), target)
    }
};

// Problem 1367 Linked List in Binary Tree

var isSubPath = function (head, root) {
    let count = 0;
    let headTester = head;
    while (headTester) {
        count += 1
        headTester = headTester.next
    }
    let valueNodes = [];
    let stack = [root];
    let found = false;
    let testNode;
    let startList = head;
    while (stack.length > 0) {
        testNode = stack.pop();
        if (testNode.right) stack.push(testNode.right)
        if (testNode.left) stack.push(testNode.left)
        if (testNode.val == head.val) {
            found = true;
            valueNodes.push(testNode)
        }
    }
    if (!found) return false;
    let gotIt = false
    let nextNodes
    let testValue = startList.next
    while (valueNodes.length > 0 && testValue) {
        gotIt = false
        nextNodes = []
        valueNodes.forEach(node => {
            if (node.right && node.right.val == testValue.val) {
                nextNodes.push(node.right)
                gotIt = true
            }
            if (node.left && node.left.val == testValue.val) {
                nextNodes.push(node.left)
                gotIt = true
            }

        })
        if (gotIt) {
            valueNodes = nextNodes
            testValue = testValue.next
        } else {
            return false
        }
    }
    return !testValue;

};

// Problem 83 Remove Duplicates
var deleteDuplicates = function (head) {
    if (!head) return null
    let seen = [head.val]
    let testNode = head
    let start = new ListNode(head.val)
    let currNode = start
    while (testNode) {
        if (seen.includes(testNode.val)) {

        } else {
            seen.push(testNode.val);
            currNode.next = new ListNode(testNode.val)
            currNode = currNode.next
        }
        testNode = testNode.next
    }

    return start

};

//1262 Closest Divisor
var closestDivisors = function (num) {
    let first = Math.ceil(Math.sqrt(num))
    let second = first
    let product;
    let diff;
    while (first > 0 && second <= num + 1) {
        product = first * second;
        diff = product - num
        if (diff > 0 && diff <= 2) {
            return [first, second]
        } else if (diff > 2) {
            first -= 1
        } else {
            second += 1
        }
    }
};

// 1047 Remove Adjacent Duplicates from string
var removeDuplicates = function (s) {
    let stack = [s[0]];
    let index = 1
    while (index < s.length) {
        if (stack[stack.length - 1] == s[index]) {
            stack.pop()
            index += 1
            continue;
        }
        stack.push(s[index])
        index += 1
    }
    return stack.join('')

};

//1470 Shuffle given array
var shuffle = function (nums, n) {
    let newArr = [];
    let start = 0;
    let secondMarker = n
    while (start < n) {
        newArr.push(nums[start]);
        newArr.push(nums[secondMarker]);
        start++
        secondMarker++
    }
    return newArr
};

//1078 Occurrences After Bigram
var findOcurrences = function (text, first, second) {
    let words = text.split(' ');
    let results = [];
    let start = 0;
    while (start < words.length - 2) {
        if (words[start] == first && words[start + 1] == second) {
            results.push(words[start + 2])
        }
        start++
    }
    return results
};

var getMinimumDifference = function (root) {
    let values = [];
    var dfs = function (node) {
        if (node != null) {
            dfs(node.left)
            values.push(node.val)
            dfs(node.right)
        }
    }
    dfs(root)
    let minDiff = values[1] - values[0]
    let start = 1;
    while (start < values.length - 1) {
        if (values[start + 1] - values[start] < minDiff) {
            minDiff = values[start + 1] - values[start]
        }
        start++
    }
    return minDiff
};


var connect = function (root) {
    let queue = [root];
    let rowTotal = 1;
    let newQueue
    while (queue.length > 0) {
        newQueue = [];
        queue.forEach((node, idx) => {
            if (!node) return
            if (node.left) {
                newQueue.push(node.left);
                newQueue.push(node.right);
            }
            if (queue[idx + 1]) {
                node.next = queue[idx + 1]
            }
        })
        queue = newQueue;
    }
    return root;

};

var validIPAddress = function (IP) {
    let check4 = checkIP4V(IP);
    let check6 = checkIP6V(IP);
    if (check4) {
        return 'IPv4'
    } else if (check6) {
        return 'IPv6'
    } else {
        return 'Neither'
    }

};

function checkIP4V(testAddress) {
    let addressArr = testAddress.split('.');
    if (addressArr.length != 4) return false;
    let accurate = true;
    let numRep;
    addressArr.forEach(num => {
        numRep = parseInt(num)
        if (numRep <= 255 && numRep >= 0 && num.length == numRep.toString().length) {
            return
        } else {
            accurate = false
        }
    })
    return accurate;
}

function checkIP6V(testAddress) {
    let validChars = '0123456789abcdefABCDEF'
    let addressArr = testAddress.split(':');
    if (addressArr.length != 8) return false;
    let accurate = true;
    addressArr.forEach(spot => {
        if (spot.length < 1 || spot.length > 4) {
            accurate = false;
        }
        spot.split('').forEach(char => {
            if (!validChars.includes(char)) {
                accurate = false;
            }
        })
    })
    return accurate;
}

var selfDividingNumbers = function (left, right) {
    let selfDividers = [];
    let numString;
    while (left <= right) {
        numString = left.toString();
        if (numString.length == 1) {
            selfDividers.push(parseInt(numString))
        } else if (numString.split('').every(char => {
            return left % parseInt(char) == 0
        })) {
            selfDividers.push(parseInt(numString))
        }
        left += 1;
    }
    return selfDividers;

};

[1,1,3,4,10]


// Combination of sorting and greedy
// 1798 Max number of consecutive values
function getMaxConsecutive(coins) {
    const length = coins.length;
    coins.sort((a,b) => {return a - b });
    if (coins[0] > 1) return 1;
    let max = coins[0];
    for (let i = 1; i<length; i++) {
        if (coins[i] > max + 1) return max + 1;
        max += coins[i]
    }
    return max + 1
}
//Problem 1909
var canBeIncreasing = function (nums) {
    let reverse = nums.slice().reverse();
    let startNum = nums[0];
    let endNum = reverse[0];
    let errors = 0;
    let endErrors = 0;
    for (let i = 1; i < nums.length; i++) {
        if (startNum < nums[i]) {
            startNum = nums[i]
        } else {
            errors += 1;
        }
        if (endNum > reverse[i]) {
            endNum = reverse[i]
        } else {
            endErrors += 1
        }
    }
    console.log(errors, endErrors)
    if (endErrors < 2 || errors < 2) return true;
    return false;
};

var numSteps = function (s) {
    let num = 0;
    let reverseString = s.split('').reverse().join('');
    let multiplier = 1;
    for (i = 0; i < reverseString.length; i++) {
        if (reverseString[i] == '1') {
            num += multiplier;
        }
        multiplier *= 2
    }
    let steps = 0;
    while (num != 1) {
        steps += 1
        if (num % 2 == 0) {
            num /= 2
        } else {
            num += 1
        }
    }
    return steps;
};

var numSteps = function (s) {
    let steps = 0;
    let currLength;
    let carry;
    let sArr;
    let sample;
    while (s != '1') {
        steps += 1;
        currLength = s.length;
        if (s[currLength - 1] == '0') {
            sample = s.split('');
            sample.pop();
            s = sample.join('')
        } else {
            sArr = s.split('')
            for (let i = currLength - 1; i >= 0; i--) {
                if (sArr[i] == '1') {
                    sArr[i] = '0';
                } else {
                    sArr[i] = '1';
                    break;
                }
            }
            if (sArr[0] == '0') sArr.unshift('1')
            s = sArr.join('')
        }
    }
    return steps;
};

var numIdenticalPairs = function (nums) {
    let goodPairs = 0;
    for (i = 0; i < nums.length - 1; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) goodPairs += 1;
        }
    }
    return goodPairs;
};

var generateMatrix = function (n) {
    let matrix = [];
    let total = n ** 2;
    for (let a = 0; a < n; a++) {
        matrix[a] = [];
        for (var m = 0; m < n; m++) {
            matrix[a][m] = total + 1;
        }
    }

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]], d = 0, r, c;
    let i = 0, j = 0, start = 1;
    while (start <= total) {

        matrix[i][j] = start;
        start += 1;
        r = (i + directions[d][0]) % n;
        c = (j + directions[d][1]) % n;

        if (!matrix[r][c] || matrix[r][c] != total + 1) {
            d = (d + 1) % 4;
        }
        i += directions[d][0];
        j += directions[d][1];
    }
    return matrix
};
//979 Distribute coins
var distributeCoins = function (root) {

    let totalSteps = 0;

    function dfs(node) {

        if (node == null) return 0;
        let leftTree = dfs(node.left)
        let rightTree = dfs(node.right)
        console.log(leftTree)
        console.log(rightTree)
        totalSteps += (Math.abs(leftTree) + Math.abs(rightTree))
        return node.val + leftTree + rightTree - 1


    }

    dfs(root);

    return totalSteps;
};

var reverseVowels = function (s) {
    let sArr = s.split('')
    let vowels = 'aeiouAEIOU'
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (vowels.includes(sArr[start])) {
            if (vowels.includes(sArr[end])) {
                if (start != end) {
                    temp = s[start];
                    sArr[start] = s[end];
                    sArr[end] = temp;
                    start++
                    end--
                }
            } else {
                end--
            }
        } else {
            start++
        }
    }
    return sArr.join('')
};

//Brute force

var longestSubstring = function (s, k) {
    let chars = s.length;
    let start = 0;
    let subStrings;
    while (chars > 0) {
        subStrings = [];
        for (let i = start; i < s.length; i++) {
            if ((i + chars) > s.length) break;
            subStrings.push(s.slice(i, i + chars))
        }
        if (subStrings.some(sub => {
            return checkCounts(sub, k)
        })) {
            return chars
        } else {
            chars -= 1;
        }
    }
    return chars
};

var checkCounts = function (string, k) {
    let hash = {};
    let char;
    for (i = 0; i < string.length; i++) {
        char = string[i]
        hash[char] = hash[char] ? hash[char] + 1 : 1;
    }
    let result = Object.values(hash).every(val => {
        return val >= k
    })
    return result

}

//Recursive
var longestSubstring = function (s, k) {
    let values = [0];
    function checkString(string, num) {
        if (string.length < 1) return;
        let count = {};
        let char;
        let valid = true;
        for (i = 0; i < string.length; i++) {
            char = string[i];
            count[char] = count[char] ? count[char] + 1 : 1;
        }
        for (j = 0; j < string.length; j++) {
            if (count[string[j]] < num) {
                checkString(string.slice(0, j), num);
                checkString(string.slice(j + 1, string.length), num)
                valid = false;
                break;
            }
        }
        if (valid) {
            values.push(string.length)
        }

    }
    checkString(s, k)
    return Math.max(...values)
}

//In order traversal
var inorderTraversal = function (root) {
    let nodes = [];

    function dfs(node) {
        if (node != null) {
            dfs(node.left);
            nodes.push(node.val);
            dfs(node.right);
        }
    }
    dfs(root);
    return nodes;
};

var minDeletionSize = function (strs) {
    let deletions = 0;
    let words = strs.length
    let col = strs[0].length;
    let inOrder = {};
    for (let i = 0; i < col; i++) {
        let j;
        for (j = 0; j < words - 1; j++) {
            if (!inOrder[j] && strs[j][i] > strs[j + 1][i]) {
                deletions += 1;
                break;
            }
        }

        if (j < words - 1) {
            continue;
        }

        for (let m = 0; m < words - 1; m++) {

            if (strs[m][i] < strs[m + 1][i]) {
                inOrder[m] = true;
            }
        }
        console.log(inOrder)
    }
    return deletions;
}

//148 in place, O(n^2) too slow
var sortList = function(head) {
console.log(head)
let prevNode = null
let nextNode
let currNode
let sorted = false
let start = head
let count
while (!sorted) {
    sorted = true
    count = 0
    currNode = start
    prevNode = null
    while (currNode) {

        nextNode = currNode.next
        if (nextNode && currNode.val > nextNode.val) {
            currNode.next = nextNode.next
            nextNode.next = currNode
            sorted = false
            if (prevNode) prevNode.next = nextNode
            if (count == 0) {
                start = nextNode
            }
        }
        prevNode = currNode
        currNode = nextNode
        count += 1
    }

}

return start  
    }

// Create new list
var sortList = function (head) {
    if (!head) return head
    let values = [];
    currNode = head
    while (currNode) {
        values.push(currNode.val)
        currNode = currNode.next
    }
    values.sort((a, b) => { return a - b })
    let node
    let start = head
    let currentNode = null
    values.forEach((val, idx) => {
        node = new ListNode(val)
        if (currentNode) {
            currentNode.next = node
            currentNode = node
        } else {
            start = node
            currentNode = node
        }
    })
    return start

}

// 559
var maxDepth = function (root) {
    if (!root) return 0;
    maxD = 1
    function printChildren(node, depth) {
        if (node == null) return;
        if (depth > maxD) maxD = depth
        node.children.forEach(child => {
            printChildren(child, depth + 1)
        })
    }
    printChildren(root, 1)
    return maxD
};

// check if prereq, 1462
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    let courses = {}
    let results = []
    let result
    prerequisites.forEach((pre) => {

        let firstCourse = pre[0]
        let secondCourse = pre[1]
        if (courses[firstCourse]) {
            courses[firstCourse].push(secondCourse)
        } else {
            courses[firstCourse] = [secondCourse]
        }
    })
    function checkNext(entry, last, fullObj) {

        if (!fullObj[entry]) return;
        fullObj[entry].forEach((other) => {
            console.log(other, last)
            if (other == last) {

                result = true
            } else {
                checkNext(other, last, fullObj)
            }
        })
    }


    queries.forEach(query => {
        result = false;
        checkNext(query[0], query[1], courses)
        results.push(result)
    })


    return results
};

//1669 Merge Linked Lists
var mergeInBetween = function (list1, a, b, list2) {
    let count = 0;
    let startNode;
    let endNode;
    let currNode = list1;
    while (count <= b) {
        if (count + 1 == a) {
            startNode = currNode
        }
        if (count == b) {
            endNode = currNode.next
        }
        currNode = currNode.next
        count += 1
    }

    startNode.next = list2;
    secondCurrNode = list2;
    while (secondCurrNode.next) {
        secondCurrNode = secondCurrNode.next
    }
    secondCurrNode.next = endNode
    return list1


};

//Doesn't work, stack overflow
var updateMatrix = function (mat) {
    function checkNeighbors(pos, matrix) {
        if (matrix[pos[0]][pos[1]] == 0) {
            return 0
        }
        let neighborPos = [[pos[0] + 1, pos[1]], [pos[0] - 1, pos[1]], [pos[0], pos[1] + 1], [pos[0] - 1, pos[1]]]
        let values = []

        for (let i = 0; i < neighborPos.length; i++) {
            let temp = neighborPos[i];
            if (temp[0] >= matrix.length || temp[0] < 0 || temp[1] >= matrix[0].length || temp[1] < 0) continue;
            if (matrix[temp[0]][temp[1]] == 0) {
                return 1
            } else {
                values.push(checkNeighbors(temp, matrix) + 1)
            }
        }
        console.log(values)
        return Math.min(...values)
    }
    let finalMatrix = [];
    for (let i = 0; i < mat.length; i++) {
        finalMatrix[i] = new Array(mat[0].length);
    }
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            let val = checkNeighbors([i, j], mat)
            finalMatrix[i][j] = val
        }
    }
    return finalMatrix
};

var updateMatrix = function (mat) {
    let finalMatrix = [];
    for (let i = 0; i < mat.length; i++) {
        finalMatrix[i] = new Array(mat[0].length);
    }
    let check = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] == 0) {
                finalMatrix[i][j] = 0;
            }
        }
    }
    function getNeighbors(a, b) {
        return [[a + 1, b], [a - 1, b], [a, b + 1], [a, b - 1]]
    }

    let finished = false
    let neighbors
    while (!finished) {
        finished = true;
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[0].length; j++) {
                if (finalMatrix[i][j] == undefined) {
                    finished = false
                    neighbors = getNeighbors(i, j)
                    neighbors.forEach(neighbor => {
                        if (neighbor[0] < 0 || neighbor[0] >= mat.length || neighbor[1] < 0 || neighbor[1] >= mat[0].length) {
                            return
                        }
                        if (finalMatrix[neighbor[0]][neighbor[1]] == check) {
                            finalMatrix[i][j] = check + 1
                        }
                    })
                }
            }
        }
        check += 1
    }
    return finalMatrix

};

// Map Sum

var MapSum = function () {
    this.map = {}
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    this.map[key] = val
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let keys = Object.keys(this.map)
    let values = Object.values(this.map)
    let sum = 0;
    keys.forEach((key, idx) => {
        if (key.startsWith(prefix)) {
            sum += values[idx]
        }
    })
    return sum
};

//49 Group Anagrams
var groupAnagrams = function (strs) {
    let strHash = {};
    strs.forEach(string => {
        let sorted = string.split('').sort().join('');
        if (strHash[sorted]) {
            strHash[sorted].push(string);
        } else {
            strHash[sorted] = [string]
        }
    });
    return Object.values(strHash)
};

// 111 Min Depth Binary Tree
var minDepth = function (root) {
    if (!root) return root;
    let minDepth = Infinity;
    let q = [[root, 1]], curr;
    while (q.length > 0) {
        curr = q.shift();
        if (!curr[0].left && !curr[0].right) {
            if (curr[1] < minDepth) minDepth = curr[1];
        } else {
            if (curr[1] >= minDepth) continue;
            if (curr[0].left) q.push([curr[0].left, curr[1] + 1]);
            if (curr[0].right) q.push([curr[0].right, curr[1] + 1]);
        }
    }
    return minDepth
};
 //Better recursive from Anjusha1613
var minDepth = function (root) {
    if (root === null) return 0;

    //If there is no left subTree then traverse right subtree only
    if (root.left === null) return 1 + minDepth(root.right);

    //If there is no right subTree then traverse left subtree only
    if (root.right === null) return 1 + minDepth(root.left);

    //Otherwise return the min of the height of right and left subtree
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

//Flip and invert image
var flipAndInvertImage = function (image) {
    let newImg = image.map(row => {
        let i = 0;
        let j = row.length - 1
        while (i < j) {
            let temp = row[i];
            row[i] = row[j];
            row[j] = temp;
            i += 1;
            j -= 1;
        }
        let newRow = row.map(item => {
            return item == 1 ? 0 : 1;
        })
        return newRow
    })
    return newImg
};

//21 Merge Sorted Linked Lists
var mergeTwoLists = function (l1, l2) {
    let head = new ListNode();
    let list = head;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            list.next = l1;
            l1 = l1.next
        } else {
            list.next = l2;
            l2 = l2.next
        }
        list = list.next
    }

    list.next = l1 || l2;


    return head.next
};

// Max Subarray
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

//110 Height Balanced Binary
var isBalanced = function (root) {
    if (!root) return true
    function checkDepth(node) {
        if (!node) return 0
        let left = 1 + checkDepth(node.left)
        let right = 1 + checkDepth(node.right)
        return Math.max(left, right)
    }
    return Math.abs(checkDepth(root.left) - checkDepth(root.right)) < 2 && isBalanced(root.right) && isBalanced(root.left)
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

//101 Symmetric Tree
var isSymmetric = function (root) {
    if (!root) return true;
    function checkSymmetry(left, right) {
        if (left === right) return true;
        return (!!left && !!right && left.val == right.val && checkSymmetry(left.left, right.right) && checkSymmetry(left.right, right.left))
    }
    return checkSymmetry(root.left, root.right)
};

//104 Max Depth Binary Tree

var maxDepth = function (root) {
    function getDepth(node) {
        if (node == null) return 0;
        return Math.max(1 + getDepth(node.left), 1 + getDepth(node.right))
    }
    return getDepth(root)
};

var maxDepth = function (root) {
    let maxDepth = 0;
    function getDepth(node, currDepth) {
        if (node == null) {
            maxDepth = maxDepth < currDepth ? currDepth : maxDepth;
            return
        }
        getDepth(node.left, currDepth + 1)
        getDepth(node.right, currDepth + 1)
    }
    getDepth(root, 0)
    return maxDepth
};

// 108 Convert Sorted Array to Binary Search Tree
var sortedArrayToBST = function (nums) {
    if (nums.length == 0) return null;
    let middle = Math.floor(nums.length / 2)
    let node = new TreeNode(nums[middle], sortedArrayToBST(nums.slice(0, middle)), sortedArrayToBST(nums.slice(middle + 1)))
    return node
};

//112 Path Sum Binary Tree

var hasPathSum = function (root, targetSum) {
    if (!root) return false
    let found = false
    function hereWeGo(node, value) {

        if (found || node == null) return
        let newValue = value + node.val
        if (!node.left && !node.right) {
            if (newValue == targetSum) {
                found = true
            }
            return
        }

        hereWeGo(node.left, newValue)
        hereWeGo(node.right, newValue)
    }
    hereWeGo(root, 0)
    return found
};

//144 Binary Tree Preorder Traversal
var preorderTraversal = function (root) {
    let values = []
    function getValues(node) {
        if (!node) return
        values.push(node.val)
        getValues(node.left)
        getValues(node.right)
    }
    getValues(root)
    return values
};
 //Iterative
var preorderTraversal = function (root) {

    let values = []
    if (!root) return values
    let nodes = [root]
    let node
    while (nodes.length > 0) {
        node = nodes.pop();
        values.push(node.val)
        if (node.right) nodes.push(node.right)
        if (node.left) nodes.push(node.left)
    }
    return values
};

//Postorder Traversal
var postorderTraversal = function (root) {
    let values = []
    function getValues(node) {
        if (!node) return
        getValues(node.left)
        getValues(node.right)
        values.push(node.val)

    }
    getValues(root)
    return values
};

// Invert Binary Tree
var invertTree = function (root) {
    function invert(node) {
        if (!node) return node
        let temp = node.left
        node.left = node.right
        node.right = temp
        invert(node.left)
        invert(node.right)
        return node
    }
    return invert(root)
};
var invertTree = function (root) {
    if (root == null) return null;
    let right = invertTree(root.right)
    let left = invertTree(root.left)
    root.left = right
    root.right = left
    return root
};

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n)
    let i = 0;

    while (i < nums1.length) {
        if (nums2[0] <= nums1[i]) {
            nums1.splice(i, 0, nums2.shift());
        }
        console.log(nums1)
        i++
    }
    if (nums2.length > 0) {
        nums1.push(...nums2)
    }
};

var singleNumber = function (nums) {
    let numsObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (numsObj[nums[i]]) {
            delete numsObj[nums[i]]
        } else {
            numsObj[nums[i]] = true
        }
    }
    return Object.keys(numsObj)[0];
};

var singleNumber = function (nums) {
    let a = 0;
    nums.forEach(number => {
        a ^= number
    })
    return a;
};

var countAndSay = function (n) {
    if (n == 1) return '1'
    return convert(countAndSay(n - 1))
};

var convert = function (string) {
    let result = '';
    let currentChar = string[0];
    let currentCount = 1;
    for (let i = 1; i < string.length; i++) {
        if (currentChar == string[i]) {
            currentCount += 1;
        } else {
            result += currentCount.toString() + currentChar;
            currentChar = string[i];
            currentCount = 1
        }
    }
    result += currentCount.toString() + currentChar;
    return result;
}

function reverseInParentheses(inputString) {
    let newString = '';
    let openParenth = false;
    let lastOpen;
    let lastClosed;
    let subString = '';
    let parenthPosition = [];
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        console.log(char)
        if (char == '(') {
            openParenth = true;
            parenthPosition.push(i);
        } else if (char == ')') {
            currOpen = parenthPosition.pop()
            let newWord = inputString.slice(currOpen + 1, lastOpen || i)
            lastOpen = currOpen;
            console.log(newWord)
            subString = reverseWord(newWord + subString)
            if (parenthPosition.length == 0) {
                newString += subString;
                subString = '';
                openParenth = false;
                lastOpen = null;
            }
        } else {
            if (!openParenth) {
                newString += inputString[i]
            }
        }


    }
    return newString;
}

function reverseWord(word) {
    return word.split('').reverse().join('')
}

var evalRPN = function (tokens) {
    let numbers = [];
    let operations = '*+/-';
    let value, val1, val2, result;
    for (let i = 0; i < tokens.length; i++) {
        let value = tokens[i];
        if (operations.includes(value)) {
            val1 = numbers.pop();
            val2 = numbers.pop();
        }
        switch (value) {
            case '+':
                result = val1 + val2;
                numbers.push(result)
                break;
            case '-':
                result = val2 - val1
                numbers.push(result)
                break;
            case '*':
                result = val2 * val1
                numbers.push(result)
                break;
            case '/':
                result = Math.trunc(val2 / val1)
                numbers.push(result)
                break;
            default:
                numbers.push(parseInt(value))
        }
        console.log(numbers)
    }
    return numbers[0]
};

//Trap Rainwater
var trap = function (height) {
    let size = height.length
    if (size == 0) return 0;
    let leftMaxes = [height[0]];
    let rightMaxes = new Array(size);
    rightMaxes[size - 1] = height[size - 1]
    for (let i = 1; i < size; i++) {
        leftMaxes[i] = Math.max(leftMaxes[i - 1], height[i])
    }
    for (let j = size - 2; j >= 0; j--) {
        rightMaxes[j] = Math.max(rightMaxes[j + 1], height[j])
    }
    let total = 0;
    for (let m = 0; m < size; m++) {
        total += Math.min(leftMaxes[m], rightMaxes[m]) - height[m]
    }
    return total


};

//560 Subarray Sum equal to K

var subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    let sumHash = { 0: 1 };
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sumHash.hasOwnProperty(sum - k)) {
            count += sumHash[sum - k]
        }
        if (sumHash.hasOwnProperty(sum)) {
            sumHash[sum] += 1
        } else {
            sumHash[sum] = 1;
        }
    }
    console.log(sumHash)
    return count;
};

var balancedStringSplit = function(s) {
    let count = 0;
    let state = 0;
    for (let i =0; i<s.length; i++) {
        let char = s[i]
        if (char == 'L' ) {
            state++
        } else {
            state--
        }
        if (state == 0) count++
    }
    return count;
};

//Word Break solution 1
var wordBreak = function (s, wordDict) {
    let memo = {};
    let wordSet = new Set(wordDict)
    checkWord = function (s) {
        if (memo.hasOwnProperty(s)) {
            return memo[s]
        }
        if (s.length == 0) return true;
        for (let i = s.length; i > 0; i--) {
            
            if (wordSet.has(s.slice(0,i)) && checkWord(s.slice(i))) {
                memo[s] = true;
                return true;
            }
        }
        memo[s] = false;
        return false;
    }
    result = checkWord(s)
    return result
};

// Word Break solution 2: track up to that point in an array
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
    console.log(results)
    return results[results.length - 1]
};

//Misinterpretation of the question, oops
var combinationSum4 = function (nums, target) {
    let combinations = {};
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (val > target) continue;
        Object.keys(combinations).forEach(key => {
            newVal = val + parseInt(key);
            if (newVal <= target) {
                if (combinations.hasOwnProperty(newVal)) {
                    combinations[newVal] += 1
                } else {
                    combinations[newVal] = 1
                }
            }
        })
        if (combinations.hasOwnProperty(val)) {
            combinations[val] += 1;
        } else {
            combinations[val] = 1;
        }
    }
    return combinations[target]
};

//Recursive call, failed time
var combinationSum4 = function (nums, target) {
    if (target == 0) {
        return 1;
    }
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (target >= nums[i]) {
            result += combinationSum4(nums, target - nums[i])
        }
    }
    return result;
}

//Recursion with memoization, passes time
var combinationSum4 = function (nums, target) {
    let memo = {};
    function checkTarget(newTarget) {
        if (newTarget == 0) {
            return 1;
        }
        if (memo.hasOwnProperty(newTarget)) {
            return memo[newTarget]
        }

        let result = 0;
        for (let i = 0; i < nums.length; i++) {
            if (newTarget >= nums[i]) {
                result += checkTarget(newTarget - nums[i])
            }
        }
        memo[newTarget] = result
        return result;
    }
    let final = checkTarget(target)
    return final

}

//House Robber
var rob = function (nums) {
    let results = new Array(nums.length + 1);
    results[0] = 0;
    results[1] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let val = nums[i];
        results[i + 1] = Math.max(results[i], results[i - 1] + val)
    }
    return results[nums.length]
};

// House robber with variables
var rob = function (nums) {
    let results = new Array(nums.length + 1);
    let prev = 0
    let current = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let val = nums[i];
        let temp = current
        current = Math.max(current, prev + val)
        prev = temp

    }
    return current
};

//Remove Nth from end, Linked List
var removeNthFromEnd = function (head, n) {
    let length = 0;
    if (!head) return head;
    let currentNode = head;
    while (currentNode) {
        length++
        currentNode = currentNode.next
    }
    let toRemove = (length - n + 1);
    let newCount = 1;
    let prev = null;
    currentNode = head;
    while (newCount + n <= length) {
        prev = currentNode
        currentNode = currentNode.next
        newCount++
    }
    if (prev !== null) {
        prev.next = currentNode.next
        return head
    } else {
        return currentNode.next
    }

};

var removeNthFromEnd = function (head, n) {
    let start = new ListNode(0);
    let slow = start;
    let fast = start;
    start.next = slow;
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return start.next;
};

var removeNthFromEnd = function (head, n) {
    let start = new ListNode(0);
    let slow = start;
    let fast = start;
    start.next = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return start.next;
};

//Recursive
var canJump = function (nums) {
    let memo = {};
    function jump(array, pos) {
        if (memo.hasOwnProperty(pos)) {
            return memo[pos]
        }
        if (array.length == 1) return true;
        let maxJump = array[0];
        if (maxJump >= array.length) return true;
        for (let i = maxJump; i > 0; i--) {
            if (jump(array.slice(i), pos + i)) {
                memo[pos + i] = true;
                return true;
            }
        }
        memo[pos] = false;
        return false;
    }
    return jump(nums, 0)

};

// Iterative
var canJump = function (nums) {
    let queue = [0];
    let seen = new Set([0])
    let queuePos = 0;
    let currPosition;
    while (queuePos < queue.length) {
        currPosition = queue[queuePos]
        if (currPosition >= nums.length - 1) return true;
        let jumps = nums[currPosition]
        for (let i = jumps; i > 0; i--) {
            if (currPosition + i >= nums.length - 1) return true;
            if (!seen.has(currPosition + i)) {
                queue.push(currPosition + i)
                seen.add(currPosition + i)
            }
        }
        queuePos++
    }
}

// Very efficient start from the back
var canJump = function (nums) {
    let lastPos = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] + i >= lastPos) lastPos = i;
    }
    return lastPos <= 0
}

//Set Zeroes
var setZeroes = function (matrix) {
    let rows = new Set();
    let cols = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    rows.forEach(rowVal => {
        matrix[rowVal].fill(0)
    })
    cols.forEach(colVal => {
        for (let m = 0; m < matrix.length; m++) {
            matrix[m][colVal] = 0
        }
    })
};

//Spiral Matrix
var spiralOrder = function (matrix) {
    let seen = new Set(['00'])
    let direction = [[0, 1], [-1, 0], [0, -1], [1, 0]]
    let result = [matrix[0][0]];
    let currDirection = 0;
    let rows = matrix.length
    let cols = matrix[0].length
    let totalElements = rows * cols;
    let currPosition = [0, 0]
    let newX, newY;
    while (result.length < totalElements) {
        newX = currPosition[0] + direction[currDirection][0];
        newY = currPosition[1] + direction[currDirection][1];
        while (newX < 0 || newX >= rows || newY < 0 || newY >= cols || seen.has([newX, newY].join(''))) {
            currDirection = ((currDirection + 1) % 4)
            newX = currPosition[0] + direction[currDirection][0];
            newY = currPosition[1] + direction[currDirection][1];

        }
        currPosition = [newX, newY];
        seen.add(currPosition.join(''));
        result.push(matrix[currPosition[0]][currPosition[1]])
    }
    return result;
};