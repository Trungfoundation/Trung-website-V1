import Image from "next/image"

const FoundationGeneralMeetingPage = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Hero Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Foundation General Meeting</h1>
        <p className="text-gray-700 mb-4">
          Join us for the Foundation General Meeting to discuss important updates and future plans.
        </p>
        <div className="relative h-64 w-full rounded-md overflow-hidden">
          <Image
            src="/images/meeting_hero.jpg"
            alt="Meeting Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </section>

      {/* Meeting Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Meeting Details</h2>
        <p className="text-gray-700">
          <strong>Date:</strong> October 26, 2023
        </p>
        <p className="text-gray-700">
          <strong>Time:</strong> 7:00 PM - 9:00 PM
        </p>
        <p className="text-gray-700">
          <strong>Location:</strong> Online via Zoom
        </p>
        <p className="text-gray-700">
          <strong>Agenda:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Welcome and Introductions</li>
          <li>Review of Past Initiatives</li>
          <li>Discussion of Future Projects</li>
          <li>Open Forum for Questions</li>
        </ul>
      </section>

      {/* Speakers Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="relative h-48 w-full rounded-md overflow-hidden mb-2">
              <Image
                src="/images/speaker1.jpg"
                alt="Speaker 1"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-700">CEO of Example Corp</p>
          </div>
          <div>
            <div className="relative h-48 w-full rounded-md overflow-hidden mb-2">
              <Image
                src="/images/speaker2.jpg"
                alt="Speaker 2"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-700">Founder of Innovation Inc</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-48 w-full rounded-md overflow-hidden">
            <Image src="/images/gallery1.jpg" alt="Gallery 1" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <div className="relative h-48 w-full rounded-md overflow-hidden">
            <Image src="/images/gallery2.jpg" alt="Gallery 2" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
          <div className="relative h-48 w-full rounded-md overflow-hidden">
            <Image src="/images/gallery3.jpg" alt="Gallery 3" layout="fill" objectFit="cover" className="rounded-md" />
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Registration</h2>
        <p className="text-gray-700 mb-4">Register for the Foundation General Meeting to secure your spot.</p>
        <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register Now
        </a>
      </section>
    </div>
  )
}

export default FoundationGeneralMeetingPage
