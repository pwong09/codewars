# equal sides of an array
def find_even_index(arr)
  sum = 0
  left_sum = 0
  arr.each do |num| 
    sum += num
  end
  for i in 0...arr.length
    sum -= arr[i]
    if left_sum === sum
      return i
    end
    left_sum += arr[i]
  end
  -1
end
# refactor
# def find_even_index(arr)
#   left_sum = 0
#   right_sum = arr.reduce(:+)
  
#   arr.each_with_index do |e, ind|
#     right_sum -= e
    
#     return ind if left_sum == right_sum

#     left_sum += e
#   end
  
#   -1  
# end

# unreadable / hard to read option
# 0.upto(ary.length).select{|l| ary[0..l].reduce(:+) == ary[l..-1].reduce(:+)}.first || -1

# help the bookseller
def stockList(listOfArt, listOfCat)
    return "" if listOfArt.empty? or listOfCat.empty?
    result = {}
    listOfArt.each do |book|
        listOfCat.each do |letter|
            if !result[letter]
                result[letter] = 0
            end
            if book[0] == letter
                number = book.split(' ')[1].to_i
                result[letter] += number
            end
        end
    end
    str = ""
    result.each do |key, value|
        str += "(#{key} : #{value}) - "
    end
    str.chomp(" - ")
end
# refactor
# def stockList(stock_list, categories)
#     return "" if stock_list.empty? || categories.empty?

#     quantities = Hash.new(0)
#     stock_list.each_with_object(quantities) do |item, quantities|
#         code, quantity = item.split(" ")
#         quantities[code[0]] += quantity.to_i
#     end

#     categories.map { |category| "(#{category} : #{quantities[category]})" }.join(" - ")
# end
# def stockList(books, letters)
#     return '' if books.empty? || letters.empty?
#     result = []
#     letters.each do |letter|
#         sum = books.select { |book| book.start_with?(letter) }
#                 .map { |set| set.split.last.to_i }
#                 .reduce(0, :+)
#         result << "(#{letter} : #{sum})"
#     end
#     result.join (' - ')
# end

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
