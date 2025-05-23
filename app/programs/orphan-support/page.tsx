import Image from "next/image"

const OrphanSupportPage = () => {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative h-96 w-full">
          <Image
            src="/images/orphan-support/hero.jpg"
            alt="Orphan Support Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div>
              <h1 className="text-4xl font-bold mb-4">Empowering Orphans, Building Futures</h1>
              <p className="text-lg">Providing care, education, and hope for orphaned children.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">About Our Orphan Support Program</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our orphan support program is dedicated to providing comprehensive care and support to orphaned children in
          need. We believe that every child deserves a loving home, quality education, and the opportunity to reach
          their full potential.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Through our program, we provide orphaned children with access to safe and nurturing homes, nutritious meals,
          quality education, healthcare, and psychosocial support. We also work to empower caregivers and communities to
          create a supportive environment for orphaned children to thrive.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <Image
              src="/images/orphan-support/program1.jpg"
              alt="Program Image 1"
              width={500}
              height={300}
              className="rounded-lg object-cover h-48 w-full"
            />
            <p className="mt-2">Providing safe and nurturing homes.</p>
          </div>
          <div>
            <Image
              src="/images/orphan-support/program2.jpg"
              alt="Program Image 2"
              width={500}
              height={300}
              className="rounded-lg object-cover h-48 w-full"
            />
            <p className="mt-2">Ensuring access to quality education.</p>
          </div>
          <div>
            <Image
              src="/images/orphan-support/program3.jpg"
              alt="Program Image 3"
              width={500}
              height={300}
              className="rounded-lg object-cover h-48 w-full"
            />
            <p className="mt-2">Offering healthcare and psychosocial support.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Impact</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Since our inception, we have positively impacted the lives of thousands of orphaned children. We have seen
          children who were once vulnerable and hopeless transform into confident and thriving individuals.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">Here are some of our key achievements:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Provided safe homes for over 500 orphaned children.</li>
          <li>Enrolled over 800 children in quality education programs.</li>
          <li>Delivered healthcare services to over 1,000 children.</li>
          <li>Offered psychosocial support to over 1,200 children.</li>
        </ul>
      </section>

      {/* How to Help */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">How You Can Help</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          There are many ways you can support our orphan support program and help us make a difference in the lives of
          orphaned children.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Donate:</strong> Your generous donation can help us provide essential resources to orphaned
            children.
          </li>
          <li>
            <strong>Sponsor a Child:</strong> Sponsor a child and provide them with ongoing support for their education,
            healthcare, and well-being.
          </li>
          <li>
            <strong>Volunteer:</strong> Volunteer your time and skills to support our programs and activities.
          </li>
          <li>
            <strong>Spread the Word:</strong> Share our mission with your friends and family and help us raise awareness
            about the needs of orphaned children.
          </li>
        </ul>
      </section>
    </div>
  )
}

export default OrphanSupportPage
