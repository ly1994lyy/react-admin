import { Outlet, useNavigate } from 'react-router-dom'
import setThemeStore from '@/stores/setThemeStore.ts'

const navList = [
  { path: '/home', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/contact', title: 'Contact' }
]

const Main = () => {
  const isDark = setThemeStore(state => state.isDark)
  const changeTheme = setThemeStore(state => state.setTheme)
  const navigate = useNavigate()
  return (
    <div>
      <div className="h-20 bg-#201E18FF text-white flex items-center justify-between px-10">
        <div className="text-2xl cursor-pointer">React-Base</div>
        <div className="flex">
          {navList.map((item, index) => {
            return (
              <div
                onClick={() => navigate(item.path)}
                className="mx-10 cursor-pointer"
                key={index}
              >
                {item.title}
              </div>
            )
          })}
        </div>
        <div className="flex">
          <div>{isDark ? 'dark' : 'light'}</div>
          <div className="cursor-pointer" onClick={() => changeTheme(!isDark)}>
            change mode1
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Main
