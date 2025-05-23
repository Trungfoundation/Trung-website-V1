import Image from "next/image"
import Link from "next/link"

export default function TransparencyPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Transparency Report</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="mb-4">
          We are committed to transparency in all aspects of our operations. This report provides insights into our key
          metrics, financials, and governance.
        </p>
        <Image
          src="/images/transparency/commitment.jpg"
          alt="Commitment Image"
          width={800}
          height={400}
          className="rounded-lg shadow-md"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Metrics</h2>
        <p className="mb-4">Here's a snapshot of our key performance indicators:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">User Growth</h3>
            <p>Monthly Active Users: 10,000</p>
            <Image
              src="/images/transparency/user_growth.png"
              alt="User Growth Chart"
              width={400}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Revenue</h3>
            <p>Monthly Revenue: $50,000</p>
            <Image
              src="/images/transparency/revenue.png"
              alt="Revenue Chart"
              width={400}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Financials</h2>
        <p className="mb-4">A summary of our financial performance:</p>
        <Image
          src="/images/transparency/financial_report.png"
          alt="Financial Report"
          width={800}
          height={400}
          className="rounded-lg shadow-md"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Governance</h2>
        <p className="mb-4">Information about our governance structure and policies:</p>
        <Link href="/governance">
          <a className="text-blue-500 hover:underline">Learn More</a>
        </Link>
        <Image
          src="/images/transparency/governance.jpg"
          alt="Governance Image"
          width={800}
          height={400}
          className="rounded-lg shadow-md"
        />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Hero Section Example</h2>
        <div className="relative w-full h-64">
          <Image
            src="/images/hero.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  )
}
