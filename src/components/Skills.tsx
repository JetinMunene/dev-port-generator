import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone,
  Settings,
  Palette
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Development",
      skills: [
        "React", "TypeScript", "JavaScript", "Next.js", "Vue.js",
        "HTML5", "CSS3", "Tailwind CSS", "SASS/SCSS", "Material-UI"
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development", 
      skills: [
        "Node.js", "Express.js", "Python", "Django", "FastAPI",
        "PHP", "Laravel", "REST APIs", "GraphQL", "Microservices"
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Databases & Cloud",
      skills: [
        "MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase",
        "AWS", "Google Cloud", "Heroku", "Vercel", "Netlify"
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Tools & DevOps",
      skills: [
        "Git", "Docker", "Jenkins", "CI/CD", "Linux",
        "Webpack", "Vite", "Jest", "Cypress", "Postman"
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      skills: [
        "React Native", "Flutter", "PWA", "Responsive Design",
        "Mobile-First Design", "Ionic", "Cordova"
      ]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design & UX",
      skills: [
        "Figma", "Adobe XD", "UI/UX Design", "Prototyping",
        "Wireframing", "User Research", "Accessibility", "Design Systems"
      ]
    }
  ];

  const getSkillColor = (index: number) => {
    const colors = [
      "bg-primary/10 text-primary border-primary/20",
      "bg-accent/10 text-accent border-accent/20", 
      "bg-green-500/10 text-green-600 border-green-500/20",
      "bg-purple-500/10 text-purple-600 border-purple-500/20",
      "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "bg-pink-500/10 text-pink-600 border-pink-500/20"
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="card-gradient border border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg">
                  <span className="text-primary mr-3 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`${getSkillColor(categoryIndex)} hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programming Languages Proficiency */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Programming Languages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "JavaScript", level: 95 },
              { name: "TypeScript", level: 90 },
              { name: "Python", level: 85 },
              { name: "PHP", level: 80 }
            ].map((lang, index) => (
              <Card key={index} className="card-gradient border border-border/50">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-3">{lang.name}</h4>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-muted-foreground">{lang.level}%</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;