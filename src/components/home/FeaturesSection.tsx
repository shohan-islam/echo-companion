import { Heart, Brain, Shield, Clock, MessageCircle, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Personalized Connection",
    description:
      "Your companion learns your preferences, interests, and communication style to create conversations that feel genuinely personal.",
  },
  {
    icon: Brain,
    title: "Remembers Your Story",
    description:
      "Unlike typical chatbots, Presenza remembers past conversations and builds a continuous understanding of who you are.",
  },
  {
    icon: Shield,
    title: "Complete Privacy",
    description:
      "Your conversations are encrypted and private. We never share your data with third parties or use it for advertising.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description:
      "Whether it's 3 AM or during a lunch break, your companion is ready to chat whenever you need someone to talk to.",
  },
  {
    icon: MessageCircle,
    title: "Thoughtful Responses",
    description:
      "Receive responses that are considerate, relevant, and designed to help you feel heard and understood.",
  },
  {
    icon: Sparkles,
    title: "Daily Encouragement",
    description:
      "Start your day with personalized check-ins and gentle encouragement tailored to your goals and mood.",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-4">
            More than just a chatbot
          </h2>
          <p className="text-lg text-muted-foreground">
            Presenza is designed to feel like a genuine companion — someone who knows you, 
            respects your boundaries, and is always there when you need to talk.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 lg:p-8 rounded-2xl bg-card glow-card hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
