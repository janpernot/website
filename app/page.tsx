"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-secondary py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 text-balance">
                Grow Your Business with Data-Driven TEST  
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 text-balance">
                Specialized in Facebook, Instagram, and Google Ads. We create campaigns that convert prospects into
                customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    View Services <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-foreground/70">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$50M+</div>
                <p className="text-foreground/70">Ad Spend Managed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">350%</div>
                <p className="text-foreground/70">Avg. ROI Growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">Platforms We Specialize In</h2>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
              Complete marketing solutions across the most powerful advertising platforms
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Facebook */}
              <div className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Facebook Ads</h3>
                <p className="text-foreground/70 mb-4">
                  Reach your audience with targeted campaigns on Facebook and Messenger. Optimize for conversions with
                  pixel tracking and custom audiences.
                </p>
                <Link href="/services" className="text-primary font-medium hover:text-primary/80 transition-colors">
                  Learn more →
                </Link>
              </div>

              {/* Instagram */}
              <div className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Instagram Ads</h3>
                <p className="text-foreground/70 mb-4">
                  Create visually stunning campaigns that engage users on Instagram, Reels, and Stories. Build brand
                  awareness and drive sales.
                </p>
                <Link href="/services" className="text-primary font-medium hover:text-primary/80 transition-colors">
                  Learn more →
                </Link>
              </div>

              {/* Google Ads */}
              <div className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Google Ads</h3>
                <p className="text-foreground/70 mb-4">
                  Capture high-intent customers through search, display, and YouTube ads. Maximize ROI with data-driven
                  keyword strategy.
                </p>
                <Link href="/services" className="text-primary font-medium hover:text-primary/80 transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our marketing expertise can help your business reach new heights.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
