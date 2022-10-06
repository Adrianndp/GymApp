from django.urls import path
from . import views

urlpatterns = [
    path('exercise', views.ExerciseView.as_view()),
    path('createExercise', views.CreateExerciseView.as_view()),
    path('muscleGroup', views.muscle_list_view),
    path('equipment', views.equipment_list_view),
    path('muscleGroup/<str:muscle>/', views.exercises)
]
