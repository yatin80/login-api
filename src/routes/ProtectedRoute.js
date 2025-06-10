import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {

    const isLoggedIn = localStorage.getItem('token')

    if (!isLoggedIn) {
        return <Navigate to="/" />
    }
    return <Outlet />;
}
