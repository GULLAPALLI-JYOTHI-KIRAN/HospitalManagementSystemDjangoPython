# Generated by Django 3.0.5 on 2023-04-20 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospitalWebApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patientId', models.PositiveIntegerField(null=True)),
                ('doctorId', models.PositiveIntegerField(null=True)),
                ('patientName', models.CharField(max_length=40, null=True)),
                ('doctorName', models.CharField(max_length=40, null=True)),
                ('appointmentDate', models.DateField(auto_now=True)),
                ('description', models.TextField(max_length=500)),
                ('status', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='PatientDischargeDetails',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patientId', models.PositiveIntegerField(null=True)),
                ('patientName', models.CharField(max_length=40)),
                ('assignedDoctorName', models.CharField(max_length=40)),
                ('address', models.CharField(max_length=40)),
                ('mobile', models.CharField(max_length=20, null=True)),
                ('symptoms', models.CharField(max_length=100, null=True)),
                ('admitDate', models.DateField()),
                ('releaseDate', models.DateField()),
                ('daySpent', models.PositiveIntegerField()),
                ('roomCharge', models.PositiveIntegerField()),
                ('medicineCost', models.PositiveIntegerField()),
                ('doctorFee', models.PositiveIntegerField()),
                ('OtherCharge', models.PositiveIntegerField()),
                ('total', models.PositiveIntegerField()),
            ],
        ),
    ]
