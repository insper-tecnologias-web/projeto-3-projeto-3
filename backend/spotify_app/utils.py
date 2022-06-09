import requests
import base64

from .apps import SpotifyAppConfig
from urllib.parse import urlencode

def request_tokens(code):
	''' Requests the access and refresh tokens from sporify's API '''

	authorization = SpotifyAppConfig.CLIENT_ID + ':' + SpotifyAppConfig.CLIENT_SECRET
	authorization = base64.urlsafe_b64encode(authorization.encode())
	authorization = authorization.decode()

	headers = {
		'Authorization': 'Basic ' + authorization,
		'Content-Type': 'application/x-www-form-urlencoded'
	}

	params = {
		'grant_type': 'authorization_code',
		'code': code,
		'redirect_uri': SpotifyAppConfig.FRONTEND_ADDRESS
	}

	url = SpotifyAppConfig.SPOTIFY_API_AUTH_URL + 'api/token/'

	token_info = requests.post(url, headers=headers, data=params)

	print('\n\n ***************** \n')
	print(token_info.text)
	print('\n ***************** \n\n')


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












