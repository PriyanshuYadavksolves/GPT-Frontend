import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <GoogleOAuthProvider clientId='260934213570-1d3p71vu3atkih4u3pfdprlm5ii0p2r2.apps.googleusercontent.com'> 

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
    </GoogleOAuthProvider>
  </>,
)
