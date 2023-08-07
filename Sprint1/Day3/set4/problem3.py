def longest_common_prefix(strs):
    if not strs:
        return ""

    min_length = min(len(s) for s in strs)
    
    for i in range(min_length):
        char = strs[0][i]  
        for s in strs:
            if s[i] != char:
                return strs[0][:i]  
    return strs[0][:min_length]  

input_strings = ["flower", "flow", "flight"]
result = longest_common_prefix(input_strings)
print(result)
