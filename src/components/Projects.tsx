import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TaskFlow Dashboard",
      description: "A comprehensive project management platform with real-time collaboration, advanced analytics, and team workflow optimization. Built with modern React patterns and state management.",
      image: project1Image,
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/jetinmunene/taskflow",
      liveUrl: "https://taskflow-demo.com",
      date: "2024",
      featured: true
    },
    {
      id: 2,
      title: "EcoCommerce Platform",
      description: "Sustainable e-commerce solution with AI-powered product recommendations, carbon footprint tracking, and seamless payment integration for eco-conscious consumers.",
      image: project2Image,
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "TailwindCSS"],
      githubUrl: "https://github.com/jetinmunene/ecocommerce",
      liveUrl: "https://ecocommerce-demo.com",
      date: "2024",
      featured: true
    },
    {
      id: 3,
      title: "HealthTracker Mobile App",
      description: "Cross-platform mobile application for health monitoring with wearable device integration, data visualization, and personalized health insights powered by machine learning.",
      image: project3Image,
      technologies: ["React Native", "Firebase", "Python", "TensorFlow", "Redux"],
      githubUrl: "https://github.com/jetinmunene/healthtracker",
      liveUrl: "https://healthtracker-demo.com",
      date: "2023",
      featured: false
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-blue-500/10 text-blue-600 border-blue-500/20",
      "TypeScript": "bg-blue-700/10 text-blue-700 border-blue-700/20",
      "Node.js": "bg-green-500/10 text-green-600 border-green-500/20",
      "MongoDB": "bg-green-700/10 text-green-700 border-green-700/20",
      "Next.js": "bg-gray-800/10 text-gray-800 border-gray-800/20",
      "TailwindCSS": "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
      "Python": "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
      "Firebase": "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "PostgreSQL": "bg-blue-600/10 text-blue-600 border-blue-600/20"
    };
    return colors[tech] || "bg-primary/10 text-primary border-primary/20";
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`card-gradient border border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 group overflow-hidden ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Quick Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    size="sm" 
                    variant="secondary"
                    className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className={`${getTechColor(tech)} text-xs hover:scale-105 transition-transform duration-200`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://github.com/jetinmunene" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;