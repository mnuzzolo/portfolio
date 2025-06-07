
import React, { useRef } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => {
  const projectsRef = useRef(null);

  const handleScrollToProjects = () => {
    projectsRef.current.scrollIntoView();
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero handleViewWorkClick={handleScrollToProjects}/>
      <About />
      <Projects ref={projectsRef} />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
