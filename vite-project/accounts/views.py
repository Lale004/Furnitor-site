from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token

User = get_user_model()

@method_decorator(csrf_exempt, name="dispatch")
class LoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(request, username=username, password=password)

        if user is None:
            return Response({"error": "Wrong Credentials"}, status=400)
        token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key})


@method_decorator(csrf_exempt, name="dispatch")
class RegisterView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("email")

        if not username or not password or not email:
            return Response(
                {"error": "Username, password and email required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        user = User.objects.create(username=username, email=email)
        user.set_password(password)
        user.save()

        return Response(
            {"message": f"User {user.username} has been successfully created."},
            status=status.HTTP_201_CREATED,
        )
