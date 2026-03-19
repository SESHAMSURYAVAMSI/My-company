import Image from 'next/image'

export default function Thinkers() {
  return (
    <section className="bg-red-900 text-white grid md:grid-cols-2 items-center p-16">
      <div>
        <h2 className="text-3xl font-bold mb-4">
          Security at Speed:
          <br /> Defending the World’s Digital Nervous System
        </h2>

        <button className="mt-4 border px-4 py-2 hover:bg-white hover:text-black transition">
          READ MORE
        </button>
      </div>

      {/* 👉 /public/images/thinker.jpg */}
      <Image
        src="/images/thinker.jpg"
        alt="thinker"
        width={400}
        height={400}
        className="mx-auto"
      />
    </section>
  )
}
