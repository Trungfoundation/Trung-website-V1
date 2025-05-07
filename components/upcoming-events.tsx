"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  image: string
  slug: string
  description: string
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Foundation's General Meeting",
    date: "June 15, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Kampala Community Center",
    image: "/images/events.jpg",
    slug: "foundation-general-meeting",
    description:
      "Join us for our annual general meeting where we'll share updates on our programs and plans for the coming year.",
  },
  {
    id: 2,
    title: "Healthcare Outreach in Tororo",
    date: "July 8, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Tororo District Hospital",
    image: "/images/healthcare-1.jpg",
    slug: "healthcare-outreach-tororo",
    description: "Free medical consultations, screenings, and medications for residents of Tororo District.",
  },
  {
    id: 3,
    title: "Women's Entrepreneurship Workshop",
    date: "July 22, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Jinja Business Hub",
    image: "/images/women-1.jpg",
    slug: "women-entrepreneurship-workshop",
    description: "Learn essential business skills and network with successful women entrepreneurs from across Uganda.",
  },
  {
    id: 4,
    title: "Education Center Open House",
    date: "August 5, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Mbale Education Center",
    image: "/images/education5.jpg",
    slug: "education-center-open-house",
    description:
      "Tour our new facilities, meet our teachers, and learn about our educational programs for children and adults.",
  },
]

export function UpcomingEvents() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="text-lg text-gray-600 mt-2">Join us in making a difference across Uganda</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/events">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.slice(0, 3).map((event) => (
            <Link
              href={`/events/${event.slug}`}
              key={event.id}
              className="group"
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-500",
                      hoveredEvent === event.id && "scale-110",
                    )}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-emerald-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-emerald-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-emerald-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
