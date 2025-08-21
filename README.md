# ⚡ Swift Chat – Scalable Real-Time Chat Application

**Swift Chat** is a high-performance, scalable chat application built with the **MERN Stack**, **RabbitMQ**, **Redis**, **Socket.IO**, and a **Microservices Architecture**. It supports **real-time messaging**, **OTP-based authentication**, and is fully deployed on **Railway** (backend) and **Vercel** (frontend). Designed for speed, reliability, and an engaging user experience.

---

## 🚀 Features

- ✅ OTP-based login via email
- 💬 Real-time messaging using WebSocket (Socket.IO)
- 👀 Online/Offline user status
- ✍️ Typing indicators
- ✅ Read & Delivered message receipts
- 🕒 Message timestamps
- 🖼️ Image sharing (Cloudinary)
- 👤 User profile page
- 📦 Microservices architecture for modular development
- 📧 Email OTP service
- ⚙️ Message broker integration (RabbitMQ)
- ⚡ Redis-based pub/sub and user presence

---

## 🧱 Tech Stack

### 🖥 Frontend
- React.js
- Next.js 14
- Tailwind CSS

### 🛠 Backend Microservices
- **User Service** – OTP login, profile management
- **Chat Service** – Messaging, online status, delivery
- **Mail Service** – Email-based OTP system

### 🧰 Infrastructure
- MongoDB – Primary database
- Redis – Caching, pub/sub, user presence
- RabbitMQ – Microservice communication (CloudAMQP)
- Cloudinary – Image storage
- Upsatsh – Redis hosting
- Railway – Backend deployment
- Vercel – Frontend deployment

---

## 🌍 Deployment

| Service     | Platform   |
|-------------|------------|
| Frontend    | Vercel     |
| User API    | Railway    |
| Chat API    | Railway    |
| Mail API    | Railway    |
| Redis       | Upsatsh    |
| RabbitMQ    | CloudAMQP  |
| Cloudinary  | Image Hosting |

---

## 📁 Project Structure

```
Realtime-Chat-Microservices/
├── swift-chat/           # React + Next.js frontend
├── backend/
│   ├── user-service/           # User service (auth, profile)
│   ├── chat-service/           # Chat service (real-time, socket)
│   └── mail-service/           # Mail service (email OTP)
```



---

## 🧪 Core Functionalities

| Feature             | Description                                      |
|---------------------|--------------------------------------------------|
| 🔐 OTP Auth         | Secure login with OTP sent to user's email       |
| 💬 Real-Time Chat   | Instant messaging with delivery & read receipts  |
| 🟢 User Status      | See who is online/offline                        |
| ✍️ Typing Indicator | Know when someone is typing                      |
| 📷 Media Support    | Send images via chat                             |
| ⏱️ Timestamps       | See when a message was sent                      |
| 👤 Profile          | View and manage user info                        |

---

📈 Future Enhancements
Group chat functionality

Push notifications

Audio/video calling (WebRTC)

Message reactions

Admin dashboard

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
