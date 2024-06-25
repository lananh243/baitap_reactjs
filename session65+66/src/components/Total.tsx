import React from 'react'
import { useSelector } from 'react-redux'

export default function Total() {
    const totalState:any = useSelector((state) => {
        return state.tot;
    })
  return (
    <div>Total
        <p>Tổng của a và b : {totalState}</p>
    </div>
  )
}
