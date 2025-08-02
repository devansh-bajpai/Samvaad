"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

export default function LogoutButton() {
    const router = useRouter();
    const handleClick = async () => {
        try {
            await signOut(auth);
        }
        catch {
            router.replace("/")
        }
    }
  return (
    <button className="btn btn-error hover:scale-105 transition duration-500 text-white" onClick={handleClick}>Logout</button>
  )
}