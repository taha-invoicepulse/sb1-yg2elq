import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/Button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-full border border-black/40 bg-background/80 backdrop-blur-xl transition-all duration-300">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <Link className="text-lg font-semibold" to="/">
                Voiceflows
              </Link>
            </div>
            <nav className="hidden md:flex md:space-x-8 items-center">
              <Link
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/contact' ? 'text-primary' : 'text-muted-foreground'
                }`}
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/features' ? 'text-primary' : 'text-muted-foreground'
                }`}
                to="/features"
              >
                Features
              </Link>
              <Link
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/usecases' ? 'text-primary' : 'text-muted-foreground'
                }`}
                to="/usecases"
              >
                Usecases
              </Link>
              <Button size="sm" className="ml-4" onClick={() => window.open('https://calendly.com/voiceflows/30-min-podcast-strategy-consultation', '_blank')}>
                Book Demo
              </Button>
            </nav>
            <div className="flex md:hidden">
              <Button variant="ghost" className="h-9 w-9 p-0">
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
