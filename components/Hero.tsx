"use client"

import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowUpRight, ChevronsRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop')",
        }}
      ></div>

      {/* Gradients */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
      <div className="absolute inset-y-0 right-0 z-0 w-2/3 bg-gradient-to-l from-[#ff5722]/40 to-transparent mix-blend-overlay"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto mt-10 flex h-full w-full max-w-7xl flex-col items-center justify-between px-6 py-20 md:flex-row md:px-12">
        {/* Left Side: Main Text (Kept current center text but aligned to match image layout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col items-center text-center md:items-start md:text-left text-white md:w-[60%]"
        >
          <h1 className="mb-8 text-4xl sm:text-5xl leading-tight font-bold tracking-tighter md:text-7xl md:leading-none">
            We Help Business with websites that converts
          </h1>
          <Link
            href="#about"
            className={cn(
              buttonVariants({ variant: "default" }),
              "flex items-center gap-3 rounded-full bg-teal-600 px-8 py-6 text-lg font-semibold text-white hover:bg-teal-500/90"
            )}
          >
            See More
            <span className="flex items-center justify-center rounded-full bg-black p-1.5 text-white">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </Link>
        </motion.div>

        {/* Right Side: Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-20 hidden max-w-sm flex-col items-start rounded-3xl border border-white/20 bg-white/10 p-10 text-white backdrop-blur-md md:mt-0 md:flex"
        >
          <ChevronsRight className="mb-6 h-8 w-8 text-white" />
          <p className="mb-8 text-xl leading-snug font-medium">
            We take your business to where it needs to be
          </p>
          <h2 className="flex items-start text-7xl font-bold tracking-tighter">
            20M<span className="mt-2 ml-1 text-4xl font-semibold">+</span>
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
