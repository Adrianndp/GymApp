from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from .models import Exercise
from .serializers import ExerciseSerializer, CreateExerciseSerializer
from rest_framework.response import Response
from rest_framework import status
from django.views.generic import View
from .models import MuscleTargetedEnum
from .models import EquipmentEnum
from django.http import JsonResponse


# Create your views here.


class ExerciseView(generics.ListAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer


class CreateExerciseView(APIView):
    serializer_class = CreateExerciseSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class MuscleTargetedListView(View):
    def get(self, request):
        return JsonResponse({'foo':'bar'})

    def get_queryset(self):
        return MuscleTargetedEnum.list()
        


class EquipmentListView(View):

    def get_queryset(self):
        return EquipmentEnum.list()
  
        