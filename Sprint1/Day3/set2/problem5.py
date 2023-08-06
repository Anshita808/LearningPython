def sort_lower_first(s):
    return ''.join(sorted(s, key=lambda x: (x.lower(), x)))

str1 = "PyNaTive"

result = sort_lower_first(str1)
print(result)
