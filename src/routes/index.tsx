import { RouteObject } from 'react-router-dom'
import Login from '@/views/login.tsx'
import Home from '@/views/home.tsx'
import Main from '@/layout/main.tsx'
import About from '@/views/about.tsx'

export const routers:RouteObject[] = [
  {
    path:'/login', element: <Login />
  },
  {
    path:'/',
    element:<Main />,
    children:[
      {path:'home',element:<Home />},
      {path:'about',element:<About />}
    ]
  }
]
