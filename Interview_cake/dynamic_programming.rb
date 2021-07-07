def permutations(string)
    return [string] if string.length === 1
    all_chars_except_last = string[0..-2]
    last_char = string[-1]
    permutations_of_all_except_last = permutations(all_chars_except_last)
    permutations = []
    permutations_of_all_except_last.each do |permutation|
        (0..permutation.length).each do |idx|
            new_perm = permutation[0...idx] + last_char + permutation[idx..-1]
            permutations << new_perm
        end
    end
    permutations.uniq
end

puts permutations('hello').length