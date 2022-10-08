from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('routine', index),
    path('muscleGroup/<str:muscle>/', index),
]
