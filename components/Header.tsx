"use client"

import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // The hero section is roughly 90vh
      const heroHeight = window.innerHeight * 0.9
      if (window.scrollY >= heroHeight) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Check initial position
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent text-white"
      )}
    >
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
          <Link href="#contact" className={cn(
            buttonVariants({ variant: "default" }), 
            isScrolled 
              ? "bg-primary text-primary-foreground hover:bg-primary/90" 
              : "bg-white text-black hover:bg-white/90",
            "rounded-none px-8 transition-colors duration-300"
          )}>
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  )
}
