import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import AmenitiesSection from "@/components/AmenitiesSection"
import GallerySection from "@/components/GallerySection"
import PlotsSection from "@/components/PlotsSection"
import PaymentSection from "@/components/PaymentSection"
import ManagementSection from "@/components/ManagementSection"
import NewsSection from "@/components/NewsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="amenities">
          <AmenitiesSection />
        </section>
        <section id="gallery">
          <GallerySection />
        </section>
        <section id="plots">
          <PlotsSection />
        </section>
        <section id="payment-plan">
          <PaymentSection />
        </section>
        <section id="management">
          <ManagementSection />
        </section>
        <section id="news">
          <NewsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  )
}
