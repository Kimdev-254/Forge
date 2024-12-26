import { Metadata } from "next"
import { TaskList } from "@/components/task-list"
import { TaskForm } from "@/components/task-form"

export const metadata: Metadata = {
  title: "Tasks",
  description: "Manage your daily tasks and to-dos.",
}

export default function TasksPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Tasks</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  )
}
