'use client'

import Image from 'next/image'

export default function Thinkers() {
  const handleClick = () => {
    // 👉 Dummy working URL (you can replace later)
    window.open('https://example.com/security-insights', '_blank')
  }

  return (
    <section className="bg-gradient-to-r from-red-900 to-red-700 text-white grid md:grid-cols-2 items-center p-16 gap-10">
      
      {/* TEXT SIDE */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Security at Speed:
          <br /> Defending the World’s Digital Nervous System
        </h2>

        {/* 🔥 ANIMATED BUTTON */}
        <button
          onClick={handleClick}
          className="relative overflow-hidden group mt-6 px-6 py-3 border border-white rounded-md font-medium"
        >
          {/* Hover Background */}
          <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>

          {/* Text */}
          <span className="relative flex items-center gap-2 group-hover:text-black transition duration-300">
            READ MORE
            <span className="transform group-hover:translate-x-1 transition duration-300">
              →
            </span>
          </span>
        </button>
      </div>

      {/* IMAGE SIDE */}
      <div className="relative">
        <Image
          src="/images/Saas1.jpg"
          alt="thinker"
          width={450}
          height={450}
          className="mx-auto rounded-xl shadow-xl hover:scale-105 transition duration-500"
        />

        {/* subtle glow effect */}
        <div className="absolute inset-0 bg-white/10 blur-2xl opacity-20 -z-10"></div>
      </div>
    </section>
  )
}