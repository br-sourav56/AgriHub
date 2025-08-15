
# AgriHub — Agricultural eCommerce Platform

AgriHub is a multi‑vendor agricultural eCommerce app where sellers list products and buyers purchase them in a simple, real‑time experience. The frontend is built with React + Vite + Tailwind CSS, and the backend uses Firebase (Authentication, Firestore, optional Cloud Functions & Storage).

## Features

- Email/Password Authentication (Firebase Auth)
- Multi‑vendor model (buyer & seller roles)
- Product create/read/update/delete
- Orders with basic status lifecycle
- Reviews + aggregated ratings (optional)
- Realtime data using Cloud Firestore
- Responsive UI with Tailwind CSS


## Tech Stack

**Client:** React, Vite, React Router, TailwindCSS

**Server:** Firebase Authentication, Cloud Firestore

**Optional:** Firebase Cloud Functions, Firebase Storage, Firebase Hosting


## Getting Started
## Clone & Install
```bash
 git clone https://github.com <your-username>/AgriHub.git
 cd AgriHub
 npm install
```
## Firebase Setup
- Create Firebase project → Add Web App → Copy config.
- Enable Authentication → Email/Password.
- Create Firestore DB (Test mode).
- Add config to `src/Firebase/Firebase.jsx`.
## Configure the App
```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```
## Run Locally

```bash
  npm run dev
```
## Scripts
```bash
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint ."
}
```
Run Using
```bash
npm run dev
npm run build
npm run preview
```
# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## License
MIT License free to use,modify and distribute it.
