import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Live from './pages/Live'
import Header from './components/Header'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-white">
      <Header />
      <main className="p-4 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/live" element={<Live/>} />
        </Routes>
      </main>
    </div>
  )
}
