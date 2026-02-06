"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const logoUrl = "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770336237/logo-lotus_rjft4m.png"
  const flagUrl =
    "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770336291/switzerland-national-flag-transparent-free-png_kkooce.png"

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "News & Events", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="LOTUS HILL Logo"
                className="h-14 w-14 object-contain transition-transform group-hover:scale-105 duration-300"
              />
              <div>
                <div className="text-xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  LOTUS HILL
                </div>
                <p className="text-[10px] text-muted-foreground font-semibold tracking-widest uppercase">Special School</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 rounded-lg text-sm font-semibold text-foreground/80 hover:text-primary transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <img src={flagUrl} alt="Switzerland Flag" className="h-10 w-auto object-contain hidden sm:block" />
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-in slide-in-from-top duration-300 border-t border-gray-100 pt-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-sm font-semibold text-foreground/80 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
