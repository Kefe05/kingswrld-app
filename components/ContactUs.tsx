import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactUs() {
  return (
    <section id="contact" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <form className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input id="name" placeholder="Enter your name" className="rounded-none border-b border-0 border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="Enter your email" className="rounded-none border-b border-0 border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0" />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 w-full md:w-auto">
              SEND MESSAGE
            </Button>
          </form>

          <div className="space-y-12 md:pl-12">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-muted-foreground">hello@kingswrld.com</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-muted-foreground">New York, NY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
