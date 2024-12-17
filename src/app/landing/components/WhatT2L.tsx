// components/WhatIsTurn2Law.js
import Image from 'next/image';


const WhatIsTurn2Law = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 h-screen">
      {/* Left Section - Content */}
      <div className="max-w-lg">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          What’s <span className="text-primary italic underline">Turn2Law</span> ?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Turn2Law is a next-generation legal platform designed to simplify access to legal 
          services for everyone. Whether you’re facing an emergency, drafting critical documents, 
          or seeking legal advice, Turn2Law connects you to trusted professionals and resources 
          instantly. With features like on-demand lawyer matching, and a comprehensive resource 
          library, Turn2Law bridges the gap between legal expertise and accessibility. Our mission 
          is to make justice accessible, affordable, and efficient for individuals and businesses alike.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="mt-8 md:mt-0 md:ml-8">
        <Image 
          src="/logoBig.svg" 
          alt="/logoBig.svg" 
          width={300} 
          height={300} 
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default WhatIsTurn2Law;
