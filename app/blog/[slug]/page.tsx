import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer/hooks"
import Image from "next/image"
import type { Metadata } from "next"

import { Mdx } from "@/components/mdx-components"
import { formatDate } from "@/lib/utils"
import { siteConfig } from "@/config/site"

interface Props {
  params: {
    slug: string
  }
}

async function getPostFromParams(params: Props["params"]) {
  const slug = params.slug
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return post
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
      type: "article",
    },
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPostFromParams(params)

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="mx-auto max-w-3xl py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {formatDate(post.date)} • {post.readingTime.text}
          </p>
          {post.tags && (
            <div className="flex items-center space-x-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {post.image && (
          <div className="relative mt-4 h-60 w-full">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="rounded-md object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </div>
      <div className="prose dark:prose-invert">
        <MDXContent components={Mdx} />
      </div>
    </article>
  )
}
