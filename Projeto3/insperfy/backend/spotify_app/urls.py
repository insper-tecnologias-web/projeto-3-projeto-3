from django.urls import path
from . import views

urlpatterns = [
	path('api/spotify-login/', views.spotify_login),
	path('api/callback/', views.callback),
	path('api/<slug:user_id>/top-music/', views.user_top_music),
	path('api/<slug:user_id>/top-artists/', views.user_top_artists),
	path('front/', views.front)
]