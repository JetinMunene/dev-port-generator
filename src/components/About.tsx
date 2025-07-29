import { Card, CardContent } from '@/components/ui/card';
import { Code, Coffee, Heart, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "3+ Years Experience",
      description: "Building scalable web applications"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "MERN Stack Expert",
      description: "MongoDB, Express, React, Node.js"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Turning complex ideas into simple solutions"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion Driven",
      description: "Love for clean code and user experience"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-slide-in-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Software Developer with over 3 years of experience creating 
                digital solutions that bridge the gap between design and functionality. My journey 
                in software development started with a curiosity about how things work on the web, 
                and it has evolved into a deep passion for crafting elegant, efficient code.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                I specialize in modern web technologies and have a particular love for the MERN stack. 
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects. I believe in writing code that not only works 
                but is also maintainable, scalable, and enjoyable to work with.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My mission is to create web applications that provide exceptional user experiences 
                while maintaining clean, efficient codebases that development teams love to work with.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="card-gradient border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <Card className="card-gradient border border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <blockquote className="text-xl sm:text-2xl font-medium text-foreground mb-4 italic">
                "Code is like humor. When you have to explain it, it's bad."
              </blockquote>
              <cite className="text-muted-foreground">- Cory House</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;