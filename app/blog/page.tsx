import Image from "next/image"

export default function Blog() {
  return (
    <main className="container mx-auto py-8">
      <section className="hero mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-gray-700 mb-8">Sharing my thoughts, experiences, and insights on various topics.</p>
        <Image
          src="/images/hero-image.jpg"
          alt="Hero Image"
          width={1200}
          height={600}
          className="rounded-lg shadow-md"
        />
      </section>

      <section className="blog-posts">
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>

        <article className="mb-8">
          <h3 className="text-xl font-medium mb-2">Post Title 1</h3>
          <p className="text-gray-600 mb-4">
            A brief summary of the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Image
            src="/images/post-image-1.jpg"
            alt="Post Image 1"
            width={800}
            height={400}
            className="rounded-md shadow-sm mb-4"
          />
          <a href="#" className="text-blue-500 hover:underline">
            Read More
          </a>
        </article>

        <article className="mb-8">
          <h3 className="text-xl font-medium mb-2">Post Title 2</h3>
          <p className="text-gray-600 mb-4">
            A brief summary of the second blog post. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Image
            src="/images/post-image-2.jpg"
            alt="Post Image 2"
            width={800}
            height={400}
            className="rounded-md shadow-sm mb-4"
          />
          <a href="#" className="text-blue-500 hover:underline">
            Read More
          </a>
        </article>
      </section>
    </main>
  )
}
