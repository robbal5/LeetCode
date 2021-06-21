// Arrays and Strings

// Is Unique: string has all unique characters

const isUnique = function(string) {
    let characters = {};
    for (i = 0; i< string.length; i++) {
        if (characters[string[i]]) {
            return false;
        } else {
           characters[string[i]] = string[i]
        }
    }
    return true;
}

//Time Complexity: O(n) where n is the length of the string
// Space complexity: O(1), as constant number of available characters means constant max # of keys in the hash

// Check Permutation

const checkPermutation = function(stringA, stringB) {
    if (stringA.length != stringB.length) return false;
    let characters = {};

    for (i = 0; i<stringA.length; i++) {
        if (characters[stringA[i]]) {
            characters[stringA[i]] += 1;
        } else {
            characters[stringA[i]] = 1
        }
    }

    for (j = 0; j<stringB.length; j++) {
        if (characters[stringB[j]]) {
            characters[stringB[j]] -= 1
        } else{ 
            return false;
        }
    }
    return Object.values(characters).every( count => count === 0)

    
}

// Time Complexity: O(n) where n is the length of stringA (stringB has same length, if not it returns false immediately) 
// SpaceComplexity: O(1), as there is a constant max of potential keys in the characters hash

//URLify

const URLify = function(string, length) {
    let newString = string.slice().split('');
    for (i = 0; i<length; i++) {
        console.log(newString)
        if (newString[i] == ' ') {
            newString[i] = '%20';

        }
    }
    return newString.join('').trim();
}

//Time Complexity: O(n) where n is the length of the new string
//Space Complexity: O(n) with the new string to return 