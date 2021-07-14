def appears_twice(arr)
    n = arr.length - 1
    triangular_sum = (n + (n**2))/2
    arr.each do |num|
        triangular_sum -= num
    end
    triangular_sum
end

def check_integer_in_sorted(arr, target)
    return nil if arr.length == 0
    middle = arr.length / 2
    check_value = arr[middle]
    case check_value <=> target
    when -1
        return 1 + middle + check_integer_in_sorted(arr[middle+1.. -1], target)
    when 0
        return middle
    when 1
        return check_integer_in_sorted(arr[0...middle], target)
    end
end

sorted = [1,2,3,4,5,6,7,8,9,10]

# puts check_integer_in_sorted(sorted, 8)
# puts check_integer_in_sorted(sorted, 3)

def in_place_shuffle(array)
    (array.length).times do |idx|
        random_int = get_random(idx, array.length-1)
        array[idx], array[random_int] = array[random_int], array[idx]
    end
    array
end

def get_random(floor, ceiling)
    floor + (rand()*(ceiling - floor)).round
end

# 10.times do 
#     print in_place_shuffle(sorted)
#     puts
# end

def five_sided_dice()
    num = 0
    while (num < 1 || num > 5)
        num = get_random(1,7)
    end
    num
end 

# 10.times do 
#     puts five_sided_dice()
# end