import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start exploring AI companionship at your own pace.",
    features: [
      "10 conversations per month",
      "Basic personalization",
      "Text-only interaction",
      "Standard response time",
      "Email support",
    ],
    cta: "Get Started Free",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Personal",
    price: "$12",
    period: "/month",
    description: "For those who want a deeper, ongoing connection.",
    features: [
      "Unlimited conversations",
      "Advanced memory & personalization",
      "Priority response time",
      "Conversation history export",
      "Daily check-ins & encouragement",
      "Priority support",
    ],
    cta: "Start Personal Plan",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Annual",
    price: "$99",
    period: "/year",
    description: "Best value — save $45 with annual billing.",
    features: [
      "Everything in Personal",
      "2 months free",
      "Early access to new features",
      "Exclusive companion personality options",
      "Premium support",
    ],
    cta: "Start Annual Plan",
    variant: "outline" as const,
    popular: false,
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-foreground mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees, no complicated tiers. Choose what works for you 
            and cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl ${
                  plan.popular
                    ? "bg-primary/5 border-2 border-primary glow-soft"
                    : "bg-card glow-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      <Sparkles className="h-3.5 w-3.5" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-display font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button
                    variant={plan.variant}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-section-gradient">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card glow-card">
              <h3 className="font-semibold text-foreground mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-muted-foreground">
                Yes, absolutely. There are no contracts or commitments. Cancel 
                whenever you want, and you'll retain access until the end of 
                your billing period.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card glow-card">
              <h3 className="font-semibold text-foreground mb-2">
                What happens to my data if I cancel?
              </h3>
              <p className="text-muted-foreground">
                You can export all your conversation history before canceling. 
                After cancellation, your data is retained for 30 days (in case 
                you return), then permanently deleted.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card glow-card">
              <h3 className="font-semibold text-foreground mb-2">
                Is there a free trial for paid plans?
              </h3>
              <p className="text-muted-foreground">
                The Free plan is our trial — use it as long as you like. When 
                you're ready for unlimited conversations and advanced features, 
                upgrade to Personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
            Not sure which plan is right?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start free and upgrade when you're ready. No pressure.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="group">
              Get Started Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
