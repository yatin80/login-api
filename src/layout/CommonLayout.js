import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/header/Header'

export default function CommonLayout({ children }) {
    const location = useLocation();
    const locationPath = location.pathname;
    return (
        <>
            {/* <Header navTheme="" tagLine="Hot Summar Fashion" /> */}
            <Header />
            <div style={{ paddingTop: `${locationPath === "/" ? "0px" : "64px"}` }}>
                <Outlet />
            </div>
        </>
    )
}
