import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tighter">
          KINGSWRLD
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-primary transition-colors">
            ABOUT
          </Link>
          <Link href="#services" className="hover:text-primary transition-colors">
            SERVICES
          </Link>
          <Link href="#work" className="hover:text-primary transition-colors">
            WORK
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link href="#contact" className={cn(buttonVariants({ variant: "default" }), "bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8")}>
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  )
}
