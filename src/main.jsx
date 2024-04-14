import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer
    position="top-right"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    draggable
    pauseOnHover
    theme="light"
    />
  </>,
)
