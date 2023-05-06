import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const AnimatedText=()=> {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const typed = new Typed(elementRef.current, {
        strings: ['SERVICES','TECHNOLOGY', 'AND MORE!'],
       typeSpeed:100,
       backSpeed:100,
       backDelay:1000,

       loop: true
      });

      return () => {
        typed.destroy(); // limpiar Typed.js cuando el componente se desmonte
      };
    }
  }, []);

  return <span className='Animation1' ref={elementRef}></span>;
}

export default AnimatedText