from django.core.serializers import json
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template.defaulttags import url
# Create your views here.

from django.views.decorators.csrf import csrf_exempt

from myproject import database


@csrf_exempt
def index(request):
  return HttpResponse(render(
    request,
    'index.html',
  ))

@csrf_exempt
def auth(request):
  body = json.loads(request.body)
  if body['type'] == "registration":
    if database.check_login(body["login"]) == True:
      return HttpResponse(json.dums({'error': 'Users lox'}))
    database.add_user(body['name'],body['login'],body['password'])
    request.session[body['login']] = body["password"]
    return HttpResponse(json.dumps({'redirect_url': url+"? profile="+body['login']}))
  elif body["type"] == "login":
    if database.check_user(body["login"],body['password']) == True:
      request.session[body["login"]] =  body["password"]
      return HttpResponse(json.dumps({"redirect_url": url+"?profile="+body["login"]})) 
    else:
      return HttpResponse(json.dumps({'error': "Incorrect login or password"}))
  elif body['type'] == "isLog":  # я нузнаю куда точно надо это написать (это проверка сессии на слайде 10 )
    for this_session in request.session.keys():
      return HttpResponse(json.dumps({"isLog": True}))
    return HttpResponse(json.dumps({"isLog": False}))

@csrf_exempt
def index(request):
	for this_session in request.session.keys():
		return redirect('/?profile='+this_session)
	auth = False
	if request.path == "/auth/":
		auth = True
	return HttpResponse(render(
			request,
			'index.html',
			{
				'auth':auth,
			}
		))

@csrf_exempt
def profile(request):
  return HttpResponse(render(
          request,
          'index.html',
          {

          }
  ))


