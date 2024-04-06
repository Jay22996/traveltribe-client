import React from 'react'
import Navbar from './Navbar'
import Videopart from './Videopart'
import Tourcard from './Tourcard'
import Footer from './Footer'

const Home = () => {
  window.scrollTo({top:0,left:0,behavior:"smooth"})

  return (
    <>

    <Navbar/>
    <Videopart/>
    <Tourcard/>
    <Footer/>
    </>
  )
}

export default Home
