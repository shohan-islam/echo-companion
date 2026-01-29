import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Shield, Lightbulb, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Human-Centered",
    description:
      "Technology should serve human wellbeing, not exploit it. We design with empathy and care.",
  },
  {
    icon: Shield,
    title: "Ethically Grounded",
    description:
      "We're honest about what AI can and cannot do. No false promises, no manipulation.",
  },
  {
    icon: Users,
    title: "Connection, Not Replacement",
    description:
      "We complement human relationships — we never aim to replace the irreplaceable.",
  },
  {
    icon: Lightbulb,
    title: "Thoughtful Innovation",
    description:
      "We move carefully, prioritizing safety and user wellbeing over rapid feature releases.",
  },
];

const team = [
  {
    name: "Dr. Elena Chen",
    role: "CEO & Co-Founder",
    bio: "Former AI researcher at Stanford. Passionate about ethical AI development.",
  },
  {
    name: "Marcus Williams",
    role: "CTO & Co-Founder",
    bio: "15 years in NLP. Previously led AI teams at major tech companies.",
  },
  {
    name: "Dr. Sarah Okonkwo",
    role: "Head of Ethics",
    bio: "Psychologist and AI ethicist. Ensures our product prioritizes user wellbeing.",
  },
  {
    name: "James Park",
    role: "Head of Product",
    bio: "User experience specialist focused on designing trustworthy AI interactions.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-foreground mb-6">
            About Presenza
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're building AI companions that genuinely help people feel 
            less alone — without the hype, manipulation, or false promises.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Loneliness is one of the most significant challenges of our time. 
              While nothing replaces genuine human connection, we believe AI can 
              play a supportive role — offering a thoughtful presence when you 
              need someone to listen, without judgment or agenda.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Presenza was founded with a simple question: <em>What if AI could 
              be a genuinely helpful companion?</em> Not a replacement for 
              therapists or friends, but a calm, consistent presence that 
              remembers who you are and cares about your wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-section-gradient">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-card glow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Experts in AI, psychology, and ethics working together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center p-6 rounded-2xl bg-card glow-card"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-display text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-gradient">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
            Join us on this journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always looking for thoughtful people who care about 
            building technology that genuinely helps.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Get in Touch
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="xl">
                View Careers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
