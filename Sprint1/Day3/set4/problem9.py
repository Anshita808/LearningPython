def is_power_of_two(n):
    if n <= 0:
        return False
   
    return (n & (n - 1)) == 0

input_number = 16
output = is_power_of_two(input_number)
print(output)
