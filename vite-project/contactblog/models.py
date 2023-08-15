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


    def __str__(self):
        return self.title



class UserReview(models.Model):
    user_name = models.CharField(max_length=100)
    review_text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user_name

