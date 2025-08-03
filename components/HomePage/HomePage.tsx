import React from 'react'
import Navbar from './Navbar'
import Chat from './Chat'

export default function HomePage() {
  return (


    <div
      className="hero min-h-screen flex flex-col"
      style={{
        backgroundImage:
          "url(/home_bg.png)",
      }}
    >


      <Navbar />
      <Chat/>


    </div>



  )
}
