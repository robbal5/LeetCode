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