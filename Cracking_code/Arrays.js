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


//Palindrome Permutation
 const palindromePermutation = function(str) {
    let letters = str.split(' ').join('');
    let letterCount = {};
    for (i = 0; i< letters.length; i++) {
        
        let letter = letters[i]
        letterCount[letter] = letterCount[letter] ? letterCount[letter] + 1: 1;
    }
    let counts = Object.values(letterCount);
    let odds = 0
    if (letters.length % 2 == 0) {
        return (counts.every(count => count %2 == 0))
    } else  {


        for (j = 0; j< counts.length; j++) {
            if (counts[j]%2 != 0) odds += 1;
        }
    }
    return (odds == 1 )
 }

 //Time Complexity: O(n) with n being the length of the string
 //Space Complexity: O(1) finite number of keys that could go into letterCount

 // One Away
 const oneAway = function(str1, str2) {
     let firstLength = str1.length;
     let secondLength = str2.length;
     let diff = firstLength - secondLength;
     let firstPosition = 0;
     let secondPosition = 0;
     let offset = 0;
     switch(diff) {
         case -1:
             while (firstPosition < firstLength) {
                 if (offset > 1) return false;
                 if (str1[firstPosition] == str2[secondPosition + offset]) {
                     firstPosition += 1;
                     secondPosition += 1;
                 } else {
                     offset += 1
                 }
             }
             break;
        case 0:
            while (firstPosition < firstLength) {
                if (offset > 1) return false;
                if (str1[firstPosition] != str2[firstPosition]) offset += 1;
                firstPosition += 1;
            }
            break;
        case 1:
            while(firstPosition < firstLength) {
                if (offset > 1) return false;
                if (str1[firstPosition + offset] == str2[secondPosition]) { //string sting
                    firstPosition += 1;
                    secondPosition += 1;
                } else {
                    offset += 1
                }
            }
            // Deletion

            break;
        default: 
            return false;
     }
     return true;
 }

 //Time Complexity: O(n) where n is the length of the first string
 // Space Complexity: O(1) no new data dependent on the string length is created

 //String Compression

 function stringCompression(string) {
     let currCharacter = string[0];
     let count = 1;
     let newString = currCharacter;
     for (i = 1; i<string.length; i++) {
         if (string[i] == currCharacter) {
            count += 1;
         } else {
             currCharacter = string[i];
             newString += (count + currCharacter);
             count = 1;
         }
     }
     newString += count;
     console.log(newString)
     return (newString.length < string.length) ? newString: string;
 }

 //Time Complexity: O(n) with n being the length of the string
 //Space Complexity: O(1)

 //Rotate Matrix

//[1, 2, 3]
//[4, 5, 6]
//[7, 8, 9]

//[7 ,4, 1]
//[8, 5, 2]
//[9, 6, 3]

// First column: [0,0] => [0,2], [1,0] => [0,1], [2,0] => [0,0]
// second column: [1,0] => [0,1], [1,1] => [1,1], [1,2] => [2,1]

//RULE : Swap the X and the Y for each, SWAP the Y for the other

function rotateMatrix(matrix)  {
    let newMatrix = []
    for (let i = 0; i<matrix.length ; i++ ) {
        newMatrix[i] = new Array(matrix.length)
    }
    for (let j = 0; j<matrix.length; j++) {
        for (let k = 0; k< matrix.length; k++) {
            let value = matrix[j][k];
            let newX = k;
            let newY = Math.abs(j-(matrix.length - 1))
            newMatrix[newX][newY] = value
        }
    }
    return newMatrix;
}

//Time Complexity: O(n^2) where n is the size of the matrix(nxn)
//Space complexity: O(n^2) where n is the size of the matrix

//Zero Matrix

function zeroMatrix(matrix) {
    let width = matrix[0].length;
    let height = matrix.length;
    let zeroRows = [];
    let zeroCols = [];
    for (i=0; i<height; i++) {
        let test = 0;
        for (j=0; j<width; j++) {
            if (matrix[i][j] == 0) {
                zeroRows.push(i);
                zeroCols.push(j);
                break;
            }
        }
    }
    zeroRows.forEach(row => {
        matrix[row] = new Array(width).fill(0)
        }
    )
    zeroCols.forEach(col => {
        let x = 0;
        while (x<height) {
            matrix[x][col] = 0
            x++
        }
    })

    return matrix;
}

//Time Complexity: O(mn)
//Space Complexity: O(1)

//String Rotation

function isSubstring(sub, string) {
    return string.includes(sub)
}
function stringRotation(s1, s2) {
    let index = 0;
    let testString = s1[index];
    let testIndex;
    while (testString.length < s1.length) {
       testIndex = s2.indexOf(testString);
        if (testIndex == -1) {
            return false;
        } else if(testIndex + testString.length == s1.length) {
            return isSubstring(s2.slice(0,testIndex), s1)
        } else {
            index++
            testString += s1[index]
        }
    }
    return false;
}