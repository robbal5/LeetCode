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
