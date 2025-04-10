import React from 'react'

const FailedChecks = (props) => {
    const severityColors = {
        CRITICAL: "bg-red-800",
        HIGH: "bg-orange-500",
        MEDIUM: "bg-yellow-400",
        LOW: "bg-green-400",
    };
  return (
 
    <div className='w-4/10'>
            <div className={`font-semibold rounded-md p-1 text-center ${severityColors[props.severity]}`}>
                {props.severity}
            </div>

            <h1 className='font-semibold text-blue-500 text-xl mt-2'>{props.count}</h1>
    </div>
  )
}

export default FailedChecks
