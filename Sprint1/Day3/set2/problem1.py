def print_number_pattern(n):
    for i in range(1, n + 1):
        for j in range(i):
            print(i, end="")
        print()

print_number_pattern(5)
