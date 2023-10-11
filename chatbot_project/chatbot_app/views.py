from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from .models import Message
import json
from .chatbot import generate_response 

@csrf_exempt
@require_POST
def chat(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        user_message = data.get("message")

        if user_message:
           
            bot_response = generate_response(user_message)

            user_message_obj = Message(content=user_message, is_bot=False)
            user_message_obj.save()

            bot_response_obj = Message(content=bot_response, is_bot=True)
            bot_response_obj.save()

      
            return JsonResponse({"bot_response": bot_response})

    return JsonResponse({"error": "Invalid request."})
