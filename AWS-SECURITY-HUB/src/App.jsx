import React from 'react'
import Navbar from './Components/Navbar'
import MenuLeft from './Components/MenuLeft'
import Dashboard from './Components/Dashboard'
const App = () => {
  return (
    <>
    <div className='Main h-screen flex-col'>
      <Navbar/>
      <div className='bg-amber-300 h-9/10 flex w-screen'>
        <MenuLeft/>
        <Dashboard/>
      </div>
    </div>
    
    
     
     
    </>
  )
}

export default App
