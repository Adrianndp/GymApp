from django.urls import path, include
from .views import ExerciseView

urlpatterns = [
    path('exercise', ExerciseView.as_view())
]
