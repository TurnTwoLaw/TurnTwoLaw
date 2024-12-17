import React from 'react';

const ScrollingText: React.FC = () => {
  return (
    <div className="bg-[#00796b] py-2 overflow-hidden h-85px">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        <span className="text-white font-medium px-4">
          100+ LAWYERS
        </span>
        <span className="text-white font-medium px-4">
          TRUSTED BY 100+ USERS
        </span>
        <span className="text-white font-medium px-4">
          POWERED BY AI
        </span>
        <span className="text-white font-medium px-4">
          MADE FOR INDIA
        </span>
      </div>
    </div>
  );
};

export default ScrollingText;