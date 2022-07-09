# Test if number is prime
def isPrime(num)
    return false if num < 2
    return true if num == 2
    maxDivide = Math.sqrt(num) + 1;
    for i in 2...maxDivide
        if num % i == 0
            return false
        end
    end
    return true
end

# refactor
# require 'prime'

# def isPrime(num)
#     num.prime?
# end
# def isPrime(num)
#     num < 2 ? false : (2..Math.sqrt(num)).none?{|i| num%i == 0}
# end