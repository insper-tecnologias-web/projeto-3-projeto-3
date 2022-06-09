from django.http import HttpResponse, JsonResponse
from .apps import SpotifyAppConfig
from .utils import *



def front(request):
	code = request.GET.get('code', '')
	return HttpResponse(code)


def spotify_login(request):

	login_url = spotify_login_url()
	data = {'login_page': login_url}

	return JsonResponse(data)


def callback(request):

	if request.method == 'POST':
		code = request.POST.get('code')
		response = HttpResponse()
		response.status_code = 200
		register_user(code)

	# -- --- --- TEMPORÁRIO	 --- --- --- ---
	if request.method == 'GET':
		code = request.GET.get('code')
		response = HttpResponse()
		response.status_code = 200
		register_user(code)
	# -- --- --- --- --- --- --- --- --- ---

	else:
		response = HttpResponse()
		response.status_code = 400
	
	return response







