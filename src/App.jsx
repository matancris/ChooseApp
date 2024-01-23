import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { useEffect, useState, useContext, createContext } from 'react'

import ChooseApp from './pages/ChooseApp'
import PersonDetails from './pages/PersonDetails';

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
      <h1>Hiii</h1>
      <Link to='/person'>persons</Link>
      <MobileContext.Provider value={isMobile}>
        <Routes>
          {/* <Route path='*' element={<Navigate to="/person" />} /> */}
          <Route path='/person' element={<ChooseApp />} />
          <Route path='/person/:id' element={<PersonDetails />} />
        </Routes>
      </MobileContext.Provider>
      {/* <ChooseApp></ChooseApp> */}
    </section>
  )
}

export default App
