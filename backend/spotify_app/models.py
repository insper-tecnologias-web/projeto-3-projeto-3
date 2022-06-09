from django.db import models

# Create your models here.



class SpotifyUser(models.Model):
	''' Representa um usuário do Spotify '''

	email = models.EmailField()
	user_id = models.TextField()
	country = models.CharField(max_length=4)
	display_name = models.TextField()
	refresh_token = models.TextField()
	access_token = models.TextField()
	token_expires = models.DateTimeField()

	def __str__(self):
		''' Override da função de formatação em string '''
		return str(self.user_id)+ ': ' + str(self.display_name)

