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

#Find Min sorted Array (logn)
def find_min(nums)
    return nums[0] if nums.length == 1
    start = 0
    last = nums.length - 1
    return nums[start] if (nums[start] < nums[last])
    while (start <= last)
        middle = (start + last) / 2
        return nums[middle+1] if (nums[middle] > nums[middle + 1])
        return nums[middle] if (nums[middle] < nums[middle - 1]) 
        curr_test = nums[middle]
        if (curr_test > nums[0])
            start = middle + 1
        elsif (curr_test < nums[start])
            last = middle -1
        end
    end
    nums[start]
end

# Search in sorted array
def search(nums, target)
    left = 0
    right = nums.length - 1
    while (left <= right)
       middle = (left + right) / 2
        return middle if (nums[middle]) == target
        if (nums[left] <= nums[middle])
            if (target >= nums[left] && target < nums[middle])
                right = middle - 1
            else
                left = middle + 1
            end
        else
            if (target <= nums[right] && target > nums[middle])
                left = middle + 1
            else
                right = middle - 1
            end
        end
    end
        nums[left] == target ? left: -1;
end

require 'set'
def three_sum(nums)
    s = Set.new()
    return [] if nums.length < 3
    result = [];
    for i in (0...nums.length-2)
        for j  in (1...nums.length-1)
           for m in (2...nums.length)
              if (nums[i] + nums[j] + nums[m] == 0 && i != j && j != m && m != i) 
                  string = [nums[i], nums[j],nums[m]].sort {|a,b| a-b}.join('')
                  if (s.include?(string))
                      next
                  else
                        result << [nums[i], nums[j], nums[m]] 
                      s.add(string)
                  end
              end
           end
        end
    end
    result.sort
end

def three_sum(nums)
    sorted = nums.sort
    result = []
    print sorted
    for i in (0...nums.length - 2)
       next if (sorted[i] > 0)
       next if (i > 0 && sorted[i] == sorted[i- 1])
        left = i + 1
        right = sorted.length - 1
        while (left < right)
            sum = sorted[i] + sorted[left] + sorted[right]
            if (sum > 0)
                right-=1
            elsif (sum < 0)
                left+=1
            else
                result << [sorted[i], sorted[left], sorted[right]]
            
                while (left < right && sorted[left] == sorted[left + 1])
                    left+=1
                end
                while (right > left && sorted[right] == sorted[right - 1])
                    right-=1
                end
                left += 1
                right -= 1
            end
        end
    end
    result
end

# Container with most water
def max_area(height)
    left = 0
    right = height.length - 1
    curr_max = 0
    while (left < right)
       curr_min = [height[left], height[right]].min
        curr_total = curr_min*(right - left)
        curr_max = curr_total > curr_max ? curr_total : curr_max
        if (height[left]<= height[right])
           left += 1
        else
            right -= 1
        end
    end
    curr_max
end

# Climbing Stairs

def climb_stairs(n)
    dp_array = Array.new(n)
    dp_array[0] = 1
    dp_array[1] = 1
    for i in (2..n)
       dp_array[i] = dp_array[i-1] + dp_array[i-2] 
    end
    dp_array[n]
end

#Tracks only two variables
def climb_stairs(n)
     return 1 if (n < 2)
    two_back = 1
    one_back = 1
    (n-1).times do |i|
        tmp = two_back
        two_back = one_back
        one_back = tmp + two_back
    end
    one_back
end

# coin change
def coin_change(coins, amount)
    sorted_coins = coins.sort
    dp = Array.new(amount+1, amount+1)
    dp[0] = 0
    for i in (1..amount)
       for j in (0...sorted_coins.length)
          coin_value = sorted_coins[j];
          break if (coin_value > amount)
           dp[i] = [dp[i], 1 + dp[i - coin_value]].min
       end
    end
    dp[amount] > amount ? -1 : dp[amount]
end

#Length of increasing subsequence
def length_of_lis(nums)
    result = [-1]
    current_largest = -1
    for i in (0...nums.length)
        inserted = false
        for j in (1...result.length)
            if (nums[i] <=  result[j])
                 result[j] = nums[i]
                 inserted = true
                 break
             end
          end
        result << nums[i] if !inserted
        end
    result.length - 1
end

require 'set'
def word_break(s, word_dict)
    wordDict = Set.new(word_dict)
    return true if wordDict.include?(s)
    is_valid = Array.new(s.length + 1, false)
    is_valid[0] = true;
    for i in (1..s.length)
       next if (!is_valid[i - 1]) 
        for j in (i..s.length)
            if (wordDict.include?(s[(i-1)...j]))
               is_valid[j] = true 
            end
        end
    end
    print is_valid
    is_valid[s.length]
end

def combination_sum4(nums, target)
    dp = Array.new(target + 1, 0)
    dp[0] = 1

    for i in (1..target)
       sum = 0
        nums.each do |num|
           curr = i - num
            next if curr < 0
            sum += dp[curr]
        end
        dp[i] = sum
    end
    dp[target]
    
end

def rob(nums)
    dp = Array.new(nums.length)
    dp[0] = nums[0]
    for i in (1...nums.length)
        if (i == 1)
            dp[i] = [nums[i], dp[i-1]].max
        else
            dp[i] = [nums[i] + dp[i-2], dp[i-1]].max 
        end
    end
    dp[nums.length - 1]
end