import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary/30 py-16">
      <div className="container mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-muted-foreground">
          KINGSWRLD
        </h2>
        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground font-medium">
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms of Services</Link>
          <Link href="#" className="hover:text-primary transition-colors">Careers</Link>
        </div>
        <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
          © 2026 KINGSWRLD. Creating Digital Experiences That Drive Business Growth.
        </p>
      </div>
    </footer>
  )
}
