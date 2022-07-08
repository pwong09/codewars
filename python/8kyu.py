# Reversed sequence
def reverse_seq(n):
    return [x for x in range(n, 0, -1)]

# parse int from char problem
def get_age(age):
    return int(age[0])

# convert a number toa  string
def number_to_string(num):
    return str(num)

# alternating cAsE
def to_alternating_case(string):
    list = [char for char in string]
    new_string = ''
    for el in list:
        if el == el.lower():
            el = el.upper()
        elif el == el.upper():
            el = el.lower()
        new_string += el
    return new_string

# refactor
# def to_alternating_case(string):
#     return string.swapcase()

# count of positives / sum of negatives
def count_positives_sum_negatives(arr):
    if arr == []: return arr
    positive_count = 0
    negative_sum = 0
    for num in arr:
        if num <= 0:
            negative_sum += num
        if num > 0:
            positive_count += 1
    array = [positive_count, negative_sum]
    return array

# refactor
# def count_positives_sum_negatives(arr):
#     pos = sum(1 for x in arr if x > 0)
#     neg = sum(x for x in arr if x < 0)
#     return [pos, neg] if len(arr) else []

# convert number to reversed array of digits
def digitize(n):
    n = str(n)
    n = n[::-1]
    array = [int(x) for x in n]
    return array

# refactor
def digitize(n):
    return map(int, str(n)[::-1])

# invert values
def invert(lst):
    return [-1*num for num in lst]

# can we divide it?
def is_divide_by(number, a, b):
    return True if number % a == 0 and number % b == 0 else False

# is he gonna survive?
def hero(bullets, dragons):
    return True if bullets / 2 >= dragons else False

# thinkful logic drills
def update_light(current):
    if current == 'green': return 'yellow'
    elif current == 'yellow': return 'red'
    else: return 'green'

# convert string to array
def string_to_array(s):
    return s.split(' ')

# how good are you really?
def better_than_average(class_points, your_points):
    sum = 0;
    for num in class_points:
        sum += num
    average = sum / len(class_points)
    return True if your_points > average else False

# refactor
# def better_than_average(class_points, your_points):
#     return your_points > sum(class_points) / len(class_points)

# find the first non-consecutive number
def first_non_consecutive(arr):
    result = None
    prev = arr[0]
    if len(arr) <= 1: return result
    for num in arr[1:]:
        if (prev + 1) != num:
            result = num
            break
        prev += 1
    return result

# refactor
# def first_non_consecutive(arr):
#     if not arr: return 0
#     for i, x in enumerate(arr[:-1]):
#         if x + 1 != arr[i + 1]:
#             return arr[i + 1]