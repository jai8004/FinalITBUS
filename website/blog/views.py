from django.shortcuts import render
from .models import  Article
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import Q
from django.views import View
# Create your views here.




def article_list(request):

    articles=Article.objects.all()
    search = request.GET.get('q')
    if search:
            articles = articles.filter(
                Q(title__icontains=search) |
                Q(body__icontains=search)
            )
    context = {
    "articles":articles
    }
    return render(request,'article_list.html',context)

def article_detail(request,slug):
#    return HttpResponse(slug)
    article = Article.objects.get(slug=slug)
    return render(request,'article_detail.html',{'article':article})
