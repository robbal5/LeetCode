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

def permutation_palindrome(string)
    char_count = Hash.new(0)
    string.each_char do |char|
        char_count[char] += 1
    end
    if (string.length % 2 == 0)
        char_count.values.all? { |count| count % 2 == 0}
    else
        char_count.values.one?{|count| count % 2 == 1}
    end
end

# puts permutation_palindrome('ivicc')

def permutation_palindrome2(string)
    unpaired_chars = Set.new
    string.each_char do |char|
        if unpaired_chars.include?(char)
            unpaired_chars.delete(char)
        else
            unpaired_chars.add(char)
        end
    end
    unpaired_chars.length <= 1
end
# puts permutation_palindrome2('ividcc')

def word_cloud(string)
    letters = "abcdefghijklmnopqrstuvwxyz'-"
    curr_string = ''
    words = Hash.new(0)
    string.each_char do |char|
        if !letters.include?(char.downcase)
            words[curr_string] += 1 if curr_string != ''
            curr_string = ''
        else
            curr_string += char.downcase 
        end
    end
    words[curr_string] += 1 if curr_string != ''
    words
end

puts word_cloud("We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake.")
