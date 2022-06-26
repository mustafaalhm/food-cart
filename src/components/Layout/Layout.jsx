import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Routes from '../../routes/Router'
const Layout = () => {
  return (
    <div>
        <Header/>
            <Routes/>
        <Footer/>
    </div>
  )
}

export default Layout