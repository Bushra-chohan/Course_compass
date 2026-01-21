from rest_framework import serializers
from .models import Course, Term, UserCourse

class TermSerializer(serializers.ModelSerializer):
    class Meta:
        model = Term
        fields = ('name',)

class CourseSerializer(serializers.ModelSerializer):
    terms_offered = TermSerializer(many=True, read_only=True)
    prerequisites = serializers.StringRelatedField(many=True)
    
    class Meta:
        model = Course
        fields = ('course_code', 'title', 'description', 'credits', 'department', 'prerequisites', 'terms_offered')

class UserCourseSerializer(serializers.ModelSerializer):
    course = CourseSerializer(read_only=True) 

    class Meta:
        model = UserCourse
        fields = ('user', 'course', 'semester', 'grade', 'status', 'created_at')