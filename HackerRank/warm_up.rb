def sockMerchant(n, ar)
    # Write your code here
    pairs = 0
    colors = Hash.new{|h,k| h[k] = 0}
    ar.each do |color|
        colors[color] += 1
    end
    colors.values.each do |number|
        pairs += number / 2
    end
    pairs
end

def countingValleys(steps, path)
    # Write your code here
    depth = 0
    valleys = 0
    inValley = false;
    path.each_char do |step|
        if (step == 'U')
            depth += 1
        elsif (step == 'D')
            depth -= 1
        end
        
        if (!inValley && depth < 0) 
            inValley = true;
        end
        
        if (inValley && depth == 0) 
           valleys +=1
           inValley = false 
        end
    end
    valleys
end

def jumpingOnClouds(c)
    # Write your code here
    current_position = 0
    jumps = 0
    while (current_position < c.length - 1)
        if (c[current_position + 2] != 1)
            current_position += 2
        else
            current_position +=1
        end
        jumps += 1
    end
    jumps
end

def repeatedString(s, n)
    # Write your code here
    stringLength = s.length
    times = n / stringLength
    extraLength = n % stringLength
    extras = 0
    as_in_string = 0
    s.each_char.with_index do |char,idx|
        if (char == 'a')
            as_in_string += 1
            if (idx < extraLength)
                extras +=1
            end
        end
    end
    
    times * as_in_string + extras

end
