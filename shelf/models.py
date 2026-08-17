from django.db import models


class Book(models.Model):
    title = models.CharField(max_length=100)
    pub_date = models.DateTimeField("date_published")
