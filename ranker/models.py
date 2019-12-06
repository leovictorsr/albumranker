from django.db import models


class Artist(models.Model):
    name = models.CharField(max_length=100)
    spotify_uri = models.CharField(max_length=30)


class Song(models.Model):
    name = models.CharField(max_length=100)
    spotify_uri = models.CharField(max_length=30)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    duration = models.DurationField()


class Album(models.Model):
    name = models.CharField(max_length=100)
    spotify_uri = models.CharField(max_length=30)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    duration = models.DurationField()
    release_date = models.DateField()
    stars = models.IntegerField()


