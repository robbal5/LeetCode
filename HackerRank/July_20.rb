# Problem 1
def numPlayers(k, scores)
    # Write your code here
    # sort the scores and remove duplicates
    # use a hash to store score and corresponding rank
    # go through scores array, adding for each that has a rank of at least k
    scores_copy = scores[0..-1]
    sorted = scores.sort
    score_ranks = Hash.new {|h,k| h[k] = 0}
    rank = 1
    sorted.reverse.each do |score|
        
         score_ranks[score] = rank if score_ranks[score] == 0
         rank += 1
    end
    leveling_up = 0
    scores_copy.each do |real_score|
        if score_ranks[real_score] <= k && real_score > 0
            leveling_up += 1;
        end
    end
    return leveling_up
    
end

#Problem 2
def droppedRequests(requestTime)
    # Write your code here
    # Rules: any given second cannot exceed 3, no more than 20 in 10 seconds, no more than 60 in a minute

    dropped = 0
    process = []
    requestTime.each do |time|
        process << time
        #second
        if (process.length > 3 && process[-4] == time )
            dropped += 1

            next
        elsif (process.length > 20 && (time - process[-21] < 10)  )
            dropped += 1

            next
        elsif (process.length > 60 && (time - process[-61] < 60))
            dropped += 1

        end

    end
    dropped

end

#Problem 3
def factorial(x)
    return 1 if x < 2
    return x * factorial(x-1)
end
def calculate_combinations(n,r)
    factorial(n)/(factorial(r)*factorial(n-r))
end

def countTeams(skills, minPlayers, minLevel, maxLevel)
    # Write your code here
    filtered_players = skills.select{|skill| skill <= maxLevel && skill >= minLevel}
    total_teams = 0
    while minPlayers <= filtered_players.length
        total_teams += calculate_combinations(filtered_players.length, minPlayers) 
        minPlayers += 1
    end
    total_teams
end

def is_palindrome?(string)
    start = 0
    last = string.length - 1
    result = true
    while (start < last)
         if string[start] != string[last]
            result = false
            break
         end
         start += 1
        last -= 1
    end
    return result
end

#Problem 4

def breakPalindrome(palindromeStr)
    # Write your code here
    #lower alphabeticallly
    #lowest value string alphabetically that can be created from the original palindrome
    # no longer a palindrome
    # return impossible if not possible
    palindromeArr = palindromeStr.split('')
    start = 0
    while start < palindromeStr.length / 2
        if (palindromeArr[start] != 'a')
            palindromeArr[start] = 'a'
            break;
        end
        start += 1
    end
    newString = palindromeArr.join('')
    return newString if newString != palindromeStr && newString.length > 1
    return 'IMPOSSIBLE'
end
