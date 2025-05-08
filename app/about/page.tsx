import Image from "next/image"
import { ArrowRight, Award, Calendar, Clock, Heart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TeamMember from "@/components/team-member"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/causes-3.jpg"
          alt="About Our Foundation"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Our Foundation</h1>
          <p className="text-xl text-white max-w-2xl">Who we are.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2019, our foundation began with a simple mission: To empower communities through education,
                  healthcare and sustainable development, creating a brighter future for all. What started as a small
                  initiative by a group of passionate individuals has grown into a comprehensive foundation with
                  programs spanning education, healthcare, community and sustainability development.
                </p>
                <p>
                  Over the years, we've expanded our reach to over 25 communities across the several region of Uganda,
                  impacting over 2,000 lives through our various programs and initiatives. Our approach has always been
                  centered on sustainability and community ownership, ensuring that the changes we help initiate
                  continue to flourish long after our direct involvement ends.
                </p>
                <p>
                  Today, we continue to grow and adapt to the changing needs of the communities we serve, guided by our
                  core values of compassion, integrity, and excellence.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center p-4">
              <div className="relative h-[300px] w-[300px]">
                <Image
                  src="/trung_logo.png"
                  alt=""
                  width={300}
  height={300}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Heart className="text-primary" size={28} />
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-6">
                To empower communities through sustainable development initiatives in education, healthcare, and
                economic empowerment, creating lasting positive change that enables individuals and communities to
                thrive.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Provide Quality Education</h3>
                    <p className="text-sm text-muted-foreground">
                      Ensure access to quality education for all children in our communities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Improve Healthcare Access</h3>
                    <p className="text-sm text-muted-foreground">
                      Enhance access to essential healthcare services for vulnerable populations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Foster Economic Growth</h3>
                    <p className="text-sm text-muted-foreground">
                      Support sustainable economic development through skills training and entrepreneurship.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-primary" size={28} />
                Our Vision
              </h2>
              <p className="text-muted-foreground mb-6">
                A world where all people hold the muscle to create opportunity for themselves and others to end poverty.
                A world where all communities have the resources, opportunities, and support they need to achieve their
                full potential, creating a more equitable and sustainable future for all.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Empowered Communities</h3>
                    <p className="text-sm text-muted-foreground">
                      Communities that are self-sufficient and resilient in the face of challenges.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sustainable Development</h3>
                    <p className="text-sm text-muted-foreground">
                      Long-term solutions that continue to benefit communities for generations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Lasting Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Measurable, positive change that transforms lives and communities.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Compassion</h3>
              <p className="text-muted-foreground">
                We approach our work with empathy and understanding, recognizing the dignity and worth of every
                individual.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We maintain the highest ethical standards in all our actions, ensuring transparency and accountability.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of partnerships and work closely with communities and organizations.
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously seek creative solutions to complex challenges, embracing new ideas and approaches.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Meet the dedicated professionals who drive our mission forward every day.
          </p>

          <Tabs defaultValue="leadership" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-xs mx-auto grid-cols-1">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="leadership">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TeamMember
                  name="Andrew Trung Musana "
                  title="Executive Director"
                  bio="Mr. Andrew Trung has over 8 years of experience in non-profit leadership and international development."
                  image="/images/trung-musana.jpg"
                />
                <TeamMember
                  name="Counsel Aisha Nakisinje"
                  title="Legal Advisor"
                  bio="Counsel Aisha oversees all Legal programs ensuring alignment with legal obligations/requirements."
                  image="/images/counsel-aisha-nakisinje.jpg"

                />
                <TeamMember
                  name="Mr. Ken Wandabusi"
                  title="Patron"
                  bio="Mr Wandabusi provides oversight and guidance to ensure all programs operate within the bounds of the organizations strategic intent"
                  image="/images/ken-wandabusi.jpg"
                />
              </div>
              {/*

            </TabsContent>
            <TabsContent value="board">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TeamMember
                  name="Michael Chen"
                  title="Board Chair"
                  bio="Michael brings extensive experience in corporate leadership and strategic planning."
                  image="/images/team-1.jpg"
                />
                <TeamMember
                  name="Dr. Amara Okafor"
                  title="Board Treasurer"
                  bio="Dr. Okafor is a financial expert with a passion for sustainable development."
                  image="/images/team-4.jpg"
                />
                <TeamMember
                  name="Robert Garcia"
                  title="Board Secretary"
                  bio="Robert has dedicated his career to community development and education reform."
                  image="/images/team-2.jpg"
                />
                <TeamMember
                  name="Lisa Wong"
                  title="Board Member"
                  bio="Lisa is a healthcare executive committed to improving access to quality care."
                  image="/images/team-3.jpg"
                />
                <TeamMember
                  name="James Wilson"
                  title="Board Member"
                  bio="James brings expertise in technology and innovation to support our digital initiatives."
                  image="/images/team-5.jpg"
                />
                <TeamMember
                  name="Elena Rodriguez"
                  title="Board Member"
                  bio="Elena is an advocate for women's empowerment and educational equity."
                  image="/images/team-6.jpg"
                />
              </div>
            </TabsContent>
            <TabsContent value="staff">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <TeamMember
                  name="Asaph"
                  title="From our Programs"
                  bio="We believe that the world will be driven to sustainable living when education initiatives across multiple communities are embraced."
                  image="/images/team-2.jpg"
                  compact
                />
                <TeamMember
                  name="Maria Santos"
                  title="In Healthcare"
                  bio="Our healthcare access programs and community health workshops have brought health sensitization to lots of marginalized communities."
                  image="/images/team-4.jpg"
                  compact
                />
                <TeamMember
                  name="Thomas Nguyen"
                  title="Finance Manager"
                  bio="Thomas ensures financial transparency and efficient resource allocation."
                  image="/images/team-5.jpg"
                  compact
                />
                <TeamMember
                  name="Aisha Patel"
                  title="Communications Specialist"
                  bio="Aisha manages our digital presence and storytelling initiatives."
                  image="/images/team-3.jpg"
                  compact
                />
                <TeamMember
                  name="Carlos Mendez"
                  title="Community Outreach"
                  bio="Carlos builds relationships with local partners and community leaders."
                  image="/images/team-6.jpg"
                  compact
                />
                <TeamMember
                  name="Grace Lee"
                  title="Volunteer Coordinator"
                  bio="Grace manages our volunteer program and community engagement events."
                  image="/images/team-4.jpg"
                  compact
                />
                <TeamMember
                  name="Omar Hassan"
                  title="Monitoring & Evaluation"
                  bio="Omar tracks program outcomes and impact to ensure effectiveness."
                  image="/images/team-1.jpg"
                  compact
                />
                <TeamMember
                  name="Priya Sharma"
                  title="Grant Writer"
                  bio="Priya secures funding through grants and institutional partnerships."
                  image="/images/team-3.jpg"
                  compact
                />
              </div>
            </TabsContent>*/}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-x max-w-2xl mx-auto mb-8">
            Together, we can create lasting change in communities that need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Donate Now
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
              Get Involved
            </Button>
          </div>
        </div>
      </section>

      {/* Legal & Governance */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Legal & Governance</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Our foundation is registered as a company limited by guarantee, ensuring proper governance and
            accountability.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Legal Structure</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>Our foundation is registered as a non-profit organization in Uganda</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Limited liability protection for our board members and trustees</li>
                  <li>A clear governance framework with defined roles and responsibilities</li>
                  <li>Transparency in financial management and reporting</li>
                  <li>Compliance with all relevant regulatory requirements</li>
                </ul>
                <p>Registration Number: 12345678</p>
                <p>Tax Exemption Status: 501(c)(3) equivalent</p>
              </div>
              {/* <div className="mt-6">
               <Button variant="outline">View Registration Documents</Button>
              </div>*/}
            </Card>
            {/*<Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Governance Documents</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h4 className="font-semibold">Articles of Incorporation</h4>
                    <p className="text-sm text-muted-foreground">Last updated: January 2022</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h4 className="font-semibold">Bylaws</h4>
                    <p className="text-sm text-muted-foreground">Last updated: March 2023</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h4 className="font-semibold">Board Policies</h4>
                    <p className="text-sm text-muted-foreground">Last updated: September 2023</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h4 className="font-semibold">Code of Ethics</h4>
                    <p className="text-sm text-muted-foreground">Last updated: June 2023</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Annual Reports</h4>
                    <p className="text-sm text-muted-foreground">2020-2023 available</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </div>
            </Card>*/}
          </div>
        </div>
      </section>
    </main>
  )
}
