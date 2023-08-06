employees = ['Kelly', 'Emma']
defaults = {"designation": 'Developer', "salary": 8000}

result = {emp: defaults for emp in employees}

print(result)
