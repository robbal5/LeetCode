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

console.log(sortMeetings([[1, 10], [2, 5], [6, 8], [9, 10], [10, 12]]))
