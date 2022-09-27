from django.urls import path
from .views import ExerciseView, CreateExerciseView, MuscleTargetedListView

urlpatterns = [
    path('exercise', ExerciseView.as_view()),
    path('create_exercise', CreateExerciseView.as_view()),
    path('get_muscles', MuscleTargetedListView.as_view())
]
