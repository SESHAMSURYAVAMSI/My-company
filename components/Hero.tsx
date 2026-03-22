"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const slides = [
    {
      image: "Saas1.jpg",
      title: "Engineering Real-Time Fraud Intelligence",
      desc: "Empowering enterprises with AI-driven security solutions.",
    },
    {
      image: "hero2.jpg",
      title: "Driving AI and Sustainability",
      desc: "Innovating future-ready solutions.",
    },
    {
      image: "hero3.jpg",
      title: "Transforming Digital Experiences",
      desc: "Delivering scalable enterprise platforms.",
    },
  ];

  return (
    <section className="relative h-[85vh] text-white">
      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 5000 }}
        speed={800}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[85vh]">
              <Image
                src={`/images/${slide.image}`}
                alt="hero"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/60" />

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 flex flex-col justify-center px-12 max-w-5xl"
              >
                <h2 className="text-5xl font-bold">{slide.title}</h2>

                <p className="mt-4 max-w-xl text-sm opacity-90">{slide.desc}</p>

                <button className="mt-6 border px-6 py-3 hover:bg-white hover:text-black transition w-fit">
                  KNOW MORE
                </button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 CUSTOM BUTTONS (FIXED) */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-10">
        {/* PREV */}
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="group relative w-12 h-12 rounded-full bg-red-400 text-white flex items-center justify-center overflow-hidden"
        >
          <span className="relative z-10 group-hover:-translate-x-1 transition">
            ←
          </span>

          {/* hover animation */}
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-300"></span>
        </button>

        {/* NEXT */}
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="group relative w-12 h-12 rounded-full bg-red-400 text-white flex items-center justify-center overflow-hidden"
        >
          <span className="relative z-10 group-hover:translate-x-1 transition">
            →
          </span>

          {/* hover animation */}
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-300"></span>
        </button>
      </div>
    </section>
  );
}
