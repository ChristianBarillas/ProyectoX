import React, { useRef, useEffect } from 'react';

const ScrollAnimationComponent = () => {
  const hiddenElementsRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.scroll-hidden');

    hiddenElements.forEach((el) => {
      if (hiddenElementsRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (hiddenElementsRef.current) {
        hiddenElements.forEach((el) => {
          observerRef.current.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <div ref={hiddenElementsRef}>
      {/* Contenido del componente */}
    </div>
  );
};


export default ScrollAnimationComponent