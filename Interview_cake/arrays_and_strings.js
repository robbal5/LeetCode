function sortMeetings(meetings) {
    let sorted = meetings.sort((a,b) => a.startTime - b.startTime)
    let ending_list = []
    sorted.forEach((meeting, idx) => {
        if (idx == 0) {
            ending_list.push(meeting);
            return;
        } 

        if (meeting.startTime <= ending_list[ending_list.length - 1].endTime) {
            ending_list[ending_list.length - 1].endTime = Math.max(ending_list[ending_list.length - 1].endTime, meeting.endTime)  
        } else {
            ending_list.push(meeting)
        }
    })
    return ending_list
}

function reverseString(stringArr) {
    let temp;
    for (let i = 0; i <Math.floor(stringArr.length / 2); i++) {
        temp = stringArr[i]
        stringArr[i] = stringArr[stringArr.length - 1 - i]
        stringArr[stringArr.length - 1 - i] = temp
    }
    return stringArr
}

// console.log(reverseString([1,2,3,4,5,6,7]))

function reverseWords(wordsArr) {
    wordsArr.reverse()
    words = wordsArr.join('').split(' ')
    words = words.map(word => {
        return word.split('').reverse().join('')
    })
    return words.join(' ').split('').join('')
}

function mergeArrays(myArray,yourArray) {
    let merged = []
    while (myArray.length > 0 && yourArray.length > 0) {
        if (myArray[0] < yourArray[0]) {
            merged.push(myArray.shift())
        } else {
            merged.push(yourArray.shift())
        }
    }
    return merged.concat(myArray).concat(yourArray)
}

function ordersInOrder(takeaway,dineIn,served) {
    let servedPos = 0, takeawayPos = 0, dineInPos = 0
    while (servedPos < served.length) {
        if (served[servedPos] == takeaway[takeawayPos]) {
            takeawayPos += 1;
        } else if (served[servedPos] == dineIn[dineInPos]) {
            dineInPos += 1
        } else {
            return false
        }
        servedPos += 1
    }
    return takeawayPos == takeaway.length && dineInPos == dineIn.length
}

function inFlightEntertainment(flightLength, movies) {
    flightSet = new Set()
    for (let i = 0; i<movies.length; i++) {
        if (flightSet.has(flightLength - movies[i])) {
            return true
        } else {
            flightSet.add(movies[i])
        }
    }
    return false
}

function checkPalindrome(string) {
    let chars = {}
    for (let i = 0; i < string.length; i++) {
        chars[string[i]] = !chars[string[i]]
    }
    let odds = 0;
    Object.values(chars).forEach(value => {
        if (value) odds += 1
    })
    return odds <= 1
}