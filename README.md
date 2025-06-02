# Practical 4 – React Firebase Authentication App

## 📚 Course Info
- **Course:** IA607001 – Introductory Application Development Concepts  
- **Instructor:** Tariq Khan  
- **Assessment:** Practical 4 (5% of final grade)  
- **Learning Outcome:** LO1 – Design and build secure applications with dynamic database functionality

---

## ✅ Project Overview

This project is a role-based authentication system built with React and Firebase. Users can sign up as either **admin** or **customer**. After login, users are redirected to a protected dashboard based on their role.

### 👨‍💼 Admin Features
- Add products with:
  - ID
  - Name
  - Price
  - Description

### 🛒 Customer Features
- View a list of all available products (added by admin)

---

## 🔧 Technologies Used

- React.js (Functional Components + Hooks)
- Firebase Authentication
- Firebase Firestore (NoSQL)
- React Router
- Bootstrap (for layout)

---

## 📁 Folder Structure

```

fb-auth-app/
├── src/
│   ├── components/
│   │   ├── Admin.js 
│   │   ├── Customer.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   └── ProtectedRoute.js
│   ├── context/
│   │   └── UserAuthContext.js
│   ├── firebase.js
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md

````

---

## 🚀 How to Run the App

### 1. Clone the project or unzip the provided file:
```bash
cd fb-auth-app
````

### 2. Install dependencies:

```bash
npm install
```

### 3. Add your Firebase config:

Edit `src/firebase.js` and replace the config object with your Firebase project credentials.

### 4. Start the app:

```bash
# For Windows (PowerShell):
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm start
```

---

## 🧪 Firebase Setup Instructions

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project: `ReactAuthPrj`
3. Enable **Authentication** → Sign-in method → Email/Password
4. Go to **Firestore Database** → Start a database → Add a `users` collection
5. Store user roles like:

   ```json
   {
     "email": "user@example.com",
     "role": "admin"
   }
   ```

---

## ✅ Features Implemented

| Feature                           | Implemented |
| --------------------------------- | ----------- |
| Firebase Email/Password Login     | ✅           |
| Role-based Dashboard (Admin/User) | ✅           |
| Admin: Add Product to Firestore   | ✅           |
| Customer: View Products           | ✅           |
| Protected Routes                  | ✅           |
| Context API for Auth Management   | ✅           |

---

## 🖼️ Screenshots to Include in Submission

* Signup Page
* Login Page
* Admin Dashboard (with product form)
* Customer Dashboard (with product list)
* Firebase Authentication → Users
* Firebase Firestore → Users & Products

---

## 📌 Notes

* Ensure Firestore document IDs match Firebase Authentication UIDs.
* Use lowercase field names like `role` and `email`.
* Restart the server after config changes.

---

## 👤 Author

* Name: \Roshan aryal
* ID: \1000123440
* Date: June 2025

```
