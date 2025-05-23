import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const EducationPage = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Minds Through Education</h1>
            <p className="text-gray-600 text-lg mb-6">
              Explore our comprehensive educational programs designed to foster growth, innovation, and lifelong
              learning.
            </p>
            <Button asChild>
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
          <Image
            src="/images/education-hero.jpg"
            alt="Students learning together"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Programs Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Program Card 1 */}
          <Card>
            <CardHeader>
              <CardTitle>STEM Education</CardTitle>
              <CardDescription>Explore the world of Science, Technology, Engineering, and Mathematics.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/stem-education.jpg"
                alt="STEM Education"
                width={400}
                height={250}
                className="rounded-md mb-4"
              />
              <p className="text-gray-700">
                Our STEM program provides hands-on learning experiences and prepares students for future careers in
                high-demand fields.
              </p>
              <Button asChild variant="secondary" className="mt-4">
                <Link href="/programs/stem">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Program Card 2 */}
          <Card>
            <CardHeader>
              <CardTitle>Arts & Humanities</CardTitle>
              <CardDescription>
                Discover the beauty and power of creative expression and critical thinking.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/arts-humanities.jpg"
                alt="Arts & Humanities"
                width={400}
                height={250}
                className="rounded-md mb-4"
              />
              <p className="text-gray-700">
                Our Arts & Humanities program fosters creativity, communication, and cultural understanding.
              </p>
              <Button asChild variant="secondary" className="mt-4">
                <Link href="/programs/arts">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Program Card 3 */}
          <Card>
            <CardHeader>
              <CardTitle>Vocational Training</CardTitle>
              <CardDescription>
                Gain practical skills and prepare for a successful career in a skilled trade.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/images/vocational-training.jpg"
                alt="Vocational Training"
                width={400}
                height={250}
                className="rounded-md mb-4"
              />
              <p className="text-gray-700">
                Our Vocational Training program offers hands-on training in various trades, leading to immediate
                employment opportunities.
              </p>
              <Button asChild variant="secondary" className="mt-4">
                <Link href="/programs/vocational">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <Card>
            <CardContent>
              <p className="text-gray-700 italic mb-4">
                "The STEM program gave me the skills and confidence to pursue my dream of becoming an engineer."
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/student-1.jpg"
                  alt="Student 1"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Alice Johnson</p>
                  <p className="text-sm text-gray-500">Engineering Student</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card>
            <CardContent>
              <p className="text-gray-700 italic mb-4">
                "The Arts & Humanities program helped me discover my passion for writing and storytelling."
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/student-2.jpg"
                  alt="Student 2"
                  width={50}
                  height={50}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Bob Williams</p>
                  <p className="text-sm text-gray-500">Creative Writing Student</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Journey?</h2>
        <p className="text-gray-600 text-lg mb-8">
          Explore our programs and find the perfect fit for your educational goals.
        </p>
        <Button asChild size="lg">
          <Link href="/programs">View All Programs</Link>
        </Button>
      </section>
    </div>
  )
}

export default EducationPage
