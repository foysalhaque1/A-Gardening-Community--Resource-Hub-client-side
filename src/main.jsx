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
import ExploreGardeners from './Components/ExploreGardeners.jsx'
import BrowseTip from './Components/BrowseTip.jsx'
import SharedGardenTip from './Components/SharedGardenTip.jsx'
import MyTip from './Components/MyTip.jsx'
import GardenEvent from './Components/GardenEvent.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('http://localhost:4000/gardeners')
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'gardener',
        element: <ExploreGardeners></ExploreGardeners>,
        loader: () => fetch('/gardeners.json')
      },
      {
        path: 'browsetip',
        element: <BrowseTip></BrowseTip>,
        loader:()=>fetch('http://localhost:4000/tips')
      },
      {
        path: 'sharedtip',
        element: <SharedGardenTip></SharedGardenTip>
      },
      {
        path: 'mytip',
        element: <MyTip></MyTip>
      },


    ]

  },
  {
    path: '*/',
    element: <h2>error page</h2>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
