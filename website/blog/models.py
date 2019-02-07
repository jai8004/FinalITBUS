from django.db import models
from PIL import Image
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.
class Article(models.Model):
    title=models.CharField(max_length=100)
    slug=models.SlugField()
    body = RichTextUploadingField()
    date=models.DateTimeField(auto_now_add=True)
    thumb = models.ImageField(default='default.png',blank=True)
    show = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    def save(self):
        super().save()

        img = Image.open(self.thumb.path)

        if img.height > 750 or img.width > 420:
            output_size = (750, 420)
            img.thumbnail(output_size)
            img.save(self.thumb.path)
