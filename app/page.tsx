import Header from "@/components/Header"
import Hero from "@/components/Hero"
import WhyChooseUs from "@/components/WhyChooseUs"
import Services from "@/components/Services"
import OurWorks from "@/components/OurWorks"
import Testimonials from "@/components/Testimonials"
import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <OurWorks />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  )
}
