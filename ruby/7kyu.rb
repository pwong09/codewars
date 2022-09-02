# Sum of the first nth term of Series
def series_sum(n)
    if n == 0 
        return "0.00"
    end
    result = 0
    for i in 0...n
      result += (1.0 / (1 + i * 3))
    end
    return sprintf('%.2f', result)
end
# refactor
# def series_sum(n)
#     return "0.00" if n == 0
#     '%.2f' % (0..n-1).to_a.map { | x | (1.0/(x*3+1))}.reduce(:+)
# end
# descending order
def descending_order(n)
    n.digits.sort.reverse.join.to_i
end
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