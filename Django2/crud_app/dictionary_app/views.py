from django.shortcuts import render
from django.http import HttpResponse

dictionary = {
    'name': 'Ram',
    'age': 20,
    'city': 'Delhi'
}

def create(request):
    if request.method == 'POST':
        key = request.POST['key']
        value = request.POST['value']
        dictionary[key] = value
    return render(request, 'create.html')

def read(request):
    return render(request, 'read.html', {'dictionary': dictionary})

def update(request):
    if request.method == 'POST':
        key = request.POST['key']
        value = request.POST['value']
        if key in dictionary:
            dictionary[key] = value
    return render(request, 'update.html')

def delete(request):
    if request.method == 'POST':
        key = request.POST['key']
        if key in dictionary:
            del dictionary[key]
    return render(request, 'delete.html')
