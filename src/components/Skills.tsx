
import { Code, Database, Layout, Smartphone, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    { name: "Frontend Development", icon: Layout, technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend Development", icon: Terminal, technologies: ["Node.js", "Python", "Java", "SQL"] },
    { name: "Mobile Development", icon: Smartphone, technologies: ["React Native", "Flutter"] },
    { name: "Database", icon: Database, technologies: ["MongoDB", "PostgreSQL", "Redis"] },
    { name: "Other", icon: Code, technologies: ["Git", "Docker", "AWS", "CI/CD"] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 mr-2 text-gray-700" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
