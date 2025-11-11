# 🚀 PayPal Sprint & Task Management (MERN)

This project is a simplified Sprint and Task Management system inspired by tools like Jira. It allows users to create Sprints, assign Tasks to those sprints, track task progress, and manage workflow states. The UI is kept clean and easy to follow, with API-backed authentication and secure data operations.

---

![image](https://user-images.githubusercontent.com/104199818/227719931-0ac4b77f-db9c-4b34-b981-58314838968a.png)


## 🌐 Live Demo

| Part     | Link                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------ |
| Frontend | [https://lighthearted-puffpuff-fc42ec.netlify.app/](https://lighthearted-puffpuff-fc42ec.netlify.app/) |
| Backend  | [https://paypal-3knu.onrender.com/](https://paypal-3knu.onrender.com/)                                 |

---

## 📌 About

This is a full stack MERN application modeled around PayPal’s engineering assignment requirements, with improvements to support:

* Creating and managing **Sprints**
* Creating Tasks and assigning them to Sprints
* Updating Task status (To Do, In Progress, Completed)
* User Authentication using JWT
* Fully functional UI with state management

The goal is to demonstrate clean architecture and practical workflow logic similar to real-world agile sprint planning.

---

## ⭐ Key Features

### 🗂 Sprint Management

* Create new sprints with start and end dates
* View active and completed sprints
* Assign tasks to a specific sprint

### ✅ Task Management

* Create tasks with title, description, priority and status
* Move tasks between workflow states
* View tasks grouped under their sprint

### 🔐 User & Auth

* Login and Signup using JWT Authentication
* User-specific data handling

### 🎨 UI/UX

* Clean dashboard layout
* Built with Chakra UI components

---

## 🏗 Tech Stack

| Layer          | Technologies                                             |
| -------------- | -------------------------------------------------------- |
| **Frontend**   | React, Redux, Redux Thunk, Chakra UI, Axios, React Icons |
| **Backend**    | Node.js, Express.js, JWT Authentication, Crypto-js       |
| **Database**   | MongoDB                                                  |
| **Deployment** | Netlify (Frontend), Render (Backend)                     |

---

## 📁 Project Structure

```
client/
  src/
    components/
    pages/
    redux/
    App.js

server/
  models/
  routes/
  controllers/
  server.js
```

---

## 🔄 Workflow Overview

1. User signs in and receives a JWT token
2. User creates a Sprint
3. User creates Tasks under that Sprint
4. Tasks are assigned workflow states (To Do, In Progress, Completed)
5. Sprint dashboard shows tasks grouped by status

This follows a typical agile sprint execution cycle.

---

## 🏷 Topics Used

```
redux
nodejs
css
html
mongodb
reactjs
expressjs
redux-thunk
axios
jwt-authentication
react-icons
crypto-js
chakra-ui
```

---

## 👨‍💻 Author

**Abhishek Solanki**
🌐 Portfolio: [https://abhishek07788.github.io](https://abhishek07788.github.io)
🐱 GitHub: [https://github.com/Abhishek07788](https://github.com/Abhishek07788)
💼 LinkedIn: [https://linkedin.com/in/abhishekpratapsolanki](https://linkedin.com/in/abhishekpratapsolanki)

---
