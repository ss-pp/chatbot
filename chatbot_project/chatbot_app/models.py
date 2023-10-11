from django.db import models

class Message(models.Model):
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    is_bot = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.timestamp} - {'Bot: ' if self.is_bot else 'User: '}{self.content}"

