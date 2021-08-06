require 'set'
require 'byebug'
def minMoves(n, startRow, startCol, endRow, endCol)
    moves = [[1,2], [1,-2],[-1,2], [-1,-2],[2,1],[2,-1], [-2,1], [-2,-1]]
    visited = Set.new
    queue = Queue.new
    queue << [[startRow, startCol],0]
    while !queue.empty?
       testNode = queue.deq 
       pos = testNode[0]
       turns = testNode[1]
       if (pos == [endRow, endCol]) 
           return turns
       else
            moves.each do |move|
                firstVal = pos[0] + move[0]
                secondVal = pos[1] + move[1]
                if (visited.include?([firstVal,secondVal]) || [firstVal,secondVal].max > n-1 || [firstVal, secondVal].min < 0)
                    next
                else
                    queue.enq([[firstVal, secondVal], turns + 1])
                    visited.add([firstVal, secondVal])
                end
            end
       end
    end
    return -1
    # Write your code here

end

def minSwaps(arr) 
    sorted = false
    swaps  = 0
    while !sorted
        # debugger
        sorted = true
        arr.each_with_index do |spot, idx|
            debugger
            break if (idx == arr.length-1) 
            if spot % 2 == 0 
                searchValue = spot - 1
            else 
                searchValue = spot + 1
            end
            
            if (arr[idx - 1] == searchValue || arr[idx + 1] == searchValue)
                next
            else
                if (arr[idx + 2] == searchValue)
                    arr[idx+1], arr[idx+2] = arr[idx+2], arr[idx+1]
                elsif (arr[idx - 2] == searchValue && idx - 2 >= 0)
                arr[idx-2], arr[idx-1] = arr[idx-1], arr[idx-2]
                else
                    arr[idx], arr[idx+1] = arr[idx+1], arr[idx]
                end
                sorted = false
                swaps += 1
            end
        end
    end
    return swaps
end

def minSwaps2(arr)
    hash = {}
    arr.each_with_index do |val, idx|
        hash[val] = idx
    end
    sorted = false
    swaps = 0
    while !sorted
        sorted = true
        arr.each_with_index do |val, idx|
            debugger
            next if val % 2 == 0
            if ((hash[val] - hash[val+1]).abs == 1)
                next
            else
                if (hash[val] < hash[val + 1])
                    hash[val] += 1
                    hash[arr[idx + 1]] -= 1
                    arr[idx], arr[idx + 1] = arr[idx + 1], arr[idx]

                else
                    hash[val] -= 1
                    hash[arr[idx - 1]] += 1
                    arr[idx], arr[idx - 1] = arr[idx - 1], arr[idx]

                end
                swaps += 1
                sorted = false
            end
        end
    end
    return swaps

end

puts minSwaps2([8,1,7,2,4,6,5,3])


