import React from 'react'
import Navbar from'./Components/Navar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hero1Sec from './Components/Hero1Sec';
import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero1Sec/>
      <Card/>
      <Footer/>
   
    </div>
  )
}

export default App