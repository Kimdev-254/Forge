"use client"

import { Progress } from "@/components/ui/progress"

const goals = [
  { name: "Daily Meditation", progress: 80 },
  { name: "Weekly Exercise", progress: 65 },
  { name: "Reading Goal", progress: 45 },
]

export function GoalProgress() {
  return (
    <div className="space-y-8">
      {goals.map((goal) => (
        <div key={goal.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="font-medium">{goal.name}</div>
            <div className="text-sm text-muted-foreground">
              {goal.progress}%
            </div>
          </div>
          <Progress value={goal.progress} className="h-2" />
        </div>
      ))}
    </div>
  )
}
