from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'Posnitz/index.html')

def home(request):
    return render(request, 'Posnitz/home.html')