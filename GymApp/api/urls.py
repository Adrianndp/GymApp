from django.urls import path
from . import views

urlpatterns = [
    path('exercise', views.ExerciseView.as_view()),
    path('create_exercise', views.CreateExerciseView.as_view()),
    path('get_muscles', views.muscle_list_view),
    path('get_equipment', views.equipment_list_view),
    path('exercises/<str:exercise>/', views.exercises)
]
