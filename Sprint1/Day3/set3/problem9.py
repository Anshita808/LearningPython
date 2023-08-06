def divide_numbers(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return "Cannot divide by zero."

# Test the function with the given input
num1 = 5
num2 = 0
output = divide_numbers(num1, num2)
print(output)
