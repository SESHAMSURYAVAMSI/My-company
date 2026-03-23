'use client'

import Image from 'next/image'

export default function Thinkers() {
  const handleClick = () => {
    window.open('https://example.com/security-insights', '_blank')
  }

  return (
    <section className="relative overflow-hidden bg-[#7a0026] text-white px-10 md:px-20 py-16 grid md:grid-cols-2 items-center">

      {/* 🔴 BACKGROUND DIAGONAL LINES */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
        <div className="w-full h-full bg-[repeating-linear-gradient(135deg,transparent,transparent_12px,#ff2b5c_13px)]" />
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-xl">

        {/* SMALL HEADING */}
        <p className="uppercase tracking-widest text-sm mb-4 italic">
          THE <span className="text-red-400 font-semibold">BIG</span> THINKERS
        </p>

        {/* MAIN TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Security at Speed:
          <br />
          Defending the World’s
          <br />
          Digital Nervous System
        </h2>

        {/* AUTHOR */}
        {/* <div className="mb-8">
          <p className="font-semibold text-lg">Vasu Jakkal</p>
          <p className="text-red-300 text-sm">
            Corporate Vice President, <br />
            Microsoft Security
          </p>
        </div> */}

        {/* BUTTON */}
        <button
          onClick={handleClick}
          className="bg-red-500 hover:bg-red-600 transition px-6 py-3 font-semibold"
        >
          READ MORE
        </button>
      </div>

      {/* RIGHT IMAGE (CUTOUT STYLE) */}
      <div className="relative flex justify-center md:justify-end">
        <Image
          src="/images/Saas1.jpg"
          alt="thinker"
          width={500}
          height={600}
          className="object-contain"
          priority
        />
      </div>

    </section>
  )
}