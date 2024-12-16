import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to Forge</h1>
      <p className="text-xl mb-8">
        Transform your habits, build consistency, and achieve your goals.
      </p>
      <Link href="/dashboard">
        <Button>Go to Dashboard</Button>
      </Link>
    </div>
  )
}
