import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CoursesPage from './pages/Courses.jsx'
import Assignment from './pages/Assignment.jsx'
import TeacherDashboard from './pages/TeacherDash.jsx'
import AssignmentSettings from './pages/TeacherAssignment.jsx'
import CourseCreationPage from "./pages/AddCourse.jsx"
import {store} from './store.js';
import { Provider } from 'react-redux';
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Home from "./pages/Home.jsx"
import StudentDash from "./pages/StudentDash"


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/studentdash",
    element: <StudentDash />,
  },
  {
    path: "/assignment",
    element: <Assignment />,
  },
  {
    path: "/tec",
    element: <TeacherDashboard />,
  },
  {
    path: "/teca",
    element: <AssignmentSettings />,
  },
  {
    path: "/cc",
    element: <CourseCreationPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
