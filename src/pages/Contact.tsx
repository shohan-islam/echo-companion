import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "hello@presenza.ai",
    detail: "We respond within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Available in-app",
    detail: "For existing users",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "San Francisco, CA",
    detail: "By appointment only",
  },
  {
    icon: Clock,
    title: "Support Hours",
    description: "Mon-Fri, 9am-6pm PT",
    detail: "Weekend email support",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-narrow text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to learn more? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-card glow-card">
                <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="How can we help?"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about what you need..."
                      required
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                Other ways to reach us
              </h2>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <div
                    key={method.title}
                    className="p-5 rounded-xl bg-card glow-card flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <method.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {method.title}
                      </h3>
                      <p className="text-foreground">{method.description}</p>
                      <p className="text-muted-foreground text-sm">
                        {method.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 rounded-xl bg-accent/30 border border-accent-foreground/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Looking to get started?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  If you're ready to meet your AI companion, you can start 
                  right away — no need to contact us first.
                </p>
                <Button variant="hero" className="w-full">
                  Start Free Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-section-gradient">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
            Common Questions
          </h2>
          <p className="text-muted-foreground mb-8">
            Before reaching out, you might find your answer in our 
            <a href="/safety" className="text-primary hover:underline ml-1">
              Safety & Ethics
            </a>{" "}
            or{" "}
            <a href="/pricing" className="text-primary hover:underline">
              Pricing
            </a>{" "}
            pages.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
