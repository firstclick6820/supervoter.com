import { useState } from 'react'

// import Page
import Pages from './pages/Pages'


// Import General Pages
import Navbar from './pages/global/navbar/Navbar'
import Footer from './pages/global/footer/Footer'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Pages />
      {/* <Footer /> */}
    </div>
  )
}

export default App
