def fibonacci_sequence(n):
    sequence = []

    if n >= 1:
        sequence.append(0)
    if n >= 2:
        sequence.append(1)

    for i in range(2, n):
        next_number = sequence[-1] + sequence[-2]
        sequence.append(next_number)

    return sequence

n = 5
result = fibonacci_sequence(n)
print(result)
