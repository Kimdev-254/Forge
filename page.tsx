import { AnimatedLogo } from "@/components/animated-logo"
import { AnimatedText } from "@/components/animated-text"
import { FeatureCard } from "@/components/feature-card"
import { ParticleBackground } from "@/components/particle-background"
import { LoadingAnimation } from "@/components/loading-animation"
import { Button } from "@/components/ui/button"
import { Flame, Target, Trophy, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <LoadingAnimation />
      <ParticleBackground />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AnimatedLogo />
            <span className="text-xl font-bold">Forge</span>
          </div>
          <Button variant="default">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <AnimatedText text="Forge Your Discipline" />
            <p className="text-xl text-muted-foreground">
              Transform your habits, build consistency, and achieve your goals
              with our powerful discipline-building platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Build Your Legacy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Flame}
              title="Build Consistency"
              description="Track your daily progress and build unbreakable streaks that compound over time."
            />
            <FeatureCard
              icon={Target}
              title="Set Clear Goals"
              description="Define your targets and watch as you progress towards them with measurable metrics."
            />
            <FeatureCard
              icon={Trophy}
              title="Achieve More"
              description="Join a community of high achievers and push beyond your perceived limitations."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of others who are forging their path to excellence.
            </p>
            <Button size="lg" className="mt-4">
              Begin Your Transformation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Forge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
