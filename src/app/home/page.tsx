import React from 'react'
import ProtectedRoute from '../../../components/Protected/ProtectedRoute'
import HomePage from '../../../components/HomePage/HomePage'

export default function page() {
  


  return (
    <ProtectedRoute>
      <HomePage/>

    </ProtectedRoute>
  )
}
