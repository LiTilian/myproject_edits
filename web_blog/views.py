from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

from django.views.decorators.csrf import csrf_exempt
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
  

@csrf_exempt
def index(request):
  auth = False
  if request.patch == "/auth/":
    auth = True 
  return HttpResponse(render(
    request, 
    'index.html',
    {
      'auth':auth
    }
  ))