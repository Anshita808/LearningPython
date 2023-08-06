#String Reversal: Write a Python function that takes a string and returns the string in reverse order.

str =  "Python"

str2 = ""
i = len(str)-1

while i >=0:
  str2+= str[i]
  i-=1

print(str2)