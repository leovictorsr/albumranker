from django.http import HttpResponse
from . import api_handler


def search(request, query):
    result = api_handler.search(query)
    print(result)
    return HttpResponse(result)
