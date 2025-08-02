import React from 'react'
import LogoutButton from './LogoutButton'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm w-full bg-transparent bg-gradient-to-b from-black/50 to-transparent">
            <div className="navbar-start">
                
                
                <Link href="/" className="btn btn-ghost text-xl hover:bg-transparent hover:scale-105 transition duration-500">
                <Image className='hover:scale-105 transition duration-500' src="/samvaad_logo_transparent.png" width={50} height={50} alt="Background"/>
                Samvaad</Link>
            </div>

            <div className="navbar-end mr-2">
                <LogoutButton/>
            </div>
        </div>
    )
}
