import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      company: "TechCorp Solutions",
      content: "John's technical expertise and problem-solving abilities are exceptional. He consistently delivers high-quality code and has been instrumental in our team's success. His leadership skills make him a valuable asset.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Digital Innovations",
      content: "Working with John has been a pleasure. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable. He always goes above and beyond to ensure project success.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "Lead Designer",
      company: "StartupXYZ",
      content: "John bridges the gap between design and development perfectly. His understanding of user experience principles and technical implementation makes collaboration seamless and results outstanding.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Testimonials from colleagues and clients I've had the pleasure to work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="card-gradient border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-gradient border border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help bring your next project to life
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;