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
		token_info = get_token_info(code)
		frontend_user_data = register_user(token_info)
		response = JsonResponse(frontend_user_data)

	# -- --- --- TEMPORÁRIO	 --- --- --- ---
	if request.method == 'GET':
		code = request.GET.get('code')
		token_info = get_token_info(code)
		frontend_user_data = register_user(token_info)
		response = JsonResponse(frontend_user_data)
	# -- --- --- --- --- --- --- --- --- ---

	else:
		response = HttpResponse()
		response.status_code = 400
	
	return response







