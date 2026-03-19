'use client'

import { useCallback } from 'react'

export default function Navbar() {
  const handleScroll = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const navItems = [
    { label: 'ABOUT US', id: 'about' },
    { label: 'CAPABILITIES', id: 'capabilities' },
    { label: 'INDUSTRIES', id: 'industries' },
    { label: 'INSIGHTS', id: 'insights' },
    { label: 'CAREERS', id: 'careers' },
    { label: 'CONTACT', id: 'contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b px-10 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-red-600">Tech Mahindra</h1>

      <nav className="hidden md:flex gap-8 text-sm font-medium">
        {navItems.map((item) => (
          <span
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="cursor-pointer hover:text-red-600 transition"
          >
            {item.label}
          </span>
        ))}
      </nav>
    </header>
  )
}
