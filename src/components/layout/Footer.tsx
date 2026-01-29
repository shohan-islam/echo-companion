import { Link } from "react-router-dom";
import { Heart, Shield, MessageCircle } from "lucide-react";

const footerLinks = {
  product: [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Safety & Ethics", href: "/safety" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-section-gradient border-t border-border">
      <div className="container-wide section-padding">
        {/* Trust Banner */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16 pb-16 border-b border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm">Privacy First</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-sm">Not a Therapy Service</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MessageCircle className="h-5 w-5 text-primary" />
            <span className="text-sm">24/7 Availability</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display text-base">P</span>
              </div>
              <span className="font-display text-lg font-semibold text-foreground">
                Presenza
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A personalized AI companion that listens, understands, and offers meaningful conversation — safely and responsibly.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Presenza. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs text-center md:text-right max-w-md">
            Presenza is not a medical service, therapy, or substitute for professional mental health care. If you're in crisis, please contact a mental health professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
