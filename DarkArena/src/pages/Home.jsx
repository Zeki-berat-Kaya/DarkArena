import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold"
          >
            Welcome to <span className="text-primary">DarkArena</span>
          </motion.h1>
          <p className="mt-4 text-gray-300">Futbolu karanlık ve sinematik bir deneyime taşı.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/live" className="px-5 py-3 rounded bg-primary text-black font-bold">Enter Arena</Link>
            <button className="px-5 py-3 rounded border border-white/10">Learn More</button>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br from-[#0b0f1a] to-[#06121a] border border-white/5 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-black">⚽</div>
              <p className="mt-2 text-gray-400">Live match atmosphere (mockup)</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({length:3}).map((_,i)=>(
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            className="p-4 rounded-2xl bg-white/3 border border-white/5"
          >
            <div className="text-sm text-gray-300">Live Match</div>
            <div className="mt-2 font-semibold">Team A vs Team B</div>
            <div className="mt-4 text-xs text-gray-400">Stadium • 20:45</div>
          </motion.div>
        ))}
      </section>
    </section>
  )
}
