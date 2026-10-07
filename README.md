# Ishitha Portfolio — React + Express

IMPORTANT: Do not double-click index.html. Run the development server.

## 1. Express backend
Open Terminal 1:

cd server
npm install
npm run dev

Backend: http://localhost:5000
Health check: http://localhost:5000/api/health

The backend is an API, so http://localhost:5000 is NOT the portfolio page.

## 2. React frontend
Open Terminal 2:

cd client
npm install
npm run dev

Portfolio: http://localhost:5173

The Vite config proxies /api requests to Express, so the contact form calls Express without CORS issues.

## If you only want ONE URL for deployment
Build React:

cd client
npm install
npm run build

Then configure Express to serve client/dist. For local development, use the two terminals above.

## Photo
Put your image at:
client/public/ishitha.jpg
