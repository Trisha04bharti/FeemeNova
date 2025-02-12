#  🌸  FemmeNova 
**Empowering Women's Health & Wellness**  

---

## 📌 Table of Contents  
- [About FemmeNova](#about-femmenova)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation & Setup](#installation--setup)  
  - [Backend Setup](#backend-setup)  
  - [Frontend Setup](#frontend-setup)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Common Issues & Fixes](#common-issues--fixes)  
- [Contributing](#contributing)   

---

## 🌟 About FemmeNova  
**FemmeNova** is a health and wellness platform that helps women track and manage their menstrual health, symptoms, and lifestyle factors. It offers a **personalized dashboard**, **symptom tracking**, **data insights**, and a **community forum** for support and discussion.  

---

## 🚀 Features  
✅ **User Authentication** – Secure login & registration using JWT authentication.  
✅ **Symptom Tracker** – Log daily pain levels, medications, stress levels, and more.  
✅ **Dashboard Analysis** – Get insights into symptom patterns and trends.  
✅ **Community Forum** – Share experiences, ask questions, and get support.  
✅ **Data Privacy** – User data is securely stored and encrypted.  
✅ **Responsive UI** – Optimized for all screen sizes and devices.  

---

## 🛠 Tech Stack  
| Technology  | Description |
|-------------|------------|
| **Frontend** | React.js, Vite, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (MongoDB Atlas) |
| **Authentication** | JWT (JSON Web Token) |
| **Hosting** | Vercel (Frontend), Render (Backend) |
| **State Management** | React Hooks (useState, useEffect) |
| **Styling** | CSS, Tailwind (Optional) |

---

## 🔧 Installation & Setup  

### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/your-username/femmenova.git
cd femmenova
```

---

## ⚙️ Backend Setup  

### **2️⃣ Navigate to Backend Directory**  
```bash
cd backend
```

### **3️⃣ Install Dependencies**  
```bash
npm install
```

### **4️⃣ Configure Environment Variables**  
Create a `.env` file inside the `backend/` folder and add:

```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

💡 **Replace `your-mongodb-connection-string` with your MongoDB Atlas URI**. If running MongoDB locally, use:  
```env
MONGO_URI=mongodb://localhost:27017/femmenova
```

### **5️⃣ Start the Backend Server**  
```bash
npm run dev
```
The server should be running at `http://localhost:5000`.

---

## 🎨 Frontend Setup  

### **6️⃣ Navigate to Frontend Directory**  
```bash
cd ../frontend
```

### **7️⃣ Install Dependencies**  
```bash
npm install
```

### **8️⃣ Start the Frontend Server**  
```bash
npm run dev
```
Your frontend should be running at **`http://localhost:3000`**.

---

## 🖥 Usage  

1️⃣ **Sign up/Login** to your account.  
2️⃣ **Track Symptoms** in the dashboard by logging pain levels, medications, stress, and diet.  
3️⃣ **View Analytics** based on logged symptoms.  
4️⃣ **Engage in the Community Forum** by posting and replying to discussions.  

---

## 🌐 API Endpoints  
📍 **Authentication Routes**  
| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login user and return JWT token |

📍 **Symptom Tracking Routes**  
| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/symptoms` | Log a new symptom entry |
| `GET` | `/api/symptoms` | Fetch all logged symptoms |
| `GET` | `/api/symptoms/analysis` | Get analytical insights |

📍 **Forum Routes**  
| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/forum` | Create a new post |
| `GET` | `/api/forum` | Get all forum posts |
| `POST` | `/api/forum/reply` | Add a reply to a post |

---

## 🏗 Contributing  
We welcome contributions! To contribute:
1️⃣ **Fork** this repository.  
2️⃣ **Create a new branch** (`feature-branch`).  
3️⃣ **Make changes** and commit.  
4️⃣ **Submit a pull request**.


 

---

🔹 **FemmeNova** – Empowering women with insights into their health. ❤️✨  



