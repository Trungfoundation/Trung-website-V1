import Image from "next/image"
import Link from "next/link"

export default function ResettlementPage() {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative h-96 w-full">
          <Image
            src="/images/resettlement/hero.jpg"
            alt="Resettlement Program Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Resettlement Program</h1>
            <p className="text-lg">Helping refugees and immigrants build new lives in our community.</p>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">About the Program</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 leading-relaxed">
              Our Resettlement Program provides comprehensive support to refugees and immigrants as they navigate the
              challenges of starting over in a new country. We offer assistance with housing, employment, language
              skills, cultural orientation, and legal services.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We believe that everyone deserves a chance to build a safe and fulfilling life. Through our program, we
              empower individuals and families to become self-sufficient and active members of our community.
            </p>
          </div>
          <div className="relative h-64">
            <Image
              src="/images/resettlement/about.jpg"
              alt="About Resettlement"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Housing Assistance */}
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Housing Assistance</h3>
            <p className="text-gray-700 leading-relaxed">
              We help individuals and families find safe and affordable housing options.
            </p>
          </div>

          {/* Employment Services */}
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Employment Services</h3>
            <p className="text-gray-700 leading-relaxed">
              We provide job training, resume assistance, and job placement services.
            </p>
          </div>

          {/* Language Training */}
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Language Training</h3>
            <p className="text-gray-700 leading-relaxed">
              We offer English classes and language support to help individuals communicate effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Story 1 */}
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">A New Beginning</h3>
            <p className="text-gray-700 leading-relaxed">
              "Thanks to the Resettlement Program, I was able to find a job and a safe place to live. I am now building
              a new life for myself and my family." - Fatima
            </p>
          </div>

          {/* Story 2 */}
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Empowered to Succeed</h3>
            <p className="text-gray-700 leading-relaxed">
              "The program helped me learn English and find a job that I love. I am now confident and independent." -
              David
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Image Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative h-48">
            <Image
              src="/images/resettlement/gallery1.jpg"
              alt="Resettlement Gallery 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-48">
            <Image
              src="/images/resettlement/gallery2.jpg"
              alt="Resettlement Gallery 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-48">
            <Image
              src="/images/resettlement/gallery3.jpg"
              alt="Resettlement Gallery 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-48">
            <Image
              src="/images/resettlement/gallery4.jpg"
              alt="Resettlement Gallery 4"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Get Involved</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Support our Resettlement Program and help us make a difference in the lives of refugees and immigrants.
        </p>
        <Link href="/donate">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Donate Now</a>
        </Link>
      </section>
    </div>
  )
}
