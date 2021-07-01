def find_rotation_point(array)
    floor = -1
    ceiling = array.length
    base = array[0]
    while floor + 1 < ceiling
        distance = ceiling - floor 
        half_distance = distance/2
        guess = floor + half_distance
        if (array[guess - 1] < base)
            ceiling = guess
        elsif (array[guess + 1] > base)
            floor = guess
        else
            return array[guess]
        end
    end
    return ceiling
end
  words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'aardvardk',
    'asymptote',  # <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]
# puts find_rotation_point(words)

def find_duplicate(array)
    floor = 1
    ceiling = array.length - 1
    while floor < ceiling
        midpoint = floor + (ceiling - floor) / 2
        # puts midpoint
        lower_range_floor = floor
        lower_range_ceiling = midpoint
        upper_range_floor = midpoint + 1
        upper_range_ceiling = ceiling

        total_lower_range = array.count do |num|
            num >= lower_range_floor && num <= lower_range_ceiling
        end
        print 'midpoint:'
        print midpoint
        puts 
        print 'total_lower_range:'
        print total_lower_range
        puts

        total_lower_possible = lower_range_ceiling - lower_range_floor + 1
        # puts lower_range_ceiling
        if total_lower_range > total_lower_possible
            floor, ceiling = lower_range_floor, lower_range_ceiling
        else
            floor, ceiling = upper_range_floor, upper_range_ceiling
        end
    end
    floor
end

# dup_arr = [1,2,3,3,4,5,6,7,8,9]
# puts find_duplicate(dup_arr)

def top_scores(scores, max)
    count = Array.new(max, 0)
    scores.each do |score|
        count[score] += 1
    end
    sorted = []
    count.each_with_index do |num, idx|
        num.times do 
            sorted.push(idx)
        end
    end
    return sorted.reverse
end

print top_scores([37, 89, 41, 65, 65, 65, 89, 88, 91, 53], 100)
puts 
