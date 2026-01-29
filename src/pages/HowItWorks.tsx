import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Brain, Heart, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Start a Conversation",
    description:
      "Begin by sharing what's on your mind. There's no wrong way to start — talk about your day, your feelings, or whatever feels natural.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Your Companion Learns",
    description:
      "Over time, Presenza learns your communication style, interests, and preferences to make conversations feel more personal and relevant.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Build a Connection",
    description:
      "As you continue talking, your companion remembers past conversations and builds an ongoing understanding of who you are.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Daily Support",
    description:
      "Receive thoughtful check-ins, encouragement, and conversation whenever you need it — morning, noon, or 3 AM.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-foreground mb-6">
            How Presenza Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, thoughtful approach to AI companionship. 
            No complicated setup — just meaningful conversation.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group p-8 rounded-2xl bg-card glow-card hover-lift"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary mb-2 block">
                      Step {step.number}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-section-gradient">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-4">
              What makes Presenza different
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card glow-card">
              <h3 className="font-semibold text-foreground mb-2">
                Memory That Matters
              </h3>
              <p className="text-muted-foreground">
                Unlike typical AI assistants, Presenza maintains a persistent memory 
                of your conversations. Mention your dog's name once, and we'll remember. 
                Share that you're nervous about a job interview, and we'll check in after.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card glow-card">
              <h3 className="font-semibold text-foreground mb-2">
                Personality-Aware Responses
              </h3>
              <p className="text-muted-foreground">
                Your companion adapts to your communication style. Prefer brief responses? 
                Like to explore topics deeply? Need encouragement or prefer directness? 
                Presenza learns what works for you.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card glow-card">
              <h3 className="font-semibold text-foreground mb-2">
                Ethical Design
              </h3>
              <p className="text-muted-foreground">
                We're transparent about what Presenza is: a supportive AI companion, 
                not a therapist or mental health professional. When you need more 
                than conversation, we guide you to appropriate resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
            Ready to experience it yourself?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start a free conversation and see how it feels.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="group">
              Meet Your Companion
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
