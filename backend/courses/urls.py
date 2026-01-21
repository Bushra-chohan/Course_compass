from django.urls import path
from .views import course_list, course_detail, course_search, user_courses, add_user_course, remove_user_course

urlpatterns = [
    path('courses/', course_list, name='course-list'),
    path('courses/<int:id>/', course_detail, name='course-detail'),
    path('courses/search/', course_search, name='course-search'),
    path('user/courses/',user_courses, name='user-courses'),
    path('user/courses/',add_user_course, name='add-user-course'),
    path('user/courses/<int:id>/', remove_user_course, name='remove-user-course'),

]