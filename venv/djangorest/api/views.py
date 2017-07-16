from django.shortcuts import render
from .serializers import pdfSerializer, usersSerializer, seenSerializer, serializers
from .models import pdf, seen, users
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.parsers import FormParser, MultiPartParser
# Create your views here.

class CreateView(generics.CreateAPIView):
    # queryset = pdf.objects.all()
    # serializer_class = pdfSerializer
    # parser_classes = (MultiPartParser, FormParser,)
    #
    # def perform_create(self, serializer):
    #     serializer.save(datafile=self.request.data.get('file'))
    queryset = pdf.objects.all()
    serializer_class = pdfSerializer

class readPdfView(generics.RetrieveUpdateDestroyAPIView):
    queryset = pdf.objects.all()
    serializer_class = pdfSerializer

class readSeenView(generics.RetrieveAPIView):
    queryset = seen.objects.all()
    serializer_class = usersSerializer

class readUsersView(generics.RetrieveAPIView):
    queryset = seen.objects.all()
    serializer_class = seenSerializer

class readAllPdfView(viewsets.ModelViewSet):
    queryset = pdf.objects.all()
    serializer_class = pdfSerializer
