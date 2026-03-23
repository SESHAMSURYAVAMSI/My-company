"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const navItems = [
    {
      label: "ABOUT US",
      dropdown: {
        sections: [
          {
            title: "Company",
            items: ["Overview", "Leadership", "Our History"],
          },
          {
            title: "Culture",
            items: ["Values", "Diversity", "Careers"],
          },
          {
            title: "More",
            items: ["News", "Events", "Investors"],
          },
        ],
        highlight: {
          title: "Why SaaScraft?",
          desc: "We build scalable digital solutions for modern enterprises.",
        },
      },
    },
    {
      label: "CAPABILITIES",
      dropdown: {
        sections: [
          {
            title: "Tech Services",
            items: ["Consulting", "Application Services", "Cloud"],
          },
          {
            title: "Data & AI",
            items: ["Data Analytics", "AI Solutions"],
          },
          {
            title: "Platforms",
            items: ["SAP", "Salesforce", "Oracle"],
          },
        ],
        highlight: {
          title: "Next Gen Tech",
          desc: "AI, Cloud & Automation to power your business.",
        },
      },
    },
    { label: "INDUSTRIES" },
    { label: "INSIGHTS" },
    { label: "CAREERS" },
    { label: "CONTACT" },
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200"
      onMouseLeave={() => {
        setActiveMenu(null);
        setHovered(null);
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-red-600 tracking-wide">
          SaaScraft
        </h1>

        {/* NAV */}
        <nav className="hidden md:flex gap-10 text-sm font-medium relative">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                setActiveMenu(item.label);
                setHovered(item.label);
              }}
            >
              <span className="cursor-pointer px-2 py-1 relative z-10">
                {item.label}
              </span>

              {/* 🔥 UNDERLINE TRACKER */}
              {hovered === item.label && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-red-600 rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </div>
          ))}
        </nav>

        {/* SEARCH */}
        <motion.div whileHover={{ scale: 1.2 }}>
          {/* <Search className="cursor-pointer" size={20} /> */}
        </motion.div>
      </div>

      {/* 🔥 MEGA MENU */}
      <AnimatePresence>
        {navItems.map(
          (item) =>
            item.dropdown &&
            activeMenu === item.label && (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                className="absolute left-0 top-full w-full bg-white/80 backdrop-blur-2xl shadow-2xl border-t border-gray-100"
                onMouseEnter={() => setActiveMenu(item.label)}
              >
                {/* 🔥 GLOW EFFECT */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-transparent to-red-50 opacity-40 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-10 py-12 flex gap-16 relative">
                  {/* LEFT */}
                  <div className="flex flex-1 gap-16">
                    {item.dropdown.sections.map((section, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <h3 className="font-semibold text-gray-900 mb-4">
                          {section.title}
                        </h3>

                        <ul className="space-y-3 text-gray-600">
                          {section.items.map((sub, idx) => (
                            <motion.li
                              key={idx}
                              whileHover={{
                                x: 8,
                                color: "#dc2626",
                              }}
                              className="cursor-pointer transition"
                            >
                              {sub}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  {/* RIGHT PREMIUM CARD */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="w-[280px] bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-gray-100"
                  >
                    <h4 className="font-semibold mb-3 text-gray-900">
                      {item.dropdown.highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.dropdown.highlight.desc}
                    </p>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-5 text-red-600 text-sm font-medium"
                    >
                      Learn more →
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>
    </header>
  );
}
