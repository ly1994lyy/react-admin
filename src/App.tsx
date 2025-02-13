import {routers} from '@/routes'
import {useRoutes,BrowserRouter} from 'react-router-dom'

function MyRouter(){
  return useRoutes(routers)
}

function App() {
  return (
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
  )
}

export default App
