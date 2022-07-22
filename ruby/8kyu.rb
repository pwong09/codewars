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