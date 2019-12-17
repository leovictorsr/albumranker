from django.db import models

RANKING_STR = "{} of {} ranked by {}"


class Ranking(models.Model):
    handle = models.CharField(max_length=20)
    album = models.CharField(max_length=50)
    artist = models.CharField(max_length=50)

    def __str__(self):
        return RANKING_STR.format(self.album, self.artist, self.handle)


class Track(models.Model):
    name = models.CharField(max_length=100)
    duration = models.CharField(max_length=10)
    track_number = models.IntegerField()
    order = models.IntegerField()
    ranking = models.ForeignKey(Ranking, related_name="tracks", on_delete=models.CASCADE)

    class Meta:
        unique_together = ["ranking", "order"]
        ordering = ["order"]

    def __str__(self):
        return "{}: {}".format(self.order, self.name)
