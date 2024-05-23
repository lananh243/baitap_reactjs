import React, { createContext, useState } from 'react'
import B from './B'

export const context = createContext<any>("");
export default function A() {
    let fullName = "Lê Bảo"
  return (
    <div>
        <context.Provider value={fullName}>
           <B></B> 
        </context.Provider>
        
    </div>
  )
}
