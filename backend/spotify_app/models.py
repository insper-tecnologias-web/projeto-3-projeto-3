from django.db import models
from django.utils import timezone
from .apps import SpotifyAppConfig

import base64

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


	def authorization(self):
		''' Returns the authorizantion header '''

		if timezone.now() >= self.token_expires: self.update_tokens

		return 'Bearer ' + str(self.access_token)


	def update_tokens(self):
		''' Refreshes the user access token '''

		authorization = SpotifyAppConfig.CLIENT_ID + ':' + SpotifyAppConfig.CLIENT_SECRET
		authorization = base64.urlsafe_b64encode(authorization.encode())
		authorization = 'Basic ' + authorization.decode()

		headers = {
			'Authorization': authorization,
			'Content-Type': 'application/x-www-form-urlencoded'
		}

		params = {
			'grant_type': 'refresh_token',
			'refresh_token': self.refresh_token
		}

		url = SpotifyAppConfig.SPOTIFY_API_AUTH_TOKEN_URL

		token_info = requests.post(url, headers=headers, data=params).json()

		self.access_token = token_info['access_token']
		self.refresh_token = token_info['refresh_token']
		self.token_expires = timezone.now() + datetime.timedelta(seconds=token_info['expires_in'])



