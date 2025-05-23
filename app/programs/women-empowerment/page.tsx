import Image from "next/image"

const WomenEmpowermentPage = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative h-96 w-full">
          <Image
            src="/images/women-empowerment/hero.jpg"
            alt="Women Empowerment Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Empowering Women, Transforming Communities</h1>
              <p className="text-lg">
                Join us in our mission to provide women with the resources and opportunities they need to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Our Women Empowerment Program</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 leading-relaxed">
              Our Women Empowerment Program is dedicated to fostering the growth and development of women in underserved
              communities. We believe that by investing in women, we can create a ripple effect that benefits entire
              families and communities.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We offer a range of services, including educational workshops, skills training, microfinance
              opportunities, and mentorship programs. Our goal is to equip women with the tools they need to achieve
              economic independence, build self-confidence, and become leaders in their communities.
            </p>
          </div>
          <div className="relative h-80">
            <Image
              src="/images/women-empowerment/about.jpg"
              alt="About Women Empowerment"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Program Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Highlight 1 */}
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Skills Training</h3>
            <p className="text-gray-700 leading-relaxed">
              We provide hands-on training in various skills, such as sewing, cooking, and computer literacy, to help
              women start their own businesses or find employment.
            </p>
          </div>

          {/* Highlight 2 */}
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Microfinance</h3>
            <p className="text-gray-700 leading-relaxed">
              Our microfinance program offers small loans to women entrepreneurs, enabling them to launch or expand
              their businesses and improve their livelihoods.
            </p>
          </div>

          {/* Highlight 3 */}
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
            <p className="text-gray-700 leading-relaxed">
              We connect women with experienced mentors who provide guidance, support, and encouragement as they
              navigate their personal and professional journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Success Story 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="relative h-48 mb-4">
              <Image
                src="/images/women-empowerment/success1.jpg"
                alt="Success Story 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Aisha's Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Aisha used to struggle to provide for her family. After participating in our skills training program and
              receiving a microloan, she started a successful tailoring business and is now able to support her
              children's education.
            </p>
          </div>

          {/* Success Story 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="relative h-48 mb-4">
              <Image
                src="/images/women-empowerment/success2.jpg"
                alt="Success Story 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fatima's Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Fatima always dreamed of becoming a teacher. Through our mentorship program, she received the guidance and
              support she needed to pursue her education and is now inspiring young girls in her community.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Get Involved</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Support our Women Empowerment Program and help us create a brighter future for women and communities.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Donate Now</button>
      </section>
    </div>
  )
}

export default WomenEmpowermentPage
