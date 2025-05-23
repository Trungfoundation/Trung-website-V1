import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Company A",
    image: "/placeholder.jpg",
    text: "This program has been a game-changer for our team. We have seen a significant improvement in productivity and collaboration.",
  },
  {
    name: "Jane Smith",
    title: "Marketing Manager, Company B",
    image: "/placeholder.jpg",
    text: "I highly recommend this program to anyone looking to enhance their skills and advance their career.",
  },
]

const programs = [
  {
    title: "Leadership Development Program",
    description: "Develop your leadership skills and become a more effective leader.",
    image: "/placeholder.jpg",
    link: "/leadership-program",
  },
  {
    title: "Project Management Certification",
    description: "Get certified in project management and learn how to manage projects effectively.",
    image: "/placeholder.jpg",
    link: "/project-management",
  },
]

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Learning Platform</h1>
        <p className="text-gray-600 mb-8">Unlock your potential with our comprehensive learning programs.</p>
        <Image
          src="/hero-image.jpg"
          alt="Hero Image"
          width={1200}
          height={600}
          className="mx-auto rounded-lg shadow-md mb-8"
        />
        <Button asChild>
          <Link href="/courses">Explore Courses</Link>
        </Button>
      </section>

      {/* Programs Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <Image
                src={program.image || "/placeholder.svg"}
                alt={program.title}
                width={600}
                height={400}
                className="mx-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <Button asChild>
                <Link href={program.link}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8">Join our community of learners and start your journey today.</p>
        <Button asChild>
          <Link href="/register">Sign Up Now</Link>
        </Button>
      </section>
    </div>
  )
}
