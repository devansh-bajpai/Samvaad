'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function GetStartedButton() {
    const router = useRouter();
    const handleClick = () => {
    router.push('/home');
  };
    return (
        <button className="btn btn-primary hover:scale-105 transition duration-500" onClick={handleClick}>Get Started</button>
    )
}
