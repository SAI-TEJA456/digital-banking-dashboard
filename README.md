# 💳 Digital Banking Dashboard

A full-stack banking management system where users can create and view bank accounts.

---

## 🛠 Tech Stack

- **Frontend:** React.js, TypeScript, Tailwind CSS, Axios
- **Backend:** Java 21, Spring Boot 3, Spring Data JPA, REST API
- **Database:** MySQL
- **Build Tools:** Maven

---

## 📁 Project Structure

digital-banking-dashboard/
├── backend/    ← Spring Boot + MySQL
├── frontend/   ← React + Tailwind
---

## 🚀 How to Run

### 🔙 Backend Setup

1. Create a MySQL database:
   ```sql
   CREATE DATABASE banking_app;

2.	Configure DB settings in backend/src/main/resources/application.yml if needed.
3.	Run the backend:
     cd backend
     mvn clean install
     mvn spring-boot:run

🔜 Frontend Setup
	1.	Navigate to frontend directory:
         cd frontend
          npm install
          npm start

	2.	Access in browser:
 http://localhost:3000


 
⸻

🔐 Features
	•	View all bank accounts
	•	Create a new account (owner + balance)
	•	Responsive UI with Tailwind CSS
	•	RESTful API integration


 📸 Preview

Coming soon: Add screenshots or demo GIFs here!


🧑‍💻 Author

Sai Teja Liesetty


---

## ✅ `.gitignore` for Backend (`backend/.gitignore`)

```bash
# Build output
/target/
*.class

# IDE files
.idea/
*.iml
*.iws
.vscode/

# System files
.DS_Store

# Logs
*.log

# Environment (optional)
/.env
.env.*
