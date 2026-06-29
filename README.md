# 🏥 PH-Health-Care Backend

A secure and scalable backend API for **PH-Health-Care**, a doctor appointment management platform.

This project is built with modern backend technologies and follows industry-standard development practices. It provides authentication, role-based access control, doctor scheduling, appointment booking, online payments, and complete user management.

---

## ✨ Overview

PH-Health-Care is a healthcare management system where patients can find doctors, book appointments, and complete payments securely.

The application supports four different user roles:

* 👑 Super Admin
* 🛡️ Admin
* 👨‍⚕️ Doctor
* 🧑 Patient

Each role has its own permissions and dashboard functionalities.

---

## 🚀 Features

### 🔐 Authentication & Security

* Email and password authentication
* Google authentication
* Better Auth integration
* JWT authentication system
* Access token & refresh token management
* Secure protected routes
* Role-based authorization (RBAC)

---

### 👥 User Management

* Multi-role user system
* Admin can create doctors
* Doctor credentials sent through email
* User profile management
* User status control
* Secure account handling

---

### 👨‍⚕️ Doctor Management

* Doctor creation and management
* Doctor availability system
* Schedule selection
* Appointment tracking
* Doctor profile management

---

### 📅 Appointment System

* Admin can create doctor schedules
* Doctors can select available schedules
* Patients can book appointments
* Appointment status management
* Appointment history tracking

---

### 💳 Payment Integration

Integrated secure online payment system using:

* Stripe Payment Gateway
* Payment verification
* Transaction handling
* Secure checkout flow

---

### 📧 Additional Features

* Email sending using Nodemailer
* Image upload using Cloudinary
* PDF generation
* Request validation using Zod
* Error handling middleware
* Database seeding
* Clean and maintainable codebase

---

# 🛠️ Technology Stack

### Frontend Integration Ready

* React.js
* Next.js

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* PostgreSQL
* Prisma ORM

### Authentication

* Better Auth
* JWT

### Validation

* Zod

### Payment

* Stripe

### Storage & Services

* Cloudinary
* Nodemailer

---

# ⚙️ Getting Started

Follow these steps to run the project locally.

## 1. Clone the repository

```bash
git clone https://github.com/parvejpappu100/ph-health-care-backend.git
```

Go to the project folder:

```bash
cd ph-health-care-backend
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Setup Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=5000
NODE_ENV=development

DATABASE_URL=your_postgresql_database_url


BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:5000


ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret

ACCESS_TOKEN_EXPIRES_IN=1d
REFRESH_TOKEN_EXPIRES_IN=7d


EMAIL_SENDER_SMTP_USER=your_email
EMAIL_SENDER_SMTP_PASS=your_password
EMAIL_SENDER_SMTP_HOST=smtp.gmail.com
EMAIL_SENDER_SMTP_PORT=465


GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/callback/google


FRONTEND_URL=http://localhost:3000


CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_secret


STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret


SUPER_ADMIN_EMAIL=your_email
SUPER_ADMIN_PASSWORD=your_password
```

---

# 🗄️ Database Setup

Generate Prisma Client:

```bash
npm run generate
```

Run migration:

```bash
npm run migrate
```

Or push database schema:

```bash
npm run push
```

Open Prisma Studio:

```bash
npm run studio
```

---

# ▶️ Run the Application

### Development

```bash
npm run dev
```

Server will start:

```
http://localhost:5000
```

---

### Production

Build:

```bash
npm run build
```

Start:

```bash
npm run start
```

---

# 💳 Stripe Webhook

To test Stripe payments locally:

```bash
npm run stripe:webhook
```

---

# 📜 Available Scripts

| Command                  | Description              |
| ------------------------ | ------------------------ |
| `npm run dev`            | Start development server |
| `npm run build`          | Build TypeScript project |
| `npm run start`          | Start production server  |
| `npm run migrate`        | Run Prisma migration     |
| `npm run generate`       | Generate Prisma client   |
| `npm run studio`         | Open Prisma Studio       |
| `npm run push`           | Push database schema     |
| `npm run stripe:webhook` | Stripe webhook listener  |

---

# 🔗 Repository

GitHub:

https://github.com/parvejpappu100/ph-health-care-backend

---

## 👨‍💻 Developer

**Parvej Hasan Pappu**

Full Stack Developer

Building scalable, secure, and modern web applications 🚀

---

⭐ If you find this project useful, consider giving it a star!