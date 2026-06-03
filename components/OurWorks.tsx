import Image from "next/image"
import Link from "next/link"

const works = [
  {
    id: 1,
    title: "EXAMPLE 1",
    image: "/our_works_1.png",
  },
  {
    id: 2,
    title: "EXAMPLE 2",
    image: "/our_works_2.png",
  },
  {
    id: 3,
    title: "EXAMPLE 3",
    image: "/our_works_3.png",
  },
]

export default function OurWorks() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Our Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work) => (
            <Link href="#" key={work.id} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-secondary/50">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-bold tracking-widest text-primary hover:underline">{work.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
