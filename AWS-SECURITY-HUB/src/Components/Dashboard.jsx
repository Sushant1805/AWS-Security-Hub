import React from 'react'
import FailedChecks from './FailedChecks'
import ControlStatus from './ControlStatus'

const Dashboard = () => {
  const controlStatus = [
    {
        status : "Passed",
        count : "268",
    },
    {
        status : "Failed",
        count : "17",
    },
    {
        status : "No data",
        count : "6",
    },
    {
        status : "Unknown",
        count : "1",
    },
    {
        status : "Disabled",
        count : "209",
    },
]

  const failedChecks = [
    {
      severity:"CRITICAL",
      count : "3",
    },
    {
      severity:"HIGH",
      count : "23",
    },
    {
      severity:"MEDIUM",
      count : "32",
    },
    {
      severity:"LOW",
      count : "0",
    },
  ]
  return (
    <div className='right bg-[#0a0a0a] w-8/10 flex box-content flex-col  px-20 py-10'>
        <h1 className='text-4xl text-white font-bold text-start'>Controls</h1>
        <div className='w-9/10 border-1 border-white h-5/10 rounded-2xl mt-5 text-white flex flex-col box-content  gap-5 p-8'>
        <h1 className='text-3xl font-semibold '>Overview</h1>
        <div className='flex gap-5 justify-around'>
            <div className="w-6/10 flex flex-col gap-5">
              
              <h2 className='text-xl font-semibold text-decoration-line: underline'>Security Score</h2>
              <h1 className='text-6xl font-bold text-green-500'>94%</h1>
              <h5 className='text-l text-gray-400'>268 out of 286 control passed</h5>
              <h2 className='text-xl font-semibold'>Control Status</h2>
              <div className='flex gap-4'>
              {
                controlStatus.map((item)=>{
                    return <ControlStatus key={item} status={item.status} count={item.count}/>
                })
            }
              </div>
          
            
          </div>
          <div className="w-px h-full bg-gray-200 mx-4" />
          <div className=" w-5/10 flex flex-col gap-5">
            <h1 className='text-xl font-semibold text-decoration-line: underline'>Failed Checks</h1>
            <div className='flex items-baseline'>
              <h1 className='text-6xl font-bold '>58  </h1>
              <h4 className='text-xl text-gray-300'> / 2893</h4>
            </div>

            <h1 className='text-l font-semibold'>Failed Checks by severity</h1>
            <div className='flex gap-5 w-8/10'>
            {
              failedChecks.map((item)=>{
                return <FailedChecks key={item} severity={item.severity} count={item.count}/>
              })
            }
            </div>
            
            
            
          </div>

      
     
     </div>
        </div>
         

    </div>
    
  )
}

export default Dashboard
