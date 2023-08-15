"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.views.generic import TemplateView
from  django.urls import re_path
from contactblog.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='base.html')),
    # path('api/',include('accounts.urls')),
    path("blogs/", blog_list_view, name="blog"),
      path('',include('shop.urls')),
    path("<int:pk>/blogs/", blog_list_view, name="blog_id"),
    path('api/reviews/', UserReviewView.as_view(), name='user-review-view'),
    re_path(r'^(?P<path>.*)/$', TemplateView.as_view(template_name='base.html')),
    
]

