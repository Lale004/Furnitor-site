# urls.py
from django.urls import path
from .views import UserReviewView
from .views import contact_view
    
urlpatterns = [
    # path('api/reviews/', UserReviewView.as_view(), name='user-review-view'),
    path('contact/', contact_view,name='contact-us'),
]
