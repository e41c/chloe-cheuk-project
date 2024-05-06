import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, } from 'react-router-dom'
import ProjectPage from './pages/ProjectPage.jsx'
import StatementPage from './pages/StatementPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/projectpage',
    element: <ProjectPage />
  },
  {
    path: '/statementpage',
    element: <StatementPage />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
