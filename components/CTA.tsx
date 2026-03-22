"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative h-[350px] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image src="/images/Saas1.jpg" alt="cta" fill className="object-cover" />

      {/* DARK GRADIENT OVERLAY (RIGHT SIDE FOCUS) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/60 to-black" />

      {/* CONTENT */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center justify-end">
        <div className="max-w-xl text-white">
          {/* TITLE */}
          <h2 className="text-4xl font-bold mb-4">Limitless Together</h2>

          {/* DESCRIPTION */}
          <p className="text-gray-200 mb-6 leading-relaxed">
            At Tech Mahindra, you’re not just joining a company — you’re
            becoming part of a community. Let’s be limitless together.
          </p>

          {/* 🔥 BUTTON */}
          <button className="relative overflow-hidden group bg-white text-black px-6 py-3 font-medium rounded-md">
            {/* Hover Effect */}
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-300"></span>

            <span className="relative flex items-center gap-2 group-hover:text-white transition duration-300">
              KNOW MORE
              <span className="group-hover:translate-x-1 transition">→</span>
            </span>
          </button>
        </div>
      </div>

      {/* OPTIONAL DIAGONAL LINES (BOTTOM RIGHT) */}
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-white rotate-12"></div>
        <div className="absolute bottom-4 right-0 w-full h-[2px] bg-white rotate-12"></div>
        <div className="absolute bottom-8 right-0 w-full h-[2px] bg-white rotate-12"></div>
      </div>
    </section>
  );
}
