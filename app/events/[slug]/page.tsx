import { notFound } from "next/navigation"
import { allEvents } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { enUS } from "date-fns/locale"
import { MDX } from "@/components/mdx"
import Container from "@/components/container"
import Image from "next/image"
import { Gallery } from "@/components/gallery"

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allEvents.map((event) => ({ slug: event.slug }))
}

async function getEventFromParams(slug: string) {
  const event = allEvents.find((event) => event.slug === slug)

  if (!event) {
    notFound()
  }

  return event
}

export default async function EventPage({ params }: Props) {
  const event = await getEventFromParams(params.slug)
  const formattedDate = format(parseISO(event.date), "PPPP", { locale: enUS })

  return (
    <Container className="!pt-0">
      <article className="mx-auto max-w-prose">
        <div className="relative my-8 aspect-video">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            sizes="100vw"
            className="rounded-xl object-cover"
          />
        </div>
        <h1 className="mb-4 text-3xl font-bold">{event.title}</h1>
        <p className="mb-8 text-sm">{formattedDate}</p>
        <MDX code={event.body.code} />

        {event.gallery && event.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold">Gallery</h2>
            <Gallery images={event.gallery} />
          </div>
        )}
      </article>
    </Container>
  )
}
