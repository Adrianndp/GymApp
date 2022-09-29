from re import T
from django.db import models
from django.utils.translation import gettext_lazy as _


class EquipmentEnum(models.TextChoices):
    MACHINE =  _('Machine')
    CURL_BAR = _('Curl Bar')
    BOSU_BALL = _('Bosu Ball')
    EZ_CURL_BAR = _('e-Z CURL BAR')
    DUMBBELLS = _('Dumbbells')
    MEDICINE_BALL = _('Medicine Ball')
    CABLES = _('Cables')
    EXERCISE_BALL = _('Exercise Ball')
    WEIGHT_BENCH = _('Weight Bench')
    FOAM_ROLL = _('Foam Roll')
    BODY_ONLY = _('Body Only')
    BODY_WEIGHT = _('Body Weight')
    BANDS = _('Bands')
    KETTLEBELLS = _('Kettlebells')
    BARBELL = _('Barbell')
    CABLE_MACHINE = _('Cable Machine')
    DUMBBELL = _('Dumbbell')
    CABLE = _('Cable')
    MAT = _('Mat')
    OTHER = _('Other')


    @staticmethod
    def list():
        return list(map(lambda c: c.value, EquipmentEnum))


class MuscleTargetedEnum(models.TextChoices):
    BICEPS =  _('Biceps')
    SHOULDERS = _('Shoulders')
    GLUTES =  _('Glutes')
    HAMSTRINGS = _('Hamstrings')
    NECK =  _('Neck')
    ADDUCTORS = _('Adductors')
    ABDOMINALS =  _('Abdominals')
    TRICEPS = _('Triceps')
    CALVES =  _('Calves')
    MIDDLE_BACK = _('Middle Back')
    FOREARMS =  _('Forearms')
    LOWER_BACK = _('Lower Back')
    QUADRICEPS =  _('Quadriceps')
    CHEST = _('Chest')
    TRAPS =  _('Traps')
    LATS = _('Lats')

    @staticmethod
    def list():
        return list(map(lambda c: c.value, MuscleTargetedEnum))

class Exercise(models.Model):
    """The model of the component Exercise."""

    title = models.CharField(
        max_length=255,
        help_text=_("The title of the exercise."),
        verbose_name=_("title"),
    )
    muscle_targeted = models.CharField(choices=MuscleTargetedEnum.choices, max_length=255)
    equipment = models.CharField(choices=EquipmentEnum.choices, max_length=255)
    rating = models.FloatField(default=None, null=True, blank=True)

    @property
    def get_image_file_name(self):
        return self.title.lower().replace(" ", "-")
