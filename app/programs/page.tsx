import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Programs & Services | LOTUS HILL Special School",
  description:
    "Explore our comprehensive educational programs and therapeutic services designed for children with special needs.",
}

export default function Programs() {
  const backgroundUrl = "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770338140/back-lotus_crm9or.jpg"

  const programs = [
    {
      id: 1,
      icon: "🎓",
      title: "Education",
      description:
        "Foundational academic skills with emphasis on literacy, numeracy, and social development. Individualized learning plans for each student.",
      features: [
        "Reading and writing instruction",
        "Mathematics and logic skills",
        "Social-emotional learning",
        "Adaptive physical education",
      ],
    },
    {
      id: 2,
      icon: "🗣️",
      title: "Speech Therapy",
      description:
        "Professional speech-language pathology services addressing communication, articulation, fluency, and language development.",
      features: [
        "Speech and language assessment",
        "Individual therapy sessions",
        "Group communication therapy",
        "Assistive technology support",
      ],
    },
    {
      id: 5,
      icon: "💼",
      title: "Vocational Training",
      description:
        "Practical skills development and job training programs to prepare students for meaningful employment and independent living.",
      features: [
        "Hands-on vocational skills",
        "Workplace readiness training",
        "Job placement support",
        "Life skills development",
      ],
    },
    {
      id: 6,
      icon: "⚜️",
      title: "Scout Activities",
      description:
        "Character building and outdoor education through scouting programs that promote teamwork, leadership, and community service.",
      features: [
        "Team building exercises",
        "Outdoor adventure activities",
        "Leadership development",
        "Community service projects",
      ],
    },
    {
      id: 7,
      icon: "⚽",
      title: "Sport Activities",
      description:
        "Physical fitness and sports programs designed to improve motor skills, coordination, and promote healthy lifestyles.",
      features: [
        "Adaptive sports programs",
        "Physical fitness training",
        "Team sports participation",
        "Motor skills development",
      ],
    },
    {
      id: 8,
      icon: "🎨",
      title: "Creative Arts & Music",
      description:
        "Expression and development through art, music, drama, and creative play. Therapeutic benefits combined with artistic growth.",
      features: [
        "Visual arts and crafts",
        "Music therapy and lessons",
        "Drama and theater programs",
        "Creative expression workshops",
      ],
    },
  ]

  const supportServices = [
    {
      title: "Nutritious Meals",
      description: "Healthy, inclusive meals and snacks prepared daily at our school.",
    },
    {
      title: "Parent Workshops",
      description: "Regular training sessions for families to support learning at home.",
    },
    {
      title: "Medical Coordination",
      description: "Liaison with healthcare providers to integrate medical and educational care.",
    },
    {
      title: "Family Support Groups",
      description: "Community and support networks for parents and families.",
    },
  ]

  return (
    <div className="relative">
      <div
        className="fixed inset-0 bg-cover bg-bottom z-[-20]"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
      />
      <div className="fixed inset-0 bg-black/25 z-[-10]" />

      {/* Page Caption */}
      <section className="relative py-20 md:py-28 bg-transparent overflow-hidden">
        <div className="absolute inset-0 bg-black/35" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Our Programs & Services
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            LOTUS HILL offers a wide range of educational programs and therapeutic services designed to meet each child's unique learning and developmental needs.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PROGRAMS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Educational & Therapeutic Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className="group relative bg-gradient-to-br from-white to-very-light-pink/20 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-primary hover:border-accent hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{program.icon}</div>
                  <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{program.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{program.description}</p>
                  <div className="space-y-3">
                    <p className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 uppercase tracking-wide">Key Features:</p>
                    <ul className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="text-accent mt-0.5 text-lg flex-shrink-0">✓</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Additional Support Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SUPPORT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">
              Additional Support Services
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Beyond our core programs, we provide comprehensive support to ensure your child's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportServices.map((service) => (
              <div
                key={service.title}
                className="group bg-gradient-to-br from-white to-very-light-pink/20 rounded-2xl p-8 border border-primary/10 hover:border-accent/40 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (spacer only) */}
      <section className="py-24 md:py-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[160px]" aria-hidden="true" />
      </section>
    </div>
  )
}
