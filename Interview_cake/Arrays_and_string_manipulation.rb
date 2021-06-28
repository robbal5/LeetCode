require 'byebug'

def merge_meetings(meetings)
    active_hours = []
    meetings.each do |meeting|
        startTime = meeting[0];
        while startTime <= meeting[1]
            active_hours[startTime] = true
            startTime+= 1
        end
    end
    joint_meetings = []
    active = false
    start = nil
    end_time = nil
    active_hours.each_with_index do |hour, idx|
        
        if (!active)
            if (hour)
                active = true
                start = idx
            else
                next
            end
        else 
            if (hour)
                end_time = idx
            else
                joint_meetings << [start, end_time]
                active = false
            end
        end
    end
    joint_meetings << [start, end_time]
    return joint_meetings
end

print merge_meetings(  [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]])