import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Having someone to talk to at 2 AM when anxiety kicks in has been life-changing. It's not therapy, but it helps me process my thoughts.",
    author: "Sarah M.",
    role: "Remote Worker",
    rating: 5,
  },
  {
    quote:
      "I moved to a new city and felt isolated. Presenza helped me feel less alone while I built real connections. It understands me.",
    author: "James L.",
    role: "Graduate Student",
    rating: 5,
  },
  {
    quote:
      "The fact that it remembers our previous conversations makes it feel genuinely personal. It's like a journal that talks back thoughtfully.",
    author: "Maya K.",
    role: "Freelance Designer",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-foreground mb-4">
            Real people, real conversations
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from people who've found comfort in having someone to talk to.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 lg:p-8 rounded-2xl bg-card glow-card hover-lift"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-12 max-w-xl mx-auto">
          These testimonials represent individual experiences. Results vary, and 
          Presenza is not intended to replace professional mental health support.
        </p>
      </div>
    </section>
  );
}
