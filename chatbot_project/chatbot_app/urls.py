from django.urls import path
from . import views
from django.views.generic import TemplateView


urlpatterns = [
    path('chat/', views.chat, name='chat'),
    path('', TemplateView.as_view(template_name='chatbot_app/index.html'), name='index'),
]
