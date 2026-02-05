import type { Metadata } from "next"
import Hero from "@/components/hero"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "News & Events | LOTUS HILL Special School",
  description: "Stay updated with the latest news, announcements, and upcoming events at LOTUS HILL Special School.",
}

export default function News() {
  const upcomingEvents = [
    {
      id: 1,
      date: "January 25, 2026",
      time: "10:00 AM - 12:00 PM",
      title: "School Open House",
      description:
        "Tour our facilities, meet our staff, and learn about our programs. Perfect for prospective families!",
      location: "Main Campus",
      category: "Community",
      icon: "🏫",
    },
    {
      id: 2,
      date: "February 5, 2026",
      time: "2:00 PM - 4:00 PM",
      title: "Parent-Teacher Conferences",
      description: "Individual meetings with teachers and therapists to discuss your child's progress and development.",
      location: "All Classrooms",
      category: "Academic",
      icon: "👨‍👩‍👧",
    },
    {
      id: 3,
      date: "February 14, 2026",
      time: "9:00 AM - 1:00 PM",
      title: "Valentine's Day Celebration",
      description:
        "Special arts and crafts activities, games, and treats to celebrate love and friendship with our school community.",
      location: "Main Hall",
      category: "Special Event",
      icon: "❤️",
    },
    {
      id: 4,
      date: "March 10, 2026",
      time: "6:00 PM - 8:00 PM",
      title: "Family Movie Night",
      description: "Bring your family for a fun evening of movies, popcorn, and entertainment. Free admission for all!",
      location: "Auditorium",
      category: "Community",
      icon: "🎬",
    },
    {
      id: 5,
      date: "March 21, 2026",
      time: "All Day",
      title: "Spring Sports Day",
      description:
        "Inclusive sports activities, games, and competitions designed to celebrate physical activity and teamwork.",
      location: "Sports Ground",
      category: "Sports",
      icon: "⚽",
    },
    {
      id: 6,
      date: "April 15, 2026",
      time: "9:00 AM - 3:00 PM",
      title: "Spring Art Showcase",
      description:
        "Display of artwork and creative projects from our students throughout the year. Celebration of creativity!",
      location: "Gallery & Courtyard",
      category: "Arts",
      icon: "🎨",
    },
  ]

  const announcements = [
    {
      id: 1,
      date: "January 10, 2026",
      title: "Spring Registration Now Open",
      content:
        "We are accepting new student registrations for our spring semester. Limited spaces available in our popular programs. Contact admissions today!",
      priority: "high",
    },
    {
      id: 2,
      date: "January 8, 2026",
      title: "New Speech Therapy Services Launched",
      content:
        "LOTUS HILL has expanded its speech therapy services with a new teletherapy option for remote sessions. Perfect for families seeking flexible scheduling options.",
      priority: "normal",
    },
    {
      id: 3,
      date: "January 5, 2026",
      title: "Celebrating Our December Achievements",
      content:
        "Congratulations to our students on excellent attendance and behavior during December! Special recognition goes to our Grade 4 class for their community service project.",
      priority: "normal",
    },
    {
      id: 4,
      date: "December 28, 2025",
      title: "Holiday Break Reminder",
      content:
        "School will be closed from December 24, 2025 through January 6, 2026. We wish all our families a wonderful holiday season!",
      priority: "normal",
    },
    {
      id: 5,
      date: "December 15, 2025",
      title: "Staff Training Week Scheduled",
      content:
        "Our team will participate in professional development workshops focusing on latest inclusive education practices and therapeutic innovations.",
      priority: "normal",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Community: "bg-blue-100 text-blue-800",
      Academic: "bg-green-100 text-green-800",
      "Special Event": "bg-pink-100 text-pink-800",
      Sports: "bg-yellow-100 text-yellow-800",
      Arts: "bg-purple-100 text-purple-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <>
      <Hero
        subtitle="Stay Connected"
        title="News & Events"
        description="Keep up with the latest announcements and upcoming events at LOTUS HILL Special School."
      />

      {/* Upcoming Events */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Join us for these exciting upcoming events and celebrations at LOTUS HILL.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">{event.date}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                  <div className="text-4xl">{event.icon}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${getCategoryColor(event.category)}`}
                    >
                      {event.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Want to stay updated on all our events? Subscribe to our newsletter!
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Latest Announcements</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className={`rounded-lg p-6 border-l-4 ${
                  announcement.priority === "high" ? "bg-accent/10 border-l-accent" : "bg-white border-l-primary"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{announcement.date}</p>
                    <h3 className="text-xl font-bold text-foreground">{announcement.title}</h3>
                  </div>
                  {announcement.priority === "high" && (
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                      Important
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">{announcement.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">School Calendar</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">Important Dates</h3>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <span className="font-bold text-primary">Jan 25</span>
                  <span className="text-muted-foreground">Open House</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-primary">Feb 5</span>
                  <span className="text-muted-foreground">Parent-Teacher Conferences</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-primary">Mar 10</span>
                  <span className="text-muted-foreground">Family Movie Night</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-primary">Apr 5</span>
                  <span className="text-muted-foreground">Spring Break Begins</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-primary">May 1</span>
                  <span className="text-muted-foreground">End of Year Celebration</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-6">School Hours</h3>
              <div className="space-y-4 bg-primary/10 rounded-lg p-6">
                <div>
                  <p className="font-semibold text-foreground">Regular School Days</p>
                  <p className="text-muted-foreground">8:00 AM - 3:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Extended Care</p>
                  <p className="text-muted-foreground">3:00 PM - 6:00 PM (Available)</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Saturday Programs</p>
                  <p className="text-muted-foreground">9:00 AM - 1:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Holidays & Closures</p>
                  <p className="text-muted-foreground">Please check our announcements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Recent Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg aspect-video flex items-center justify-center text-6xl hover:shadow-lg transition-shadow"
              >
                📸
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Follow us on social media for daily updates, photos, and stories from LOTUS HILL!
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                <Link href="#">Facebook</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                <Link href="#">Instagram</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                <Link href="#">Twitter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions About Our Events?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Contact our team to register for events, volunteer, or get more information about what's happening at LOTUS
            HILL.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
