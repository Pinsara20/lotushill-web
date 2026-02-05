"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "News & Events", href: "/news" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-primary/10 shadow-lg shadow-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-3">
              <div className="text-3xl transition-transform group-hover:scale-110 duration-300">🌸</div>
              <div>
                <div className="text-2xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  LOTUS HILL
                </div>
                <p className="text-xs text-muted-foreground font-semibold tracking-wide">Special School</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-5 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-secondary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105 rounded-xl px-6"
            >
              <Link href="/contact">Enroll Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-primary hover:bg-primary/10 transition-all duration-300"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top duration-300">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Button asChild className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-secondary text-primary-foreground font-bold shadow-lg rounded-xl">
                <Link href="/contact">Enroll Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
