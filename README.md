# AURA FIT - Full-Stack Luxury Gym & Wellness Website

Aura Fit is a premium, full-stack business website for an exclusive fitness club. The project features a modern React + Tailwind CSS v4 frontend and a secure Node.js + Express + MongoDB backend with JWT authentication, password hashing, and rate-limiting security.

---

## 🏗️ Project Architecture

The codebase is split into two directories:
*   **`client/`**: React SPA (Single Page Application) scaffolded with Vite and styled using Tailwind CSS v4. Features modern glassmorphism UI, hardware-accelerated animations, responsive mobile design, and an integrated membership portal.
*   **`server/`**: Express REST API utilizing Mongoose for database management. Includes security features like HTTP headers fortification (`helmet`), request throttling (`express-rate-limit`), password encryption (`bcryptjs`), and API route guard filters (`jsonwebtoken`).

---

## ⚙️ Configuration & Environment Variables

### Backend Configuration (`server/`)
Create a `.env` file in the `server/` directory:

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `PORT` | HTTP Port for the backend API server | `5000` |
| `MONGO_URI` | MongoDB connection URL | `mongodb://localhost:27017/gymdb` |
| `JWT_SECRET` | Secret token signing key (Enforced at boot) | `your_long_random_jwt_secret_key` |
| `ALLOWED_ORIGINS` | Comma-separated list of allowed CORS origins | `http://localhost:5173,http://localhost:3000` |

### Frontend Proxy (`client/`)
In local development, Vite proxies requests from `/api` to `http://localhost:5000` automatically. This is defined in `client/vite.config.js`.

---

## 🚀 Local Development Setup

### Prerequisites
Make sure you have Node.js (LTS version) and MongoDB installed and running locally.

### 1. Initialize and Run Backend
```bash
cd server
npm install
npm run dev
```
The server will start on `http://localhost:5000`.

### 2. Initialize and Run Frontend
```bash
cd client
npm install
npm run dev
```
The frontend dev server will launch on `http://localhost:5173`. Open this URL in your web browser.

---

## 📡 Backend API Endpoints

All auth routes are throttled at 100 requests per 15 minutes.

| Endpoint | Method | Security | Request Body | Description |
| :--- | :--- | :--- | :--- | :--- |
| `/api/auth/register` | `POST` | Public | `{ username, email, password }` | Register a new member |
| `/api/auth/login` | `POST` | Public | `{ email, password }` | Log in and return JWT token |
| `/api/auth/me` | `GET` | Private (Bearer JWT) | *None* | Get authenticated user profile |

---

## 📦 Production Deployment

### 1. Database Setup (MongoDB Atlas)
1.  Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2.  Create a free shared cluster.
3.  In Security Quickstart, add a database user with a secure password.
4.  Whitelist all IP connections (`0.0.0.0/0`) or input your backend server hosting IPs.
5.  Retrieve the Connection String (URI) and replace the password placeholder.

### 2. Backend Deployment (Render or Railway)
Deploy the `server/` directory:
1.  Connect your Git repository.
2.  Set **Root Directory** to `server`.
3.  Set **Build Command** to `npm install`.
4.  Set **Start Command** to `node server.js`.
5.  Add the **Environment Variables**:
    - `MONGO_URI`: (Your MongoDB Atlas Connection String)
    - `JWT_SECRET`: (A secure random string)
    - `ALLOWED_ORIGINS`: (Your production frontend URL, e.g., `https://yourgym.vercel.app`)

### 3. Frontend Deployment (Vercel or Netlify)
Deploy the `client/` directory:
1.  Connect your Git repository.
2.  Set **Root Directory** to `client`.
3.  Vercel automatically detects the Vite configuration:
    - **Build Command:** `npm run build`
    - **Output Directory:** `dist`
4.  Configure production routing redirect (e.g. for React Router SPA) if needed. Ensure your API queries in production fetch from the hosted backend URL by setting base environment URLs or handling redirects.
