def factorial(n):
    if n == 0 or n == 1:
        return 1

    result = 1
    for i in range(2, n + 1):
        result *= i

    return result

input_number = 5
result = factorial(input_number)
print(f"Factorial of {input_number} is {result}.")
