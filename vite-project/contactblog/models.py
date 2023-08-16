from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def _str_(self):
        return self.name


class Blog(models.Model):
    title = models.TextField()
    created_date = models.CharField(max_length=40)
    image = models.URLField()
    # description = models.CharField(max_length=15)
    author=models.CharField(max_length=20, blank=True,null=True)
    description=models.CharField(max_length=10000, blank=True,null=True)
    question1=models.CharField(max_length=1000, blank=True,null=True)
    answer1=models.CharField(max_length=1000, blank=True,null=True)
    question2=models.CharField(max_length=1000, blank=True,null=True)
    answer2=models.CharField(max_length=1000, blank=True,null=True)

    def __str__(self):
        return self.title



class UserReview(models.Model):
    user_name = models.CharField(max_length=100)
    review_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user_name

