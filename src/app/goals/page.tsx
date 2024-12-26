import { Metadata } from "next"
import { GoalList } from "@/components/goal-list"
import { GoalForm } from "@/components/goal-form"

export const metadata: Metadata = {
  title: "Goals",
  description: "Set and manage your personal and professional goals.",
}

export default function GoalsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Goals</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <GoalForm />
        <GoalList />
      </div>
    </div>
  )
}
