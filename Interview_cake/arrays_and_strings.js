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

