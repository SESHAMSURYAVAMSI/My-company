"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050838] text-white overflow-hidden">
      {/* 🔥 GRID + DIAGONAL BACKGROUND */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[25, 50, 75].map((pos) => (
          <div
            key={pos}
            className="absolute top-0 h-full w-[1px] bg-white"
            style={{ left: `${pos}%` }}
          />
        ))}

        {[20, 40, 60].map((pos) => (
          <div
            key={pos}
            className="absolute w-full h-[1px] bg-white rotate-6"
            style={{ top: `${pos}%` }}
          />
        ))}
      </div>

      {/* MAIN */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* LOGO */}
        <div>
          <h2 className="text-xl font-bold tracking-wide mb-4">SaaScraft</h2>
        </div>

        {/* LINKS 1 */}
        <div className="space-y-3 text-sm">
          {[
            "Our Brand",
            "Sustainability",
            "Corporate Citizenship",
            "Investor Relations",
            "Contact Us",
          ].map((item) => (
            <p key={item} className="relative cursor-pointer group w-fit">
              {item}
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
            </p>
          ))}
        </div>

        {/* LINKS 2 */}
        <div className="space-y-3 text-sm">
          {[
            "News",
            "Events",
            "Careers",
            "Alumni",
            "Sitemap",
            "Cookie Preferences",
          ].map((item) => (
            <p key={item} className="relative cursor-pointer group w-fit">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
            </p>
          ))}
        </div>

        {/* 🔥 SOCIAL ICONS */}
        <div className="flex items-start gap-4">
          {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram].map(
            (Icon, i) => (
              <div
                key={i}
                className="group w-9 h-9 rounded-full border border-white flex items-center justify-center cursor-pointer overflow-hidden"
              >
                <Icon className="text-sm z-10 group-hover:text-black transition" />

                {/* hover fill */}
                <span className="absolute w-full h-full bg-white scale-0 transition duration-300 rounded-full"></span>

              </div>
            ),
          )}
        </div>
      </div>

      {/* 🔥 BOTTOM */}
      <div className="relative max-w-7xl mx-auto px-6 pb-6">
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-300 gap-4">
          <p>© {year} SaaScraft Limited</p>

          <div className="flex gap-4 flex-wrap">
            {["Terms of Use", "Accessibility", "Privacy", "Cookie"].map(
              (item, i) => (
                <span key={i} className="cursor-pointer hover:text-white">
                  {item}
                  {i !== 3 && " •"}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
