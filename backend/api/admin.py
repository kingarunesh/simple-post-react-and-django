from django.contrib import admin
from api.models import Article


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_filter = ("title",)
    list_display = ("title",)