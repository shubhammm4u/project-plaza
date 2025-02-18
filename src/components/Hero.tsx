
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-down">
          John Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-up">
          Full Stack Web Developer
        </p>
        <div className="flex space-x-4 justify-center mb-8 animate-fade-up">
          <Button variant="ghost" size="icon" className="text-white hover:text-gray-300 hover:bg-white/10">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-gray-300 hover:bg-white/10">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-gray-300 hover:bg-white/10">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-gray-300 hover:bg-white/10">
            <a href="mailto:contact@example.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <Button
          className="bg-white text-gray-900 hover:bg-gray-100 animate-fade-up"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Hero;
