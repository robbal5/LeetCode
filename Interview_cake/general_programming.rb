# Love Rectangles
 
def love_rectangles(rec1, rec2)
    rec1_bottom = rec1.bottom_y
    rec1_top = rec1.bottom_y + rec1.height
    rec1_left = rec1.left_x
    rec1_right = rec1.left_x + rec1.width

    rec2_bottom = rec2.bottom_y
    rec2_top = rec2.bottom_y + rec2.height
    rec2_left = rec2.left_x
    rec2_right = rec2.left_x + rec2.width

    if (rec1_top >= rec2_bottom || rec1_bottom >= rec2_top || rec1_left >= rec2_right || rec1_right <= rec2_left) {
        return {
            left_x: nil,
            bottom_y: nil,
            width: nil,
            height: nil
        }
    } else {
        new_left = [rec1_left, rec2_left].max
        new_right = [rec1_right, rec2_right].min
        new_top = [rec1_top, rec2_top].min
        new_bottom [ rec1_bottom, rec2_bottom].max
    }

    return {
        left_x: new_left,
        bottom_y: new_bottom,
        width: new_right - new_left,
        height: new_top - new_bottom
    }
end

# Could also have used this helper method instead of 4 conditionals to check if no overlap
  def find_range_overlap(point1, length1, point2, length2)

  highest_start_point = [point1, point2].max
  lowest_end_point = [point1 + length1, point2 + length2].min

  return [nil, nil] if highest_start_point >= lowest_end_point

  overlap_length = lowest_end_point - highest_start_point

  [highest_start_point, overlap_length]
end

# Temperature Tracker

class TempTracker
    def initialize()
        @all_temps = []
        @max_temp = []
        @min_temp = []
        @total = 0.0
        @temp_times = Hash.new {|h,k| h[k] = 0}
        @max_times = 0
        @max_times_temp = nil
    end

    def insert(item)
        @all_temps << item
        @total += item
        @max_temp << item if (item >= @max_temp.last)
        @min_temp << item if (item <= @min_temp.last)
        @temp_times[item] += 1
        if @temp_times[item] > @max_times
            @max_times = @temp_times[item]
            @max_times_temp = item
        end
    end

    def get_max()
        @all_temps.last ? @max_temp.last : nil
    end

    def get_min()
        @all_temps.last ? @min_temp.last : nil
    end

    def get_mean()
        @total / @all_temps.length
    end

    def get_mode()
        @max_times_temp
    end

end