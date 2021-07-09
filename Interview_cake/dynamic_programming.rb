def permutations(string)
    return [string] if string.length === 1
    all_chars_except_last = string[0..-2]
    last_char = string[-1]
    permutations_of_all_except_last = permutations(all_chars_except_last)
    permutations = []
    permutations_of_all_except_last.each do |permutation|
        (0..permutation.length).each do |idx|
            new_perm = permutation[0...idx] + last_char + permutation[idx..-1]
            permutations << new_perm
        end
    end
    permutations.uniq
end

# puts permutations('hello').length

def nth_fibonacci(num)
    second_to_last = 0
    last = 1
    number = 2
    while number <= num
        second_to_last, last = last, second_to_last + last
        number += 1
    end
   last
end

# puts nth_fibonacci(5)
# puts nth_fibonacci(7)

#Double counted, not correct
def make_change(total, denominations)
    ways = {}
    start_point = 1
    while start_point <= total
        sub_answer = 0
        denominations.each do |coin|
            if coin == start_point
                sub_answer += 1
            elsif coin < start_point
                next if (denominations.include?(start_point - coin) && coin < (start_point - coin))
                sub_answer += ways[start_point - coin]
            end
        end
        ways[start_point] = sub_answer
        start_point += 1
    end
    puts ways
end



def make_change2(total, denominations)
    ways = [1] + Array.new(total, 0)

    denominations.each do |coin|

        (coin..total).each do |amount|
            remainder = amount - coin
            ways[amount] += ways[remainder]
        end
        print ways
        puts
    end
    ways[total]
end

# puts make_change2(4,[1,2,3])

#return max monetary value possible
# cakes looks like [[weight, value], [weight, value]]
def max_duffel_bag_value(cakes, capacity)
    maxes = {0 => 0}
    (1..capacity).each do |constraint|
        current_max = 0
        cakes.each do |cake|
            next if cake[1] == 0
            if (constraint - cake[0] >= 0)
                test_value = cake[1] + maxes[constraint - cake[0]]
                current_max = test_value > current_max ? test_value : current_max
            end
        end
        maxes[constraint] = current_max
    end
    maxes[capacity]
end

puts max_duffel_bag_value(  [[0,0],[3, 40], [5, 70]], 12)