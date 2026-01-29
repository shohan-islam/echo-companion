import { Shield, Heart, AlertTriangle, Lock } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Safety by Design",
    description:
      "Our AI is built with ethical guardrails. We prioritize your wellbeing and encourage seeking professional help when appropriate.",
  },
  {
    icon: Heart,
    title: "Not a Replacement",
    description:
      "Presenza complements human connection — it doesn't replace it. We encourage maintaining real relationships and seeking professional support when needed.",
  },
  {
    icon: AlertTriangle,
    title: "Clear Boundaries",
    description:
      "We're transparent: Presenza is not therapy, not a medical service, and not equipped to handle emergencies. For crisis support, we guide you to professionals.",
  },
  {
    icon: Lock,
    title: "Your Data, Your Control",
    description:
      "End-to-end encryption protects your conversations. You can export or delete your data anytime. We never sell your information.",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-section-gradient">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-6">
              Built on trust,{" "}
              <span className="text-gradient">designed with care</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe AI companions should be helpful, honest, and harmless. 
              That's why we've built Presenza with clear ethical guidelines 
              and complete transparency about what we are — and what we're not.
            </p>

            <div className="space-y-6">
              {trustItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-card glow-soft p-8 lg:p-12">
              <div className="h-full rounded-2xl bg-gradient-to-br from-primary/5 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <p className="font-display text-2xl font-semibold text-foreground mb-3">
                    Your wellbeing comes first
                  </p>
                  <p className="text-muted-foreground">
                    Every feature we build asks the question: "Does this genuinely help our users?"
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
