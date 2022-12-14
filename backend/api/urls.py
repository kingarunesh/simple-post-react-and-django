from django.urls import path, include
from api.views import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register("articles", ArticleViewSet, basename="articles")
router.register("users", UserViewSet)
router.register("profile", ProfileViewSet)


urlpatterns = [
    path("", include(router.urls))
]