from django.urls import path
from . import views

urlpatterns = [
	path('api/login/', views.login),
	path('api/callback/', views.callback),
	path('front/', views.front),
]