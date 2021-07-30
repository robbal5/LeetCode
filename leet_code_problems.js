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