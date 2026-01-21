from django.urls import path
from .views import send_message, chat_history

urlpatterns = [
    path('chat/', send_message, name='send-message'),   
    path('chat/history/', chat_history, name='chat-history'),  
]
