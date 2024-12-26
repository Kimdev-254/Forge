"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SettingsForm() {
  const [settings, setSettings] = useState({
    notifications: true,
    theme: "system",
    language: "en",
  })

  const handleSave = () => {
    // Here you would typically send the updated settings to your backend
    console.log("Updated settings:", settings)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSave()
          }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <label htmlFor="notifications" className="text-sm font-medium">
              Enable Notifications
            </label>
            <Switch
              id="notifications"
              checked={settings.notifications}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, notifications: checked })
              }
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="theme" className="text-sm font-medium">
              Theme
            </label>
            <Select
              value={settings.theme}
              onValueChange={(value) =>
                setSettings({ ...settings, theme: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="language" className="text-sm font-medium">
              Language
            </label>
            <Select
              value={settings.language}
              onValueChange={(value) =>
                setSettings({ ...settings, language: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </CardContent>
    </Card>
  )
}
