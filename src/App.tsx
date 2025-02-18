import {routers} from '@/routes'
import {useRoutes,HashRouter} from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

function MyRouter(){
  return useRoutes(routers)
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
