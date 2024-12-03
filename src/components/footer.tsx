import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-primary mb-4">Forge</h3>
            <p>
              Empowering individuals to build discipline and achieve their
              goals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-primary">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/dna" className="hover:text-primary">
                  Discipline DNA
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-primary">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-primary">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p>&copy; 2023 Forge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
