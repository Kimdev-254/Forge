import { Metadata } from "next"
import { ProgressChart } from "@/components/progress-chart"
import { ProgressSummary } from "@/components/progress-summary"

export const metadata: Metadata = {
  title: "Progress",
  description: "Track your progress towards your goals.",
}

export default function ProgressPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Progress</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <ProgressChart />
        <ProgressSummary />
      </div>
    </div>
  )
}
