"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin, Search } from "lucide-react";
import { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  getDate,
  isSameDay,
  parseISO,
} from "date-fns";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterButton from "@/components/register-button";

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ... all sections unchanged ... */}
    </main>
  );
}

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  type: string;
  slug: string;
  isPast?: boolean;
}

function EventCard({ title, description, date, time, location, image, type, slug, isPast = false }: EventCardProps) {
  return (
    <Card className={`overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg ${isPast ? "" : "border-t-4 border-t-primary/70"}`}>
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover ${isPast ? "grayscale" : ""}`}
        />
        <div className="absolute top-3 left-3">
          <Badge
            variant={isPast ? "outline" : "secondary"}
            className={isPast ? "bg-white/80 text-foreground backdrop-blur-sm" : "shadow-sm"}
          >
            {type}
          </Badge>
        </div>
        {isPast && (
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-white/80 text-foreground backdrop-blur-sm">
              Past Event
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="space-y-1 mb-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={14} className="text-primary/70" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={14} className="text-primary/70" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} className="text-primary/70" />
            <span>{location}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-primary/90">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <div className="mt-auto">
          {isPast ? (
            <Link href={`/events/${slug}`}>
              <Button
                variant="outline"
                className="w-full hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              >
                View Recap
              </Button>
            </Link>
          ) : (
            <div className="flex flex-col gap-2">
              <RegisterButton eventTitle={title} eventDate={date} className="w-full shadow-sm">
                Register Now
              </RegisterButton>
              <Link href={`/events/${slug}`}>
                <Button
                  variant="outline"
                  className="w-full hover:bg-primary/10 hover:text-primary hover:border-primary/30"
                >
                  View Details
                </Button>
              </Link>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function EventCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 1));

  const events = [
    {
      id: 1,
      title: "Pre-General Meeting",
      date: "2025-04-27",
      slug: "pre-general-meeting",
      isPast: true,
      location: "Serena Hotel, Kampala",
    },
    {
      id: 2,
      title: "Foundation's General Meeting",
      date: "2025-05-18",
      slug: "foundation-general-meeting",
      isPast: false,
      location: "Fairway Hotel, Kampala",
    },
  ];

  return <div>/* Calendar UI here */</div>;
}
