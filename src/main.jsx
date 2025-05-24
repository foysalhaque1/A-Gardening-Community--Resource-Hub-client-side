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
import TipsDetailsPage from './Components/TipsDetailsPage.jsx'
import UpdatePage from './Components/UpdatePage.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Terms from './Components/Terms.jsx'
import ContactInfo from './Components/ContactInfo.jsx'
import ThemeProvider from './ThemeProvider/ThemeProvider.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('https://assignment-10-server-side-rosy.vercel.app/gardeners')
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
        loader: () => fetch('https://assignment-10-server-side-rosy.vercel.app/tips')
      },
      {
        path: 'sharedtip',
        element: <PrivateRoute>
          <SharedGardenTip></SharedGardenTip>
        </PrivateRoute>
      },
      {
        path: '/mytip/:email',
        element: <PrivateRoute>
          <MyTip></MyTip>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-side-rosy.vercel.app/tips/email/${params.email}`)
      },
      {
        path: '/tipsDetails/:id',
        element: <PrivateRoute>
          <TipsDetailsPage></TipsDetailsPage>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-side-rosy.vercel.app/tips/${params.id}`)
      },
      {
        path: 'update/:id',
        element: <PrivateRoute>
          <UpdatePage></UpdatePage>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-side-rosy.vercel.app/tips/${params.id}`)
      },
      {
        path: '/terms',
        element: <Terms></Terms>
      },
      {
        path: '/contact',
        element: <ContactInfo></ContactInfo>
      },
      {
        path: '/browseTip/:level',
        element: <ContactInfo></ContactInfo>,
        loader:({params})=>fetch(`https://assignment-10-server-side-rosy.vercel.app/tips/selectlevel/${params.level}`)
      },




    ]

  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} ></RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
