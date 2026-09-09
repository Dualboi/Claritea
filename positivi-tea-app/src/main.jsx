import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "tailwindcss";
import App from './App.jsx'
import Products from './products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {window.location.pathname === "/products" ? <Products /> : <App />}
  </StrictMode>,
)
