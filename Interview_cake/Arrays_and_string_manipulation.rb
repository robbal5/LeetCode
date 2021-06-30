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
        if (char === ' ' || words.length - 1 == idx)
            last_idx = idx if words.length - 1 === idx
            while (start_idx < last_idx)
                words[start_idx], words[last_idx] = words[last_idx], words[start_idx]
                start_idx += 1
                last_idx -= 1
            end
            start_idx = nil
            last_idx = nil
        # elsif idx === words.length - 1
        else
            start_idx = start_idx || idx
            last_idx = idx
        end
    end
    return words
end

# print reverse_words('hey there you guys')

def correct_reverse_words(words)
    middle = words.length / 2;
    middle.times do |idx| 
        words[idx], words[-1-idx] = words[-1-idx], words[idx]
    end
    # return words
    return reverse_words(words)
end

print correct_reverse_words('here lies the dude')