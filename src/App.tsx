import { routers } from '@/routes'
import {
  useRoutes,
  HashRouter,
  useLocation,
  useNavigate
} from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import useMenuStore from '@/stores/setMenuStore'
import { lazy, useEffect } from 'react'
import Main from '@/layout/main.tsx'
import NotFound from '@/views/notFound'


const files = import.meta.glob('@/views/**/*.tsx', { eager: true })
console.log(files)

const handleMenu = (
  menus: CreateMenuDto[]
) => {
  const arr = []
  menus.forEach(menu => {
    const M =
      menu.component === 'Layout'
        ? Main
        : files[`/src/views/${menu.component}/index.tsx`]?lazy(files[`/src/views/${menu.component}/index.tsx`]):NotFound
    
    arr.push({ path: menu.path, element: <M />,children:menu.children?handleMenu(menu.children):[] })
   
    
  })
  console.log('arr',arr)
  return arr
}
function MyRouter() {
  const location = useLocation()
  const navigate = useNavigate()
  const queryUserInfo = useMenuStore(state => state.setMenu)
  const menus = useMenuStore(state => state.menus)

  useEffect(() => {
    if (location.pathname !== '/login') {
      if (!localStorage.getItem('react-admin-token')) {
        navigate('/login')
      } else {
        if(menus.length===0){
          queryUserInfo()
        }
      }
    }
  }, [location.pathname, navigate, queryUserInfo,menus])
  return useRoutes([...routers, ...handleMenu(menus)])
}

function App() {
  return (
    <HashRouter>
      <MyRouter />
      <Toaster />
    </HashRouter>
  )
}

export default App
