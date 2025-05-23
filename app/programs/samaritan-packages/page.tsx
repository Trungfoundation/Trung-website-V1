import Image from "next/image"

export default function SamaritanPackagesPage() {
  return (
    <div className="container mx-auto py-8">
      {/* Hero Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Samaritan Packages Program</h1>
        <p className="text-gray-700">Supporting our community through carefully curated packages.</p>
        <div className="relative h-64 w-full mt-4">
          <Image
            src="/images/samaritan-packages/hero.jpg"
            alt="Samaritan Packages Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Program Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Package 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative h-48 w-full mb-2">
              <Image
                src="/images/samaritan-packages/package1.jpg"
                alt="Package 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Basic Needs Package</h3>
            <p className="text-gray-700">Provides essential items for daily living.</p>
          </div>

          {/* Package 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative h-48 w-full mb-2">
              <Image
                src="/images/samaritan-packages/package2.jpg"
                alt="Package 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Educational Support Package</h3>
            <p className="text-gray-700">Helps students with school supplies and resources.</p>
          </div>

          {/* Package 3 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="relative h-48 w-full mb-2">
              <Image
                src="/images/samaritan-packages/package3.jpg"
                alt="Package 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Health & Wellness Package</h3>
            <p className="text-gray-700">Promotes well-being with health-related items.</p>
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">How You Can Help</h2>
        <p className="text-gray-700 mb-4">Support our Samaritan Packages program by donating or volunteering.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Donate Now</button>
      </section>
    </div>
  )
}
