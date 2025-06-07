
import React from 'react';

const About = () => {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a passionate developer with a keen eye for design and a love for creating 
                digital experiences that are both beautiful and functional. With over 12 years 
                of experience in application development, I specialize in modern iOS and Android frameworks.
              </p>
              <p>
                My approach combines technical expertise with creative vision, ensuring that 
                every project not only meets functional requirements but also delivers an 
                exceptional user experience. I believe that great design and clean code go 
                hand in hand.
              </p>
              <p>
                When I'm not coding, you can find me playing guitar, 
                writing or producing music, or enjoying a good cup of coffee 
                while sketching out ideas for the next big project.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden">
              <img 
                src="https://avatars.githubusercontent.com/u/6494892?v=4" 
                alt="Developer workspace"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-background border border-border rounded-2xl flex items-center justify-center">
              <span className="text-2xl">👋</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
