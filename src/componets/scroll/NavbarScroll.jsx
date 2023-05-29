import React, { useEffect } from 'react';

const NavbarScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        document.querySelector('.fixed-top').classList.add('top-nav-collapse');
      } else {
        document.querySelector('.fixed-top').classList.remove('top-nav-collapse');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar fixed-top">
      {/* Navbar content */}
    </nav>
  );
};

export default NavbarScroll;
