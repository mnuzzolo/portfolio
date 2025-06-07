
import React from 'react';

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    category: "Tools & Others",
    technologies: ["Git", "Docker", "AWS", "Figma", "Webpack"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="bg-background border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-medium text-foreground mb-6">
                {skillGroup.category}
              </h3>
              
              <div className="space-y-3">
                {skillGroup.technologies.map((tech) => (
                  <div 
                    key={tech}
                    className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0"
                  >
                    <span className="text-muted-foreground">{tech}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
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
