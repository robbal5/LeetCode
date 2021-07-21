def rotLeft(a, d)
    # Write your code here
    d.times do 
       a.push(a.shift) 
    end
    a
end

def hourglassSum(arr)
    # Write your code here
    sums = []
    i = 0

    while (i < 4)
            j = 0
       while (j < 4)
            sum = 0
            3.times do |idx|
               sum += arr[i][j + idx] 
            end
            sum += arr[i + 1][j + 1]
            3.times do |idx|
               sum += arr[i + 2][j + idx]
            end
            sums << sum
            j += 1
       end
       i += 1
    end
    sums.max
end