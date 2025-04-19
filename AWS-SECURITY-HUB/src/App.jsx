import React from 'react'
import Navbar from './Components/Navbar'
import MenuLeft from './Components/MenuLeft'
import Dashboard from './Components/Dashboard'
import { GiHamburgerMenu } from "react-icons/gi";
import Insights from './Components/Insights';
import Findings from './Components/Findings';

const App = () => {
  return (
    <>
    <div className='Main h-screen overflow-hidden flex-col items-center bg-[#eaebf0] justify-center'>
      {/* <Navbar/> */}
      {/* <Dashboard/> */}
      <Findings/>

      
    </div>
    
    
     
     
    </>
  )
}

export default App
