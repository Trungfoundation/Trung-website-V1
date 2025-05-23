import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
import { Shell } from "@/components/Shell"

const images = ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]

const HealthcarePage = () => {
  return (
    <Shell>
      <section className="relative pb-16 pt-12 md:pb-24 md:pt-16 lg:pb-32 lg:pt-20">
        <div className="container relative grid items-center gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Healthcare Programs</h1>
            <p className="leading-7 text-muted-foreground mt-4">
              Explore our comprehensive healthcare programs designed to improve your well-being and provide access to
              quality medical services.
            </p>
            <Button asChild className="mt-8">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
          <div className="relative order-1 lg:order-2">
            <Image
              src="/healthcare-hero.svg"
              width={500}
              height={300}
              alt="Healthcare Hero"
              className="mx-auto"
              priority
            />
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">Our Programs</h2>
          <p className="leading-7 text-muted-foreground mt-4">
            We offer a variety of healthcare programs tailored to meet your specific needs.
          </p>

          <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Preventive Care</CardTitle>
                <CardDescription>Focuses on preventing illness and promoting overall health.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Regular check-ups, vaccinations, and screenings to detect potential health issues early.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Chronic Disease Management</CardTitle>
                <CardDescription>
                  Helps manage and improve the quality of life for individuals with chronic conditions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Personalized care plans, medication management, and lifestyle coaching.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mental Health Support</CardTitle>
                <CardDescription>Provides access to mental health professionals and resources.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Therapy, counseling, and support groups to address mental health concerns.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">Image Gallery</h2>
          <p className="leading-7 text-muted-foreground mt-4">
            A collection of images showcasing our healthcare facilities and services.
          </p>

          <Carousel className="w-full max-w-4xl mx-auto mt-8">
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Healthcare Image ${index + 1}`}
                      width={500}
                      height={300}
                      className="object-cover rounded-md"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </Shell>
  )
}

export default HealthcarePage
