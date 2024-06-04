import React from 'react'
import { useParams } from 'react-router-dom';

export default function Bai1() {
    const {productId} = useParams();
  return (
    <div>
        <h2>Id : {productId}</h2>
    </div>
  )
}
