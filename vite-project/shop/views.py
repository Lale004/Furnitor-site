from django.shortcuts import render
from django.db.models import F, ExpressionWrapper, DecimalField

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ShopProduct
from .serializers import ShopProductSerializer

@api_view(['GET'])
def shopProduct_list_view(request):
    recipes=ShopProduct.objects.all()
    serializer=ShopProductSerializer(recipes,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def shopProduct_create_view(request):
    serializer=ShopProductSerializer(data=request.data)
    serializer.is_valid(raise_exceptions=True)
    serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def shopProduct_detail_view(request,id):
    recipe=ShopProduct.objects.all()
    serializer=ShopProductSerializer(recipe)
    return Response(serializer.data)

@api_view(['GET'])
def calculate_discount_percentage_view(request):
    discounted_products = ShopProduct.objects.exclude(old_price=None)

    discount_percentages = []
    for product in discounted_products:
        discount_percentage = ((product.old_price - product.new_price) / product.old_price) * 100
        discount_percentages.append({
            'product_name': product.name,
            'discount_percentage': discount_percentage
        })

    return Response(discount_percentages)