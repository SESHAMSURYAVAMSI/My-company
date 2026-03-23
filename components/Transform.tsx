"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Transform() {
  const router = useRouter();

  return (
    <section className="relative grid md:grid-cols-2 h-[420px] overflow-hidden bg-[#f4f1eb]">
      {/* LEFT CONTENT */}
      <div className="flex items-center px-10 md:px-20 relative z-10">
        <div className="max-w-xl">
          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-red-600">Scale at Speed</span>
            <br />
            <span className="text-gray-900 font-medium">with SaaScraft</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our promise to help enterprises across industries transform at speed
            and bring agility, resilience, and efficiency to their businesses.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4">
            {/* PRIMARY BUTTON */}
            <button
              onClick={() => router.push("/about")}
              className="bg-red-600 text-white px-6 py-3 font-semibold hover:bg-red-700 transition"
            >
              KNOW MORE
            </button>

            {/* SECONDARY BUTTON */}
            <button
              onClick={() => router.push("/brand-story")}
              className="border border-red-600 text-red-600 px-6 py-3 font-semibold hover:bg-red-600 hover:text-white transition"
            >
              OUR BRAND STORY
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE WITH ANGLED CUT */}
      <div className="relative h-[400px] md:h-auto">
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <Image
            src="/images/Saas1.jpg"
            alt="transform"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* SUBTLE BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(135deg,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </section>
  );
}
