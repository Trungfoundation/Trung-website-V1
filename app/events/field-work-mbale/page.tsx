import Image from "next/image"

const FieldWorkMbalePage = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Hero Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Field Work in Mbale</h1>
        <p className="text-gray-700">
          Join us for an unforgettable field work experience in Mbale, Uganda. Explore the local culture, contribute to
          community development, and make a lasting impact.
        </p>
        <div className="relative h-64 w-full mt-4">
          <Image
            src="/images/mbale/mbale1.jpg"
            alt="Mbale Field Work"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">About the Program</h2>
        <p className="text-gray-700">
          Our field work program in Mbale offers a unique opportunity to engage with the local community and contribute
          to sustainable development projects. Participants will work alongside local experts and community members to
          address pressing challenges and create positive change.
        </p>
      </section>

      {/* Field Work Activities Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Field Work Activities</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Community health outreach</li>
          <li>Sustainable agriculture initiatives</li>
          <li>Education and literacy programs</li>
          <li>Infrastructure development</li>
        </ul>
      </section>

      {/* Image Gallery Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Image Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative h-48 w-full">
            <Image
              src="/images/mbale/mbale2.jpg"
              alt="Mbale Field Work"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-48 w-full">
            <Image
              src="/images/mbale/mbale3.jpg"
              alt="Mbale Field Work"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-48 w-full">
            <Image
              src="/images/mbale/mbale4.jpg"
              alt="Mbale Field Work"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-48 w-full">
            <Image
              src="/images/mbale/mbale5.jpg"
              alt="Mbale Field Work"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-48 w-full">
            <Image
              src="/images/mbale/mbale6.jpg"
              alt="Mbale Field Work"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-48 w-full">
            <Image
              src="/images/mbale/mbale7.jpg"
              alt="Mbale Field Work"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          For more information about our field work program in Mbale, please contact us at info@example.com.
        </p>
      </section>
    </div>
  )
}

export default FieldWorkMbalePage
