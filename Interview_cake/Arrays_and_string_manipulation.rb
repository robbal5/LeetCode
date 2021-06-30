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

# print correct_reverse_words('here lies the dude')

def merge_sorted(arr1, arr2)
    arr1.reverse!
    arr2.reverse!
    sorted = []
    while ((!arr1.empty?) && (!arr2.empty?) )
        case (arr1[-1] <=> arr2[-1])
        when -1
            sorted.push(arr1.pop)
        else
            sorted.push(arr2.pop)
        end
        print arr1
        print arr2
        puts
    end
    
    print sorted
    return sorted +arr1 + arr2 
end

  my_array     = [3, 4, 6, 10, 11, 15]
alices_array = [1, 5, 8, 12, 14, 19]

# print merge_sorted(my_array, alices_array)

# O(n) space and time
def customer_orders(arr1, arr2, served) 
    served_hash = {}
    served.each_with_index do |order, idx|
        served_hash[order] = idx
    end
    (0...arr1.length - 1).each do |idx|
        if served_hash[arr1[idx]] > served_hash[arr1[idx + 1]]
            return false;
        end
    end
    (0...arr2.length - 1).each do |idx|
        if served_hash[arr2[idx]] > served_hash[arr2[idx + 1]]
            return false;
        end
    end
    return true;
end

order1 = [5, 6, 7, 8]
order2 = [1, 2, 3, 4]
served = [1, 2, 5, 3, 7,6, 8, 4]

# puts customer_orders(order1, order2, served)

def customer_orders2(arr1, arr2, served)
    arr1_index = 0
    arr2_index = 0
    served_index = 0
    while (served_index <= served.length)
        case(served[served_index])

        when arr1[arr1_index]
            arr1_index += 1
        when arr2[arr2_index]
            arr2_index += 1
        else
            return false
        end
        served_index += 1
    end
    return true
end

puts customer_orders(order1, order2, served)


