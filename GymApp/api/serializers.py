from dataclasses import fields
# convert django model into a json
from rest_framework import serializers
from .models import Exercise


class ExerciseSerializer(serializers):
    class Meta:
        model = Exercise
        fields = '__all__'
