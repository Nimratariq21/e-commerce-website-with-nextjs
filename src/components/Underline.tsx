import React from 'react';

// Define the type for the props
interface UnderlineProps {
  title: string; // Ensure 'title' is typed as a string
}

const Underline: React.FC<UnderlineProps> = ({ title }) => {
  return (
    <div className="text-2xl font-medium underline !underline-offset-[.5em]">
      {title}
    </div>
  );
};

export default Underline;
