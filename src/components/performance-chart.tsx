"use client"

import { TooltipProps } from "recharts"
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

interface DataPoint {
  day: string
  score: number
}

const data: DataPoint[] = [
  { day: "Mon", score: 85 },
  { day: "Tue", score: 82 },
  { day: "Wed", score: 90 },
  { day: "Thu", score: 88 },
  { day: "Fri", score: 92 },
  { day: "Sat", score: 89 },
  { day: "Sun", score: 94 },
]

export function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="day"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: number) => `${value}%`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            border: "1px solid hsl(var(--border))",
          }}
          labelStyle={{
            color: "hsl(var(--foreground))",
          }}
        />
        <Line
          type="monotone"
          dataKey="score"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{
            strokeWidth: 2,
            r: 4,
            fill: "hsl(var(--background))",
            stroke: "hsl(var(--primary))",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
