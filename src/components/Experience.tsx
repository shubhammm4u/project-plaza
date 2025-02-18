
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description: "Led the frontend development team in building scalable web applications.",
    },
    {
      title: "Full Stack Developer",
      company: "StartUp Inc",
      period: "2019 - 2021",
      description: "Developed and maintained full-stack applications using React and Node.js.",
    },
    {
      title: "Junior Developer",
      company: "Web Solutions",
      period: "2017 - 2019",
      description: "Started my journey as a web developer working on various client projects.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l" />
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.company} • {exp.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
