from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CreateView, readPdfView, readSeenView, readUsersView, readAllPdfView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^newPdf', CreateView.as_view(), name="create"),
    url(r'^getPdf/(?P<pk>[0-9]+)/$', readPdfView.as_view(), name="detail"),
    url(r'^getSeen/(?P<pk>[0-9]+)/$', readSeenView.as_view(), name="seenView"),
    url(r'^getUser/(?P<pk>[0-9]+)/$', readUsersView.as_view(), name="userView"),
    url(r'^getAllPdf/$', readAllPdfView.as_view({'get': 'list'}), name="viewAllPdf"),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)
