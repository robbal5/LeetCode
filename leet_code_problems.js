// 14 Longest Common Prefix
var longestCommonPrefix = function (strs) {
    var testValue;
    if (strs.any(word => word == '')) return '';
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