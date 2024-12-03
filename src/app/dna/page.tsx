"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Target, Clock, Zap, BarChart } from "lucide-react"

export default function DisciplineDNAPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Your Discipline DNA</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">
            Discipline Type: The Steady Climber
          </CardTitle>
          <CardDescription>
            Your consistent efforts are paying off. Keep pushing your limits!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Focus</h3>
              <Progress value={75} />
              <p className="text-sm text-muted-foreground">
                Strong and improving
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Consistency</h3>
              <Progress value={90} />
              <p className="text-sm text-muted-foreground">Excellent</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Resilience</h3>
              <Progress value={60} />
              <p className="text-sm text-muted-foreground">Room for growth</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="traits" className="space-y-4">
        <TabsList>
          <TabsTrigger value="traits">Key Traits</TabsTrigger>
          <TabsTrigger value="insights">Personalized Insights</TabsTrigger>
          <TabsTrigger value="evolution">DNA Evolution</TabsTrigger>
        </TabsList>

        <TabsContent value="traits">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Focus Ability
                </CardTitle>
                <Brain className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">75%</div>
                <p className="text-xs text-muted-foreground">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Goal Orientation
                </CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">82%</div>
                <p className="text-xs text-muted-foreground">
                  +3% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Time Management
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">
                  +2% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Adaptability
                </CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">70%</div>
                <p className="text-xs text-muted-foreground">
                  +7% from last month
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Insights</CardTitle>
              <CardDescription>
                Based on your recent activity and progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                  <BarChart className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Consistency is your strength</p>
                    <p className="text-sm text-muted-foreground">
                      Your ability to maintain habits over time is impressive.
                      Consider increasing the challenge of your goals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Goal-setting opportunity</p>
                    <p className="text-sm text-muted-foreground">
                      You're great at achieving short-term goals. Try setting
                      more ambitious long-term objectives to push your growth.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Time management focus area</p>
                    <p className="text-sm text-muted-foreground">
                      Your productivity peaks in the morning. Consider
                      scheduling your most important tasks during this time.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="evolution">
          <Card>
            <CardHeader>
              <CardTitle>Your DNA Evolution</CardTitle>
              <CardDescription>
                How your discipline profile has changed over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add a chart or visual representation of DNA evolution here */}
              <p>
                A visual representation of your Discipline DNA evolution will be
                displayed here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
