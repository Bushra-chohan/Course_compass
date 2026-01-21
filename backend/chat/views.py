from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import ChatMessage
from .serializers import ChatMessageSerializer
from .gemini import generate_response


# Send message to AI


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def send_message(request):
    user = request.user
    user_message=request.data.get('message')

    if not user_message:
        return Response({'error': 'Message is required'}, status=status.HTTP_400_BAD_REQUEST)

    ai_response = generate_response(user_message)

    chat_message = ChatMessage.objects.create(
        user=request.user,
        message=user_message,
        response=ai_response
    )

    return Response({
        "message": user_message,
        "response": ai_response
    }, status=201)

# Get/Delete chat history
@api_view(['GET', 'DELETE'])
@permission_classes([IsAuthenticated])
def chat_history(request):
    if request.method == 'GET':
        messages = ChatMessage.objects.filter(user=request.user).order_by('-created_at')
        serializer = ChatMessageSerializer(messages, many=True)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        ChatMessage.objects.filter(user=request.user).delete()
        return Response({'message': 'Chat history cleared'}, status=status.HTTP_200_OK)


    