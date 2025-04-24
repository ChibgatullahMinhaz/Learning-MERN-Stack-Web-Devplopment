import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollAnimationComponent = () => {
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const lastElementRef = useRef(null); // Reference for the last section

  useEffect(() => {
    // Initialize AOS for all sections
    AOS.init({
      duration: 1000,
      once: false, // It will fire every time the element is in the viewport
      mirror: true, // The animation will happen when you scroll back into the section
    });

    // Setting up Intersection Observer for the last section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationTrigger(true);
        } else {
          setAnimationTrigger(false);
        }
      },
      {
        threshold: 0.5, // Trigger when at least 50% of the element is visible
      }
    );

    // Observing the last element
    const currentElement = lastElementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // Clean up the observer
      }
    };
  }, []);

  return (
    <div>
      <section data-aos="fade-up">
        <h2>This section animates when it's visible in the viewport.</h2>
      </section>

      <section data-aos="fade-up">
        <h2>This section also animates when it's visible in the viewport.</h2>
      </section>
      <section data-aos="fade-up">
        <h2>This section also animates when it's visible in the viewport.</h2>
      </section>
      <section data-aos="fade-up">
        <h2>This section also animates when it's visible in the viewport.</h2>
      </section>
      <section data-aos="fade-up">
        <h2>This section also animates when it's visible in the viewport.</h2>
      </section>
      <section data-aos="fade-up">
        <h2>This section also animates when it's visible in the viewport.</h2>
      </section>
      <section data-aos="fade-up">
        <h2>This section also animates when it's visible in the viewport.</h2>
      </section>
      <section data-aos="fade-up">
        <h2>This section also animates when it's visible in the viewport.</h2>
      </section>

      <section
        ref={lastElementRef}
        data-aos={animationTrigger ? 'fade-up' : ''}
      >
        <h2>This is the last section. Animation will trigger once when it enters the viewport.</h2>
      </section>

      <style>
        {`
          section {
            margin: 100px 0;
            padding: 50px;
            background: #f2f2f2;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default ScrollAnimationComponent;
