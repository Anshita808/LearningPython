def append_middle(s1, s2):
    middle_index = len(s1) // 2
    s3 = s1[:middle_index] + s2 + s1[middle_index:]
    return s3

s1 = "Ault"
s2 = "Kelly"

result = append_middle(s1, s2)
print(result)
