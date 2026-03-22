'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Transform() {
  const router = useRouter()

  return (
    <section className="relative grid md:grid-cols-2 overflow-hidden">
      
      {/* LEFT CONTENT */}
      <div className="p-16 bg-white relative z-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 leading-snug">
          Our promise to help enterprises transform at speed
        </h3>

        <div className="flex gap-4">
          
          {/* 🔴 PRIMARY BUTTON */}
          <button
            onClick={() => router.push('/about')}
            className="relative overflow-hidden group bg-red-600 text-white px-6 py-3 font-medium rounded-md"
          >
            {/* Hover Background */}
            <span className="absolute inset-0 bg-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>

            {/* Text */}
            <span className="relative flex items-center gap-2">
              KNOW MORE
              <span className="transform group-hover:translate-x-1 transition duration-300">
                →
              </span>
            </span>
          </button>

          {/* ⚪ SECONDARY BUTTON */}
          <button
            onClick={() => router.push('/brand-story')}
            className="relative overflow-hidden group border border-gray-800 px-6 py-3 font-medium rounded-md"
          >
            {/* Hover Background */}
            <span className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition duration-300"></span>

            {/* Text */}
            <span className="relative flex items-center gap-2 text-gray-800 group-hover:text-white transition duration-300">
              OUR BRAND STORY
              <span className="transform group-hover:translate-x-1 transition duration-300">
                →
              </span>
            </span>
          </button>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative h-[400px] md:h-auto">
        <Image
          src="/images/Saas1.jpg"
          alt="transform"
          fill
          className="object-cover"
        />
      </div>

      {/* DIAGONAL OVERLAY */}
      <div className="absolute left-0 top-0 w-full h-full bg-white clip-diagonal z-0 pointer-events-none" />
    </section>
  )
}