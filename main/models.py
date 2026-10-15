from django.db import models


class PermissionMode(models.TextChoices):
    NOPERM = 'no-perm', "No Permission"
    READ = "read", "Read Only"
    UPLOAD = "upload", "Upload Files"


class User(models.Model):
    name = models.CharField(max_length=100)
    permission = models.CharField(
        max_length=50,
        choices=PermissionMode.choices,
        default=PermissionMode.READ
    )


class Book(models.Model):
    title = models.CharField(max_length=100)
    pub_date = models.DateTimeField("date_published")
