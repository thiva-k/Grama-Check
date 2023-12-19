import React, { useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
}

const FadeInTransition: React.FC<FadeInProps> = ({ children }) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const fadeIn = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (componentRef.current) {
          componentRef.current.classList.remove("opacity-0", "translate-y-4");
          componentRef.current.classList.add("opacity-100", "translate-y-0");
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(fadeIn, {
      threshold: 0.1, // Adjust the threshold as needed
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={componentRef}
      className="opacity-0 translate-y-4 transition-all duration-1000 ease-in-out"
    >
      {children}
    </div>
  );
};

export default FadeInTransition;
