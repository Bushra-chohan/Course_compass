from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Term(models.Model):
    TERM_CHOICES = [
        ('Fall', 'Fall'),
        ('Winter', 'Winter'),
        ('Spring', 'Spring'),
        ('Summer', 'Summer'),
    ]
    name = models.CharField(max_length=10, choices=TERM_CHOICES, unique=True)

    def __str__(self):
        return self.name


class Course(models.Model):

    course_code = models.CharField(max_length = 20, unique=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    credits = models.IntegerField()
    prerequisites = models.ManyToManyField('self', blank=True, symmetrical=False)
    terms_offered = models.ManyToManyField(Term, blank=True)
    department = models.CharField(max_length=10)  

    def __str__(self):
        return f"{self.course_code}: {self.title}"

class UserCourse(models.Model):
    STATUS_CHOICES = [
        ('enrolled', 'Enrolled'),
        ('completed', 'Completed'),
        ('dropped', 'Dropped'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    semester = models.CharField(max_length=20)
    grade = models.CharField(max_length=5, blank=True) 
    status = models.CharField(max_length=20, choices=STATUS_CHOICES) 
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.course.course_code}"