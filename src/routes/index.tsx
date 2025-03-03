import { Navigate, RouteObject } from 'react-router-dom'
import Home from '@/views/home.tsx'
import Main from '@/layout/main.tsx'
import About from '@/views/about.tsx'
import IconMgnt from '@/views/iconMgnt'
import { lazy } from 'react'

const Login = lazy(() => import('@/views/login.tsx'))

export const routers:RouteObject[] = [
  { path:'/',element:<Navigate to='/home' /> },
  {
    path:'/login', element: <Login />
  },
  {
    path:'/',
    element:<Main />,
    children:[
      {path:'home',element:<Home />},
      {path:'about',element:<About />},
      {path:'icon',element:<IconMgnt />}
    ]
  }
]
