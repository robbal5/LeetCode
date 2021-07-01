def apple_stocks(stocks)
    buy_index = 0;
    sell_index = 1;
    max_profit = stocks[sell_index] - stocks[buy_index]
    while(sell_index < stocks.length)
            if (stocks[sell_index] - stocks[buy_index] > max_profit)
                max_profit = stocks[sell_index] - stocks[buy_index]
            end
        if (stocks[sell_index] < stocks[buy_index])
            buy_index = sell_index
            sell_index += 1
        else
            sell_index += 1
        end
    end
    max_profit
end

# puts apple_stocks([19, 17, 14, 12, 5, 0])
# DOESN't WORK W Negatives
def product_of_three(arr)
    third, second, first = [arr[0], arr[1], arr[2]].sort
    (arr.length - 3).times do |n|
        n += 3
        if (arr[n] > third)
            if (arr[n] > second)
                if (arr[n] > first)
                    third, second, first = second, first, arr[n]
                    next
                end
                third, second = second, arr[n]
                next
            end
            third = arr[n]
        end
    end
    puts third
    puts second
    puts first
    third * second * first
end

# puts product_of_three([1,4,12,2,15,4,100])

# Still doesn't work with negatives
def product_of_three2(arr)
    third, second, first = [arr[0], arr[1], arr[2]].sort
    max_product = first * second * third
    arr.each_with_index do |num, idx|
        next if [0,1,2].include?(idx)
        let sub_products = [[third, second], [second, first], [first, third]]
        sub_products.each do |product|
            if (product[0] * product[1] * num > max_product)
                max_product = product[0] * product[1] * num
                first, second, third =[product[0], product[1], num]
            end
        end
    end
    return max_product
end
# puts product_of_three([1,-4,12,2,-50,4,100])

def product_of_three3(arr)
    highest_product_of_3 = arr[0] * arr[1] * arr[2]
    highest_product_of_2 = arr[0] * arr[1]
    highest = arr[0]
    lowest_product_of_2 = arr[0] * arr[1]
    lowest = arr[0]

    arr.each_with_index do |num, idx|
        if (idx == 0)
            next
        end
        if (idx == 1)
            highest = arr[1] if arr[1] > highest
            lowest = arr[1] if arr[1] < lowest
            next
        end
        if (idx == 2)
            lowest_product_of_2 = arr[2] * lowest if (arr[2] * lowest < lowest_product_of_2)
            highest_product_of_2 = arr[2] * lowest if (arr[2] * highest > highest_product_of_2)
            highest = arr[2] if arr[2] > highest
            lowest = arr[2] if arr[2] < lowest
            next 
        end
        if (highest_product_of_3 < highest_product_of_2 * num)
            highest_product_of_3 = highest_product_of_2 * num
        elsif (highest_product_of_3 < lowest_product_of_2 * num)
            highest_product_of_3 = lowest_product_of_2 * num
        end
            lowest_product_of_2 = num * lowest if (num * lowest < lowest_product_of_2)
            highest_product_of_2 = num * lowest if (num * highest > highest_product_of_2)
            highest = num if num > highest
            lowest = num if num < lowest
    end
    highest_product_of_3

    
end
array_of_ints = [-1000, -10, -5, 1, -100, 12, -8]
# puts product_of_three3(array_of_ints)

def product_of_others(arr)
    pre_products = [1]
    post_products = [1]
    arr.each_with_index do |num, idx|
        if (idx == 0)
            post_products.push(post_products.last * arr[-1 -idx])
        elsif (idx == arr.length - 1)
            pre_products.push(pre_products.last*arr[idx - 1])
        else
            pre_products.push(pre_products.last * arr[idx - 1])
            post_products.push(post_products.last * arr[-1 - idx])
        end
    end
    print pre_products
    puts
    print post_products
    puts
    pre_products.zip(post_products.reverse).map{|x,y| x*y}
end

products_arr = [3,1,2,5,6,4]
# puts product_of_others(products_arr)

# Importance here is basically having to go through it twice. We greedily grab from the front and greedily grab from the back populating as necessary

def cafe_orders(arr1, arr2, serve)
    first_idx = 0
    second_idx = 0
    serve_idx = 0
    while serve_idx < serve.length
        if (arr1[first_idx] == serve[serve_idx] && first_idx < arr1.length)
            first_idx += 1
        elsif (arr2[second_idx] == serve[serve_idx] && second_idx < arr2.length)
            second_idx += 1
        else
            return false
        end
        serve_idx += 1
    end
    first_idx == arr1.length && second_idx == arr2.length
end

arr = [1, 3, 5]
arr2 = [2, 4, 6]
served = [1, 2, 4, 6, 5, 3]

puts cafe_orders(arr, arr2, served)