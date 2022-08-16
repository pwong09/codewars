# convert from binary to integer
def binary_array_to_number(arr)
    arr.join("").to_i(2)
end 
# sum 2 smallest integers of array
def sum_two_smallest_numbers(numbers)
    return numbers.sort.slice(0,2).sum
end
# sort numbers
def solution(nums)
    return ( nums.nil? ? [] : nums.sort )
end
# training on isograms
def is_isogram(string)
    (string.downcase !~ /([a-z]).*\1/)
end
# refactor
def is_isogram(string)
    string.downcase.chars.uniq == string.downcase.chars
end