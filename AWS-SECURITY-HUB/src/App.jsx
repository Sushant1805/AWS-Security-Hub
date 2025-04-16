import React from 'react'
import Navbar from './Components/Navbar'
import MenuLeft from './Components/MenuLeft'
import Dashboard from './Components/Dashboard'
import { GiHamburgerMenu } from "react-icons/gi";
import Insights from './Components/Insights';

const App = () => {
  return (
    <>
    <div className='Main h-full overflow-hidden flex-col items-center justify-center'>
      {/* <Navbar/>
      <div className=' h-9/10 flex w-screen gap-5'>
        <MenuLeft/>
        
        <Dashboard/>
      </div> */}
    <Insights/>
    </div>
    
    
     
     
    </>
  )
}

export default App
