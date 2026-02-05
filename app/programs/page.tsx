import type { Metadata } from "next"
import Hero from "@/components/hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Programs & Services | LOTUS HILL Special School",
  description:
    "Explore our comprehensive educational programs and therapeutic services designed for children with special needs.",
}

export default function Programs() {
  const programs = [
    {
      id: 1,
      icon: "🎓",
      title: "Primary Education (Ages 5-8)",
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
      icon: "📖",
      title: "Intermediate Education (Ages 9-12)",
      description:
        "Comprehensive academics with increased complexity and specialized subject areas. Integration of life skills and career exploration.",
      features: [
        "Advanced academic subjects",
        "Science and environmental studies",
        "Life skills training",
        "Career awareness programs",
      ],
    },
    {
      id: 3,
      icon: "🎯",
      title: "Secondary Education (Ages 13-16)",
      description:
        "Preparation for transition to further education or vocational training. Focus on independence and practical skills.",
      features: [
        "Secondary level academics",
        "Vocational skills training",
        "Job readiness programs",
        "Transition planning services",
      ],
    },
    {
      id: 4,
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
      icon: "🤸",
      title: "Occupational Therapy",
      description:
        "Therapeutic activities developing fine motor skills, sensory integration, and independence in self-care and daily living.",
      features: [
        "Motor skill development",
        "Sensory integration therapy",
        "Self-care and independence training",
        "Adaptive equipment consultation",
      ],
    },
    {
      id: 6,
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

  const ageGroups = [
    {
      age: "Early Learners (5-8)",
      focus: "Foundation Building",
      description:
        "Building strong academic foundations with structured play-based learning and early intervention services.",
    },
    {
      age: "Middle Years (9-12)",
      focus: "Skill Development",
      description:
        "Developing academic competency and practical life skills with increased independence and social integration.",
    },
    {
      age: "Teens (13-16)",
      focus: "Transition Planning",
      description: "Preparing for adulthood with vocational training, job readiness, and transition planning services.",
    },
  ]

  const registrationSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Meet with our admissions team to discuss your child's needs and our programs.",
    },
    {
      step: "2",
      title: "Assessment & Evaluation",
      description: "Comprehensive evaluation of your child to determine appropriate program placement.",
    },
    {
      step: "3",
      title: "IEP Development",
      description: "Create an Individualized Education Plan with input from parents, educators, and therapists.",
    },
    {
      step: "4",
      title: "Enrollment & Orientation",
      description: "Complete enrollment process and participate in school orientation and family introduction.",
    },
  ]

  return (
    <>
      <Hero
        subtitle="Comprehensive Support Services"
        title="Our Programs & Services"
        description="LOTUS HILL offers a wide range of educational programs and therapeutic services designed to meet each child's unique learning and developmental needs."
      />

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AGE GROUPS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">Learning Pathways</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-10 border-2 border-primary/10 hover:border-accent/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">{group.age}</h3>
                  <p className="text-sm font-bold text-accent mb-4 uppercase tracking-wide">{group.focus}</p>
                  <p className="text-muted-foreground leading-relaxed">{group.description}</p>
                </div>
              </div>
            ))}
          </div>
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

      {/* Enrollment Process */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GET STARTED</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Enrollment Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {registrationSteps.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl w-16 h-16 flex items-center justify-center font-black text-xl mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-xl font-black text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>

                {index !== registrationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-accent/30 rounded-full" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 relative bg-gradient-to-br from-white to-very-light-pink/30 rounded-3xl p-12 border-2 border-primary/20 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-50" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">Ready to Begin?</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                We understand that choosing a school for your child is an important decision. Our admissions team is here
                to answer all your questions and guide you through the process. Contact us today to schedule a
                consultation and visit our facilities.
              </p>
              <Button asChild className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-secondary text-primary-foreground font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl px-8 py-6 text-base">
                <Link href="/contact">Start Enrollment Process</Link>
              </Button>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-white to-very-light-pink/20 rounded-2xl p-8 border-2 border-primary/10 hover:border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">Transportation Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Safe, supervised transportation available for students within service area.
                </p>
              </div>
              <div className="group bg-gradient-to-br from-white to-very-light-pink/20 rounded-2xl p-8 border-2 border-primary/10 hover:border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">Nutritious Meals</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Healthy, inclusive meals and snacks prepared daily at our school.
                </p>
              </div>
              <div className="group bg-gradient-to-br from-white to-very-light-pink/20 rounded-2xl p-8 border-2 border-primary/10 hover:border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">Parent Workshops</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Regular training sessions for families to support learning at home.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="group bg-gradient-to-br from-white to-very-light-pink/20 rounded-2xl p-8 border-2 border-primary/10 hover:border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">Medical Coordination</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Liaison with healthcare providers to integrate medical and educational care.
                </p>
              </div>
              <div className="group bg-gradient-to-br from-white to-very-light-pink/20 rounded-2xl p-8 border-2 border-primary/10 hover:border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">Transition Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive planning for transition to secondary education or employment.
                </p>
              </div>
              <div className="group bg-gradient-to-br from-white to-very-light-pink/20 rounded-2xl p-8 border-2 border-primary/10 hover:border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">Family Support Groups</h3>
                <p className="text-muted-foreground leading-relaxed">Community and support networks for parents and families.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Find the Right Program for Your Child</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Our team is ready to help you find the perfect program match and answer any questions you may have.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-white/90 text-primary font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-110 rounded-xl px-12 py-7 text-lg"
          >
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
