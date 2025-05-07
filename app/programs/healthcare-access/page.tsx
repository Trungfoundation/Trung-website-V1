import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Users, Heart, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HealthcareAccessPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/medical-camp-3.jpg"
          alt="Healthcare Access Program"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <Badge className="mb-4 bg-primary/90 hover:bg-primary text-white">Healthcare Program</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Healthcare Access Program</h1>
          <p className="text-xl text-white max-w-2xl">
            Improving access to essential healthcare services and preventive care
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-1">Program Started</h3>
              <p className="text-muted-foreground">March 2017</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-1">Active Locations</h3>
              <p className="text-muted-foreground">12 Communities</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-1">People Served</h3>
              <p className="text-muted-foreground">10,000+</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2>About the Program</h2>
            <p>
              Our Healthcare Access Program aims to improve the health and wellbeing of underserved communities by
              increasing access to quality healthcare services. We believe that healthcare is a fundamental right, and
              everyone deserves access to essential medical services regardless of their location or economic status.
            </p>
            <p>
              Through this program, we establish community health centers, organize medical camps, train community
              health workers, provide essential medications, and conduct health education campaigns. Our comprehensive
              approach addresses both immediate healthcare needs and long-term preventive care.
            </p>

            <h2>Program Components</h2>
            <div className="not-prose">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Community Health Centers</h3>
                        <p className="text-muted-foreground">
                          Establishing and supporting community health centers that provide basic healthcare services,
                          maternal care, and preventive health services.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Mobile Medical Camps</h3>
                        <p className="text-muted-foreground">
                          Organizing regular medical camps in remote areas to provide check-ups, treatments, and
                          referrals for specialized care.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Community Health Workers</h3>
                        <p className="text-muted-foreground">
                          Training local community members as health workers to provide basic care, health education,
                          and connect patients with healthcare facilities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Health Education</h3>
                        <p className="text-muted-foreground">
                          Conducting health education campaigns on preventive care, hygiene, nutrition, maternal health,
                          and common diseases.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section 
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/images/healthcare-2.jpg" alt="Healthcare services" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Measurable Results</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">10,000+ patients</span> received essential healthcare services
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">5 community health centers</span> established in underserved areas
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">120 community health workers</span> trained and deployed
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">45% reduction</span> in preventable diseases in target communities
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">60% increase</span> in maternal health check-ups and safe deliveries
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Success Story: Maternal Health Initiative</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <p className="mb-4">
                  In the Lakeside community, maternal mortality rates were alarmingly high due to lack of prenatal care
                  and skilled birth attendants. Many women were giving birth at home without proper medical support.
                </p>
                <p className="mb-4">
                  Through our Healthcare Access Program, we established a maternal health clinic, trained local
                  midwives, and conducted extensive education on the importance of prenatal care and facility-based
                  deliveries.
                </p>
                <p>
                  Within two years, maternal health check-ups increased by 85%, facility-based deliveries rose from 20%
                  to 75%, and maternal mortality decreased by 70%. Today, the Lakeside community has become a model for
                  maternal healthcare in the region.
                </p>
              </div>
              <div className="relative h-[200px] md:h-full rounded-lg overflow-hidden">
                <Image src="/images/causes-3.jpg" alt="Maternal Health Initiative" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Future Plans */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Future Plans</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            We're committed to expanding our Healthcare Access Program to reach more communities in need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Expansion</h3>
                <p className="text-muted-foreground mb-4">
                  Establishing 3 additional community health centers in the next two years, reaching an additional 6,000
                  people.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Specialized Care</h3>
                <p className="text-muted-foreground mb-4">
                  Introducing specialized healthcare services such as dental care, eye care, and mental health support
                  in existing centers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Telemedicine</h3>
                <p className="text-muted-foreground mb-4">
                  Implementing telemedicine services to connect patients in remote areas with specialized healthcare
                  providers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Support */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Support Our Healthcare Access Program</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Your contribution can help us provide essential healthcare services to thousands of people in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button variant="default" size="lg" className="shadow-sm">
                Donate Now
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button variant="outline" size="lg" className="shadow-sm">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Related Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/women-1.jpg" alt="Women Empowerment" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Women Empowerment</h3>
                <p className="text-muted-foreground mb-4">
                  Supporting women through skills training, mentorship, and entrepreneurship opportunities.
                </p>
                <Link
                  href="/programs/women-empowerment"
                  className="text-primary flex items-center gap-1 hover:underline font-medium"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/causes-2.jpg" alt="Samaritan Packages" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Samaritan Packages</h3>
                <p className="text-muted-foreground mb-4">
                  Providing essential supplies and basic needs to vulnerable families and individuals.
                </p>
                <Link
                  href="/programs/samaritan-packages"
                  className="text-primary flex items-center gap-1 hover:underline font-medium"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
