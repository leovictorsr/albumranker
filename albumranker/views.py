from django.http import JsonResponse
from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Ranking
from .serializers import RankingSerializer
from . import api_handler


def search(request, query, type):
    result = api_handler.search(query, type)
    return JsonResponse(result, safe=False)


class RankingView(APIView):
    def get(self, request):
        rankings = Ranking.objects.all()
        serializer = RankingSerializer(rankings, many=True)
        return Response(serializer.data)


    def post(self, request, format=None):
        serializer = RankingSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
