def is_palindrome(word):
    word = word.lower().replace(" ", "")  
    reverse_word = word[::-1]  

    if word == reverse_word:
        return True
    else:
        return False

input_word = "madam"
if is_palindrome(input_word):
    print(f"The word {input_word} is a palindrome.")
else:
    print(f"The word {input_word} is not a palindrome.")
