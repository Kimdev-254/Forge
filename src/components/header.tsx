import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Forge
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="text-muted-foreground hover:text-primary"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dna"
              className="text-muted-foreground hover:text-primary"
            >
              Discipline DNA
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="text-muted-foreground hover:text-primary"
            >
              Community
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/login">Login</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
