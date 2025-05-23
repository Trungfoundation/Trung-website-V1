import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Heart, Home, Users, Gift, Building } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProgramsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/image_4.jpg"
          alt="Our Programs & Initiatives"
          fill
          className="object-cover brightness-[0.7]"
          priority
          onError={(e) => {
            e.currentTarget.src = "/programs.png"
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Programs & Initiatives</h1>
          <p className="text-xl text-white max-w-2xl">Discover how we're creating lasting change in communities</p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Making a Difference</h2>
            <p className="text-muted-foreground">
              Our programs focus on creating sustainable solutions in education, healthcare, women empowerment, orphan
              support, resettlement, and community development. Each initiative is designed with community input and
              focuses on long-term impact.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="empowerment">Empowerment</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProgramCard
                  title="School Improvement"
                  category="Education"
                  description="Enhancing school infrastructure and resources to create better learning environments."
                  image="/images/school-improvement-1.jpg"
                  status="Active"
                  icon={<BookOpen className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Healthcare Access"
                  category="Healthcare"
                  description="Improving access to essential healthcare services and preventive care."
                  image="/images/mobile-health-clinic.jpeg"
                  status="Active"
                  icon={<Heart className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Women Empowerment"
                  category="Empowerment"
                  description="Supporting women through skills training, mentorship, and entrepreneurship."
                  image="/images/women-certification.jpeg"
                  status="Active"
                  icon={<Users className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Orphan Support"
                  category="Social Welfare"
                  description="Providing care, education, and a loving environment for vulnerable children."
                  image="/images/kids-muzungu.jpg"
                  status="Active"
                  icon={<Heart className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Girl Child Empowerment"
                  category="Empowerment"
                  description="Equipping girls with skills, confidence, and opportunities to shape their own futures."
                  image="/images/education5.jpg"
                  status="Active"
                  icon={<Users className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Samaritan Packages"
                  category="Basic Needs"
                  description="Providing essential supplies and basic needs to vulnerable families and individuals."
                  image="/images/food-security-packaging.jpeg"
                  status="Active"
                  icon={<Gift className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Resettlement Program"
                  category="Housing"
                  description="Building homes and rebuilding lives for vulnerable families and communities."
                  image="/images/services-3.jpg"
                  status="Active"
                  icon={<Building className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Community Centers"
                  category="Community Development"
                  description="Building and operating community centers that serve as hubs for various programs."
                  image="/images/community-centers.jpeg"
                  status="Active"
                  icon={<Home className="h-5 w-5" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProgramCard
                  title="School Improvement"
                  category="Education"
                  description="Enhancing school infrastructure and resources to create better learning environments."
                  image="/images/school-improvement-1.jpg"
                  status="Active"
                  icon={<BookOpen className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Teacher Training"
                  category="Education"
                  description="Providing professional development for teachers to improve educational quality."
                  image="/images/volunteer-2.jpg"
                  status="Active"
                  icon={<BookOpen className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Scholarship Program"
                  category="Education"
                  description="Supporting promising students with scholarships to continue their education."
                  image="/images/school-improvement-2.jpg"
                  status="Active"
                  icon={<BookOpen className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Digital Literacy"
                  category="Education"
                  description="Teaching essential computer and internet skills to students and community members."
                  image="/images/school-improvement-2.jpg"
                  status="Active"
                  icon={<BookOpen className="h-5 w-5" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="healthcare">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProgramCard
                  title="Community Health Workers"
                  category="Healthcare"
                  description="Training local health workers to provide basic care and health education."
                  image="/images/medical-camp-3.jpg"
                  status="Active"
                  icon={<Heart className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Maternal Health"
                  category="Healthcare"
                  description="Supporting pregnant women with prenatal care, education, and safe delivery services."
                  image="/images/causes-3.jpg"
                  status="Active"
                  icon={<Heart className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Vaccination Campaigns"
                  category="Healthcare"
                  description="Organizing vaccination drives to protect communities from preventable diseases."
                  image="/images/medical-camp-3.jpg"
                  status="Active"
                  icon={<Heart className="h-5 w-5" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="empowerment">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProgramCard
                  title="Women Entrepreneurs"
                  category="Women Empowerment"
                  description="Providing business training, mentorship, and microloans to women entrepreneurs."
                  image="/images/women-1.jpg"
                  status="Active"
                  icon={<Users className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Girl Child Empowerment"
                  category="Youth Development"
                  description="Equipping girls with skills, confidence, and opportunities to shape their own futures."
                  image="/images/education5.jpg"
                  status="Active"
                  icon={<Users className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Women's Leadership"
                  category="Women Empowerment"
                  description="Developing leadership skills and confidence in women through workshops and mentoring."
                  image="/images/workshop-1.jpg"
                  status="Active"
                  icon={<Users className="h-5 w-5" />}
                />
                <ProgramCard
                  title="Orphan Support"
                  category="Child Welfare"
                  description="Providing care, education, and a loving environment for vulnerable children."
                  image="/images/kids-muzungu.jpg"
                  status="Active"
                  icon={<Heart className="h-5 w-5" />}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Program Map */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Where We Work</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our programs currently operate in 35 communities across 5 regions, reaching over 50,000 people with
                  essential services and support.
                </p>
                <p>
                  We prioritize underserved areas where our interventions can have the greatest impact, working closely
                  with local leaders and organizations to ensure our programs meet community needs.
                </p>
                <div className="pt-4">
                  <Button>View Detailed Map</Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full rounded-lg overflow-hidden border">
                <Image
                  src="/images/where-we-work.jpeg"
                  alt="Program Locations Map"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=400&width=600&query=map+of+program+locations"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Programs</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Your contribution can help us expand our reach and deepen our impact in communities that need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button variant="secondary" size="lg" className="shadow-lg">
                Donate Now
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10 shadow-lg"
              >
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

interface ProgramCardProps {
  title: string
  category: string
  description: string
  image: string
  status: "Active" | "Planned" | "Completed"
  icon: React.ReactNode
}

function ProgramCard({ title, category, description, image, status, icon }: ProgramCardProps) {
  let linkHref = `/programs/${title.toLowerCase().replace(/\s+/g, "-")}`

  if (title === "School Improvement") {
    linkHref = "/programs/school-improvement"
  } else if (title === "Healthcare Access") {
    linkHref = "/programs/healthcare-access"
  } else if (title === "Community Centers") {
    linkHref = "/programs/community-centers"
  } else if (title === "Resettlement Program") {
    linkHref = "/programs/resettlement"
  } else if (title === "Girl Child Empowerment") {
    linkHref = "/programs/girl-empowerment"
  }

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg border-t-4 border-t-primary/70">
      <div className="relative h-48 bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          onError={(e) => {
            e.currentTarget.src = `/placeholder.svg?height=192&width=384&query=${encodeURIComponent(title)}`
          }}
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="flex items-center gap-1 shadow-sm">
            {icon}
            {category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge
            variant={status === "Active" ? "success" : status === "Planned" ? "info" : "outline"}
            className={status === "Active" ? "bg-green-100 text-green-800" : ""}
          >
            {status}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-primary/90">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <Link href={linkHref} className="text-primary flex items-center gap-1 hover:underline mt-auto font-medium">
          Learn More <ArrowRight size={16} />
        </Link>
      </CardContent>
    </Card>
  )
}
