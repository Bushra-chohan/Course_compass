# 🎓 CourseCompass - AI Academic Planning Tool

AI-powered web application helping University of Alberta students plan their 120-credit degree requirements with intelligent course recommendations and real-time academic advising.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react)
![Django](https://img.shields.io/badge/Django-4.x-092E20?style=flat&logo=django)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
![Google AI](https://img.shields.io/badge/Google_Gemini_AI-4285F4?style=flat&logo=google&logoColor=white)

**⚠️ Note: Project is currently ~70% complete and under active development**

---

## ✨ Features

### Implemented ✅
- 🔐 **User Authentication** - Secure JWT-based login and registration system
- 📚 **Course Database** - Integration of 500+ real University of Alberta courses via external API
- 🤖 **AI Chat Assistant** - Google Gemini AI providing personalized academic advising with <2s response time
- 📊 **Degree Progress Tracking** - Dashboard displaying completed credits and remaining requirements
- 📝 **Course Enrollment** - Add/remove courses to build personalized academic plans
- 🎨 **Responsive UI** - React + Tailwind CSS with 10+ reusable components
- 🔌 **RESTful API** - 12+ endpoints with Django REST Framework

### In Progress 🚧
- Course search and advanced filtering
- Schedule conflict detection
- Course prerequisite validation
- Multi-semester planning view

---

## 🛠️ Tech Stack

**Frontend:**
- React 18.x
- Tailwind CSS
- React Router v6
- Vite

**Backend:**
- Django 4.x
- Django REST Framework
- PostgreSQL
- JWT Authentication (djangorestframework-simplejwt)
- Google Gemini AI API (via Vertex AI)

**Deployment:**
- Vercel (Frontend)
- Railway (Backend)
- CI/CD pipeline

---

## 📁 Project Structure

```
coursecompass/
├── backend/
│   ├── accounts/              # User management & authentication
│   ├── courses/               # Course data & enrollment
│   │   ├── models.py          # Course, Term, UserCourse models
│   │   ├── serializers.py     # API serializers
│   │   └── views.py           # API endpoints
│   ├── chat/                  # AI chatbot functionality
│   │   ├── gemini.py          # Google Gemini AI integration
│   │   └── views.py           # Chat endpoints
│   └── coursecompass/         # Main Django settings
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── CourseCard.jsx
│   │   │   └── ChatAI.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Chat.jsx
│   │   │   ├── Courses.jsx
│   │   │   └── Profile.jsx
│   │   └── App.jsx           # Main router
│   └── package.json
└── README.md
```

---

## 🎯 Key Features Breakdown

### Database Architecture
- **User Profile** - Tracks major, semester, and expected graduation date
- **Course Model** - 500+ UAlberta courses with prerequisites and terms offered
- **UserCourse** - Enrollment tracking with status (enrolled/completed/dropped) and grades
- **ChatMessage** - Stores AI conversation history for each user

### API Endpoints

**Authentication**
```
POST /api/accounts/register/       - Create new user account
POST /api/accounts/login/          - Login (returns JWT tokens)
GET  /api/accounts/profile/        - Get user profile
```

**Courses**
```
GET    /api/courses/               - List all available courses
GET    /api/user/courses/          - Get user's enrolled courses
POST   /api/user/courses/          - Enroll in course
```

**AI Chat**
```
POST   /api/chat/                  - Send message to AI assistant
GET    /api/chat/history/          - Retrieve chat history
```

### AI Integration
- **Google Gemini AI** for natural language course recommendations
- **<2 second response time** for real-time academic advising
- **Personalized suggestions** based on user's major and completed courses
- **Context-aware responses** using conversation history

### Security Features
- JWT token authentication with access/refresh tokens
- Password hashing using Django's PBKDF2 algorithm
- CORS configuration for secure cross-origin requests
- Environment variable protection for sensitive credentials
- SQL injection protection via Django ORM

---

## 📈 Performance Metrics

- **API Response Time:** <500ms average
- **AI Chat Response:** <2s for personalized recommendations
- **Database:** 500+ courses with full relationship mapping
- **Concurrent Users:** Designed to support 50+ simultaneous users
- **Uptime Target:** 99.5% (deployed on Railway & Vercel)

---

## 🚧 Development Status

**Current Progress: ~70%**

✅ **Completed:**
- Complete backend API architecture
- Database models with relationships
- JWT authentication system
- AI chatbot integration with Google Gemini
- Basic frontend UI and routing
- Deployment configuration
- CORS and security setup

🚧 **In Progress:**
- Course search and filtering functionality
- My Courses page with tabs (Completed/In Progress/Planned)
- Degree requirement validation logic
- Production deployment optimization

---

## 🤝 Contributing

This is a personal project developed for portfolio purposes. Feedback, suggestions, and bug reports are welcome! Feel free to open an issue.

---

## 👤 Author

**Bushra Chohan**  
Computing Science Student @ University of Alberta  
- GitHub: [@Bushra-chohan](https://github.com/Bushra-chohan)
- LinkedIn: [bushrachohan](https://linkedin.com/in/bushrachohan)

---

**Note:** This project is actively being developed as part of a portfolio. Some features may be incomplete or subject to change. Contributions and feedback are appreciated!

---

⭐ **If you find this project interesting, please give it a star!**
