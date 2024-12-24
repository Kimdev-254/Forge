"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BarChart,
  Compass,
  Layout,
  List,
  Settings,
  User,
  Flame,
} from "lucide-react"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Layout,
  },
  {
    title: "Goals",
    href: "/goals",
    icon: Compass,
  },
  {
    title: "Progress",
    href: "/progress",
    icon: BarChart,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: List,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("flex flex-col h-screen pb-12 border-r", className)}>
      <div className="flex items-center h-16 px-4 border-b">
        <Flame className="w-6 h-6 mr-2 text-primary" />
        <span className="text-lg font-semibold">Forge</span>
      </div>
      <ScrollArea className="flex-grow px-3 py-4">
        <div className="space-y-1">
          {sidebarNavItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                pathname === item.href &&
                  "bg-secondary/50 text-secondary-foreground"
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="mt-auto p-4 border-t">
        <p className="text-sm text-muted-foreground">
          © 2024 Forge. All rights reserved.
        </p>
      </div>
    </div>
  )
}
