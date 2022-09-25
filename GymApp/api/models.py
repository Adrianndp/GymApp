from re import T
from django.db import models
from django.utils.translation import gettext_lazy as _


class EquipmentEnum(models.TextChoices):
    MACHINE =  _('MACHINE')
    CURL_BAR = _('CURL BAR')
    BOSU_BALL = _('BOSU BALL')
    EZ_CURL_BAR = _('E-Z CURL BAR')
    DUMBBELLS = _('DUMBBELLS')
    MEDICINE_BALL = _('MEDICINE BALL')
    CABLES = _('CABLES')
    EXERCISE_BALL = _('EXERCISE BALL')
    WEIGHT_BENCH = _('WEIGHT BENCH')
    FOAM_ROLL = _('FOAM ROLL')
    BODY_ONLY = _('BODY ONLY')
    BODY_WEIGHT = _('BODY WEIGHT')
    BANDS = _('BANDS')
    KETTLEBELLS = _('KETTLEBELLS')
    BARBELL = _('BARBELL')
    CABLE_MACHINE = _('CABLE MACHINE')
    DUMBBELL = _('DUMBBELL')
    CABLE = _('CABLE')
    MAT = _('MAT')
    OTHER = _('OTHER')


class MuscleTargetedEnum(models.TextChoices):
    BICEPS =  _('BICEPS')
    SHOULDERS = _('SHOULDERS')
    GLUTES =  _('GLUTES')
    HAMSTRINGS = _('HAMSTRINGS')
    NECK =  _('NECK')
    ADDUCTORS = _('ADDUCTORS')
    ABDOMINALS =  _('ABDOMINALS')
    TRICEPS = _('TRICEPS')
    CALVES =  _('CALVES')
    MIDDLE_BACK = _('MIDDLE BACK')
    FOREARMS =  _('FOREARMS')
    LOWER_BACK = _('LOWER BACK')
    QUADRICEPS =  _('QUADRICEPS')
    CHEST = _('CHEST')
    TRAPS =  _('TRAPS')
    LATS = _('LATS')

class Exercise(models.Model):
    """The model of the component Exercise."""

    title = models.CharField(
        max_length=255,
        help_text=_("The title of the exercise."),
        verbose_name=_("title"),
    )
    muscle_targeted = models.CharField(choices=MuscleTargetedEnum.choices, max_length=255)
    equipment = models.CharField(choices=EquipmentEnum.choices, max_length=255)
    image_file = models.CharField(
        max_length=255,
        null=True,
        blank=True,
    )
    rating = models.FloatField(default=None, null=True, blank=True)
