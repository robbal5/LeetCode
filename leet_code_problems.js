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