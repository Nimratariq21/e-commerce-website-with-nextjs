import React from 'react';
import Image from 'next/image';

// Define the types for the Guide component props
interface GuideProps {
  src: string;
  title: string;
  desc: string;
}

const Guide: React.FC<GuideProps> = ({ src, title, desc }) => {
  return (
    <div className="flex gap-4 px-4 items-start w-full">
      {/* Using next/image for automatic image optimization */}
      <Image 
        src={src} 
        alt={title} 
        className="mt-[1rem] size-[1.5em] object-cover" 
        width={100} // Replace with the actual width you want
        height={100} // Replace with the actual height you want
      />
      <div>
        <h1 className="md:text-[2rem] font-medium tracking-wider text-[1.7em]">{title}</h1>
        <p className="font-light text-sm w-[14em]" dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
    </div>
  );
};

export default Guide;
