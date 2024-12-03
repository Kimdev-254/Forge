"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Target,
  Brain,
  Zap,
  Activity,
  Award,
  Trophy,
} from "lucide-react"
import * as d3 from "d3"

// Sample data for the chart
const data = [
  { day: "Mon", score: 85 },
  { day: "Tue", score: 82 },
  { day: "Wed", score: 89 },
  { day: "Thu", score: 87 },
  { day: "Fri", score: 92 },
  { day: "Sat", score: 90 },
  { day: "Sun", score: 95 },
]

export default function Home() {
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      drawChart()
    }
  }, [])

  const drawChart = () => {
    const width = 600
    const height = 200
    const margin = { top: 20, right: 30, bottom: 30, left: 40 }

    const svg = d3
      .select(chartRef.current)
      .attr("width", width)
      .attr("height", height)

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.day))
      .range([margin.left, width - margin.right])
      .padding(0.1)

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.score)])
      .nice()
      .range([height - margin.bottom, margin.top])

    const line = d3
      .line()
      .x((d) => x(d.day) + x.bandwidth() / 2)
      .y((d) => y(d.score))
      .curve(d3.curveMonotoneX)

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "hsl(var(--primary))")
      .attr("stroke-width", 2)
      .attr("d", line)

    svg
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d) => x(d.day) + x.bandwidth() / 2)
      .attr("cy", (d) => y(d.score))
      .attr("r", 4)
      .attr("fill", "hsl(var(--primary))")

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .attr("color", "hsl(var(--muted-foreground))")

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .attr("color", "hsl(var(--muted-foreground))")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Dashboard Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text">
          Forge Your Discipline
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/dashboard" className="group">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Consistency Score
                </CardTitle>
                <Activity className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">85%</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary">↑ 12%</span> since day one
                    </p>
                  </div>
                  <div className="relative h-16 w-16">
                    <svg className="h-full w-full" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-muted"
                        strokeWidth="2"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-primary"
                        strokeWidth="2"
                        strokeDasharray="100"
                        strokeDashoffset="15"
                        transform="rotate(-90 18 18)"
                      />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/dashboard" className="group">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Streaks
                </CardTitle>
                <Award className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">21</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary">↑ 5</span> new records
                    </p>
                  </div>
                  <div className="relative h-16 w-16">
                    <svg className="h-full w-full" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-muted"
                        strokeWidth="2"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-primary"
                        strokeWidth="2"
                        strokeDasharray="100"
                        strokeDashoffset="30"
                        transform="rotate(-90 18 18)"
                      />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/dashboard" className="group">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Goals Achieved
                </CardTitle>
                <Trophy className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <span className="text-primary">↑ 15%</span> completion
                    </p>
                  </div>
                  <div className="relative h-16 w-16">
                    <svg className="h-full w-full" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-muted"
                        strokeWidth="2"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-primary"
                        strokeWidth="2"
                        strokeDasharray="100"
                        strokeDashoffset="5"
                        transform="rotate(-90 18 18)"
                      />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Weekly Performance Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <svg ref={chartRef} className="w-full h-full"></svg>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Discipline DNA Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Your Discipline DNA
        </h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-primary">
                  Discipline Type: The Steady Climber
                </h3>
                <p className="text-muted-foreground">
                  Your consistent efforts are paying off. Keep pushing your
                  limits!
                </p>
              </div>
              <Button asChild>
                <Link href="/dna">View Full Profile</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Focus</h4>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Time Management</h4>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Consistency</h4>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Forge?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Target className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Smart Goal Setting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Set clear, achievable goals with our AI-powered recommendation
                system.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Brain className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Habit Formation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Develop lasting habits with our scientifically-backed tracking
                system and personalized insights.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Dynamic DNA Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Experience a unique, evolving discipline profile that adapts to
                your progress and challenges.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-muted rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Forge Your Discipline?
        </h2>
        <p className="text-xl mb-8 text-muted-foreground">
          Join thousands who have transformed their lives through consistent
          habit-building.
        </p>
        <Button size="lg" asChild>
          <Link href="/signup">
            Start Your Journey <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
