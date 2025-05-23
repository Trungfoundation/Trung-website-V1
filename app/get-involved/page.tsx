import Image from "next/image"
import Link from "next/link"

export default function GetInvolvedPage() {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative h-96 w-full">
          <Image
            src="/images/get-involved-hero.jpg"
            alt="People volunteering"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold mb-4">Get Involved</h1>
            <p className="text-lg">Join us in making a difference in our community.</p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Volunteer Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Opportunity 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/volunteer-opportunity-1.jpg"
                alt="Food bank volunteering"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Food Bank Assistant</h3>
              <p className="text-gray-700 mb-4">Help sort and distribute food to those in need.</p>
              <Link href="/volunteer/food-bank" className="text-blue-500 hover:underline">
                Learn More
              </Link>
            </div>
          </div>

          {/* Opportunity 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/volunteer-opportunity-2.jpg"
                alt="Community cleanup"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Community Cleanup Crew</h3>
              <p className="text-gray-700 mb-4">Join us in cleaning up our local parks and streets.</p>
              <Link href="/volunteer/cleanup" className="text-blue-500 hover:underline">
                Learn More
              </Link>
            </div>
          </div>

          {/* Opportunity 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/volunteer-opportunity-3.jpg"
                alt="Tutoring students"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Student Tutor</h3>
              <p className="text-gray-700 mb-4">Provide academic support to students in need.</p>
              <Link href="/volunteer/tutoring" className="text-blue-500 hover:underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Make a Donation</h2>
        <p className="text-lg mb-8">Your generous donation can help us continue our important work.</p>
        <Link href="/donate" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Donate Now
        </Link>
      </section>
    </div>
  )
}
