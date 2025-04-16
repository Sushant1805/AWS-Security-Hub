import React from 'react'

const WorkflowProgress = (props) => {
    const color = {
        New:"bg-blue-800",
        InProgress:"bg-yellow-800",
        Resolved:"bg-green-800",
    }
  return (
    <div>
      <h1 className={`rounded-md py-1 px-2 w-8/10 ${color[props.status]}`}>{props.status}</h1>
    </div>
  )
}

export default WorkflowProgress
