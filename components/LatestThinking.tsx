'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LatestThinking() {
  const router = useRouter()

  const data = [
    {
      image: 'Saas1.jpg',
      title: 'Driving AI and Sustainability in Product Development',
      desc: 'Understand how AI and GenAI are enabling smarter, sustainable product design.',
      link: '/insights/ai-sustainability',
    },
    {
      image: 'Saas1.jpg',
      title: 'Future of SaaS Platforms',
      desc: 'Explore how SaaS is evolving with AI-driven automation.',
      link: '/insights/saas-future',
    },
  ]

  return (
    <section id="insights" className="p-12">
      <h2 className="text-2xl font-bold mb-8">Latest Thinking</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden group cursor-pointer"
          >
            {/* IMAGE */}
            <Image
              src={`/images/${item.image}`}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60 transition duration-300" />

            {/* CONTENT */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              
              {/* TITLE (always visible but moves up on hover) */}
              <h3 className="text-lg font-semibold transition-all duration-300 group-hover:-translate-y-16">
                {item.title}
              </h3>

              {/* HOVER CONTENT */}
              <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                <p className="text-sm mt-2">{item.desc}</p>

                <button
                  onClick={() => router.push(item.link)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium hover:underline"
                >
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}