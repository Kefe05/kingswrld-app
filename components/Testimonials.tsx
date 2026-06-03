import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/testimonial_avatar.png"
              alt="Testimonial Portrait"
              fill
              className="object-cover grayscale"
            />
          </div>
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Testimonials</h2>
            <blockquote className="text-xl md:text-2xl text-muted-foreground italic font-light leading-relaxed">
              &quot;Kingswrld transformed our online presence with a professional website that helped us attract more customers.&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src="/testimonial_avatar.png"
                  alt="John Doe"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-lg">John Doe</p>
                <p className="text-sm text-muted-foreground">Director, Orion Brand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
