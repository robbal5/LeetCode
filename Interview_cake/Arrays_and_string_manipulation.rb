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

print reverse_in_place('racecar')