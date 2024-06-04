import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRouter() {
    const [isAccount, setIsAccount] = useState(true);
    return (
        isAccount ? (
            <Outlet></Outlet>
        ) : (
            <Navigate to={"/login"} />
        )
    )
}