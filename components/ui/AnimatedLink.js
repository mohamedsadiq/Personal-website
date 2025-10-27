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
      className={`group relative text-gray-500 hover:text-black transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
      <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default AnimatedLink;
