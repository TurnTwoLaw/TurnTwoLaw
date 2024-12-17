import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Left Section: Company Name and Links */}
        <div className="flex items-center space-x-6">
          {/* Company Name */}
          <Link href="/" className="text-text font-bold text-xl">
     

            <img src='/logoBlack.svg' alt="Logo" className="w-8 h-8" />
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link
              href="/consult"
              className="text-text hover:bg-border px-3 py-2 rounded-md text-sm font-medium"
            >
              Consult
            </Link>
            <Link
              href="/resources"
              className="text-text hover:bg-border px-3 py-2 rounded-md text-sm font-medium"
            >
              Resources
            </Link>
            <Link
              href="/pricing"
              className="text-text hover:bg-border px-3 py-2 rounded-md text-sm font-medium"
            >
              Pricing
            </Link>
          </div>
        </div>

        {/* Right Section: Login and Signup Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/auth/signin"
            className="text-text hover:bg-border px-3 py-2 rounded-md text-sm font-medium"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="bg-tertiary hover:bg-border text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
