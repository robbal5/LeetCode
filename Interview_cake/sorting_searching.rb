def find_rotation_point(array)
    floor = -1
    ceiling = array.length
    base = array[0]
    while floor + 1 < ceiling
        distance = ceiling - floor 
        half_distance = distance/2
        guess = floor + half_distance
        if (array[guess - 1] < base)
            ceiling = guess
        elsif (array[guess + 1] > base)
            floor = guess
        else
            return array[guess]
        end
    end
    return ceiling
end
  words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'aardvardk',
    'asymptote',  # <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]
puts find_rotation_point(words)