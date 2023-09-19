import react from 'react'
import { Outlet } from 'react-router-dom'

// ======= IMPORTING COMPONENTS ======= //
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const RootLayout = () => {
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout