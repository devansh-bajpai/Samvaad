import React from 'react'
import ProtectedRoute from '../../../components/Protected/ProtectedRoute'

export default function page() {
  


  return (
    <ProtectedRoute>
      <p>hello world</p>

    </ProtectedRoute>
  )
}
