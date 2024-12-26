import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const progressData = [
  { category: "Health & Fitness", progress: 75 },
  { category: "Career & Education", progress: 60 },
  { category: "Personal Development", progress: 90 },
  { category: "Relationships", progress: 80 },
]

export function ProgressSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {progressData.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{item.category}</span>
                <span className="text-sm font-medium">{item.progress}%</span>
              </div>
              <Progress value={item.progress} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
