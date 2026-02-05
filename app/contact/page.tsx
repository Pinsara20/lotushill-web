"use client"

import type React from "react"

import { useState } from "react"
import Hero from "@/components/hero"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

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

  const faqs = [
    {
      question: "How do I apply for admission?",
      answer:
        "You can start the application process by contacting our admissions team through this form or by calling us directly. We'll guide you through each step including initial consultation, assessment, and enrollment.",
    },
    {
      question: "Do you offer transportation?",
      answer:
        "Yes, we provide safe, supervised transportation for students within our service area. Please ask about transportation options when you contact us.",
    },
    {
      question: "What are your school hours?",
      answer:
        "Regular school hours are 8:00 AM - 3:00 PM, Monday through Friday. Extended care is available until 6:00 PM upon request. Saturday programs run from 9:00 AM - 1:00 PM.",
    },
    {
      question: "Do you accept all insurance?",
      answer:
        "We work with most major insurance providers. Our billing department can help determine coverage for your specific insurance plan. Contact us for more information.",
    },
    {
      question: "Can I visit the school before enrolling?",
      answer:
        "We encourage prospective families to visit our campus. Please contact us to schedule a tour at a time that works best for you.",
    },
    {
      question: "What support services do you provide beyond education?",
      answer:
        "We offer speech therapy, occupational therapy, medical coordination, parent workshops, family support groups, and comprehensive transition services to help students succeed.",
    },
  ]

  return (
    <>
      <Hero
        subtitle="Get in Touch"
        title="Contact LOTUS HILL"
        description="Have questions? We'd love to hear from you. Reach out to our team and let us help you take the next step."
      />

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

      {/* Contact Form & Map */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a topic</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="programs">Programs & Services</option>
                      <option value="scheduling">Schedule a Tour</option>
                      <option value="pricing">Pricing & Payment</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Location</h2>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden mb-6 aspect-square flex flex-col items-center justify-center">
                <MapPin className="w-16 h-16 text-primary/30 mb-4" />
                <p className="text-muted-foreground text-center px-4">Interactive map coming soon</p>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border border-border">
                  <h3 className="font-bold text-foreground mb-2">Main Campus</h3>
                  <p className="text-muted-foreground text-sm mb-3">123 Education Lane, City, State 12345</p>
                  <p className="text-sm text-primary font-semibold">📍 Directions</p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-border">
                  <h3 className="font-bold text-foreground mb-2">Secondary Campus</h3>
                  <p className="text-muted-foreground text-sm mb-3">456 Learning Drive, City, State 12346</p>
                  <p className="text-sm text-primary font-semibold">📍 Directions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-background rounded-lg border border-border p-6 cursor-pointer hover:border-primary transition-colors"
              >
                <summary className="flex items-center justify-between font-semibold text-foreground select-none">
                  {faq.question}
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Support */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Need Immediate Assistance?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-8 text-center border border-primary/20">
              <div className="text-5xl mb-4">🤙</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Reach our admissions team directly for urgent inquiries.</p>
              <a href="tel:+15551234567" className="text-primary font-semibold hover:underline">
                +1 (555) 123-4567
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 text-center border border-primary/20">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Send detailed inquiries and we'll respond within 24 hours.</p>
              <a href="mailto:info@lotushill.edu" className="text-primary font-semibold hover:underline">
                info@lotushill.edu
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 text-center border border-primary/20">
              <div className="text-5xl mb-4">👋</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">Schedule a campus tour and meet our team in person.</p>
              <button className="text-primary font-semibold hover:underline">Schedule a Tour</button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Whether you have questions or are ready to begin the enrollment process, we're here to help. Reach out
            today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold"
            >
              <a href="#contact">Send a Message</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <a href="tel:+15551234567">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
