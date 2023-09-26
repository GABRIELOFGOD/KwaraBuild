import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'

// ======= IMPORTING PAGES AND COMPONENTS ======== //
import RootLayout from './pages/RootLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
