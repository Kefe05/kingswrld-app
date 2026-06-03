import { LayoutTemplate } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card border border-border p-8 hover:shadow-lg transition-shadow duration-300 group">
            <div className="flex justify-between items-start mb-16">
              <h3 className="text-xl font-bold max-w-[150px]">Website Design & Development</h3>
              <LayoutTemplate className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional, responsive websites designed to showcase your brand, engage visitors, and convert leads into customers.
            </p>
          </div>
          {/* Add more service cards here if needed */}
        </div>
      </div>
    </section>
  )
}
