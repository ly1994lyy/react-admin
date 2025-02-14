import {routers} from '@/routes'
import {useRoutes,HashRouter} from 'react-router-dom'

function MyRouter(){
  return useRoutes(routers)
}

function App() {
  return (
    <HashRouter>
      <MyRouter />
    </HashRouter>
  )
}

export default App
