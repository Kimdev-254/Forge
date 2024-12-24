import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Forge</h1>
      <p className="text-xl mb-8 max-w-2xl">
        Transform your habits, build consistency, and achieve your goals with
        our powerful discipline-building platform.
      </p>
      <Link href="/dashboard">
        <Button size="lg">Go to Dashboard</Button>
      </Link>
    </div>
  )
}
