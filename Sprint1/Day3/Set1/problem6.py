#Count Vowels: Write a Python program that counts the number of vowels in a given string.

def count_vowels(input_string):
    vowels = "aeiouAEIOU"
    vowel_count = 0

    for char in input_string:
        if char in vowels:
            vowel_count += 1

    return vowel_count

input_string = "Hello"
result = count_vowels(input_string)
print(f"Number of vowels: {result}")
