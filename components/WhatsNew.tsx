"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef } from "react";

export default function WhatsNew() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const data = [
    {
      image: "Saas1.jpg",
      title:
        "Tech Mahindra & Microsoft Collaborate to Launch Ontology-Driven Agentic AI Platform",
      date: "March 05, 2026",
      link: "https://example.com/news1",
    },
    {
      image: "news2.jpg",
      title: "Tech Mahindra Launches Agentic Payment Assistance at MWC 2026",
      date: "March 04, 2026",
      link: "https://example.com/news2",
    },
    {
      image: "news3.jpg",
      title:
        "Tech Mahindra Advances AI-Driven Autonomous Network Operations with NVIDIA",
      date: "March 03, 2026",
      link: "https://example.com/news3",
    },
    {
      image: "Saas1.jpg",
      title:
        "Tech Mahindra & Microsoft Collaborate to Launch Ontology-Driven Agentic AI Platform",
      date: "March 05, 2026",
      link: "https://example.com/news1",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">

      {/* 🔥 BACKGROUND GRID */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ✅ CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">What’s New</h2>
            <p className="text-gray-600">
              Stay connected with our latest updates, press releases, and upcoming events.
            </p>
          </div>

          {/* ARROWS */}
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

        {/* SWIPER */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
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
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
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
                  className="w-full h-[320px] object-cover transition duration-500 group-hover:blur-[3px]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition duration-500" />

                {/* TAG */}
                <div className="absolute top-4 left-4 text-xs bg-black/50 px-3 py-1 rounded text-white z-10">
                  Press Release | {item.date}
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10">

                  {/* TITLE */}
                  <h3 className="text-sm font-semibold leading-snug transition-all duration-500 group-hover:-translate-y-14">
                    {item.title}
                  </h3>

                  {/* HOVER CONTENT */}
                  <div className="absolute left-4 right-4 bottom-4 opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">

                    {/* READ MORE */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(item.link, "_blank");
                      }}
                      className="mt-2 text-sm font-medium"
                    >
                      Read More →
                    </button>

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