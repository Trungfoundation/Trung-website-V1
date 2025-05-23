import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function VolunteerPage() {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Join Our Volunteer Team</h1>
        <p className="text-gray-600 mb-8">Make a difference in your community by volunteering with us.</p>
        <Image
          src="/images/volunteer-hero.jpg"
          alt="Volunteers working together"
          width={1200}
          height={600}
          className="rounded-lg mx-auto"
          priority
        />
        <Button asChild className="mt-8">
          <Link href="#opportunities">Explore Opportunities</Link>
        </Button>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Volunteer Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Opportunity Card 1 */}
          <Card>
            <CardHeader>
              <CardTitle>Community Cleanup</CardTitle>
              <CardDescription>Help us clean up our local parks.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/cleanup.jpg"
                alt="Volunteers cleaning up a park"
                width={400}
                height={300}
                className="rounded-md mb-4"
              />
              <p>
                Join us for a day of cleaning up our local parks and green spaces. We'll provide the supplies, you bring
                the energy!
              </p>
            </CardContent>
            <CardFooter>
              <Button>Sign Up</Button>
            </CardFooter>
          </Card>

          {/* Opportunity Card 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Food Bank Assistance</CardTitle>
              <CardDescription>Sort and distribute food at our local food bank.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/foodbank.jpg"
                alt="Volunteers sorting food at a food bank"
                width={400}
                height={300}
                className="rounded-md mb-4"
              />
              <p>
                Help us sort and distribute food to families in need. Your efforts will make a real difference in the
                lives of others.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Sign Up</Button>
            </CardFooter>
          </Card>

          {/* Opportunity Card 3 */}
          <Card>
            <CardHeader>
              <CardTitle>Tutoring Program</CardTitle>
              <CardDescription>Provide tutoring to students in need.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/tutoring.jpg"
                alt="Volunteers tutoring students"
                width={400}
                height={300}
                className="rounded-md mb-4"
              />
              <p>
                Share your knowledge and skills by tutoring students in need. Help them succeed in school and reach
                their full potential.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Sign Up</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Volunteer Application</h2>
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle>Apply to Volunteer</CardTitle>
            <CardDescription>Please fill out the form below to apply.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="interests">Interests</Label>
                <Input type="text" id="interests" placeholder="Your Interests" />
              </div>
              <Button type="submit">Submit Application</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Image src="/images/gallery1.jpg" alt="Volunteer event 1" width={400} height={300} className="rounded-md" />
          <Image src="/images/gallery2.jpg" alt="Volunteer event 2" width={400} height={300} className="rounded-md" />
          <Image src="/images/gallery3.jpg" alt="Volunteer event 3" width={400} height={300} className="rounded-md" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-4">Have questions? Contact us today!</p>
        <p>Email: info@example.com</p>
        <p>Phone: (555) 123-4567</p>
      </section>
    </div>
  )
}
