def iterate_lists_simultaneously(list1, list2):
    for item1, item2 in zip(list1, reversed(list2)):
        print(item1, item2)

list1 = [10, 20, 30, 40]
list2 = [100, 200, 300, 400]

iterate_lists_simultaneously(list1, list2)
