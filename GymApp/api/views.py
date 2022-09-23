from django.shortcuts import render
from rest_framework import generics
from .models import Exercise
from .serializers import ExerciseSerializer
from django.http import HttpResponse

# Create your views here.


class ExerciseView(generics.ListAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer