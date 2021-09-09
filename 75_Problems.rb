def two_sum(nums, target)
    numsHash = {};
    nums.each_with_index do |num, idx|
        if (numsHash.include?(target - num))
            return [numsHash[target - num], idx]
        else
            numsHash[num] = idx
        end         
    end
end

def max_profit(prices)
    curr_max_profit = 0
    curr_cheapest_price = prices[0]
    for i in 1...prices.length
        curr_max_profit = curr_max_profit > (prices[i] - curr_cheapest_price) ? curr_max_profit :  prices[i] - curr_cheapest_price
        curr_cheapest_price = prices[i] < curr_cheapest_price ? prices[i] : curr_cheapest_price
    end
    curr_max_profit
end

require 'set'
def contains_duplicate(nums)
    numsSet = Set.new()
    nums.each do |num|
        return true if numsSet.include?(num) 
        numsSet.add(num)
    end
    false
end

def product_except_self(nums)
    left_result = [1]
    for i in (1...nums.length)
        left_result << left_result[i - 1] * nums[i - 1] 
    end
    right_result = Array.new(nums.length)
    j = nums.length - 1
    right_result[j] = 1
    j-=1
    while (j >= 0)
        right_result[j] = nums[j + 1] * right_result[j + 1]
        j-=1
    end
    right_result.zip(left_result).map { |a,b| a*b}
end

def max_sub_array(nums)
    curr_max_sum = nums[0]
    curr_sum = nums[0]
    for i in (1...nums.length)
        curr_sum = curr_sum + nums[i] >= nums[i] ? curr_sum + nums[i] : nums[i]
        curr_max_sum = [curr_sum, curr_max_sum].max
    end
    curr_max_sum
end

def max_product(nums)
    curr_max = nums[0]
    curr_min = nums[0]
    total_max = nums[0]
    for i in 1...nums.length
        curr_value = nums[i]
        test_max = [curr_max * curr_value, curr_min*curr_value, curr_value].max
        test_min = [curr_max * curr_value, curr_min*curr_value, curr_value].min
        curr_max = test_max
        curr_min = test_min
        total_max = [curr_max, total_max].max
    end
    total_max
end