import React from 'react';
import Link from 'next/link';

const AnimatedLink = ({ 
  href, 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <Link 
      href={href} 
      className={`group relative text-black dark:text-[#eee] underline decoration-dotted decoration-[rgba(208,208,208,0.53)] underline-offset-2 transition-colors duration-200 hover:decoration-current hover:decoration-solid ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default AnimatedLink;
