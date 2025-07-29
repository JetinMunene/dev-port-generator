import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // In a real implementation, this would download the actual resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would add your resume PDF to the public folder
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-6 font-medium">
            Full Stack Software Developer | Web Application Specialist
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            I build fast, responsive, and scalable web applications with clean code and modern design.
            Passionate about creating digital experiences that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white hover:bg-white/10 rounded-full w-12 h-12 transition-all duration-300 hover:scale-110"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white hover:bg-white/10 rounded-full w-12 h-12 transition-all duration-300 hover:scale-110"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white hover:bg-white/10 rounded-full w-12 h-12 transition-all duration-300 hover:scale-110"
              asChild
            >
              <a href="mailto:john.doe@email.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('#about')}
            className="text-white/60 hover:text-white rounded-full w-12 h-12 hover:bg-white/10 transition-all duration-300"
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 text-white/20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="text-6xl font-mono">&lt;/&gt;</div>
      </div>
      <div className="absolute bottom-20 right-20 text-white/20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="text-4xl font-mono">{}</div>
      </div>
    </section>
  );
};

export default Hero;