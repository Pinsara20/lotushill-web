import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap, Brain, Palette, Activity, Heart, ArrowRight, Star, Quote, Phone, Sparkles } from "lucide-react"

export default function Home() {
  const programs = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "Comprehensive education tailored to individual learning needs with specialized support.",
      color: "primary" as const,
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Speech Therapy",
      description: "Professional speech and language therapy sessions to support communication development.",
      color: "accent" as const,
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Vocational Training",
      description: "Practical skills development and job training programs to prepare students for meaningful employment.",
      color: "secondary" as const,
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Arts",
      description: "Art, music, and drama programs that encourage self-expression and creativity.",
      color: "primary" as const,
    },
  ]


  const colorMap = {
    primary: {
      iconBg: "bg-primary/10",
      iconText: "text-primary",
      border: "border-primary/20",
      hoverBorder: "hover:border-primary/50",
      glow: "group-hover:shadow-primary/10",
    },
    accent: {
      iconBg: "bg-accent/10",
      iconText: "text-accent",
      border: "border-accent/20",
      hoverBorder: "hover:border-accent/50",
      glow: "group-hover:shadow-accent/10",
    },
    secondary: {
      iconBg: "bg-secondary/10",
      iconText: "text-secondary",
      border: "border-secondary/20",
      hoverBorder: "hover:border-secondary/50",
      glow: "group-hover:shadow-secondary/10",
    },
  }

  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dtgaxulpq/image/upload/v1770334844/lotus-hill-bg_jtgudj.jpg')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-float animation-delay-300" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 flex justify-end">
          <div className="max-w-3xl text-right">
            {/* Heading */}
            <h1 className="animate-fade-up animation-delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6 drop-shadow-2xl">
              Every Child
              <span className="block text-accent drop-shadow-2xl">
                Deserves to Shine
              </span>
            </h1>

            {/* Subheading */}
            <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl ml-auto mb-10">
              At <strong className="text-white">LOTUS HILL</strong>, we provide comprehensive education and therapeutic services designed to help children with special needs thrive academically, socially, and emotionally.
            </p>

          </div>
        </div>

      </section>


      {/* ═══════════════════════ MISSION & VISION ═══════════════════════ */}
      <section className="py-24 md:py-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-5">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-wide">WHO WE ARE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Guided by <span className="text-foreground">Purpose</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our mission and vision drive everything we do at Lotus Hill.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Mission Card */}
            <div className="group relative bg-white rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <h2 className="text-3xl font-black text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide inclusive, quality education and comprehensive therapeutic services that empower children
                  with special needs to reach their full potential and become confident, independent members of society.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-white rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/30 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-tertiary" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary text-white shadow-lg shadow-accent/20">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-foreground">Our Vision</h2>
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

      {/* ═══════════════════════ PROGRAMS ═══════════════════════ */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-5">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-wide">WHAT WE OFFER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Programs & <span className="text-foreground">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive range of educational and therapeutic services designed to support your child&apos;s unique journey.
            </p>
          </div>

          {/* Program Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => {
              const colors = colorMap[program.color]
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl ${colors.glow} transition-all duration-500 hover:-translate-y-2 border ${colors.border} ${colors.hoverBorder} overflow-hidden`}
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    program.color === "primary" ? "from-primary to-accent" :
                    program.color === "accent" ? "from-accent to-secondary" :
                    "from-secondary to-tertiary"
                  } scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  <div className="relative z-10 space-y-5">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${colors.iconBg} ${colors.iconText} transition-all duration-300 group-hover:scale-110`}>
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">
                      {program.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>


    </>
  )
}
