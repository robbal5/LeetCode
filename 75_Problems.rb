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