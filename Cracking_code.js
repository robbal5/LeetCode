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