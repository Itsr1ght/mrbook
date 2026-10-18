from django.db import models


class PermissionMode(models.TextChoices):
    NOPERM = "no-perm", "No Permission"
    READ = "read", "Read Only"
    UPLOAD = "upload", "Upload Files"


class User(models.Model):
    name = models.CharField(max_length=100)
    permission = models.CharField(
        max_length=50, choices=PermissionMode.choices, default=PermissionMode.READ
    )


class Book(models.Model):
    title = models.CharField(max_length=100)
    file = models.FileField(upload_to="books/", null=True, blank=True)
    upload_date = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    pub_date = models.DateTimeField(null=True, blank=True)
    author = models.CharField(max_length=100, null=True, blank=True)
    published_by = models.CharField(max_length=100, null=True, blank=True)
    upload_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
