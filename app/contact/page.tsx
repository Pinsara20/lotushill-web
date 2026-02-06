import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const backgroundUrl = "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770338140/back-lotus_crm9or.jpg"

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtext: "Monday - Friday, 8:00 AM - 5:00 PM",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@lotushill.edu",
      subtext: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Education Lane",
      subtext: "City, State 12345",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "8:00 AM - 4:00 PM",
      subtext: "Monday - Friday",
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/10 text-center"
              >
                <info.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                <p className="font-semibold text-primary mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
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
