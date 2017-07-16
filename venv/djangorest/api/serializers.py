from rest_framework import serializers
from .models import pdf, users, seen

class pdfSerializer(serializers.ModelSerializer):

    #userId = usersSerializer()

    class Meta:
        model = pdf
        pdf = serializers.FileField(max_length=None, use_url=True)
        fields = ('id', 'name', 'pdf', 'created', 'user', 'description')
    #
    # def create(self, validated_data):
    #     pdfs_data = validated_data.pop('userId')
    #     pdfNest = pdf.objects.create(**validated_data)
    #
    #     for pdf_data in pdfs_data:
    #         users.objects.create(pdfNest=pdfNest, **pdf_data)
    #     return pdfNest

class usersSerializer(serializers.ModelSerializer):
    uploadedPdf=pdfSerializer()
    class Meta:
        model = users
        fields = ('id', 'user', 'hashn', 'uploads', 'uploadedPdf')

    def create(self, validated_data):
        users_data = validated_data.pop('uploadedPdf')
        usersNest = users.objects.create(**validated_data)
        for user_data in users_data:
            pdf.objects.create(usersNest=usersNest, **user_data)
        return usersNest

class seenSerializer(serializers.ModelSerializer):

    pdfn = pdfSerializer()
    seen = usersSerializer(many = True)

    class Meta:
        model = seen
        fields = ('id', 'pdfn', 'seen')
