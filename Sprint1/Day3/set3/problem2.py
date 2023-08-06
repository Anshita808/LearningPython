def add_name_age(dictionary, name, age):
    dictionary[name] = age
    return dictionary

def update_age(dictionary, name, new_age):
    if name in dictionary:
        dictionary[name] = new_age
    return dictionary

def delete_name(dictionary, name):
    if name in dictionary:
        del dictionary[name]
    return dictionary

people = {}
people = add_name_age(people, "John", 25)
print(people)  # Output: {'John': 25}

people = update_age(people, "John", 26)
print(people)  # Output: {'John': 26}

people = delete_name(people, "John")
print(people)  # Output: {}
