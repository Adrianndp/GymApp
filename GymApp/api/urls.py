from django.urls import path, include
from .views import main, ExerciseView

urlpatterns = [
    path('exercise', ExerciseView.as_view())
]
