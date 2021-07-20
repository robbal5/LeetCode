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
