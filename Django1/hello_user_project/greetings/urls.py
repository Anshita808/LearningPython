from django.urls import path
from . import views

urlpatterns = [
    path('', views.welcome, name='welcome'),
    path('greet/<str:username>/', views.greet, name='greet'),
    path('farewell/<str:username>/', views.farewell, name='farewell'),
]
