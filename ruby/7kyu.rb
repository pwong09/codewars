# find the stray number
def stray (numbers)
    numbers.tally.invert[1]
end
# refactor
# arr.each { |x| return x if arr.count(x) == 1}
# numbers.reduce(:^)
# numbers.uniq.map {|x| return x if numbers.count(x) == 1}

# find the next perfect square
def find_next_square(sq)
    next_i = Math.sqrt(sq).to_i + 1
    next_sq = next_i * next_i
    Math.sqrt(sq).to_s[-1] == '0' ? next_sq : -1
end
# refactor
# number = Math.sqrt(sq) + 1
# number % 1 == 0 ? number**2 : -1

#  sqrt = Math.sqrt(sq)
#  sqrt % 1 == 0 ? (sqrt + 1)**2 : -1

# summing a number's digits
def sum_digits(number)
    number.to_s.split('').reduce(0) {|sum, num| sum += num.to_i}
end
# refactor
# number.to_s.chars.map(&:to_i).reduce(:+)
# number.abs.digits.sum

# maximum length distance
def mxdiflg(a1, a2)
    return -1 if a1.empty? or a2.empty?
    a1 = a1.sort_by{|str| str.length}
    a2 = a2.sort_by{|str| str.length}
    if (a1[-1].length - a2[0].length).abs > (a1[0].length - a2[-1].length).abs
        return (a1[-1].length - a2[0].length).abs
    else
        return (a1[0].length - a2[-1].length).abs
    end
end
# refactor
# a1.product(a2).map {|x,y| (x.length - y.length).abs}.max

# min1, max1 = a1.map(&:size).minmax
# min2, max2 = a2.map(&:size).minmax
# [max1 - min2, max2 - min1].max

# from the minimum
def min_value(digits)
    digits.uniq.sort.join.to_i
end

# small enough?
def small_enough(a, limit)
    a.none? { |num| num > limit }
end
# refactor / other methods could use
# a.max <= limit
# a.all? { |item| item <= limit }
# a.all?(..limit)
# !a.any? { |val| val > limit }
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