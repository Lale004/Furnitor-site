from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.shopProduct_list_view, name='shopProduct_list'),
    path('create/', views.shopProduct_create_view, name='shopProduct_create'),
    path('detail/<id>/', views.shopProduct_detail_view, name='shopProduct_detail'),
     path('calculate_discount_percentage/', views.calculate_discount_percentage_view, name='calculate_discount_percentage'),
]


