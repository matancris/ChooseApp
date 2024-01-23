import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom'
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
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <section className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/person" />} />
      </Routes>

      <MobileContext.Provider value={isMobile}>
        <Outlet />

      </MobileContext.Provider>
      {/* <ChooseApp></ChooseApp> */}
    </section>
  )
}

export default App
