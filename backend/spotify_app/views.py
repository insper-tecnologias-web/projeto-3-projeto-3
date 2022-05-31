from django.shortcuts import render, redirect
from django.http import HttpResponse

from .apps import SpotifyAppConfig


def front(request): return HttpResponse('Aqui seria o front')


def login(request):

	sp_auth = SpotifyAppConfig.spAuth()

	# This url will prompt you a Spotify login page, then redirect user to your /callback upon authorization
	redirect_url = sp_auth.get_authorize_url() # Note: You should parse this somehow. It may not be in a pretty format.
	return redirect(redirect_url)


def callback(request):

	sp_auth = SpotifyAppConfig.spAuth()
	code = request.GET.get('code', '')
	token = sp_auth.get_access_token(code=code)

	print(token)

	return redirect(SpotifyAppConfig.frontend_address)