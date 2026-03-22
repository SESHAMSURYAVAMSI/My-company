'use client'

import Image from 'next/image'

export default function BrandStoryPage() {
  return (
    <div className="bg-gray-950 text-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/images/Saas1.jpg"
          alt="brand"
          fill
          className="object-cover opacity-40"
        />

        <div className="text-center px-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Journey & Story
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Built on passion, driven by innovation, and shaped by experience.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="p-10 max-w-5xl mx-auto">

        <h2 className="text-2xl font-semibold mb-10 text-center">
          Milestones
        </h2>

        <div className="space-y-8">

          {[
            { year: '2021', text: 'Company founded with a vision to innovate.' },
            { year: '2022', text: 'Expanded into AI and cloud solutions.' },
            { year: '2023', text: 'Partnered with global enterprises.' },
            { year: '2024', text: 'Scaling globally with new innovations.' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 group"
            >
              <div className="w-16 text-red-400 font-bold">
                {item.year}
              </div>

              <div className="flex-1 bg-white/5 p-4 rounded-lg group-hover:bg-white/10 transition duration-300">
                {item.text}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-16">
        <button className="bg-red-600 px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
          Join Our Journey →
        </button>
      </section>
    </div>
  )
}