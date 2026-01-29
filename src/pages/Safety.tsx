import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Shield,
  Heart,
  AlertTriangle,
  Lock,
  Eye,
  UserX,
  Phone,
  FileText,
  ArrowRight,
} from "lucide-react";

const principles = [
  {
    icon: Heart,
    title: "Wellbeing First",
    description:
      "Every feature we build prioritizes your emotional wellbeing. We actively discourage unhealthy dependency and encourage balanced use.",
  },
  {
    icon: Shield,
    title: "Clear Boundaries",
    description:
      "Presenza is not a therapist, doctor, or crisis counselor. We're transparent about our limitations and guide users to professional help when needed.",
  },
  {
    icon: Lock,
    title: "Privacy by Default",
    description:
      "Your conversations are encrypted. We don't read them, sell them, or use them for advertising. Your data belongs to you.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We're clear about what our AI can and cannot do. No false promises, no manipulation, no dark patterns designed to increase usage.",
  },
  {
    icon: UserX,
    title: "No Exploitation",
    description:
      "We refuse to exploit loneliness or vulnerability. Our business model doesn't depend on maximizing screen time or emotional manipulation.",
  },
  {
    icon: Phone,
    title: "Crisis Resources",
    description:
      "When users express serious distress, we provide appropriate crisis resources and encourage seeking professional support.",
  },
];

const Safety = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-narrow text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-foreground mb-6">
            Safety & Ethics
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe AI companionship should be helpful, honest, and harmless. 
            Here's how we put that belief into practice.
          </p>
        </div>
      </section>

      {/* What We Are / Are Not */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* What We Are */}
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                What Presenza <span className="text-primary">Is</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-foreground">
                    An AI companion for everyday conversation and emotional support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-foreground">
                    A non-judgmental listener available 24/7
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-foreground">
                    A tool to help you process thoughts and feelings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <span className="text-foreground">
                    A complement to — not replacement for — human connection
                  </span>
                </li>
              </ul>
            </div>

            {/* What We Are Not */}
            <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/10">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                What Presenza <span className="text-destructive">Is Not</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm">✗</span>
                  </div>
                  <span className="text-foreground">
                    A licensed therapist, counselor, or mental health professional
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm">✗</span>
                  </div>
                  <span className="text-foreground">
                    A medical service or diagnostic tool
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm">✗</span>
                  </div>
                  <span className="text-foreground">
                    A crisis intervention or emergency service
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm">✗</span>
                  </div>
                  <span className="text-foreground">
                    A substitute for professional care or real relationships
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-padding bg-section-gradient">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-4">
              Our Core Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make, from product design to data handling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="p-6 rounded-2xl bg-card glow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <principle.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="p-8 rounded-2xl bg-accent/30 border border-accent-foreground/10">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-accent-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  If You're in Crisis
                </h3>
                <p className="text-muted-foreground mb-4">
                  Presenza is not equipped to handle mental health emergencies. 
                  If you or someone you know is in crisis, please reach out to 
                  professional resources:
                </p>
                <ul className="space-y-2 text-foreground">
                  <li>
                    <strong>National Suicide Prevention Lifeline:</strong> 988 (US)
                  </li>
                  <li>
                    <strong>Crisis Text Line:</strong> Text HOME to 741741
                  </li>
                  <li>
                    <strong>International Association for Suicide Prevention:</strong>{" "}
                    <a
                      href="https://www.iasp.info/resources/Crisis_Centres/"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find your local crisis center
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Link */}
      <section className="section-padding bg-section-gradient">
        <div className="container-narrow text-center">
          <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
            Want to learn more?
          </h2>
          <p className="text-muted-foreground mb-6">
            Read our full safety documentation, privacy policy, and terms of service.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/privacy">Privacy Policy</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/terms">Terms of Service</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/contact">
                Questions? Contact Us
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Safety;
