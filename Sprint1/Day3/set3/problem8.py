def count_words(file_path):
    with open(file_path, 'r') as file:
        content = file.read()
        word_count = len(content.split())
        return word_count

def write_word_count(file_path, word_count):
    with open(file_path, 'w') as file:
        file.write(f"Number of words: {word_count}")

input_file = "input.txt"
output_file = "output.txt"
word_count = count_words(input_file)

write_word_count(output_file, word_count)
