from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView
from . import views


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", TemplateView.as_view(template_name="frontend/index.html")),
    path("search/<str:query>/<str:type>", views.search),
    path("ranking", views.RankingView.as_view())
]
