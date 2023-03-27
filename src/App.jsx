import { useState } from 'react'
import './App.css'
import DashboardPage from './dashboard'
import HomePage from './home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  }
])

function App() {
 

  return (
    <RouterProvider router={router} />
  )
}

export default App
