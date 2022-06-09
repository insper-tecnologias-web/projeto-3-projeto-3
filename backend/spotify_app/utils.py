import requests
import datetime
import base64
import pytz

from .models import SpotifyUser
from .apps import SpotifyAppConfig

from urllib.parse import urlencode
from django.utils import timezone


def get_spotify_user_info(token_info):
	''' Requests the user information of the given token '''

	authorization = 'Bearer ' + token_info['access_token']

	headers = {
		'Authorization': authorization,
		'Content-Type': 'application/json'
	}

	url = SpotifyAppConfig.SPOTIFY_API_CURRENT_USER_URL

	user_info = requests.get(url, headers=headers).json()

	return user_info



def register_user(token_info):
	''' Requests the access and refresh tokens from spotify's API, as well as username'''
	
	refresh_token = token_info['refresh_token']
	access_token = token_info['access_token']
	token_expires = timezone.now() + datetime.timedelta(seconds=token_info['expires_in'])

	user_info = get_spotify_user_info(token_info)
	user_email = user_info['email']
	user_id = user_info['id']
	user_country = user_info['country']
	user_display_name = user_info['display_name']

	try:
		spotify_user = SpotifyUser.objects.get(user_id=user_id)
		spotify_user.email = user_email
		spotify_user.country = user_country
		spotify_user.display_name = user_display_name
		spotify_user.token_expires = token_expires
		spotify_user.access_token = access_token
		spotify_user.refresh_token = refresh_token

	except SpotifyUser.DoesNotExist:
		spotify_user = SpotifyUser(
			email=user_email,
			user_id=user_id,
			country=user_country,
			display_name=user_display_name,
			token_expires=token_expires,
			access_token=access_token,
			refresh_token=refresh_token
		)

	spotify_user.save()

	frontend_user_data = {
		'user_id': user_id,
		'display_name': user_display_name
	}

	return frontend_user_data



def get_token_info(code):
	''' Requests the token info for a given code '''

	authorization = SpotifyAppConfig.CLIENT_ID + ':' + SpotifyAppConfig.CLIENT_SECRET
	authorization = base64.urlsafe_b64encode(authorization.encode())
	authorization = 'Basic ' + authorization.decode()

	headers = {
		'Authorization': authorization,
		'Content-Type': 'application/x-www-form-urlencoded'
	}

	params = {
		'grant_type': 'authorization_code',
		'code': code,
		'redirect_uri': SpotifyAppConfig.FRONTEND_ADDRESS
	}

	url = SpotifyAppConfig.SPOTIFY_API_AUTH_TOKEN_URL

	token_info = requests.post(url, headers=headers, data=params).json()

	return token_info



def spotify_login_url():
	''' Returns the url to login with spotify '''

	data = {
		'response_type': 'code',
		'client_id': SpotifyAppConfig.CLIENT_ID,
		'scope': SpotifyAppConfig.SCOPE,
		'redirect_uri': SpotifyAppConfig.FRONTEND_ADDRESS
	}

	url = SpotifyAppConfig.SPOTIFY_API_AUTH_URL + 'authorize?' + urlencode(data)

	return url












