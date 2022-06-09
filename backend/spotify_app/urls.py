from django.urls import path
from . import views

urlpatterns = [
	path('api/spotify-login/', views.spotify_login),
	path('api/callback/', views.callback),
	path('front/', views.front)
]