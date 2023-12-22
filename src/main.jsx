import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CoursesPage from './pages/Courses.jsx'
import Assignment from './pages/Assignment.jsx'
import TeacherDashboard from './pages/TeacherDash.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cor",
    element: <CoursesPage />,
  },
  {
    path: "/assignment",
    element: <Assignment />,
  },
  {
    path: "/tec",
    element: <TeacherDashboard />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
