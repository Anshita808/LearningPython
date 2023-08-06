def concatenate_lists(list1, list2):
    result = []

    max_len = max(len(list1), len(list2))

    for i in range(max_len):
        if i < len(list1):
            result.append(list1[i])
        if i < len(list2):
            result.append(list2[i])

    return result

list1 = ["Hello ", "take "]
list2 = ["Dear", "Sir"]

result = concatenate_lists(list1, list2)
print(result)
