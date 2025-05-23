import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const HealthcareAccessPage = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Unlock Access to Quality Healthcare</h1>
            <p className="text-gray-600 mb-6">
              Our Healthcare Access Program is designed to connect individuals and families with the medical care they
              need, regardless of their financial situation.
            </p>
            <Button asChild>
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
          <Image
            src="/images/healthcare-hero.jpg"
            alt="Healthcare Access"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Key Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Affordable Care</CardTitle>
              <CardDescription>Access to low-cost or free medical services.</CardDescription>
            </CardHeader>
            <CardContent>We work with a network of providers to offer affordable healthcare options.</CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personalized Support</CardTitle>
              <CardDescription>Dedicated support to navigate the healthcare system.</CardDescription>
            </CardHeader>
            <CardContent>
              Our team provides personalized guidance and assistance to help you find the right care.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Resources</CardTitle>
              <CardDescription>Connections to local healthcare resources and programs.</CardDescription>
            </CardHeader>
            <CardContent>
              We connect you with valuable community resources to support your healthcare needs.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/healthcare-success-1.jpg"
              alt="Success Story 1"
              width={500}
              height={300}
              className="rounded-lg shadow-md mb-4"
            />
            <p className="text-gray-700">
              "Thanks to the Healthcare Access Program, I was able to get the medical care I needed without breaking the
              bank. I am so grateful for their support!" - Jane Doe
            </p>
          </div>
          <div>
            <Image
              src="/images/healthcare-success-2.jpg"
              alt="Success Story 2"
              width={500}
              height={300}
              className="rounded-lg shadow-md mb-4"
            />
            <p className="text-gray-700">
              "The program helped me navigate the complex healthcare system and find the right specialists for my
              condition. I highly recommend it!" - John Smith
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Eligibility</h2>
        <p className="text-gray-600 mb-4">
          To be eligible for the Healthcare Access Program, you must meet certain criteria, including:
        </p>
        <ul className="list-disc list-inside">
          <li>Resident of [Your Region]</li>
          <li>Low-income or uninsured</li>
          <li>Need for medical care</li>
        </ul>
        <p className="text-gray-600 mt-4">
          Please contact us to learn more about eligibility requirements and how to apply.
        </p>
      </section>

      {/* How to Apply Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">How to Apply</h2>
        <p className="text-gray-600 mb-4">
          Applying for the Healthcare Access Program is easy. Simply follow these steps:
        </p>
        <ol className="list-decimal list-inside">
          <li>Fill out the online application form.</li>
          <li>Submit required documentation (proof of residency, income verification, etc.).</li>
          <li>Attend an interview with our program staff.</li>
        </ol>
        <Button asChild>
          <Link href="/apply">Apply Now</Link>
        </Button>
      </section>
    </div>
  )
}

export default HealthcareAccessPage
