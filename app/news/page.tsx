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
      date: "February 14, 2026",
      title: "Sunshine Games",
      description:
        "A vibrant day of inclusive games and activities celebrating joy, teamwork, and the spirit of togetherness among our students.",
      category: "Sports",
    },
    {
      id: 2,
      date: "March 10, 2026",
      title: "Lotus Hill Day Charity Event",
      description:
        "Annual charity gathering to support our mission, featuring performances, fundraising activities, and community engagement.",
      category: "Community",
    },
    {
      id: 3,
      date: "March 20–21, 2026",
      title: "Celebrating International Down Syndrome Day – Overnight Camp",
      description:
        "A two-day overnight camp celebrating International Down Syndrome Day with fun activities, bonding experiences, and awareness programs.",
      category: "Special Event",
    },
    {
      id: 4,
      date: "April 10, 2026",
      title: "Sinhala and Tamil New Year Celebration",
      description:
        "Traditional festivities marking the Sinhala and Tamil New Year with cultural games, food, and joyful celebrations.",
      category: "Cultural",
    },
    {
      id: 5,
      date: "June 30, 2026",
      title: "Para Games",
      description:
        "Competitive para-sports event showcasing the athletic talents and determination of our students on a national stage.",
      category: "Sports",
    },
    {
      id: 6,
      date: "August 1, 2026",
      title: "Celebrating Switzerland's National Day",
      description:
        "Honouring our partnership with Switzerland through cultural exchanges, performances, and a special ceremony of gratitude.",
      category: "Cultural",
    },
  ]

  const recentHighlights = [
    {
      title: "Children's Day 2025",
      videoId: "9JPECOdlzZQ",
    },
    {
      title: "COROBOREE 2025 | AIR ROVER SCOUT LOTUS HILL",
      videoId: "JNp4EOXcgB8",
    },
    {
      title: "Lotus Hill New Year Programme – 2025",
      videoId: "wetTM3OxxTY",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Community: "bg-blue-100 text-blue-800",
      "Special Event": "bg-pink-100 text-pink-800",
      Sports: "bg-yellow-100 text-yellow-800",
      Cultural: "bg-purple-100 text-purple-800",
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
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white/90 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent transition-opacity duration-300" />
                <div className="relative p-6 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${getCategoryColor(event.category)}`}
                    >
                      {event.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Recent Highlights - YouTube Videos */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Recent Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentHighlights.map((video, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-foreground">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Follow us on YouTube for more updates, videos, and stories from LOTUS HILL!
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                <Link href="https://www.youtube.com/@lotushill843" target="_blank" rel="noopener noreferrer">YouTube</Link>
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
