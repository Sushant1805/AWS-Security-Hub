import React from 'react'
import Navbar from './Components/Navbar'
import MenuLeft from './Components/MenuLeft'
import Dashboard from './Components/Dashboard'
import { GiHamburgerMenu } from "react-icons/gi";
const App = () => {
  return (
    <>
    <div className='Main h-screen flex-col items-center justify-center'>
      <Navbar/>
      <div className=' h-9/10 flex w-screen gap-5'>
        <MenuLeft/>
        
        <Dashboard/>
      </div>
    </div>
    
    
     
     
    </>
  )
}

export default App
