from django.db import models


class Artist(models.Model):
    name = models.CharField(max_length=100)


class Song(models.Model):
    name = models.CharField(max_length=100)
    duration = models.DurationField()
    artist = models.ForeignKey(Artist, on_delete=models.Cascade)


class Album(models.Model):
    name = models.CharField(max_length=100)
    artist = models.ForeignKey(Artist, on_delete=models.Cascade)
    release_year = models.YearField()
    stars = models.IntegerField()


