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
    <section className="p-12 bg-gray-50">
      {/* HEADER + ARROWS */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">What’s New</h2>
          <p className="text-gray-600">
            Stay connected with our latest updates, press releases, and upcoming
            events.
          </p>
        </div>

        {/* 🔥 CUSTOM ARROW BUTTONS */}
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
                className="w-full h-[320px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* TOP LABEL */}
              <div className="absolute top-4 left-4 text-xs bg-black/50 px-3 py-1 rounded text-white">
                Press Release | {item.date}
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-4 text-white">
                {/* TITLE */}
                <h3 className="text-sm font-semibold leading-snug transition-all duration-300 group-hover:-translate-y-6">
                  {item.title}
                </h3>

                {/* READ MORE */}
                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  <button
                    onClick={() => window.open(item.link, "_blank")}
                    className="mt-2 text-sm font-medium flex items-center gap-1 hover:underline"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
