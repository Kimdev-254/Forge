"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle, Trash2 } from "lucide-react"

interface Task {
  id: number
  description: string
  completed: boolean
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, description: "Complete project proposal", completed: false },
    { id: 2, description: "Review team's progress", completed: true },
    { id: 3, description: "Prepare for client meeting", completed: false },
  ])

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleTask(task.id)}
                >
                  {task.completed ? (
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  ) : (
                    <Circle className="h-6 w-6" />
                  )}
                </Button>
                <span
                  className={
                    task.completed ? "line-through text-muted-foreground" : ""
                  }
                >
                  {task.description}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTask(task.id)}
              >
                <Trash2 className="h-5 w-5 text-red-500" />
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
