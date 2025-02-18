
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with features like user authentication, product management, and secure payments.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation platform using state-of-the-art machine learning models.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      technologies: ["React", "Python", "TensorFlow", "AWS"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive analytics dashboard for social media management and monitoring.",
      image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80",
      technologies: ["Vue.js", "D3.js", "Firebase", "Node.js"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Real Estate Platform",
      description: "A modern real estate platform with virtual tours and property management features.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      technologies: ["React", "Three.js", "Express", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Weather App",
      description: "A beautiful weather application with advanced forecasting and location-based features.",
      image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80",
      technologies: ["React Native", "OpenWeather API", "Node.js"],
      github: "https://github.com",
      live: "https://example.com",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Link className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
