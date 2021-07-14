def appears_twice(arr)
    n = arr.length - 1
    triangular_sum = (n + (n**2))/2
    arr.each do |num|
        triangular_sum -= num
    end
    triangular_sum
end