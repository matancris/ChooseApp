import { Link, Outlet, redirect } from 'react-router-dom'
import { useEffect, useState, useContext, createContext } from 'react'

import ChooseApp from './pages/ChooseApp'

export const MobileContext = createContext(false)

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);


  // const mobile = useContext(MobileContext)

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 500);
  }
  
  useEffect(() => {
    redirect('/person');
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <section className="App">
      <Link to='/person'>person list</Link>

      <MobileContext.Provider value={isMobile}>
       <Outlet />

      </MobileContext.Provider>
      {/* <ChooseApp></ChooseApp> */}
    </section>
  )
}

export default App
