from rest_framework import serializers

from .models import Ranking, Track


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        field = ("name", "order")


class RankingSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True, read_only=True)

    class Meta:
        model = Ranking
        fields = ("id", "handle", "artist", "album", "tracks")
