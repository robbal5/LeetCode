require 'set'

def inflight_entertainment(flightLength, movieLengths)
    lengths = {}
    movieLengths.each do |length|
        if (lengths[flightLength - length])
            return true
        else 
            lengths[length] = true
        end
    end
    false
end