def display_numbers(numbers):
    for num in numbers:
        if num > 500:
            break  
        if num % 5 == 0 and num <= 150:
            print(num)

numbers = [12, 75, 150, 180, 145, 525, 50]

display_numbers(numbers)
