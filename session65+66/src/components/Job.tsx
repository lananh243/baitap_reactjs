import React from 'react'
import { useSelector } from 'react-redux'

export default function Job() {
    const stateJob = useSelector((state:any) => {
        return state;
    })

  return (
    <div>Job
        {stateJob.jobReducer.map((item:any) => {
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}
