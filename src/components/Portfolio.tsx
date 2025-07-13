import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, ExternalLink, Mail, Code, Brain, Gamepad2, Cpu, Database, Zap, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Toxic Comment Detection AI",
      description: "DistilBERT-based model for detecting toxic comments in social media platforms with 95% accuracy.",
      tech: ["Python", "PyTorch", "DistilBERT", "Transformers", "Gradio"],
      image: "/api/placeholder/400/250",
      link: "#",
      type: "AI"
    },
    {
      title: "xG Football Model from Video",
      description: "Computer vision model that calculates Expected Goals (xG) from football match videos using pose estimation.",
      tech: ["Python", "OpenCV", "TensorFlow", "YOLO", "Pose Estimation"],
      image: "/api/placeholder/400/250",
      link: "#",
      type: "AI"
    },
    {
      title: "Penguins Can Fly",
      description: "Endless runner game featuring a flying penguin with smooth controls and dynamic obstacle generation.",
      tech: ["Unreal Engine", "C++", "Blueprint", "3D Animation"],
      image: "/api/placeholder/400/250",
      link: "#",
      type: "Game"
    },
    {
      title: "Trash Tyre",
      description: "3D game jam project where players navigate through environmental challenges with recycled tire mechanics.",
      tech: ["Unreal Engine", "Blender", "C++", "3D Modeling"],
      image: "/api/placeholder/400/250",
      link: "#",
      type: "Game"
    }
  ];

  const skills = {
    "Languages": [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML/CSS", level: 85 }
    ],
    "AI Tools": [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Transformers", level: 88 },
      { name: "OpenCV", level: 82 },
      { name: "Gradio", level: 75 }
    ],
    "Game Tools": [
      { name: "Unreal Engine", level: 85 },
      { name: "Blender", level: 78 },
      { name: "3D Modeling", level: 75 },
      { name: "Game Design", level: 88 }
    ],
    "Other": [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Hugging Face", level: 85 },
      { name: "Docker", level: 70 }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-hero"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-tech-dark via-background to-tech-gray opacity-95"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-electric bg-clip-text text-transparent text-electric-glow">
              Building Smarter Games with AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Aspiring AI Engineer & Game Developer specializing in machine learning, computer vision, 
              and immersive gaming experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="electric-glow hover-lift bg-gradient-electric text-tech-dark font-semibold">
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </Button>
              <Button variant="outline" size="lg" className="glass-card hover-lift border-primary/50">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Itch.io Games
              </Button>
              <Button variant="outline" size="lg" className="glass-card hover-lift border-primary/50">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-4xl font-bold text-electric-glow">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Arahan Kujur, an aspiring AI engineer and game developer passionate about creating 
                intelligent systems that enhance gaming experiences. My journey combines cutting-edge 
                machine learning research with immersive game development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in natural language processing, computer vision, and AI-driven gameplay mechanics. 
                From building neural networks that understand human behavior to crafting worlds in Unreal Engine, 
                I bridge the gap between artificial intelligence and interactive entertainment.
              </p>
              <div className="flex flex-wrap gap-3">
                {["NLP", "Computer Vision", "Unreal Engine", "AI for Gameplay", "xG Models", "Deep Learning"].map((interest) => (
                  <Badge key={interest} variant="secondary" className="bg-card border-primary/30 hover:border-primary transition-colors">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
            <Card className="glass-card hover-lift border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Zap className="h-5 w-5" />
                  Mission Briefing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-primary" />
                  <span>Advancing AI research in gaming</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gamepad2 className="h-5 w-5 text-primary" />
                  <span>Creating immersive game experiences</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Building intelligent systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Pushing technological boundaries</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-electric-glow">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card hover-lift border-primary/30 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge 
                    className={`absolute top-4 right-4 ${project.type === 'AI' ? 'bg-primary/90' : 'bg-accent/90'}`}
                  >
                    {project.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full hover-scale bg-gradient-electric text-tech-dark">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-electric-glow">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="glass-card border-primary/30">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    {category === "Languages" && <Code className="h-5 w-5" />}
                    {category === "AI Tools" && <Brain className="h-5 w-5" />}
                    {category === "Game Tools" && <Gamepad2 className="h-5 w-5" />}
                    {category === "Other" && <Cpu className="h-5 w-5" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div 
                          className="bg-gradient-electric h-2 rounded-full transition-all duration-1000 hover:animate-glow"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-electric-glow">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Deep Learning Specialization",
                issuer: "Coursera / DeepLearning.AI",
                date: "2024",
                badge: "AI"
              },
              {
                title: "Natural Language Processing",
                issuer: "Coursera / DeepLearning.AI", 
                date: "2024",
                badge: "NLP"
              },
              {
                title: "Computer Vision Fundamentals",
                issuer: "Coursera / University of Buffalo",
                date: "2023",
                badge: "CV"
              },
              {
                title: "Game Development with Unreal Engine",
                issuer: "Udemy",
                date: "2023",
                badge: "Game"
              },
              {
                title: "LangChain for LLM Development",
                issuer: "DeepLearning.AI",
                date: "2024",
                badge: "LLM"
              },
              {
                title: "Generative AI with Large Language Models",
                issuer: "Coursera / DeepLearning.AI",
                date: "2024",
                badge: "GenAI"
              }
            ].map((cert, index) => (
              <Card key={index} className="glass-card hover-lift border-primary/30 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg leading-tight text-primary group-hover:text-electric-glow transition-colors">
                      {cert.title}
                    </CardTitle>
                    <Badge 
                      variant="secondary" 
                      className="bg-gradient-electric/20 text-primary border-primary/30 shrink-0"
                    >
                      {cert.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">In Progress {cert.date}</span>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-primary/50 hover:bg-primary/10 text-xs"
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-electric-glow">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to collaborate on the next breakthrough in AI-powered gaming? 
            Let's build something extraordinary together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Button variant="outline" size="lg" className="glass-card hover-lift border-primary/50 h-20">
              <div className="flex flex-col items-center gap-2">
                <Github className="h-6 w-6" />
                <span>GitHub</span>
              </div>
            </Button>
            <Button variant="outline" size="lg" className="glass-card hover-lift border-primary/50 h-20">
              <div className="flex flex-col items-center gap-2">
                <Linkedin className="h-6 w-6" />
                <span>LinkedIn</span>
              </div>
            </Button>
            <Button variant="outline" size="lg" className="glass-card hover-lift border-primary/50 h-20">
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-6 w-6" />
                <span>Email</span>
              </div>
            </Button>
          </div>

          <Button size="lg" className="electric-glow hover-scale bg-gradient-electric text-tech-dark font-semibold">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-primary/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 Arahan Kujur</span>
            <span className="text-primary">|</span>
            <span>AI + Game Dev</span>
            <span className="text-primary">|</span>
            <span className="text-primary">Portfolio v1.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;