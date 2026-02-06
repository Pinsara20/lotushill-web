import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const backgroundUrl = "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770338140/back-lotus_crm9or.jpg"

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+94 91 2298124",
      subtext: "Get in touch with us anytime",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info.lotushill@gmail.com",
      subtext: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Akkara 15, Ganegama East",
      subtext: "Baddegama, Galle, Sri Lanka",
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
            Contact LOTUS HILL
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Reach out to our team and let us help you take the next step.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 mb-6">
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-wide">GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4">
              We're Here to Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Reach out to us through any of the following channels. We look forward to connecting with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary/10 hover:border-accent/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <info.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {info.title}
                  </h3>
                  <p className="font-semibold text-primary text-lg">{info.details}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{info.subtext}</p>
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
