import Card from "@/components/card"


export default function About() {
  const backgroundUrl = "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770338140/back-lotus_crm9or.jpg"

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
            About LOTUS HILL
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            For over a decade, LOTUS HILL has been committed to providing exceptional education and therapeutic services that transform the lives of children with special needs.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 md:py-28 bg-white">
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


      {/* Achievements */}
      <section className="py-20 md:py-28 bg-background">
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

      {/* Footer Spacer */}
      <section className="py-16 md:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[160px]" aria-hidden="true" />
      </section>

    </div>
  )
}
