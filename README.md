<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=CourseHaven&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=55&desc=Buy%20and%20Sell%20Courses%20%7C%20Full%20Stack%20MERN%20App&descAlignY=78&descSize=18" width="100%"/>

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Now-00d4ff?style=for-the-badge&labelColor=0d1117)](https://course-selling-app-umber.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Source_Code-ffffff?style=for-the-badge&logo=github&logoColor=white&labelColor=0d1117)](https://github.com/au8778166/course-selling-app)

![JavaScript](https://img.shields.io/badge/JavaScript-98%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Stars](https://img.shields.io/github/stars/au8778166/course-selling-app?style=flat-square&color=00d4ff&labelColor=0d1117)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square&labelColor=0d1117)

</div>

---

## 📖 Overview

**CourseHaven** is a production-ready full-stack e-commerce platform for online courses built with the **MERN stack**. It enables teachers to publish and manage courses while students can browse, purchase, and access them — secured with JWT authentication and powered by **Stripe** for payments.

> A real-world application demonstrating role-based access control, payment gateway integration, and clean full-stack architecture.

---

## ✨ Features

### 👨‍🏫 Teacher Panel
- ➕ Create, edit, and delete courses
- 🖼️ Upload course images
- 📊 Dashboard to manage all courses
- 🔐 JWT-protected routes with role-based access

### 👨‍🎓 Student Panel
- 🔍 Browse, search, and filter courses
- 💳 Purchase courses securely via **Stripe**
- 📚 Access purchased courses anytime
- 🔐 JWT-based secure authentication

### 🔒 Auth & Security
- 🔑 JWT authentication (access tokens)
- 🔐 Password hashing with **bcrypt**
- 🛡️ Role-based routing — Teacher vs Student
- ✅ Protected API endpoints

### 💳 Payments
- Stripe payment gateway integration
- Secure checkout flow
- Handles success & failure states gracefully

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js, Tailwind CSS, React Router, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Auth** | JWT, bcrypt |
| **Payments** | Stripe |
| **UI Extras** | React Hot Toast, Slick Carousel |
| **Deploy** | Vercel (Frontend), Render/Railway (Backend) |

<div align="center">

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## 📁 Project Structure

```
course-selling-app/
├── 📁 backend/
│   ├── 📁 controllers/        # Route logic — auth, courses, payments
│   ├── 📁 models/             # Mongoose schemas — User, Course, Purchase
│   ├── 📁 routes/             # Express route definitions
│   ├── 📁 middleware/         # JWT auth middleware, role checks
│   └── server.js              # Entry point
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/     # Reusable UI components
│   │   ├── 📁 pages/          # Route pages — Home, Dashboard, Course
│   │   ├── 📁 context/        # Auth context & state
│   │   └── App.jsx            # App router
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

```bash
Node.js >= 18
MongoDB (local or Atlas)
Stripe account (for payments)
```

### 1. Clone the repo

```bash
git clone https://github.com/au8778166/course-selling-app.git
cd course-selling-app
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

```bash
npm start
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file in `/frontend`:

```env
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) 🎉

---

## 🔐 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/signup` | Register as student or teacher |
| `POST` | `/api/auth/login` | Login & receive JWT |

### Courses
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `GET` | `/api/courses` | Public | Get all courses |
| `GET` | `/api/courses/:id` | Public | Get course details |
| `POST` | `/api/courses` | Teacher | Create a course |
| `PUT` | `/api/courses/:id` | Teacher | Update a course |
| `DELETE` | `/api/courses/:id` | Teacher | Delete a course |

### Payments
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/api/payment/checkout` | Student | Create Stripe session |
| `GET` | `/api/payment/purchased` | Student | Get purchased courses |

---

## 🌐 Live Demo

**🔗 [https://course-selling-app-umber.vercel.app](https://course-selling-app-umber.vercel.app)**

| Role | Email | Password |
|------|-------|----------|
| Teacher | teacher@demo.com | demo123 |
| Student | student@demo.com | demo123 |

> *(Add demo credentials if you set them up)*

---

## 👨‍💻 Author

<div align="center">

**Abhishek Kumar Upadhyay**

*Final Year B.Tech CSE · IIIT Bhopal · Open to Work*

[![Portfolio](https://img.shields.io/badge/Portfolio-00d4ff?style=for-the-badge&logo=vercel&logoColor=black)](https://portfolio-abhishek-upadhyay.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhishek-kumar-upadhyay-bb73a928a)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/au8778166)

</div>

---

<div align="center">

⭐ **Star this repo if you found it useful!**

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=80&section=footer" width="100%"/>

</div>
