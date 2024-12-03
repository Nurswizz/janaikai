import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './pages/App/App.jsx'
import Course from './pages/Course/Course.jsx'
import Articles from './pages/Articles/Articles.jsx'
import Payment from './pages/Payment/Payment.jsx'
import Admin from './pages/Admin/Admin.jsx' 
import Login from './pages/Login/Login.jsx'
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute.jsx';
import ArticlesUpload from './pages/ArticlesUpload/Articles.jsx'
import Email from './pages/Email/Email.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/course',
    element: <Course />,
  },
  {
    path: '/articles',
    element: <Articles />,
  },
  {
    path: '/support',
    element: <Payment />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin/articles",
    element: (
      <ProtectedRoute>
        <ArticlesUpload />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/emails",
    element: (
      <ProtectedRoute>
        <Email />
      </ProtectedRoute>
    ),
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

