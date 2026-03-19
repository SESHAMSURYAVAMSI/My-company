import Image from 'next/image'

export default function CTA() {
  return (
    <section id="contact" className="relative h-[300px] text-white">
      {/* 👉 /public/images/footer-bg.jpg */}
      <Image src="/images/Saas1.jpg" alt="" fill className="object-cover" />

      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">Limitless Together</h2>
        <button className="mt-4 border px-5 py-2 hover:bg-white hover:text-black transition">
          KNOW MORE
        </button>
      </div>
    </section>
  )
}
