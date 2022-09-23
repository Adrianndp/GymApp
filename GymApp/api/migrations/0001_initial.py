# Generated by Django 4.1.1 on 2022-09-23 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Exercise',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='The title of the exercise.', max_length=255, verbose_name='title')),
                ('muscle_targeted', models.CharField(choices=[('BICEPS', 'Biceps'), ('SHOULDERS', 'Shoulders'), ('GLUTES', 'Glutes'), ('HAMSTRINGS', 'Hamstrings'), ('NECK', 'Neck'), ('ADDUCTORS', 'Adductors'), ('ABDOMINALS', 'Abdominals'), ('TRICEPS', 'Triceps'), ('CALVES', 'Calves'), ('ABDUCTORS', 'Abductors'), ('MIDDLE BACK', 'Middle Back'), ('FOREARMS', 'Forearms'), ('LOWER BACK', 'Lower Back'), ('QUADRICEPS', 'Quadriceps'), ('CHEST', 'Chest'), ('TRAPS', 'Traps'), ('LATS', 'Lats')], max_length=255)),
                ('equipment', models.CharField(choices=[('MACHINE', 'Machine'), ('CURL BAR', 'Curl Bar'), ('BOSU BALL', 'Bosu Ball'), ('E-Z CURL BAR', 'Ez Curl Bar'), ('DUMBBELLS', 'Dumbbells'), ('MEDICINE BALL', 'Medicine Ball'), ('CABLES', 'Cables'), ('EXERCISE BALL', 'Exercise Ball'), ('WEIGHT BENCH', 'Weight Bench'), ('FOAM ROLL', 'Foam Roll'), ('BODY ONLY', 'Body Only'), ('BODY WEIGHT', 'Body Weight'), ('BANDS', 'Bands'), ('KETTLEBELLS', 'Kettlebells'), ('BARBELL', 'Barbell'), ('CABLE MACHINE', 'Cable Machine'), ('DUMBBELL', 'Dumbbell'), ('CABLE', 'Cable'), ('MAT', 'Mat'), ('OTHER', 'Other')], max_length=255)),
                ('image_file', models.CharField(blank=True, max_length=255, null=True)),
                ('rating', models.FloatField(blank=True, default=None, null=True)),
            ],
        ),
    ]