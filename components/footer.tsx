import Link from "next/link"
import { Mail, Phone, MapPin, Youtube } from "lucide-react"

export default function Footer() {
  const logoUrl = "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770336237/logo-lotus_rjft4m.png"
  const flagUrl = "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770336291/switzerland-national-flag-transparent-free-png_kkooce.png"

  return (
    <footer className="relative bg-black text-white mt-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About with Logo & Flag */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="LOTUS HILL Logo" className="h-14 w-14 object-contain" />
              <div>
                <h3 className="text-xl font-black">LOTUS HILL</h3>
                <p className="text-xs text-white/70 font-semibold tracking-wide">Special School</p>
              </div>
              <img src={flagUrl} alt="Switzerland Flag" className="h-10 w-auto object-contain ml-2" />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Providing quality education and therapeutic services for children with special needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Social */}
          <div>
            <h4 className="font-bold mb-5 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300">
                <Phone size={18} className="flex-shrink-0" />
                <span>+94 91 2298124</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300">
                <Mail size={18} className="flex-shrink-0" />
                <span>info.lotushill@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/80 hover:text-white transition-colors duration-300">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Akkara 15, Ganegama East, Baddegama, Galle, Sri Lanka</span>
              </li>
            </ul>
            {/* YouTube Only */}
            <div className="mt-6">
              <h4 className="font-bold mb-3 text-lg">Follow Us</h4>
              <Link
                href="https://www.youtube.com/@lotushill843"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-red-500 transition-colors duration-300"
              >
                <Youtube size={22} />
                <span className="text-sm font-semibold">YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/70">&copy; 2026 LOTUS HILL Special School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
