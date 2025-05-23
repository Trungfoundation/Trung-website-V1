import Image from "next/image"

export default function CommunityCentersPage() {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Community Centers Program</h1>
        <p className="text-gray-700 mb-8">
          Our community centers provide a safe and supportive environment for individuals and families to connect,
          learn, and grow. We offer a variety of programs and services to meet the diverse needs of our community.
        </p>
        <div className="relative h-64 w-full rounded-md overflow-hidden">
          <Image
            src="/images/community-center-hero.jpg"
            alt="Community Center Hero"
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>
      </section>

      {/* Program Highlights */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Program Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Program 1 */}
          <div className="bg-white rounded-md shadow-md p-4">
            <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
              <Image
                src="/images/program-1.jpg"
                alt="Program 1"
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Youth Enrichment</h3>
            <p className="text-gray-700">Empowering young people through educational and recreational activities.</p>
          </div>

          {/* Program 2 */}
          <div className="bg-white rounded-md shadow-md p-4">
            <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
              <Image
                src="/images/program-2.jpg"
                alt="Program 2"
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Senior Support</h3>
            <p className="text-gray-700">Providing resources and companionship for our senior community members.</p>
          </div>

          {/* Program 3 */}
          <div className="bg-white rounded-md shadow-md p-4">
            <div className="relative h-48 w-full rounded-md overflow-hidden mb-4">
              <Image
                src="/images/program-3.jpg"
                alt="Program 3"
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Family Resources</h3>
            <p className="text-gray-700">Connecting families with essential services and support networks.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Image 1 */}
          <div className="relative h-32 w-full rounded-md overflow-hidden">
            <Image
              src="/images/gallery-1.jpg"
              alt="Gallery Image 1"
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </div>

          {/* Image 2 */}
          <div className="relative h-32 w-full rounded-md overflow-hidden">
            <Image
              src="/images/gallery-2.jpg"
              alt="Gallery Image 2"
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </div>

          {/* Image 3 */}
          <div className="relative h-32 w-full rounded-md overflow-hidden">
            <Image
              src="/images/gallery-3.jpg"
              alt="Gallery Image 3"
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </div>

          {/* Image 4 */}
          <div className="relative h-32 w-full rounded-md overflow-hidden">
            <Image
              src="/images/gallery-4.jpg"
              alt="Gallery Image 4"
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          For more information about our community centers and programs, please contact us at:
        </p>
        <p className="text-gray-700">Email: info@example.com</p>
        <p className="text-gray-700">Phone: (555) 123-4567</p>
      </section>
    </div>
  )
}
