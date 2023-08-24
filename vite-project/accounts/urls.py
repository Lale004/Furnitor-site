# urls.py

from django.urls import path
from .views import RegisterView, LoginView,LogoutView,check_auth
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path("api/logout/", LogoutView.as_view(), name="logout"),
    path("api/check_auth/",check_auth, name="check_auth"),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),  
]