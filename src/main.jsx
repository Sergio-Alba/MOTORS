import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter  } from 'react-router-dom'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3tUDtP9nF7YTGpFbLSN__o_0xveBFg2U",
  authDomain: "motors-f2eff.firebaseapp.com",
  projectId: "motors-f2eff",
  storageBucket: "motors-f2eff.appspot.com",
  messagingSenderId: "596275298375",
  appId: "1:596275298375:web:3e86f65e40672539d2b162"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
