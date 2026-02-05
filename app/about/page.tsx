import Hero from "@/components/hero"
import Card from "@/components/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function About() {
  const team = [
    {
      name: "Dr. Patricia Williams",
      role: "Founder & Principal",
      bio: "25+ years of experience in special education and child development.",
      image: "👩‍🏫",
    },
    {
      name: "James Chen",
      role: "Director of Curriculum",
      bio: "Expert in adaptive learning strategies and inclusive education.",
      image: "👨‍🏫",
    },
    {
      name: "Lisa Rodriguez",
      role: "Chief Therapist",
      bio: "Licensed speech-language pathologist and occupational therapy specialist.",
      image: "👩‍⚕️",
    },
    {
      name: "Michael Barnes",
      role: "Special Needs Coordinator",
      bio: "Dedicated to creating supportive learning environments for all students.",
      image: "👨‍💼",
    },
  ]

  const achievements = [
    {
      icon: "🏆",
      title: "Award for Excellence",
      description: "2023 Regional Education Excellence Award",
    },
    {
      icon: "📚",
      title: "Accreditation",
      description: "Fully accredited by the National Association of Special Education Schools",
    },
    {
      icon: "👥",
      title: "Student Success",
      description: "95% of our graduates transition successfully to mainstream education",
    },
    {
      icon: "⭐",
      title: "Parent Rating",
      description: "4.9/5 stars from parent satisfaction surveys",
    },
  ]

  const timeline = [
    { year: "2010", event: "LOTUS HILL Special School founded by Dr. Patricia Williams" },
    { year: "2013", event: "Opened second campus to serve more students in the community" },
    { year: "2017", event: "Established comprehensive speech and occupational therapy department" },
    { year: "2020", event: "Implemented innovative virtual learning platform for continuity" },
    { year: "2023", event: "Received Regional Education Excellence Award" },
    { year: "2024", event: "Expanded programs to include life skills training and vocational education" },
  ]

  return (
    <>
      <Hero
        subtitle="Learn Our Story"
        title="About LOTUS HILL Special School"
        description="For over a decade, LOTUS HILL has been committed to providing exceptional education and therapeutic services that transform the lives of children with special needs."
      />

      {/* History Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-6">
                <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">OUR STORY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8">Our History</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2010, LOTUS HILL Special School was born from a vision to create an inclusive educational
                environment where children with special needs could truly flourish. Dr. Patricia Williams, an
                accomplished educator with 25+ years of experience, established LOTUS HILL with the belief that every
                child deserves access to quality education tailored to their unique needs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What started as a small facility has grown into a comprehensive special education center serving
                hundreds of students across multiple campuses. Throughout our journey, we've remained steadfast in our
                commitment to excellence, innovation, and the well-being of every child in our care.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, LOTUS HILL stands as a beacon of hope and learning for families navigating special education,
                recognized for our achievements, professional team, and unwavering dedication to student success.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-16 flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <div className="text-8xl transform group-hover:scale-110 transition-transform duration-500">🌸</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">TIMELINE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Our Journey</h2>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 group">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl flex items-center justify-center font-black text-lg shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    {item.year.slice(-2)}
                  </div>
                  {index !== timeline.length - 1 && <div className="w-1 flex-1 bg-gradient-to-b from-primary to-accent/30 mt-4 rounded-full" />}
                </div>
                <div className="flex-1 pb-12">
                  <div className="bg-gradient-to-br from-white to-very-light-pink/30 rounded-2xl p-8 border-2 border-primary/10 group-hover:border-accent/30 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl font-black text-primary mb-3">{item.year}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">RECOGNITION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Our Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                icon={achievement.icon}
                title={achievement.title}
                description={achievement.description}
                color={["primary", "accent", "secondary", "primary"][index % 3] as any}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">OUR TEAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Our dedicated team of educators, therapists, and support staff are passionate about helping each student
              succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-primary/10 hover:border-accent/30"
              >
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 h-40 flex items-center justify-center text-6xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative transform group-hover:scale-110 transition-transform duration-500">{member.image}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
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
          <h2 className="text-4xl md:text-6xl font-black mb-6">Experience Our Difference</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Visit LOTUS HILL and see how we're transforming lives through education and therapeutic support.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-primary font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 rounded-xl px-10 py-6 text-base"
            >
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border-2 border-white/80 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm font-bold shadow-xl transition-all duration-300 hover:scale-105 rounded-xl px-10 py-6 text-base"
            >
              <Link href="/programs">View Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
