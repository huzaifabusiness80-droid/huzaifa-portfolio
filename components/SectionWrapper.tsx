import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', id }) => {
  return (
    <div id={id} className={`max-w-[1300px] px-5 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default SectionWrapper;
