# Write a method that is passed a single string, and returns whether the string contains unique characters.
# Returns true if characters in string are unique, or false if any characters repeat.
# For example: "temp" will return true. "test" will return false
require 'set'
def hasUniqueCharacters(string)
  visited_chars = Set.new
  string.each_char do |char|
    if visited_chars.include?(char)
        return false
    else
        visited_chars.add(char)
    end
  end
  true
end 

# Hash Diff
# Objective: Return a hash containing the difference in each hash
# For this challenge you can assume that each hash contains the same keys, and each key has a value.
# We will be extending this example, so do not assume the actual key names.

a = { name: 'Jill', role: 'Sales' }
b = { name: 'Jack', role: 'Sales' }
# Expected Output: { name: ['Jill', 'Jack'] }

# Objective: Return a hash containing the difference in each hash.
# This challenge introduces a nested hash
# For this challenge you can assume that each hash contains the same keys, and each key has a value.

a = { name: 'Jill', role: 'Sales', location: { state: 'Massachusetts', city: 'Boston' } }
b = { name: 'Jack', role: 'Sales', location: { state: 'Massachusetts', city: 'Somerville' } }
# Expected Output: { name: ['Jill', 'Jack'], location: { city: ['Boston', 'Somerville'] } }

# Objective: Return a hash containing the difference in each hash.
# This challenge includes a nested hash, and introduces different keys between the hashes.
# In the case where the key only exists in one of the hashes the output will include the key and its value.

a = { name: 'Jill', role: 'Sales', location: { state: 'Massachusetts', city: 'Boston' } }
b = { name: 'Jack', department: 'Sales', location: { state: 'Massachusetts', city: 'Somerville' } }
# Expected Output: { name: ['Jill', 'Jack'], role: ['Sales'], department: ['Sales'], location: { city: ['Boston', 'Somerville'] } }


def diff(a, b)
  differences_hash = {}
  total_keys = a.keys.concat(b.keys).uniq
  total_keys.each do |key|
    a_value = a[key]
    b_value = b[key]
    if a_value == nil
        differences_hash[key] = [b_value]
    elsif b_value == nil
        differences_hash[key] = [a_value]
    elsif a_value.class == Hash
        new_diff_hash = diff(a_value, b_value)
        next if new_diff_hash.length == 0
        differences_hash[key] = new_diff_hash
    elsif (a_value == b_value)
        next
    else
        differences_hash[key] = [a_value, b_value]
    end
  end
  differences_hash
end