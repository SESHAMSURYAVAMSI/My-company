'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'

export default function WhatsNew() {
  const data = ['news1.jpg', 'news2.jpg', 'news3.jpg']

  return (
    <section className="p-12 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">What’s New</h2>

      <Swiper spaceBetween={20} slidesPerView={3}>
        {data.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white shadow">
              <Image
                src={`/images/${img}`} // 👉 add here
                alt=""
                width={400}
                height={250}
              />
              <div className="p-4 text-sm">News title here</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
