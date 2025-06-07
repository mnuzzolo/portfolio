
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-6">
            Creative
            <span className="block text-4xl md:text-6xl lg:text-7xl text-muted-foreground mt-2">
              Developer
            </span>
          </h1>
          
          <div 
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Crafting digital experiences through thoughtful design and elegant code. 
              Specializing in modern web applications that blend aesthetics with functionality.
            </p>
          </div>

          <div 
            className={`transition-all duration-1000 ease-out delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button className="group inline-flex items-center px-8 py-3 text-sm font-medium text-foreground border border-border rounded-full hover:bg-muted transition-all duration-300">
              <span>View My Work</span>
              <svg 
                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-muted-foreground rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-muted-foreground rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
