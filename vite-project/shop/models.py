from django.db import models


class ShopProduct(models.Model):
    name=models.CharField(max_length=350)
    category=models.CharField(max_length=100)
    image1=models.URLField(max_length=1000)
    image2=models.URLField(max_length=1000)
    image3=models.URLField(max_length=1000)
    image4=models.URLField(max_length=1000)
    image5=models.URLField(max_length=1000)
    new_price = models.DecimalField(max_digits=8, decimal_places=2)
    old_price = models.DecimalField(max_digits=8,decimal_places=2,blank=True,null=True,default=0.0)
    description = models.TextField(max_length=400)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
