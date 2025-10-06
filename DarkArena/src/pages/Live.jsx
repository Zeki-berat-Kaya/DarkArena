import React, { useEffect } from 'react'
import { gsap } from 'gsap'

export default function Live(){
  useEffect(()=>{
    const tl = gsap.timeline()
    tl.fromTo('.pulse', {opacity:0, scale:0.6}, {opacity:1, scale:1, duration:0.8, ease:'elastic.out(1,0.6)'})
  },[])
  return (
    <section className="mt-8">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#071018] to-[#02121a] border border-white/5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-400">Live Now</div>
            <div className="text-xl font-bold">Team A 2 - 1 Team B</div>
          </div>
          <div className="pulse w-3 h-3 rounded-full bg-primary/90"></div>
        </div>

        <div className="mt-6">
          <div className="w-full h-64 bg-black/40 rounded-md flex items-center justify-center">Video Player Mockup</div>
        </div>
      </div>
    </section>
  )
}
