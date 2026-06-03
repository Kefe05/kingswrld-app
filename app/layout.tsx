import "@fontsource/intel-one-mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="antialiased scroll-smooth"
    >
      <body style={{ fontFamily: "'Intel One Mono', monospace" }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
