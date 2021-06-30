require 'byebug'

# def merge_meetings(meetings)
#     active_hours = []
#     meetings.each do |meeting|
#         startTime = meeting[0];
#         while startTime <= meeting[1]
#             active_hours[startTime] = true
#             startTime+= 1
#         end
#     end
#     joint_meetings = []
#     active = false
#     start = nil
#     end_time = nil
#     active_hours.each_with_index do |hour, idx|
        
#         if (!active)
#             if (hour)
#                 active = true
#                 start = idx
#             else
#                 next
#             end
#         else 
#             if (hour)
#                 end_time = idx
#             else
#                 joint_meetings << [start, end_time]
#                 active = false
#             end
#         end
#     end
#     joint_meetings << [start, end_time]
#     return joint_meetings
# end

#Better Solution
def merge_meetings(meetings)
    sorted_meetings = meetings.sort {|a,b| a[0] <=> b[0] }
    merged_meetings = [];
    sorted_meetings.each_with_index do |current_meeting, idx|
        
        if (idx == meetings.length - 1)
            merged_meetings.push(current_meeting)
            next
        end
        if (current_meeting[1] >= meetings[idx+1][0])
            merged_end = current_meeting[1] > meetings[idx+1][1] ? current_meeting[1] : meetings[idx+1][1]
            meetings[idx+1] = [current_meeting[0], merged_end]
        else
            merged_meetings.push(current_meeting)
        end
    end


    return merged_meetings
end

# print merge_meetings(  [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]])

def reverse_in_place(str)
    midpoint = str.length/2
    midpoint.times do |idx|
        str[idx], str[-1 - idx] = str[-1 -idx], str[idx]
    end
    return str
end

# print reverse_in_place('racecar')

def reverse_words(words)
    start_idx = nil
    last_idx = nil
    words.each_char.with_index do |char, idx|
        if (char === ' ' || idx === words.length - 1)
            while (start_idx < last_idx)
                words[start_idx], words[last_idx] = words[last_idx], words[start_idx]
                start_idx += 1
                last_idx -= 1
            end
            start_idx = nil
            last_idx = nil
        else
            start_idx = start_idx || idx
            last_idx = idx
        end
    end
    return words
end

print reverse_words('hey there banana man')

def correct_reverse_words(words)
    let begin_idx = 0;
    let end_idx = words.length - 1;
    let start_idx = 0;
    let last_idx = words.length - 2;
    while (start_idx < last_idx) 
        let start_char = words[start_idx];
        let last_char = words[last_idx];
        if (start_char == ' ')

            
    end
end