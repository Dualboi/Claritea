import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "tailwindcss";
import Products from './products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Products />
  </StrictMode>,
)
