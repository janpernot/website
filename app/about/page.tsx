"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary to-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">About Me</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl text-balance">
              Dedicated to growing businesses through strategic digital marketing
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">My Journey</h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  I'm a digital marketing professional with over 8 years of experience managing successful campaigns
                  across Facebook, Instagram, and Google Ads. My passion is helping businesses discover their ideal
                  customers and grow their revenue through strategic, data-driven marketing.
                </p>
                <p>
                  Throughout my career, I've had the privilege of working with businesses of all sizes—from startups to
                  established companies—across diverse industries. Each project has taught me valuable lessons about
                  what works in digital advertising and how to consistently deliver exceptional results.
                </p>
                <p>
                  My approach is simple: understand your business goals, analyze the market, and create campaigns that
                  don't just get impressions—they drive real conversions and meaningful growth.
                </p>
              </div>
            </div>

            {/* Expertise */}
            <div className="mb-16 p-8 bg-muted rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-foreground">My Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">Platform Mastery</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Facebook & Messenger Ads</li>
                    <li>• Instagram Ads & Reels</li>
                    <li>• Google Search & Display</li>
                    <li>• YouTube Advertising</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-foreground">Strategic Skills</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Campaign Strategy & Planning</li>
                    <li>• A/B Testing & Optimization</li>
                    <li>• Performance Analytics</li>
                    <li>• Conversion Rate Optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">What I Believe In</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">Results Over Vanity Metrics</h3>
                  <p className="text-foreground/80">
                    I focus on metrics that matter—conversions, ROI, and revenue generated, not just clicks or
                    impressions.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">Continuous Optimization</h3>
                  <p className="text-foreground/80">
                    Great campaigns aren't built once—they're continuously refined based on performance data and market
                    trends.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-bold text-lg mb-2 text-foreground">Transparent Communication</h3>
                  <p className="text-foreground/80">
                    You deserve clear, honest reporting and insights into how your campaigns are performing and why.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-foreground/70 mb-6">Let's work together to grow your business</p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
