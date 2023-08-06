tuple1 = (11, [22, 33], 44, 55)

list1 = list(tuple1)

list1[1][0] = 222

modified_tuple = tuple(list1)

print(modified_tuple)
