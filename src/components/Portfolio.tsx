import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, ExternalLink, Mail, Code, Brain, Gamepad2, Cpu, Database, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Toxic Comment Detection AI",
      description: "DistilBERT-based model for detecting toxic comments in social media platforms with 95% accuracy.",
      tech: ["Python", "PyTorch", "DistilBERT", "Transformers", "Gradio"],
      image: "/api/placeholder/400/250",
      link: "https://github.com/Arahan-kujur/toxic-comment-detector",
      type: "AI"
    },
    {
      title: "xG Football Model from Video",
      description: "Computer vision model that calculates Expected Goals (xG) from football match videos using pose estimation.",
      tech: ["Python", "OpenCV", "TensorFlow", "YOLO", "Pose Estimation"],
      image: "/api/placeholder/400/250",
      link: "#",
      type: "AI",
      status: "In Progress"
    },
    {
      title: "Penguins Can Fly",
      description: "Endless runner game featuring a flying penguin with smooth controls and dynamic obstacle generation.",
      tech: ["Unreal Engine", "C++", "Blueprint", "3D Animation"],
      image: "/api/placeholder/400/250",
      link: "https://arahan-kujur.itch.io/penguin-drift",
      type: "Game"
    }
  ];

  const skills = {
    "Languages": [
      { name: "Python", level: 100 },
      { name: "C++", level: 85 },
      { name: "Unreal's Blueprint", level: 90 }
    ],
    "AI Tools": [
      { name: "PyTorch", level: 90 },
      { name: "Langchain", level: 85 },
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
              <Button 
                size="lg" 
                className="electric-glow hover-lift bg-gradient-electric text-tech-dark font-semibold"
                onClick={() => window.open('https://github.com/Arahan-kujur', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card hover-lift border-primary/50"
                onClick={() => window.open('https://arahan-kujur.itch.io', '_blank')}
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Itch.io Games
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass-card hover-lift border-primary/50"
                onClick={() => window.open('https://www.linkedin.com/in/arahan-kujur-a26b1a374', '_blank')}
              >
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
                Hi, I'm Arahan Kujur — an aspiring developer passionate about the intersection of AI and game development. 
                I love building interactive experiences and intelligent systems that feel alive and responsive. Whether it's 
                designing engaging gameplay mechanics or experimenting with machine learning models, I thrive on solving 
                creative challenges through code.
              </p>
              <div className="space-y-3 text-muted-foreground">
                <p>I'm currently exploring:</p>
                <div className="ml-4 space-y-2">
                  <p>🎮 Game Development with Unreal Engine & C++</p>
                  <p>🤖 AI/ML models for gameplay and real-world applications</p>
                  <p>🧠 NLP and computer vision tools like Transformers and OpenCV</p>
                  <p>🛠️ Full-stack app development to bring my ideas to life</p>
                </div>
                <p>I'm always learning and looking for opportunities to grow — especially in communities that value innovation, curiosity, and building cool stuff.</p>
              </div>
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
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge 
                      className={`${project.type === 'AI' ? 'bg-primary/90' : 'bg-accent/90'}`}
                    >
                      {project.type}
                    </Badge>
                    {project.status && (
                      <Badge className="bg-orange-500/90">
                        {project.status}
                      </Badge>
                    )}
                  </div>
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
                  <Button 
                    className="w-full hover-scale bg-gradient-electric text-tech-dark"
                    onClick={() => window.open(project.link, '_blank')}
                  >
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
            <Card className="glass-card hover-lift border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary text-lg">The Ultimate Blender Simulation, Physics and Particles Course</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Udemy • Completed 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/50 hover:bg-primary/10"
                  onClick={() => window.open('https://drive.google.com/file/d/1dhRLiHt_ne6YXEChGN6pwnLY0JXzQRV9/view?usp=sharing', '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary text-lg">Unreal Engine 5 Blueprints - The Ultimate Developer Course</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Udemy • Completed 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/50 hover:bg-primary/10"
                  onClick={() => window.open('https://drive.google.com/file/d/1WBP1byLfC_NLCh8sfpYoDZdoEWMf8phy/view?usp=drive_link', '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary text-lg">IBM RAG and Agentic AI</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Coursera • In Progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full text-center py-2">
                  <Badge className="bg-orange-500/90">
                    In Progress
                  </Badge>
                </div>
              </CardContent>
            </Card>
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
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card hover-lift border-primary/50 h-20"
              onClick={() => window.open('https://github.com/Arahan-kujur', '_blank')}
            >
              <div className="flex flex-col items-center gap-2">
                <Github className="h-6 w-6" />
                <span>GitHub</span>
              </div>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card hover-lift border-primary/50 h-20"
              onClick={() => window.open('https://www.linkedin.com/in/arahan-kujur-a26b1a374', '_blank')}
            >
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

          <Link to="/contact">
            <Button size="lg" className="electric-glow hover-scale bg-gradient-electric text-tech-dark font-semibold">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </Link>
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