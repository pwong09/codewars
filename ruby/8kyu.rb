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