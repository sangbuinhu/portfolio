import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../common/AppBar'
type Props = {}

const AppLayout = (props: Props) => {
    return (
        <div>
            <AppBar />
            <Outlet />
        </div>
    )
}

export default AppLayout