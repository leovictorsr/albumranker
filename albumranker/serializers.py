from rest_framework import serializers

from .models import Ranking, Track


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = ("name", "duration", "track_number", "order")


class RankingSerializer(serializers.ModelSerializer):
    tracks = TrackSerializer(many=True)

    class Meta:
        model = Ranking
        fields = ("handle", "artist", "album", "tracks")

    def create(self, validated_data):
        tracks_data = validated_data.pop("tracks")
        ranking = Ranking.objects.create(**validated_data)
        for track_data in tracks_data:
            Track.objects.create(ranking=ranking, **track_data)
        return ranking
