"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

export default function Industries() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const data = [
    "Retail & Consumer Goods",
    "Travel, Transportation, Logistics & Hospitality",
    "Banking & Financial Services",
    "Communications",
    "Education",
    "Healthcare & Life Sciences",
  ];

  return (
    <section className="py-16 bg-[#f5f2ea]">
      {/* ✅ SAME CONTAINER FOR EVERYTHING */}
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              Expertise Across Industries
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Our expertise spans industries including banking, insurance,
              telecommunications, media, and more.
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

        {/* 🔥 SWIPER (NOW PERFECTLY ALIGNED BELOW HEADER) */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4.3} // 👈 partial card visible
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={800}
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
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 4.3 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              {/* CARD */}
              <div className="group bg-white p-4 h-[150px] flex flex-col justify-between rounded-md border hover:shadow-xl transition duration-300 relative overflow-hidden">
                {/* 🔹 ICON + TEXT (Reduced spacing) */}
                <div className="flex flex-col gap-2">
                  {" "}
                  {/* 👈 reduced gap */}
                  {/* ICON */}
                  <div className="text-gray-400 text-xl">⬛</div>
                  {/* TEXT */}
                  <p className="text-sm font-semibold text-gray-800 leading-snug">
                    {item}
                  </p>
                </div>

                {/* 🔥 KNOW MORE BUTTON (LEFT BOTTOM) */}
                <div className="absolute bottom-4 left-4">
                  <div
                    className="flex items-center bg-red-600 text-white rounded-full overflow-hidden
    transition-all duration-300 ease-in-out
    w-9 group-hover:w-[120px] h-9"
                  >
                    {/* TEXT (hidden initially) */}
                    <span
                      className="whitespace-nowrap text-xs font-medium pl-3
      opacity-0 group-hover:opacity-100 transition duration-300"
                    >
                      Know More
                    </span>

                    {/* 🔥 ARROW ALWAYS VISIBLE */}
                    <div className="w-9 h-9 flex items-center justify-center shrink-0">
                      →
                    </div>
                  </div>
                </div>

                {/* 🔥 DIAGONAL LINES */}
                <div className="absolute bottom-0 right-0 w-full h-full opacity-20 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-[120%] h-[2px] bg-red-400 rotate-12"></div>
                  <div className="absolute bottom-4 right-0 w-[120%] h-[2px] bg-red-400 rotate-12"></div>
                  <div className="absolute bottom-8 right-0 w-[120%] h-[2px] bg-red-400 rotate-12"></div>
                </div>
              </div>{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
