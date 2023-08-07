def contains_duplicate(nums):
    seen = set()
    
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    
    return False

input_array = [1, 2, 3, 1]
output = contains_duplicate(input_array)
print(output)
