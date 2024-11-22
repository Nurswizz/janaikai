import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './pages/App/App.jsx'
import Course from './pages/Course/Course.jsx'
import Articles from './pages/Articles/Articles.jsx'
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
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

