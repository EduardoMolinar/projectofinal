from django.db import models

# Create your models here.

class pdf(models.Model):
    name = models.CharField(max_length=255, blank=False, unique=False)
    pdf = models.FileField(upload_to='media/', default='media/None/No-doc.pdf')
    created = models.DateField(auto_created=True, auto_now_add=True)
    user = models.CharField(max_length=255, blank=True, unique=False)
    description = models.CharField(max_length=1000, blank=False, unique=False)
    def __str__(self):
        return "{}".format(self.name)

class users(models.Model):
    user = models.CharField(max_length=255)
    hashn = models.CharField(max_length=1024)
    uploads = models.IntegerField()
    uploadedPdf = models.ForeignKey(pdf)

    def __str__(self):
        return "{}".format(self.name)

class seen(models.Model):
    pdfn = models.ForeignKey(pdf, related_name='pdfseen', on_delete=models.CASCADE)
    seen = models.ForeignKey(users, related_name='userSeen')

    def __str__(self):
        return "{}".format(self.name)
