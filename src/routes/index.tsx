import { Navigate, RouteObject } from 'react-router-dom'
import Login from '@/views/login.tsx'
import Home from '@/views/home.tsx'
import Main from '@/layout/main.tsx'
import About from '@/views/about.tsx'
import IconMgnt from '@/views/iconMgnt'

export const routers:RouteObject[] = [
  {
    path:'/login', element: <Login />
  },
  {path:'/',element:<Navigate to='/home' />},
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
