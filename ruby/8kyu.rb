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