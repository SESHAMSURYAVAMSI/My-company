"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef } from "react";

export default function OnsiteStories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const data = [
    {
      image: "Saas1.jpg",
      title:
        "From Infrastructure to Intelligence: How Google Cloud is Driving AI",
      author: "Francis deSouza",
      role: "Google Cloud",
    },
    {
      image: "success2.jpg",
      title: "How reinvention is underway at AT&T with strategic partnerships",
      author: "Jeremy Legg",
      role: "AT&T",
    },
    {
      image: "success3.jpg",
      title: "How Gen AI created fraud control ecosystem at Citizens Bank",
      author: "Ajay Punia",
      role: "Citizens Bank",
    },
    {
      image: "success4.jpg",
      title: "How leadership drives data-driven success in specialty materials",
      author: "Helen Mets",
      role: "Ahlstrom",
    },
    {
      image: "success4.jpg",
      title: "How leadership drives data-driven success in specialty materials",
      author: "Helen Mets",
      role: "Ahlstrom",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      {/* HEADER + ARROWS */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-bold mb-2">Onsite Stories</h2>
          <p className="text-gray-600 max-w-2xl">
            See how we partner with global enterprises to solve challenges.
          </p>
        </div>

        {/* 🔥 ARROWS */}
        <div className="flex gap-3">
          <button
            ref={prevRef}
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-red-700 transition"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-red-700 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* 🔥 SWIPER */}
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative group overflow-hidden rounded-xl cursor-pointer">
                {/* IMAGE */}
                <Image
                  src={`/images/${item.image}`}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover transition duration-500 
    group-hover:scale-105 group-hover:blur-sm"
                />

                {/* DARK OVERLAY */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
    group-hover:from-black/90 group-hover:via-black/60 transition duration-300"
                />

                {/* VIDEO TAG */}
                <div className="absolute top-4 left-4 text-xs bg-black/60 px-2 py-1 rounded text-white">
                  VIDEO
                </div>

                {/* CONTENT */}
                <div
                  className="absolute bottom-0 p-4 text-white transition-all duration-300 
    group-hover:-translate-y-4"
                >
                  {/* TITLE */}
                  <h3
                    className="text-sm font-semibold leading-snug mb-2 
      group-hover:text-white"
                  >
                    {item.title}
                  </h3>

                  {/* AUTHOR */}
                  <p className="text-xs font-medium opacity-80 group-hover:opacity-100">
                    {item.author}
                  </p>

                  <p className="text-xs text-gray-300 opacity-70 group-hover:opacity-100">
                    {item.role}
                  </p>
                </div>

                {/* PLAY BUTTON */}
                <div className="absolute bottom-4 right-4">
                  <div
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center 
      opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    ▶
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
