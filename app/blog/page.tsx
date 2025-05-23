"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, ChevronRight, Search, Tag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  const searchParams = useSearchParams()
  const categoryFilter = searchParams?.get("category")

  // Filter blog posts by category if a category is selected
  const filteredPosts = categoryFilter
    ? blogPosts.filter((post) =>
        post.categories.some((category) => category.toLowerCase() === categoryFilter.toLowerCase()),
      )
    : blogPosts

  // Function to get appropriate image based on category
  const getImageForCategory = (post: (typeof blogPosts)[0]) => {
    const category = post.categories[0]?.toLowerCase() || ""

    if (category.includes("education")) {
      return "/images/education5.jpg"
    } else if (category.includes("healthcare")) {
      return "/images/healthcare-access-clinic.jpeg"
    } else if (category.includes("women")) {
      return "/images/women-certification.jpeg"
    } else if (category.includes("community")) {
      return "/images/community-centers.jpeg"
    } else if (category.includes("orphan") || category.includes("children")) {
      return "/images/orphan-support-meal.jpeg"
    } else if (category.includes("partnership")) {
      return "/images/foundation-meeting.jpeg"
    } else {
      return "/images/where-we-work.jpeg"
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/images/community-outreach.jpeg"
          alt="Foundation Blog"
          fill
          className="object-cover brightness-[0.7]"
          priority
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/foundation-blog.png"
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News & Stories</h1>
          <p className="text-xl text-white max-w-2xl">
            Updates, impact stories, and insights from our work around the world
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6">
                  {categoryFilter ? `${categoryFilter} Articles` : "Latest Articles"}
                </h2>

                {/* Featured Article */}
                {!categoryFilter && (
                  <Card className="mb-12 overflow-hidden border-t-4 border-t-primary/70 transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-[400px] bg-gray-100">
                      <Image
                        src={getImageForCategory(blogPosts[0]) || "/placeholder.svg"}
                        alt={blogPosts[0].title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=400&width=800&query=Education+Center"
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground shadow-md">Featured</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} className="text-primary/70" />
                          <span>{blogPosts[0].date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={14} className="text-primary/70" />
                          <span>By {blogPosts[0].author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Tag size={14} className="text-primary/70" />
                          <span>{blogPosts[0].categories[0]}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-primary/90">{blogPosts[0].title}</h3>
                      <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                      <Link
                        href={`/blog/${blogPosts[0].slug}`}
                        className="text-primary flex items-center gap-1 hover:underline font-medium"
                      >
                        Read Full Article <ArrowRight size={16} />
                      </Link>
                    </CardContent>
                  </Card>
                )}

                {/* Article Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.slice(categoryFilter ? 0 : 1, 7).map((post) => (
                    <BlogCard
                      key={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      author={post.author}
                      category={post.categories[0]}
                      image={getImageForCategory(post)}
                      slug={post.slug}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination className="mt-12">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input placeholder="Search articles..." className="pl-10" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  <Link
                    href="/blog?category=Education"
                    className={`flex items-center justify-between p-3 rounded-md hover:bg-muted ${
                      searchParams?.get("category") === "Education" ? "bg-muted" : ""
                    }`}
                  >
                    <span>Education</span>
                    <Badge variant="outline">12</Badge>
                  </Link>
                  <Link
                    href="/blog?category=Healthcare"
                    className={`flex items-center justify-between p-3 rounded-md hover:bg-muted ${
                      searchParams?.get("category") === "Healthcare" ? "bg-muted" : ""
                    }`}
                  >
                    <span>Healthcare</span>
                    <Badge variant="outline">8</Badge>
                  </Link>
                  <Link
                    href="/blog?category=Women%20Empowerment"
                    className={`flex items-center justify-between p-3 rounded-md hover:bg-muted ${
                      searchParams?.get("category") === "Women Empowerment" ? "bg-muted" : ""
                    }`}
                  >
                    <span>Women Empowerment</span>
                    <Badge variant="outline">10</Badge>
                  </Link>
                  <Link
                    href="/blog?category=Community%20Development"
                    className={`flex items-center justify-between p-3 rounded-md hover:bg-muted ${
                      searchParams?.get("category") === "Community Development" ? "bg-muted" : ""
                    }`}
                  >
                    <span>Community Development</span>
                    <Badge variant="outline">15</Badge>
                  </Link>
                  <Link
                    href="/blog?category=Reports"
                    className={`flex items-center justify-between p-3 rounded-md hover:bg-muted ${
                      searchParams?.get("category") === "Reports" ? "bg-muted" : ""
                    }`}
                  >
                    <span>Reports & Updates</span>
                    <Badge variant="outline">6</Badge>
                  </Link>
                  <Link
                    href="/blog?category=Partnerships"
                    className={`flex items-center justify-between p-3 rounded-md hover:bg-muted ${
                      searchParams?.get("category") === "Partnerships" ? "bg-muted" : ""
                    }`}
                  >
                    <span>Partnerships</span>
                    <Badge variant="outline">4</Badge>
                  </Link>
                  {searchParams?.get("category") && (
                    <Link href="/blog" className="flex items-center justify-center p-3 text-primary hover:underline">
                      Clear Filter
                    </Link>
                  )}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0 bg-gray-100">
                      <Image
                        src="/images/community-outreach.jpeg"
                        alt="Volunteer Spotlight"
                        fill
                        className="object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=64&width=64&query=Volunteer"
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2 mb-1">
                        <Link href="#" className="hover:text-primary">
                          Volunteer Spotlight: Meet Our Community Heroes
                        </Link>
                      </h4>
                      <div className="text-sm text-muted-foreground">June 5, 2025</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0 bg-gray-100">
                      <Image
                        src="/images/healthcare-access-clinic.jpeg"
                        alt="Healthcare Partnership"
                        fill
                        className="object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=64&width=64&query=Healthcare"
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2 mb-1">
                        <Link href="#" className="hover:text-primary">
                          New Partnership Announced with Global Health Initiative
                        </Link>
                      </h4>
                      <div className="text-sm text-muted-foreground">May 22, 2025</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0 bg-gray-100">
                      <Image
                        src="/images/education5.jpg"
                        alt="Education Programs"
                        fill
                        className="object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=64&width=64&query=Education"
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2 mb-1">
                        <Link href="#" className="hover:text-primary">
                          5 Ways Our Education Programs Are Making a Difference
                        </Link>
                      </h4>
                      <div className="text-sm text-muted-foreground">May 10, 2025</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="relative h-16 w-16 flex-shrink-0 bg-gray-100">
                      <Image
                        src="/images/foundation-meeting.jpeg"
                        alt="Fundraising Gala"
                        fill
                        className="object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=64&width=64&query=Fundraising"
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2 mb-1">
                        <Link href="#" className="hover:text-primary">
                          Fundraising Gala Raises Record Amount for Healthcare Programs
                        </Link>
                      </h4>
                      <div className="text-sm text-muted-foreground">April 28, 2025</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-muted-foreground mb-4">
                  Get the latest updates, stories, and news delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <Input placeholder="Your email address" type="email" required />
                  <Button className="w-full">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Share Your Story?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            If you've been impacted by our work or have a story to share, we'd love to hear from you.
          </p>
          <Button variant="secondary" size="lg">
            Contact Our Media Team
          </Button>
        </div>
      </section>
    </main>
  )
}

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
  slug: string
}

function BlogCard({ title, excerpt, date, author, category, image, slug }: BlogCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg border-t-4 border-t-primary/70">
      <div className="relative h-48 bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = `/placeholder.svg?height=192&width=384&query=${encodeURIComponent(category)}`
          }}
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/80 text-foreground backdrop-blur-sm shadow-sm">
            {category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar size={14} className="text-primary/70" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-primary/90">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{excerpt}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="text-sm text-muted-foreground">By {author}</div>
          <Link href={`/blog/${slug}`} className="text-primary flex items-center gap-1 hover:underline font-medium">
            Read More <ChevronRight size={16} />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
