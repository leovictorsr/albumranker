from django.http import JsonResponse
from . import api_handler


def search(request, query, type):
    result = api_handler.search(query, type)
    return JsonResponse(result, safe=False)
