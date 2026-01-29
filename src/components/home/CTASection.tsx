import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-section-gradient">
      <div className="container-narrow">
        <div className="relative text-center p-8 sm:p-12 lg:p-16 rounded-3xl bg-card glow-soft overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-4">
              Ready to meet your companion?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Start a conversation with an AI that truly listens. 
              No commitments, no judgment — just genuine connection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="hero-outline" size="xl">
                  View Pricing
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Free tier available • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
