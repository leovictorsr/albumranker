from django.http import HttpResponse
from . import api_handler

def search (request, query):
    return HttpResponse(
        api_handler.search(query)
    )
