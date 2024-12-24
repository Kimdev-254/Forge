"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle } from "lucide-react"

type Habit = {
  id: number
  name: string
  completed: boolean
}

export function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [newHabit, setNewHabit] = useState("")

  const addHabit = () => {
    if (newHabit.trim() !== "") {
      setHabits([
        ...habits,
        { id: Date.now(), name: newHabit, completed: false },
      ])
      setNewHabit("")
    }
  }

  const toggleHabit = (id: number) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    )
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Daily Habits</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            placeholder="Enter a new habit"
          />
          <Button onClick={addHabit}>Add</Button>
        </div>
        <div className="space-y-2">
          {habits.map((habit) => (
            <div
              key={habit.id}
              className="flex items-center justify-between p-2 bg-secondary rounded"
            >
              <Label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => toggleHabit(habit.id)}
                  className="form-checkbox h-5 w-5"
                />
                <span className={habit.completed ? "line-through" : ""}>
                  {habit.name}
                </span>
              </Label>
              {habit.completed ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
