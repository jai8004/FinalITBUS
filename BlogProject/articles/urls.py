from django.conf.urls import url
from .import views
from django.urls import path
app_name ='articles'

urlpatterns = [
#    url(r'^$',views.article_list,name='list'),
    path('',views.article_list,name='list'),
    #url(r'^(?P<slug>[\w-]+)/$',views.article_detail,name='detail')
    path('articles/<slug:slug>',views.article_detail,name='detail')
]
