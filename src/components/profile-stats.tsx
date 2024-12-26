import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Goals Completed", value: 12 },
  { label: "Current Streak", value: 7 },
  { label: "Total Tasks", value: 48 },
  { label: "Productivity Score", value: "85%" },
]

export function ProfileStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
