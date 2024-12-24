"use client"

import { CheckCircle2, Medal, Target } from "lucide-react"

const activities = [
  {
    icon: CheckCircle2,
    description: "Completed daily meditation",
    time: "2 hours ago",
  },
  {
    icon: Medal,
    description: "Achieved 7-day streak in journaling",
    time: "Yesterday",
  },
  {
    icon: Target,
    description: "Set a new goal: Read 2 books this month",
    time: "2 days ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
            <activity.icon className="h-5 w-5 text-primary" />
          </div>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {activity.description}
            </p>
            <p className="text-sm text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
