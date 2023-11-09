import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { Layout } from '../components/Layout/Layout'
import { DashboardPage } from '../pages/DashboardPage'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        Component: Home
      },
      {
        path: 'login',
        Component: LoginPage
      },
      {
        path: 'register',
        Component: RegisterPage
      },
      {
        path: 'dashboard',
        Component: DashboardPage
      }
    ]
  }
])
