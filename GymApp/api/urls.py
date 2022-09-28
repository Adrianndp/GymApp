from django.urls import path
from .views import ExerciseView, CreateExerciseView, muscle_list_view, equipment_list_view

urlpatterns = [
    path('exercise', ExerciseView.as_view()),
    path('create_exercise', CreateExerciseView.as_view()),
    path('get_muscles', muscle_list_view),
    path('get_equipment', equipment_list_view)
]
