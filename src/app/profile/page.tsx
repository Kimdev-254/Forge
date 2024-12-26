import { Metadata } from "next"
import { ProfileInfo } from "@/components/profile-info"
import { ProfileStats } from "@/components/profile-stats"

export const metadata: Metadata = {
  title: "Profile",
  description: "View and edit your profile information.",
}

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <ProfileInfo />
        <ProfileStats />
      </div>
    </div>
  )
}
