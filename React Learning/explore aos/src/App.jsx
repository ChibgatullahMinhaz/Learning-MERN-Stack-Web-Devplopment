import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Section = ({ children, bg = '#eee' }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elem = sectionRef.current;

    gsap.fromTo(
      elem,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: elem,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
          markers: false,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ height: '100vh', background: bg, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {children}
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Section bg="#f1f1f1"><h1>Section 1</h1></Section>
      <Section bg="#c1c1c1"><h1>Section 2</h1></Section>
      <Section bg="#a1a1a1"><h1>Section 3</h1></Section>
      <Section bg="#808080"><h1>Last Section</h1></Section>
    </div>
  );
};

export default App;
