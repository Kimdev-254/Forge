"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Users, Calendar, Search } from "lucide-react"

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Forge Community</h1>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search community..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="discussions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="groups">Groups</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Discussions</CardTitle>
              <CardDescription>
                Join the conversation and share your experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  {
                    title: "How to stay motivated during tough times?",
                    replies: 23,
                    views: 156,
                  },
                  {
                    title: "Share your biggest win this week!",
                    replies: 45,
                    views: 289,
                  },
                  {
                    title: "Tips for maintaining a consistent sleep schedule",
                    replies: 18,
                    views: 132,
                  },
                  {
                    title: "Book recommendations for personal growth",
                    replies: 37,
                    views: 201,
                  },
                ].map((discussion, index) => (
                  <li key={index}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">
                          {discussion.title}
                        </CardTitle>
                        <CardDescription>
                          {discussion.replies} replies · {discussion.views}{" "}
                          views
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-4">Start a New Discussion</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="groups">
          <Card>
            <CardHeader>
              <CardTitle>Community Groups</CardTitle>
              <CardDescription>
                Join groups based on your interests and goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  {
                    name: "Early Risers",
                    members: 1250,
                    description:
                      "For those committed to waking up early and maximizing their mornings",
                  },
                  {
                    name: "Fitness Enthusiasts",
                    members: 3780,
                    description:
                      "Share workout routines, nutrition tips, and stay motivated together",
                  },
                  {
                    name: "Productivity Hackers",
                    members: 2100,
                    description:
                      "Discuss and share the latest productivity techniques and tools",
                  },
                  {
                    name: "Mindfulness Practitioners",
                    members: 1800,
                    description:
                      "Learn and practice mindfulness and meditation techniques",
                  },
                ].map((group, index) => (
                  <li key={index}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">
                            {group.name}
                          </CardTitle>
                          <Button variant="outline" size="sm">
                            Join
                          </Button>
                        </div>
                        <CardDescription>
                          {group.members} members
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {group.description}
                        </p>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>
                Participate in webinars, challenges, and workshops
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  {
                    title: "30-Day Meditation Challenge",
                    date: "Starts June 1",
                    attendees: 500,
                  },
                  {
                    title: "Webinar: Mastering Time Management",
                    date: "May 15, 7:00 PM EST",
                    attendees: 1200,
                  },
                  {
                    title: "Virtual Productivity Workshop",
                    date: "May 22, 10:00 AM EST",
                    attendees: 300,
                  },
                  {
                    title: "Goal-Setting Masterclass",
                    date: "June 5, 6:00 PM EST",
                    attendees: 750,
                  },
                ].map((event, index) => (
                  <li key={index}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">
                            {event.title}
                          </CardTitle>
                          <Button variant="outline" size="sm">
                            RSVP
                          </Button>
                        </div>
                        <CardDescription>
                          {event.date} · {event.attendees} attendees
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
