# multiply 2 numbers
def multiply(num1, num2)
  num1 * num2
end
#refactor
def multiply(a,b)
  raise ArgumentError, 'arguments must be a numbers' unless a.is_a?(Integer) and b.is_a?(Integer)
  a*b
end
# reverse a string
def solution(str)
  str.reverse
end
# counting sheep
def count_sheep(num)
  num == 0 ? "" : nil
  str = ""
  for i in 1..num
    str = str + "#{i} sheep..."
  end
  return str
end
# refactor
# def count_sheep(num)
#   (1..num).map {|i| "#{i} sheep..."}.join
# end
# def count_sheep(num)
#   (1..num).reduce("") {|acc, e| acc += "#{e} sheep..."}
# end
# keep hydrated
def litres(time)
  return (time * 0.5).floor
end
# sum array w/o highest & lowest numbers
def sum_array(arr)
  if arr == nil || arr == [] || arr.length <= 2
    return 0
  else
    arr.sort!
    arr.delete_at(0)
    arr.delete_at(-1)
    return arr.inject(0, :+)
  end
end
#refactor
# def sum_array(arr)
#   if arr.kind_of?(Array) and arr.length > 2
#     arr.inject(:+) - arr.min - arr.max
#   else
#     0
#   end
# end
# def sum_array(arr)
#   arr.nil? || arr.empty? ? 0 : arr.sort[1..-2].reduce(0, :+)
# end

# months of the year in quarter
def quarter_of(month)
  if month <= 3 
    return 1
  elsif month <= 6 
    return 2
  elsif month <= 9 
    return 3
  else
    return 4
  end
end
# refactor
# def quarter_of(month)
#     (month/3.0).ceil
# end
# def quarter_of(month)
#   case month
#     when (1..3)
#       return 1  
#     when (4..6)
#       return 2
#     when (7..9)
#       return 3
#     when (10..12)
#       return 4
#     else
#       "Invalid month selected"
#     end
# end
# basic math ops in string
def basic_op(operator, value1, value2)
  return eval "#{value1}#{operator}#{value2}"
end

# refactor
# def basic_op(operator, *values)
#   values.reduce(operator)
# end
# def basic_op(operator, value1, value2)
#   value1.public_send operator, value2
# end

# sum of positive numbers in array
def positive_sum(arr)
  sum=0
  arr.each {|x|
  if x>0
  sum+=x end}
return sum
end
# refactor with methods
# def positive_sum(arr)
#   arr.select{|x| x > 0}.reduce(0, :+)
# end

# what is between
def between(a, b)
  array = []
  for i in a..b
    array.push(i)
  end
  return array
end

# refactor
def between(a, b)
  (a..b).to_a
end

# Sum Numbers Array
def sum(numbers)
  sum = 0
  for number in numbers
    sum = sum + number
  end
  return sum
end

# refactor
# def sum(numbers)
#   numbers.inject(0, :+)
# end
# def sum(n)
#   n.sum
# end

# enough
def enough(cap, on, wait)
  remainder = cap - on
  return remainder - wait >= 0 ? 0 : (remainder - wait) * -1
end  

# refactor
def enough(cap, on, wait)
  [on + wait - cap, 0].max
end

# powers of 2
def powers_of_two(n)
    arr = []
    for x in 0..n
      arr.push(2 ** x)
    end
    return arr
end

# refactor
# def powers_of_two(n)
#     (0..n).map { |k| 2**k }
# end