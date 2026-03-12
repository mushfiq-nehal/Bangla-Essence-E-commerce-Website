# Bangla Essence — E-commerce Website (MERN)

Bangla Essence is a full‑stack e‑commerce web application with a **React (Vite)** client and a **Node.js + Express + MongoDB** backend. It includes typical e‑commerce functionality such as authentication, product browsing, cart, checkout/order flow, search, reviews, and admin product/order management.

> Repo structure
- `client/` — Frontend (React + Vite + TailwindCSS, Redux Toolkit)
- `server/` — Backend (Express, MongoDB/Mongoose, JWT, Cloudinary, Multer)

---

## Tech Stack

### Frontend (`client`)
- React + Vite
- Redux Toolkit
- React Router
- Tailwind CSS (and related utilities)

### Backend (`server`)
- Node.js + Express
- MongoDB + Mongoose
- Auth: JWT + cookies
- Uploads: Multer
- Media: Cloudinary
- Other: CORS, dotenv, bcryptjs

---

## Features (high-level)

### Shop/User side
- User authentication (register/login)
- Browse products
- Search products
- Cart management
- Address management
- Place orders
- Product reviews

### Admin side
- Product management (create/update/delete, upload images)
- Order management

### Common
- “Feature” endpoints (used for common site features like banners/featured items depending on implementation)

---

## Getting Started (Local Development)

### Prerequisites
- Node.js (LTS recommended)
- npm
- MongoDB (local instance or MongoDB Atlas)

---

## 1) Clone the repository
```bash
git clone https://github.com/mushfiq-nehal/Bangla-Essence-E-commerce-Website.git
cd Bangla-Essence-E-commerce-Website
```

---

## 2) Setup and run the backend (`server`)

### Install dependencies
```bash
cd server
npm install
```

### Environment variables
Create a `.env` file inside `server/` (recommended).

Example:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

> Important:
The current code in `server/server.js` contains a hardcoded MongoDB connection string. For security and flexibility, you should move it to `process.env.MONGO_URI` and keep credentials out of the repo.

### Start backend in dev mode
```bash
npm run dev
```

Backend will run on:
- `http://localhost:5000`

---

## 3) Setup and run the frontend (`client`)

Open a new terminal:

### Install dependencies
```bash
cd client
npm install
```

### Start frontend
```bash
npm run dev
```

Frontend will run on:
- `http://localhost:5173`

---

## API Overview (as mounted in `server/server.js`)

Base URL (local): `http://localhost:5000`

Mounted routes:
- `/api/auth`
- `/api/admin/products`
- `/api/admin/orders`
- `/api/shop/products`
- `/api/shop/cart`
- `/api/shop/address`
- `/api/shop/order`
- `/api/shop/search`
- `/api/shop/review`
- `/api/common/feature`

---

## Common Troubleshooting

### CORS issues
Backend CORS is configured to allow:
- Origin: `http://localhost:5173`
- Credentials: `true`

If you change the client port or deploy, update the CORS `origin` accordingly.

### MongoDB connection problems
- Verify your MongoDB URI (IP whitelist if using Atlas)
- Ensure username/password are correct
- Ensure your URI includes the database name if required

---

## Suggested Improvements (Optional)
- Move MongoDB URI (and other secrets) into `server/.env`
- Add a root `.env.example`
- Fix backend start script (`"start": "server.js"` should typically be `"node server.js"`)
- Add a root-level README screenshots/feature list

---

## License
Add your preferred license here (MIT/ISC/etc.).
