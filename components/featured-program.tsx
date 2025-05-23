import type React from "react"
import Image from "next/image"
import Link from "next/link"

interface FeaturedProgramProps {
  title: string
  description: string
  imageUrl: string
  link: string
}

const FeaturedProgram: React.FC<FeaturedProgramProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link href={link} aria-label={`Learn more about ${title}`}>
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">
          <Link href={link} className="hover:text-blue-500" aria-label={`Learn more about ${title}`}>
            {title}
          </Link>
        </h3>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4">
          <Link
            href={link}
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            aria-label={`Learn more about ${title}`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProgram
