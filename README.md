# 🔐 React Auth Routing App

A simple React application demonstrating **routing, authentication flow, and protected routes** using React Router and Context API.

---

## 🚀 Features

* 🔑 Login & Logout functionality
* 🔒 Protected Routes (Dashboard & Profile)
* 💾 Authentication persistence using localStorage
* ⚠️ Error handling for invalid credentials
* 🔄 Redirect after login/logout
* ❌ 404 Page for invalid routes

---

## 🛠️ Tech Stack

* React
* React Router DOM
* Context API
* JavaScript (ES6)

---

## 📂 Project Structure

```
src/
│
├── Pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Profile.jsx
│   ├── NotFound.jsx
│
├── Components/
│   ├── ProtectedRoute.jsx
│
├── Context/
│   ├── AuthContext.jsx
│
├── App.js
├── index.js
```

---

## 🔐 Login Credentials

```
Email: admin@example.com
Password: 123456
```

---

## ⚙️ Setup Instructions

1. Clone the repository:

```
git clone https://github.com/your-username/react-auth-routing-app.git
```

2. Navigate to project folder:

```
cd react-auth-routing-app
```

3. Install dependencies:

```
npm install
```

4. Run the app:

```
npm start
```

---

## 🔄 Routing Flow

* `/login` → Login Page
* `/dashboard` → Protected (requires login)
* `/profile` → Protected (requires login)
* `*` → 404 Page

---

## 🔒 Authentication Flow

* User logs in using predefined credentials
* Auth state is stored in localStorage
* Protected routes check authentication
* Logout clears session and redirects to login

---

## 🎯 Bonus Features

* Context API for global auth state
* Clean component-based architecture

---

## 📸 Screenshots

(Add screenshots here)

---

## 📌 Future Improvements

* Add backend authentication
* Improve UI with styling
* Add JWT-based authentication

---

## 👨‍💻 Author

Pooja Deore

---
