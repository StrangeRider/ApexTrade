# ApexTrade – Full Stack Trading Platform  

**ApexTrade** is a full-stack web application inspired by modern trading platforms like Zerodha Kite. It replicates essential financial platform features such as user authentication, live market updates, portfolio tracking, and stock chart visualization. This project focuses on **modern UI/UX**, **secure backend integration**, and **real-time data handling**, making it an excellent project for demonstrating **MERN Stack** mastery and **FinTech system design**.

---

## 🔗 Live Demo
Check out the live application here: [ApexTrade Dashboard](https://zerodha-dashboard-j9me.vercel.app/)

---

## 🚀 Features
- **User Authentication (JWT-based):** Secure signup and login with token-based authentication.  
- **Real-Time Stock Data:** Fetches live market data using financial APIs.  
- **Portfolio Management:** Add, view, and track investments easily.  
- **Interactive Charts:** Candlestick and line charts for live stock visualization using Recharts / Chart.js.  
- **Responsive UI:** Fully responsive, modern, and minimal user interface.  
- **Transaction History:** Displays previous buy/sell transactions.  
- **Watchlist:** Users can create and manage a watchlist of favorite stocks.  
- **Dashboard Overview:** Clean dashboard showing account balance, investments, and profit/loss.  

---

## 🧠 Tech Stack
**Frontend:** React.js, Tailwind CSS, Chart.js, Axios  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Authentication:** JWT (JSON Web Token)  
**API Integration:** RapidAPI / Finnhub API for real-time stock data  
**Deployment:** Vercel (Frontend), Render / Railway (Backend), MongoDB Atlas  

---

## 🧩 System Architecture
1. **Frontend (React + Tailwind):** - Handles user interface, routing, and API calls.  
   - Uses React hooks and context for state management.  
2. **Backend (Express + Node):** - RESTful APIs for authentication, portfolio management, and stock data fetch.  
   - Validates all requests using middleware.  
3. **Database (MongoDB):** - Stores user profiles, transactions, and portfolio data.  

---

## 📊 Key Modules
- **Login / Signup Page** – User registration and login system.  
- **Dashboard** – Displays user’s funds, portfolio summary, and stock updates.  
- **Watchlist** – Track multiple stocks in one place.  
- **Trade Page** – Buy/sell mock trades for learning and simulation.  
- **Profile** – Manage user settings and preferences.  

---

## 🛠️ Installation & Setup
```bash
# Clone the repository
git clone [https://github.com/StrangeRider/ApexTrade.git](https://github.com/StrangeRider/ApexTrade.git)

# Navigate to the project directory
cd ApexTrade

# Install dependencies
npm install

# Start the backend
cd backend
npm start

# Start the frontend
cd ../frontend
npm start
