import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './MainLayout.jsx'
import Home from './Components/Home.jsx'
import SignIn from './Components/SignIn.jsx'
import AuthProvider from './Authentication/AuthProvider.jsx'
import SignUp from './Components/SignUp.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
