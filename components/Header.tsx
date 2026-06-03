import Link from "next/link"
import { Button } from "@/components/ui/button"

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
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8">
            <Link href="#contact">CONTACT</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
