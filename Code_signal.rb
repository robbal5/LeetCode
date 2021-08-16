require 'set'
def avoidObstacles(input_array)
    sorted_array = input_array.sort! {|a,b| a-b}
    all_values = sorted_array.to_set
    max = sorted_array.last
    min = sorted_array.first
    jump_test = 1
    success = false
    while (!success)
        success = true
        next_jump = jump_test
        while (next_jump <= max)
            if (all_values.include?(next_jump))
                success = false
                jump_test += 1
                break
            end
            next_jump += jump_test
        end
    end
    jump_test
end

def boxBlur(image)
    new_image = Array.new(image.length - 2) {Array.new(image[0].length - 2, 0)}
    directions = [[0,0],[1,0],[-1,0], [1,1], [-1,1],[0,1], [0,-1], [-1,-1],[1,-1]]
    (1..image.length - 2).each do |row|
        (1..image[0].length - 2).each do |column|
            sum = 0
            directions.each do |a,b|
                new_row = row + a
                new_col = column + b
                
                sum += image[new_row][new_col]
            end
            new_image[row - 1][column - 1] = sum / 9
        end
    end
    return new_image
end

def minesweeper(matrix)
    rows = matrix.length
    columns = matrix[0].length
    result = Array.new(rows) {Array.new(columns)}
    directions = [[1,0], [1,1], [1,-1], [0,1], [0,-1],[-1,1],[-1,0], [-1,-1]]
    rows.times do |row|
        columns.times do |column|
            sum = 0
            directions.each do |a,b|
                new_row = row + a
                new_col = column + b
                next if ([new_row,new_col].min < 0 || new_row >= rows || new_col >= columns)
                if (matrix[new_row][new_col])
                    sum += 1
                end
            end
            result[row][column] = sum
        end
    end
    result
end

def absoluteValuesSumMinimization(a)
    return a[0] if (a.length == 1)
    values = Hash.new {|h,k| h[k] = 0}
    a.each_with_index do |num, idx|
        a.each_with_index do |num2, idx2|
            next if (idx == idx2)
            values[idx] += (num - num2).abs
        end
    end
    array = values.to_a.sort do |a,b|
        a[1] - b[1]
    end
    print array
    a[array[0][0]]
end