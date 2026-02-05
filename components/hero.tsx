import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroProps {
  title: string
  subtitle: string
  description?: string
  ctaText?: string
  ctaHref?: string
  image?: string
  schoolName?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = "Learn More",
  ctaHref = "#",
  image,
  schoolName = "LOTUS HILL",
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-background via-white to-very-light-pink/30 overflow-hidden">
      {/* Top section with background image */}
      <div
        className="relative w-full h-96 md:h-[28rem] bg-cover bg-center"
        style={{
          backgroundImage: `url('/banner2.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-background/95"></div>

        {/* LOTUS HILL text positioned across the image and white background */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-6xl md:text-9xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent text-center mb-2 font-serif drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
              {schoolName}
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom section with gradient background */}
      <div className="relative pt-36 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-accent to-secondary rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-[32rem] h-[32rem] bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Special School
                </span>
              </div>
              <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-accent to-secondary rounded-full mx-auto shadow-lg shadow-accent/20"></div>
            </div>

            <div className="space-y-6 max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent text-balance leading-tight tracking-tight">
                {title}
              </h1>
            </div>
            {description && (
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                {description}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-5 pt-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-secondary text-white font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105 rounded-xl px-8 py-6 text-base"
              >
                <Link href={ctaHref}>{ctaText}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-2 border-primary/30 text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 bg-white/80 backdrop-blur-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl px-8 py-6 text-base"
              >
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
