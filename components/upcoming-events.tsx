import type React from "react"
import Image from "next/image"
import type { Event } from "@/types"

interface UpcomingEventsProps {
  events: Event[]
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Upcoming Events</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events.map((event) => (
            <div key={event.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Image
                  src={event.imageUrl || "/placeholder.svg"}
                  alt={event.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={event.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {event.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{event.date}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents
