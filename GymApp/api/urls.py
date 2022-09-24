from django.urls import path
from .views import ExerciseView, CreateExerciseView

urlpatterns = [
    path('exercise', ExerciseView.as_view()),
    path('create_exercise', CreateExerciseView.as_view())
]
