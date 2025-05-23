import Image from "next/image"

const GirlEmpowermentPage = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative h-96 w-full">
          <Image
            src="/images/girl-empowerment/hero.jpg"
            alt="Girl Empowerment Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold rounded-lg">
            Girl Empowerment Program
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">About the Program</h2>
        <p className="text-gray-700 leading-relaxed">
          Our Girl Empowerment Program is dedicated to providing young girls with the resources, skills, and support
          they need to thrive. We focus on education, mentorship, and leadership development to help girls reach their
          full potential.
        </p>
      </section>

      {/* Key Initiatives */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Key Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Initiative 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Education Support</h3>
            <p className="text-gray-700 leading-relaxed">
              We provide scholarships, tutoring, and educational resources to ensure girls have access to quality
              education.
            </p>
            <Image
              src="/images/girl-empowerment/education.jpg"
              alt="Education Support"
              width={500}
              height={300}
              className="rounded-md mt-4"
              objectFit="cover"
            />
          </div>

          {/* Initiative 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Mentorship Program</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mentorship program connects girls with strong female role models who provide guidance and support.
            </p>
            <Image
              src="/images/girl-empowerment/mentorship.jpg"
              alt="Mentorship Program"
              width={500}
              height={300}
              className="rounded-md mt-4"
              objectFit="cover"
            />
          </div>

          {/* Initiative 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Leadership Training</h3>
            <p className="text-gray-700 leading-relaxed">
              We offer leadership training workshops and seminars to help girls develop their leadership skills.
            </p>
            <Image
              src="/images/girl-empowerment/leadership.jpg"
              alt="Leadership Training"
              width={500}
              height={300}
              className="rounded-md mt-4"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gallery Image 1 */}
          <div className="relative h-64 w-full">
            <Image
              src="/images/girl-empowerment/gallery1.jpg"
              alt="Gallery Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Gallery Image 2 */}
          <div className="relative h-64 w-full">
            <Image
              src="/images/girl-empowerment/gallery2.jpg"
              alt="Gallery Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Gallery Image 3 */}
          <div className="relative h-64 w-full">
            <Image
              src="/images/girl-empowerment/gallery3.jpg"
              alt="Gallery Image 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Support our Girl Empowerment Program and help us make a difference in the lives of young girls.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Donate Now</button>
      </section>
    </div>
  )
}

export default GirlEmpowermentPage
