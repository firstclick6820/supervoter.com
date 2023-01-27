import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import { AuthProvider } from "./context/AuthProvider";
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>,
)
