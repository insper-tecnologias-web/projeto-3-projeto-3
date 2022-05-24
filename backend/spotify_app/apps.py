from django.apps import AppConfig
from spotipy.oauth2 import SpotifyClientCredentials

import spotipy
import os

class SpotifyAppConfig(AppConfig):

    default_auto_field = 'django.db.models.BigAutoField'
    name = 'spotify_app'

    os.environ['SPOTIPY_CLIENT_ID'] = "bf0af2366a9246759b5fb493429670f5"
    os.environ['SPOTIPY_CLIENT_SECRET'] = "01f95211888f4d69baacd5fc86a62242"

    SPOTIFY = spotipy.Spotify(client_credentials_manager=SpotifyClientCredentials())
