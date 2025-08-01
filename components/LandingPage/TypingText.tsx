"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

export default function TypingText() {
  return (
    <h1 className="text-4xl font-bold text-white select-none">
      <Typewriter
        words={['Hello There.', 'Chat Securely.', 'Connect with Confidence.', 'Secure. Seamless. Swift.', 'Talk. Trust. Transform.', 'Privacy-first messaging.']}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={40}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  )
}
