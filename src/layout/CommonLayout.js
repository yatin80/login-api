import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function CommonLayout({ children }) {
    return (
        <>
            <Header navTheme="dark" tagLine="Navbar text with an inline element" />

            <Outlet />
        </>
    )
}
