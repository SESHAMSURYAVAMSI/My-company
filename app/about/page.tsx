'use client'

import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image
          src="/images/Saas1.jpg"
          alt="about"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transforming Ideas into Digital Reality
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            We empower enterprises with cutting-edge technology and scalable solutions.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="p-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              We are a digital engineering company focused on delivering
              AI-powered and cloud-native solutions for modern enterprises.
            </p>
            <p className="text-gray-500">
              Our mission is to help businesses innovate faster, scale smarter,
              and stay ahead in a rapidly evolving digital landscape.
            </p>
          </div>

          {/* CARD */}
          <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-sm">
              To become a global leader in digital transformation by building
              future-ready, intelligent solutions.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 p-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {['Innovation', 'Scalability', 'Reliability'].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <h4 className="font-semibold text-lg mb-2">{item}</h4>
              <p className="text-sm text-gray-500">
                We deliver high-quality solutions that align with modern business needs.
              </p>
            </div>
          ))}

        </div>
      </section>
    </div>
  )
}