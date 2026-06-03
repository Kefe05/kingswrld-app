import Image from "next/image"

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/why_choose_us.png"
              alt="Why Choose Us"
              fill
              className="object-cover grayscale"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Kingswrld, we believe every business has the potential to attract more customers and achieve greater growth. Our mission is to help you increase your visibility, strengthen your digital presence, and turn online opportunities into real business results.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              By combining creativity, technology, and strategic thinking, we build solutions that not only look great but also help your business grow, compete, and succeed in today&apos;s digital world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
