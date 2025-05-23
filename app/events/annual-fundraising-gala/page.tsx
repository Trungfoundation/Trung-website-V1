import Image from "next/image"
import styles from "./page.module.css"

export default function AnnualFundraisingGala() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Annual Fundraising Gala</h1>
        <p>Join us for an evening of celebration and support!</p>
        <Image
          src="/images/gala/hero.jpg"
          alt="Gala attendees"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
      </section>

      <section className={styles.eventDetails}>
        <h2>Event Details</h2>
        <p>
          <strong>Date:</strong> November 18, 2024
        </p>
        <p>
          <strong>Time:</strong> 7:00 PM - 11:00 PM
        </p>
        <p>
          <strong>Location:</strong> The Grand Ballroom
        </p>
        <p>
          <strong>Attire:</strong> Black Tie Optional
        </p>
        <p>
          We invite you to our annual fundraising gala, a night dedicated to supporting our mission. Enjoy an evening
          filled with dinner, dancing, and inspiring stories.
        </p>
      </section>

      <section className={styles.gallery}>
        <h2>Gala Gallery</h2>
        <div className={styles.galleryImages}>
          <Image
            src="/images/gala/gallery1.jpg"
            alt="Gala attendees"
            width={400}
            height={300}
            className={styles.galleryImage}
          />
          <Image
            src="/images/gala/gallery2.jpg"
            alt="Gala attendees"
            width={400}
            height={300}
            className={styles.galleryImage}
          />
          <Image
            src="/images/gala/gallery3.jpg"
            alt="Gala attendees"
            width={400}
            height={300}
            className={styles.galleryImage}
          />
        </div>
      </section>

      <section className={styles.sponsors}>
        <h2>Our Sponsors</h2>
        <p>Thank you to our generous sponsors for their support!</p>
        {/* Add sponsor logos here */}
      </section>

      <section className={styles.tickets}>
        <h2>Tickets</h2>
        <p>Tickets are available for purchase online. Your support makes a difference!</p>
        <a href="#" className={styles.button}>
          Purchase Tickets
        </a>
      </section>
    </div>
  )
}
