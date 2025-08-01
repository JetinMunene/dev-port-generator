import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Resume = () => {
  const downloadResume = () => {
    // In a real implementation, this would download the actual resume PDF
    const link = document.createElement('a');
    link.href = '/Jetin_Resume.pdf';
    link.download = 'Jetin_Resume.pdf';
    link.click();
  };

  const experiences = [
    {
      title: "Software Developer",
      company: "UNITY SACCO",
      period: "2023- Present",
      description: "Lead development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented CI/CD pipelines.",
      achievements: ["Reduced app load time by 40%", "Led team of 5 developers", "Implemented microservices architecture"]
    },
    {
      title: "Web Developer",
      company: "Datapedia Global Consultancy",
      period: "2022 - 2023",
      description: "Developed and maintained multiple client projects using MERN stack. Collaborated with design teams to implement pixel-perfect UIs.",
      achievements: ["Built 15+ production applications", "Improved code quality by 60%", "Introduced automated testing"]
    },
    {
      title: "Frontend Developer",
      company: "PACJA Organization",
      period: "2022 - 2023", 
      description: "Created responsive web applications and mobile-first designs. Worked closely with UX designers to enhance user experience.",
      achievements: ["Increased user engagement by 35%", "Optimized performance metrics", "Built reusable component library"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Technology",
      school: "Multimedia University",
      period: "2021 - 2025",
      description: "Graduated with Bachelor's Degree in Computer Technology  with focus on Software Engineering and Web Development"
    }
  ];

  const certifications = [
    "Google Cloud Professional Developer",
    "PHP Certified Developer",
    "Python Certified Developer",
    "HTML5 and CSS3 Certified Developer"
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resume & Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A journey of continuous learning and professional growth
          </p>
          
          <Button
            onClick={downloadResume}
            size="lg"
            className="shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Full Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Section */}
          <div className="lg:col-span-2">
            <Card className="card-gradient border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Briefcase className="w-6 h-6 mr-3 text-primary" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary/20 last:border-l-0">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="card-gradient border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-primary">{edu.school}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="card-gradient border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="w-full justify-start p-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="card-gradient border border-border/50">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-bold text-primary">20+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Years Experience</span>
                  <span className="font-bold text-primary">3+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Happy Clients</span>
                  <span className="font-bold text-primary">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">GitHub Repos</span>
                  <span className="font-bold text-primary">20+</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;