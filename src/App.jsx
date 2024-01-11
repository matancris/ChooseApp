import { Outlet } from 'react-router-dom'
import ChooseApp from './pages/ChooseApp'

function App() {

  return (
    <section className="App">
      <Outlet />
      {/* <ChooseApp></ChooseApp> */}
    </section>
  )
}

export default App
