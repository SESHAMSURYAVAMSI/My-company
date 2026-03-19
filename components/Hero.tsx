'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="about" className="relative h-[85vh] text-white">
      {/* 👉 /public/images/hero.jpg */}
      <Image src="/images/hero.jpg" alt="hero" fill className="object-cover" />

      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute inset-0 flex flex-col justify-center px-12"
      >
        <h2 className="text-5xl font-bold max-w-2xl leading-tight">
          Engineering Real-Time Fraud Intelligence
        </h2>

        <p className="mt-4 max-w-xl text-sm opacity-90">
          Add your real description here...
        </p>

        <button className="mt-6 border px-6 py-2 hover:bg-white hover:text-black transition w-fit">
          WATCH NOW
        </button>
      </motion.div>
    </section>
  )
}
