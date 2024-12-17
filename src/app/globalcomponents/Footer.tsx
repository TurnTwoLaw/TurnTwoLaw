import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
        <div className="flex flex-row justify-between items-center">
        <div className="mb-8 lg:mb-0">
          <h1 className="text-2xl font-bold text-gray-400">Turn2Law</h1>
          <p className="text-3xl font-semibold mt-2">Simplifying legal access to everyone.</p>
        </div>

        <img src="/logoWhite.svg" alt="Logo" className="w-20 h-20" />

        </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center">
      
        

        {/* Links Section */}
        <div className="flex flex-wrap gap-16">
          <div>
            <h2 className="text-lg font-semibold">Links</h2>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Get a lawyer</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">This</a></li>
              <li><a href="#" className="hover:text-white">That</a></li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold">Socials</h2>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li><a href="#" className="hover:text-white">Linkedin</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">X</a></li>
              <li><a href="#" className="hover:text-white">This</a></li>
              <li><a href="#" className="hover:text-white">That</a></li>
            </ul>
          </div>
        </div>

        {/* QR Box */}
        <div className="relative mt-6 lg:mt-0">
          <div className="w-16 h-16 bg-white text-black flex items-center justify-center font-bold text-lg rounded-lg">
            QR
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm mt-10">
        Copyright
      </div>
    </footer>
  );
};

export default Footer;
