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