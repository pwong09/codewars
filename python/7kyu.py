# friend or foe
def friend(arr):
    friends = []
    for word in arr:
        if len(word) == 4:
            friends.append(word)
    return friends

# refactor
# def friend(x):
#     return [f for f in x if len(f) == 4]

# disemvowel trolls
def disemvowel(string_):
    for i in "aeiouAEIOU":
        string_ = string_.replace(i,"")
    return string_

# refactor
# def disemvowel(string):
#     return "".join(c for c in string if c.lower() not in "aeiou")

# odd or even
def odd_or_even(arr):
    sum = 0
    for n in arr:
        sum += n
    return 'even' if sum % 2 == 0 else 'odd'

# refactor
# def oddOrEven(arr):
#     return 'even' if sum(arr) % 2 == 0 else 'odd'