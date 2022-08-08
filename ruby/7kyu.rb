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