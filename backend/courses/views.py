from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Course, UserCourse
from .serializers import CourseSerializer, UserCourseSerializer

# list all courses
@api_view(['GET'])
@permission_classes([AllowAny])
def course_list(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)

# get course details
@api_view(['GET'])
@permission_classes([AllowAny])
def course_detail(request, id):
    course = get_object_or_404(Course, id=id)
    serializer = CourseSerializer(course)
    return Response(serializer.data)

# search courses
@api_view(['GET'])
@permission_classes([AllowAny])
def course_search(request):
    query = request.GET.get('q', '')
    courses = Course.objects.filter(
        title__icontains = query
    ) | Course.objects.filter(
       course_code__icontains = query
    ) | Course.objects.filter(
        description__icontains = query
    )
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)

# get user's courses
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_courses(request):
    user_courses = UserCourse.objects.filter(user=request.user)
    serializer=UserCourseSerializer(user_courses, many=True)
    return Response(serializer.data)

# Add course to user's profile
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_user_course(request):
    course_id = request.data.get('course_id')
    semester = request.data.get('semester')
    course = get_object_or_404(Course, id=course_id)

    if UserCourse.objects.filter(user=request.user, course=course).exists():
        return Response({"error": "Already enrolled"}, status=status.HTTP_400_BAD_REQUEST)

    user_course = UserCourse.objects.create(
        user=request.user,
        course=course,
        semester=semester,
        status='enrolled'
    )

    serializer=UserCourseSerializer(user_course)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

# Remove course from user's profile
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def remove_user_course(request, id):
    course = get_object_or_404(UserCourse, id=id, user=request.user)
    course.delete()
    return Response({"success": "Course removed"}, status=status.HTTP_200_OK)
