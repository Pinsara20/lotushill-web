export default function About() {
  const backgroundUrl = "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770338140/back-lotus_crm9or.jpg"

  const team = [
    {
      name: "Shantha Annasiwatte",
      role: "Executive Director",
      image: "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770341820/1_lajmcc.png",
    },
    {
      name: "H.A. Lanka Kumari",
      role: "Music teacher (Vishared)",
      image: "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770341822/8_sfvlqf.png",
    },
    {
      name: "Chandana Sooriarachchi",
      role: "Sport Instructor",
      image: "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770341822/3_jdihzr.png",
    },
    {
      name: "A.H.N.I. Sandamali",
      role: "Teacher",
      image: "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770341823/7_itkek9.png",
    },
    {
      name: "W. Sanupama Sathsarani",
      role: "Teacher",
      image: "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770341822/5_tsddx6.png",
    },
    {
      name: "K.W. Nilmini",
      role: "Sign Language Teacher",
      image: "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770341822/6_pdef2q.png",
    },
    {
      name: "G. Sureka Pubudumali",
      role: "Dancing Instructor",
      image: "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770341823/9_ngcb1m.png",
    },
    {
      name: "G. Hashini Madushani",
      role: "Teacher",
      image: "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770341821/4_usdnni.png",
    },
    {
      name: "W. Roshani Thamara",
      role: "Assistant Commissioner Scout",
      image: "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770341821/2_bweimt.png",
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
                Founded on March 10, 2009, in the serene landscape of Baddegama, the Lotus Hill Residential School emerged from a vision to provide a dignified and nurturing environment for children with intellectual disabilities. Established under the guidance of Venerable Baddegama Samitha Thero and Venerable Banagala Gunarathna Thero, the institution was born out of a profound need to support families who lacked access to specialized care.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Starting with just nine children, the school has since expanded its reach, now providing a home and education to 25 residential students from across the island, along with several day-scholars from the local community. Under the dedicated supervision of a professional management team and resident house mothers, the school has evolved from a local initiative into a center of excellence—pioneering the first "Special Needs Air Scout" group in Sri Lanka and producing national-level Paralympic athletes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Supported by international partners from Finland and local donors, Lotus Hill remains a testament to the belief that with the right environment, every child can bloom with purpose.
              </p>
            </div>
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dtgaxulpq/image/upload/v1770344318/WhatsApp_Image_2026-02-05_at_8.02.37_PM_qzggnc.jpg"
                  alt="Lotus Hill School"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-primary/10 hover:border-accent/30"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
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
