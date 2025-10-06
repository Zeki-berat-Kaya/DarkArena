import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Header(){
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="backdrop-blur-md bg-white/5 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-purpleGlow rounded-full flex items-center justify-center text-black font-bold">DA</div>
          <span className="font-semibold text-lg">DarkArena</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/live" className="text-sm hover:underline">Live</Link>
          <a href="#" className="text-sm hover:underline">Highlights</a>
          <button className="px-3 py-1 rounded bg-white/6 text-sm">Sign In</button>
        </nav>
      </div>
    </motion.header>
  )
}
