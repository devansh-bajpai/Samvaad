import React from 'react'
import LogoutButton from './LogoutButton'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Samvaad</a>
            </div>

            <div className="navbar-end mr-2">
                <LogoutButton/>
            </div>
        </div>
    )
}
