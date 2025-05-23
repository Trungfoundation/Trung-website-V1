import Image from "next/image"
import Link from "next/link"

const programs = [
  {
    id: 1,
    title: "Software Engineering Immersive",
    description: "Become a full-stack software engineer in 12 weeks.",
    imageUrl: "/images/sei.jpg",
    link: "/programs/sei",
  },
  {
    id: 2,
    title: "Data Science Immersive",
    description: "Launch your data science career in 12 weeks.",
    imageUrl: "/images/dsi.jpg",
    link: "/programs/dsi",
  },
  {
    id: 3,
    title: "UX Design Immersive",
    description: "Master the fundamentals of UX design in 10 weeks.",
    imageUrl: "/images/uxdi.jpg",
    link: "/programs/uxdi",
  },
  {
    id: 4,
    title: "Cybersecurity Immersive",
    description: "Protect organizations from cyber threats in 12 weeks.",
    imageUrl: "/images/cyber.jpg",
    link: "/programs/cyber",
  },
]

export default function ProgramsPage() {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="relative h-96 w-full">
          <Image
            src="/images/programs-hero.jpg"
            alt="Programs Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Explore Our Immersive Programs</h1>
            <p className="text-lg">Transform your career with our industry-leading programs.</p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Link href={program.link} key={program.id} className="block">
              <div className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={program.imageUrl || "/placeholder.svg"}
                    alt={program.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{program.title}</h2>
                  <p className="text-gray-700">{program.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
