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
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

