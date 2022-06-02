from django.apps import AppConfig
from spotipy.oauth2 import SpotifyOAuth

import spotipy
import os

class SpotifyAppConfig(AppConfig):

    default_auto_field = 'django.db.models.BigAutoField'
    name = 'spotify_app'

    os.environ['SPOTIPY_CLIENT_ID'] = "bf0af2366a9246759b5fb493429670f5"
    os.environ['SPOTIPY_CLIENT_SECRET'] = "01f95211888f4d69baacd5fc86a62242"
    os.environ['SPOTIPY_REDIRECT_URI'] = "http://localhost:8000/api/callback/"

    scope = 'ugc-image-upload'
    scope += ' user-modify-playback-state'
    scope += ' user-follow-modify'
    scope += ' user-read-recently-played'
    scope += ' user-read-playback-position'
    scope += ' playlist-read-collaborative'
    scope += ' app-remote-control'
    scope += ' user-read-playback-state'
    scope += ' user-read-email'
    scope += ' streaming'
    scope += ' user-top-read'
    scope += ' playlist-modify-public'
    scope += ' user-library-modify'
    scope += ' user-follow-read'
    scope += ' user-read-currently-playing'
    scope += ' user-library-read'
    scope += ' playlist-read-private'
    scope += ' user-read-private'
    scope += ' playlist-modify-private'

    frontend_address = 'http://localhost:8000/front/'

    @staticmethod
    def spAuth(): return SpotifyOAuth(scope=SpotifyAppConfig.scope)








    