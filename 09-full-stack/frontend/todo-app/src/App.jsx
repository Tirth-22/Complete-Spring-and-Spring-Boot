import React from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthProvider from './components/security/AuthProvider'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
