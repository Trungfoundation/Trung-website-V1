"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { useEffect, useState, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import NewsletterForm from "@/components/newsletter-form"
import ImpactCounter from "@/components/impact-counter"
import FeaturedProgram from "@/components/featured-program"
import RegisterButton from "@/components/register-button"
import { TestimonialsSection } from "@/components/testimonials-section"
{/*import { UpcomingEvents } from "@/components/upcoming-events"*/}

export default function Home() {
  const [api, setApi] = useState<any>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [partnersApi, setPartnersApi] = useState<any>(null)
  const partnersIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Function to start partners carousel autoplay
  const startPartnersAutoplay = () => {
    if (partnersIntervalRef.current) {
      clearInterval(partnersIntervalRef.current)
    }

    partnersIntervalRef.current = setInterval(() => {
      if (partnersApi) {
        partnersApi.scrollNext()
      }
    }, 2000)
  }

  // Set up auto-play when the carousel API is available
  useEffect(() => {
    if (!api) return

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Set up new interval for auto-play
    intervalRef.current = setInterval(() => {
      api.scrollNext()
    }, 5000)

    // Clean up interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [api])

  // Set up auto-play for partners carousel
  useEffect(() => {
    if (!partnersApi) return

    startPartnersAutoplay()

    // Clean up interval on unmount
    return () => {
      if (partnersIntervalRef.current) {
        clearInterval(partnersIntervalRef.current)
      }
    }
  }, [partnersApi])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Carousel */}
      <section className="relative w-full">
        <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[500px] w-full">
                <Image
                  src="/images/cover.jpg"
                  alt="Children in a classroom"
                  fill
                  className="object-cover brightness-[0.7]"
                  priority
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Empowering Communities</h1>
                  <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
                    Building a better future through education, healthcare, and community development
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/donate">
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Donate Now
                      </Button>
                    </Link>
                    <Link href="/programs">
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                      >
                        Our Programs
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[500px] w-full">
                <Image
                  src="/images/volunteer.jpg"
                  alt="Women empowerment program"
                  fill
                  className="object-cover brightness-[0.7]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Empowering Women</h1>
                  <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
                    Supporting women entrepreneurs and leaders in our communities
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/programs/women-empowerment">
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/blog">
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                      >
                        Success Stories
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <CarouselPrevious className="bg-white/20 hover:bg-white/40 backdrop-blur-sm" />
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <CarouselNext className="bg-white/20 hover:bg-white/40 backdrop-blur-sm" />
          </div>
        </Carousel>
      </section>

      {/* Director's Message */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full border-4 border-primary overflow-hidden relative">
                <Image
                  src="/images/trung-musana.jpg"
                  alt="Foundation Director"
                  width={256}
                  height={256}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Director's Message</h2>
              <div className="text-lg text-muted-foreground mb-6">
                <p className="mb-4">
                  "Our foundation stands on the belief that every individual deserves the opportunity to thrive. Through
                  our programs in education, healthcare, and community development, we're committed to creating lasting
                  change in the communities we serve."
                </p>
                <p>
                  "We invite you to join us in this journey of transformation. Together, we can build a more equitable
                  and sustainable future for all."
                </p>
              </div>
              <div className="font-semibold">Andrew Trung Musana</div>
              <div className="text-muted-foreground">Executive Director</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ImpactCounter number={1780} label="Lives Impacted" />
            <ImpactCounter number={36} label="Projects Completed" />
            <ImpactCounter number={13} label="Communities Served" />
            <ImpactCounter number={6} label="Years of Service" />
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Our Programs</h2>
            <Link href="/programs" className="text-primary flex items-center gap-1 hover:underline">
              View All Programs <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedProgram
              title="Education Initiative"
              description="Providing quality education and learning resources to underserved communities."
              image="/images/volunteer-2.jpg"
              link="/programs/education"
            />
            <FeaturedProgram
              title="Healthcare Access"
              description="Improving access to essential healthcare services and preventive care."
              image="/images/medical-camp-3.jpg"
              link="/programs/healthcare"
            />
            <FeaturedProgram
              title="Women Empowerment"
              description="Supporting women through skills training, mentorship, and entrepreneurship."
              image="/images/women-1.jpg"
              link="/programs/women-empowerment"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section 
      <UpcomingEvents />*/}

      {/* Upcoming Events */}
      <section className="py-16 px-4 md:px-6 bg-muted" id="upcoming-events">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Link href="/events" className="text-primary flex items-center gap-1 hover:underline">
              View All Events <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/workshop-1.jpg" alt="Foundation's General Meeting" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar size={16} />
                  <span>May 18, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Foundation's General Meeting</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin size={16} />
                  <span>Fairway Hotel, Kampala</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Annual general meeting bringing together board members, staff, partners, and stakeholders to review
                  progress and discuss future initiatives.
                </p>
                <div className="flex flex-wrap gap-3">
                  <RegisterButton eventTitle="Foundation's General Meeting" eventDate="May 18, 2025" variant="default">
                    Register Now
                  </RegisterButton>
                  <Link href="/events/foundation-general-meeting">
                    <Button variant="outline">View Details</Button>
                  </Link>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/community-aid-distribution.jpg"
                  alt="Field Work in Mbale"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar size={16} />
                  <span>June 25-30, 2025</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Field Work in Mbale</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin size={16} />
                  <span>Mbale, Uganda</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  A comprehensive field work initiative focused on supporting children and youth through feeding
                  programs, scholastic materials, medical outreach, and empowerment.
                </p>
                <div className="flex flex-wrap gap-3">
                  <RegisterButton eventTitle="Field Work in Mbale" eventDate="June 25-30, 2025" variant="default">
                    Register Now
                  </RegisterButton>
                  <Link href="/events/field-work-mbale">
                    <Button variant="outline">View Details</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8">Subscribe to our newsletter.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Partners/Sponsors */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <Carousel
            className="w-full"
            opts={{
              loop: true,
              align: "center",
              dragFree: true,
              containScroll: "trimSnaps",
            }}
            onMouseEnter={() => {
              if (partnersIntervalRef.current) {
                clearInterval(partnersIntervalRef.current)
              }
            }}
            onMouseLeave={() => {
              startPartnersAutoplay()
            }}
            setApi={setPartnersApi}
          >
            <CarouselContent className="py-4">
              {/*<CarouselItem className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 flex justify-center">
                <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
                  <div className="bg-black rounded-lg p-4 w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/amor-logo.png"
                      alt="AMOR Way"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>*/}
              <CarouselItem className="basis-full flex justify-center">
                <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
                  <div className="bg-white rounded-lg p-1 w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/first-orphanage-logo.png"
                      alt="First Orphanage"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </section>
    </main>
  )
}
