import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface WebsiteBannerProps {
  title: string;
}

const WebsiteBanner: React.FC<WebsiteBannerProps> = ({ title }) => {
  return (
    <div className="min-h-[50vh] relative flex-center w-screen py-8">
      {/* Using next/image for optimization */}
      <Image
        src="/images/main.png"
        alt="Main Banner"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-10"
      />
      <div className="absolute flex flex-col items-center justify-center z-40">
        {/* Using next/image for logo */}
        <Image
          src="/images/mainLogo.png"
          alt="Logo"
          width={200} // Adjust width and height according to your logo size
          height={100}
          className="object-cover"
        />
        <h1 className="text-[1.8em] sm:text-[2rem] md:text-[3rem] font-bold tracking-wide">{title}</h1>
        <div className="tracking-[.6em] text-black text-[1em] md:text-[1.2em] font-medium">
          <span className="tracking-wider">
            <Link href="/">Home</Link>
          </span>{" "}
          &gt;{" "}
          <span className="tracking-wider text-black/70">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBanner;
