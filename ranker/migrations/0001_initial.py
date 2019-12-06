# Generated by Django 3.0 on 2019-12-06 20:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('spotify_uri', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('spotify_uri', models.CharField(max_length=30)),
                ('duration', models.DurationField()),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ranker.Artist')),
            ],
        ),
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('spotify_uri', models.CharField(max_length=30)),
                ('duration', models.DurationField()),
                ('release_date', models.DateField()),
                ('stars', models.IntegerField()),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ranker.Artist')),
            ],
        ),
    ]
