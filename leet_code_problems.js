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