"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Zap, Target, TrendingUp, BarChart3, Users, Lightbulb } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "Facebook Ads Management",
      description: "Strategic Facebook advertising to reach your ideal customers",
      features: [
        "Audience targeting and segmentation",
        "Campaign optimization for conversions",
        "Custom audience creation",
        "Pixel implementation and tracking",
        "A/B testing and performance analysis",
        "Monthly reporting and optimization",
      ],
    },
    {
      icon: Target,
      title: "Instagram Ads Strategy",
      description: "Engaging Instagram campaigns that drive brand awareness and sales",
      features: [
        "Reels and Stories advertising",
        "Influencer partnership coordination",
        "Visual content optimization",
        "Engagement-focused campaigns",
        "Shopping ads setup",
        "Community management",
      ],
    },
    {
      icon: TrendingUp,
      title: "Google Ads Management",
      description: "Search and display campaigns to capture high-intent customers",
      features: [
        "Keyword research and bidding strategy",
        "Search and Display campaigns",
        "YouTube advertising",
        "Conversion tracking setup",
        "Quality score optimization",
        "Competitor analysis and adaptation",
      ],
    },
  ]

  const benefits = [
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Every campaign is optimized with real data and performance metrics",
    },
    {
      icon: Users,
      title: "Targeted Reach",
      description: "Reach the right people at the right time with precision targeting",
    },
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description: "High-quality ad creative that captures attention and drives action",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary to-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">Our Services</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl text-balance">
              Comprehensive marketing solutions for Facebook, Instagram, and Google Ads
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-foreground/70 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Why Choose Us */}
            <div className="bg-muted p-12 rounded-lg mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-foreground/70">{benefit.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-foreground/70 mb-6">Ready to transform your marketing strategy?</p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Schedule Your Free Consultation
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
