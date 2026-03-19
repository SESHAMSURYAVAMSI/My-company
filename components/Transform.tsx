import Image from 'next/image'

export default function Transform() {
  return (
    <section className="relative grid md:grid-cols-2">
      <div className="p-16 bg-white relative z-10">
        <h3 className="text-xl font-semibold mb-6">
          Our promise to help enterprises transform at speed
        </h3>

        <div className="flex gap-4">
          <button className="bg-red-600 text-white px-5 py-2">KNOW MORE</button>
          <button className="border px-5 py-2">OUR BRAND STORY</button>
        </div>
      </div>

      {/* 👉 /public/images/car.jpg */}
      <div className="relative h-[400px] md:h-auto">
        <Image src="/images/car.jpg" alt="car" fill className="object-cover" />
      </div>

      {/* Diagonal Overlay */}
      <div className="absolute left-0 top-0 w-full h-full bg-white clip-diagonal z-0" />
    </section>
  )
}
