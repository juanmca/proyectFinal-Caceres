import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_4xgdQMUoHqGHI03iN1L3DOHykgHzwJs",
  authDomain: "proyecto-final-coder-2cfd7.firebaseapp.com",
  projectId: "proyecto-final-coder-2cfd7",
  storageBucket: "proyecto-final-coder-2cfd7.appspot.com",
  messagingSenderId: "654567476691",
  appId: "1:654567476691:web:43b1a68f1dc4b49c8e7326"
};


 initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
