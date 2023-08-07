def get_permutations(s):
    if len(s) == 0:
        return []

    if len(s) == 1:
        return [s]

    permutations = []
    for i in range(len(s)):
        first_char = s[i]
        remaining_chars = s[:i] + s[i+1:]
        for perm in get_permutations(remaining_chars):
            permutations.append(first_char + perm)

    return permutations

input_string = "abc"
permutations = get_permutations(input_string)
print(permutations)
