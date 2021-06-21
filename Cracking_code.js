// Arrays and Strings

// Is Unique: string has all unique characters

const inUnique = function(string) {
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

