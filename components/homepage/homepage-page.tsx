import { Header } from "@/components/homepage/header"
import { Hero } from "@/components/homepage/hero"
import { FeatureSection } from "@/components/homepage/feature-section"
import { Footer } from "@/components/homepage/footer"
import { HashRedirect } from "@/components/homepage/hash-redirect"

export function HomepagePage() {
  return (
    <div className="min-h-screen bg-[#f8f4ed] text-stone-900">
      <HashRedirect />
      <Header />
      <main>
        <Hero />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  )
}
