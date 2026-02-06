import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "News & Events | LOTUS HILL Special School",
  description: "Stay updated with the latest news, announcements, and upcoming events at LOTUS HILL Special School.",
}

export default function News() {
  const backgroundUrl = "https://res.cloudinary.com/dtgaxulpq/image/upload/v1770338140/back-lotus_crm9or.jpg"

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
            News & Events
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Keep up with the latest happenings and upcoming events at LOTUS HILL Special School.
          </p>
        </div>
      </section>

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

      {/* CTA Section (spacer only) */}
      <section className="py-16 md:py-20 pb-0 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[160px]" aria-hidden="true" />
      </section>
    </div>
  )
}
