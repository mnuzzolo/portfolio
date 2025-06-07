
import React, { Ref } from 'react';

const projects = [
  {
    id: 1,
    title: "Sonos S2 App",
    description: "Smart-speaker management and music content aggregate app. 5-Star App Store rating & 20M+ users.",
    image: "https://media.sonos.com/images/znqtjj88/production/88129e5a56afe6397c6f11ec8faac2484bc735fb-892x1936.gif?w=640&q=100&fit=clip&auto=format",
    technologies: ["Swift", "SwiftUI", "Kotlin", "Java"],
    link: "https://apps.apple.com/us/app/sonos/id1488977981"
  },
  {
    id: 2,
    title: "Github Projects",
    description: "Swift & SwiftUI sample apps, portfolio website & other projects - more to come soon!",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600",
    technologies: ["Swift", "SwiftUI", "iOS"],
    link: "https://github.com/mnuzzolo"
  },
  {
    id: 3,
    title: "davvn.com",
    description: "Portfolio website & Shopify storefront for y2k creators \"davvn\". Over 500 sales made via the site.",
    image: "https://davvn.com/cdn/shop/files/2000sphone-smaller-brighter.png?v=1721233483&width=3840",
    technologies: ["CSS", "Javascript", "Shopify"],
    link: "https://www.davvn.com"
  }
];

const Projects = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-20 lg:py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-6">
            Selected Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating 
            meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    <span>View Project</span>
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
