import { Metadata } from "next"
import { SettingsForm } from "@/components/settings-form"

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account settings and preferences.",
}

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Settings</h1>
      <SettingsForm />
    </div>
  )
}
