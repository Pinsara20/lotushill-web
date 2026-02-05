import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🌸</span>
              <h3 className="text-xl font-black">LOTUS HILL</h3>
            </div>
            <p className="text-sm text-primary-foreground/90 leading-relaxed">
              Providing quality education and therapeutic services for children with special needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-5 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 hover:text-white transition-colors duration-300">
                <Phone size={18} className="flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors duration-300">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@lotushill.edu</span>
              </li>
              <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Education Lane, City, State 12345</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-5 text-lg">Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between gap-4">
                <span className="font-semibold">Mon - Fri:</span>
                <span>8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-semibold">Sat:</span>
                <span>9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="font-semibold">Sun:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/90">&copy; 2026 LOTUS HILL Special School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
