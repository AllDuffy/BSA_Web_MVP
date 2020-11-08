from django.views.decorators.cache import never_cache
from django.views.generic import TemplateView
from rest_auth.views import (LoginView, LogoutView, PasswordChangeView)
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


# Create your views here.
class APILogoutView(LogoutView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class APILoginView(LoginView):
    pass


class APIPasswordUpdateView(PasswordChangeView):
    authentication_classes = [TokenAuthentication]


index = never_cache(TemplateView.as_view(template_name='index.html'))
