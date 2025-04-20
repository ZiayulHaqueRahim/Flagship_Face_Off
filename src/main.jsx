import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import { RouterProvider, Routes } from 'react-router'
import router from './Routing/Routes.jsx'


Routes



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
