from django.apps import AppConfig

import os

class SpotifyAppConfig(AppConfig):

    default_auto_field = 'django.db.models.BigAutoField'
    name = 'spotify_app'

    CLIENT_ID = "bf0af2366a9246759b5fb493429670f5"
    CLIENT_SECRET = "01f95211888f4d69baacd5fc86a62242"
    REDIRECT_URI = "http://localhost:8000/api/callback/"

    SCOPE = 'ugc-image-upload'
    SCOPE += ' user-modify-playback-state'
    SCOPE += ' user-follow-modify'
    SCOPE += ' user-read-recently-played'
    SCOPE += ' user-read-playback-position'
    SCOPE += ' playlist-read-collaborative'
    SCOPE += ' app-remote-control'
    SCOPE += ' user-read-playback-state'
    SCOPE += ' user-read-email'
    SCOPE += ' streaming'
    SCOPE += ' user-top-read'
    SCOPE += ' playlist-modify-public'
    SCOPE += ' user-library-modify'
    SCOPE += ' user-follow-read'
    SCOPE += ' user-read-currently-playing'
    SCOPE += ' user-library-read'
    SCOPE += ' playlist-read-private'
    SCOPE += ' user-read-private'
    SCOPE += ' playlist-modify-private'

    FRONTEND_ADDRESS = 'http://localhost:3000/callback/'

    # -- ---  URLs de autenticação   --- --- --- --- --- --- --- --- ---
    SPOTIFY_API_AUTH_URL = 'https://accounts.spotify.com/'
    SPOTIFY_API_AUTH_TOKEN_URL = SPOTIFY_API_AUTH_URL + 'api/token/'
    # -- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    # -- ---  URLs de dados  --- --- --- --- --- --- --- --- --- --- ---
    SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1/'
    SPOTIFY_API_CURRENT_USER_URL = SPOTIFY_API_BASE_URL + 'me/'
    SPOTIFY_API_USER_TOP_MUSIC_URL = SPOTIFY_API_CURRENT_USER_URL + 'top/tracks/'
    SPOTIFY_API_USER_TOP_ARTISTS_URL = SPOTIFY_API_CURRENT_USER_URL + 'top/artists/'
    # -- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---







    