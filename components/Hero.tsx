"use client"

import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter leading-none mb-8">
          KINGSWRLD
        </h1>
        <Link href="#about" className={cn(buttonVariants({ variant: "default" }), "bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 text-lg")}>
          See More
        </Link>
      </motion.div>
    </section>
  )
}
