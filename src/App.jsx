import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Findings from './Pages/Findings';

const App = () => {
  const router = createBrowserRouter([
    {
      Path:"./",
      element:<Home/>
    },
    {
      path : "/findings",
      element:<Findings/>
    }
  ])
 
  return (
    <>
     <RouterProvider router = {router} />
   <Findings/>
    
    
     
     
    </>
  )
}

export default App
