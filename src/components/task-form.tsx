"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function TaskForm() {
  const [task, setTask] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend or state management
    console.log({ task })
    setTask("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="task" className="text-sm font-medium">
              Task Description
            </label>
            <Input
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Add Task</Button>
        </form>
      </CardContent>
    </Card>
  )
}
