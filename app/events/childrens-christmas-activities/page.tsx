import Image from "next/image"
import Link from "next/link"

export default function ChildrensChristmasActivitiesPage() {
  return (
    <div className="container mx-auto py-8">
      {/* Hero Section */}
      <section className="mb-8">
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          <Image
            src="/images/christmas-activities/hero.jpg"
            alt="Children's Christmas Activities"
            layout="fill"
            objectFit="cover"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h1 className="text-3xl font-bold mb-2">Children's Christmas Activities</h1>
            <p className="text-lg">Fun and festive activities for kids this Christmas season!</p>
          </div>
        </div>
      </section>

      {/* Activity List */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Activity 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/christmas-activities/activity1.jpg"
                alt="Christmas Crafts"
                layout="fill"
                objectFit="cover"
                quality={75}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Christmas Crafts</h3>
              <p className="text-gray-700">Get creative with festive Christmas crafts for kids of all ages.</p>
              <Link href="/events/childrens-christmas-activities/crafts">
                <a className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </a>
              </Link>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/christmas-activities/activity2.jpg"
                alt="Santa's Grotto"
                layout="fill"
                objectFit="cover"
                quality={75}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Santa's Grotto</h3>
              <p className="text-gray-700">Visit Santa in his magical grotto and receive a special gift.</p>
              <Link href="/events/childrens-christmas-activities/grotto">
                <a className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </a>
              </Link>
            </div>
          </div>

          {/* Activity 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/images/christmas-activities/activity3.jpg"
                alt="Christmas Caroling"
                layout="fill"
                objectFit="cover"
                quality={75}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Christmas Caroling</h3>
              <p className="text-gray-700">Sing along to your favorite Christmas carols with friends and family.</p>
              <Link href="/events/childrens-christmas-activities/caroling">
                <a className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Image Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative h-32 w-full rounded-lg overflow-hidden">
            <Image
              src="/images/christmas-activities/gallery1.jpg"
              alt="Gallery Image 1"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
          </div>
          <div className="relative h-32 w-full rounded-lg overflow-hidden">
            <Image
              src="/images/christmas-activities/gallery2.jpg"
              alt="Gallery Image 2"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
          </div>
          <div className="relative h-32 w-full rounded-lg overflow-hidden">
            <Image
              src="/images/christmas-activities/gallery3.jpg"
              alt="Gallery Image 3"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
          </div>
          <div className="relative h-32 w-full rounded-lg overflow-hidden">
            <Image
              src="/images/christmas-activities/gallery4.jpg"
              alt="Gallery Image 4"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
          </div>
          <div className="relative h-32 w-full rounded-lg overflow-hidden">
            <Image
              src="/images/christmas-activities/gallery5.jpg"
              alt="Gallery Image 5"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
          </div>
          <div className="relative h-32 w-full rounded-lg overflow-hidden">
            <Image
              src="/images/christmas-activities/gallery6.jpg"
              alt="Gallery Image 6"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
