import Hero from "@/components/hero"
import Card from "@/components/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const programs = [
    {
      icon: "🎓",
      title: "Primary Education",
      description: "Comprehensive primary education tailored to individual learning needs with specialized support.",
    },
    {
      icon: "🧠",
      title: "Speech Therapy",
      description: "Professional speech and language therapy sessions to support communication development.",
    },
    {
      icon: "🤸",
      title: "Occupational Therapy",
      description: "Therapeutic activities to develop motor skills and independence in daily activities.",
    },
    {
      icon: "🎨",
      title: "Creative Arts",
      description: "Art, music, and drama programs that encourage self-expression and creativity.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      message:
        "LOTUS HILL has transformed my son's confidence and learning. The staff is incredibly caring and professional.",
    },
    {
      name: "Dr. Emily Chen",
      role: "Educational Specialist",
      message: "Excellent inclusive approach to education. The school truly puts each child's individual needs first.",
    },
    {
      name: "Michael Torres",
      role: "Parent",
      message: "My daughter loves coming to school here. The combination of education and therapy has been amazing.",
    },
  ]

  return (
    <>
      <Hero
        schoolName="LOTUS HILL"
        subtitle="Welcome to Excellence in Special Education"
        title="Every Child Deserves Quality Education"
        description="At LOTUS HILL Special School, we provide comprehensive education and therapeutic services designed to help children with special needs thrive academically, socially, and emotionally."
        ctaText="Explore Programs"
        ctaHref="/programs"
        image="/banner.png"
      />

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="group relative bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-primary hover:border-accent overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10">
                  <span className="text-2xl">🎯</span>
                  <h2 className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide inclusive, quality education and comprehensive therapeutic services that empower children
                  with special needs to reach their full potential and become confident, independent members of society.
                </p>
              </div>
            </div>
            <div className="group relative bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-accent hover:border-secondary overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-accent/10 to-secondary/10">
                  <span className="text-2xl">🌟</span>
                  <h2 className="text-3xl font-black bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where every child, regardless of their abilities, has access to quality education, therapeutic
                  support, and the opportunity to develop their unique talents and contribute meaningfully to their
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-very-light-pink/50 via-white to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">WHAT WE OFFER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">Our Programs & Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive range of educational and therapeutic services designed to support your child's
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card
                key={index}
                icon={program.icon}
                title={program.title}
                description={program.description}
                color={["primary", "accent", "secondary", "tertiary"][index % 4] as any}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-secondary text-primary-foreground font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105 rounded-xl px-10 py-6 text-base"
            >
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">What Parents & Educators Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-very-light-pink/30 rounded-2xl p-10 border-2 border-primary/10 hover:border-accent/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-5xl text-accent/20 mb-4">"</div>
                  <p className="text-lg text-foreground mb-8 italic leading-relaxed font-medium">
                    {testimonial.message}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-accent font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">Ready to Join LOTUS HILL?</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Take the first step towards your child's success. Contact us today to learn more about our programs and
            enrollment process.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-white/90 text-primary font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-110 rounded-xl px-12 py-7 text-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
