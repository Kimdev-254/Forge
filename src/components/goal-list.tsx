"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle } from "lucide-react"

interface Goal {
  id: number
  title: string
  description: string
  completed: boolean
}

export function GoalList() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Master React and its ecosystem",
      completed: false,
    },
    {
      id: 2,
      title: "Exercise regularly",
      description: "Work out at least 3 times a week",
      completed: true,
    },
  ])

  const toggleGoal = (id: number) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {goals.map((goal) => (
            <li key={goal.id} className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleGoal(goal.id)}
              >
                {goal.completed ? (
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                ) : (
                  <Circle className="h-6 w-6" />
                )}
              </Button>
              <div>
                <h3
                  className={`font-medium ${
                    goal.completed ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {goal.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {goal.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
