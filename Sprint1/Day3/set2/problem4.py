def concatenate_lists_index_wise(list1, list2):
    combined_list = [item1 + item2 for item1, item2 in zip(list1, list2)]
    
    if len(list1) > len(list2):
        combined_list.extend(list1[len(list2):])
    elif len(list2) > len(list1):
        combined_list.extend(list2[len(list1):])
    
    return combined_list

list1 = ["M", "na", "i", "Ke"]
list2 = ["y", "me", "s", "lly"]

result = concatenate_lists_index_wise(list1, list2)
print(result)
