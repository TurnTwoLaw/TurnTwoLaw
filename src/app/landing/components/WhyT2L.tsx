import React from 'react';
import Image from 'next/image';

const WhyTurn2Law: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-white to-orange-100 p-8 md:p-16">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-black mb-6">
          Why <span className="text-primary">Turn2Law</span>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl shadow-md p-6">
          {/* Instant Legal Services */}
          <div className="flex flex-col items-start">
          
              <Image src="/landing/instant.svg" width={40} height={40} alt="Instant Legal Services" />

            <h3 className="font-bold text-lg mb-2">Instant legal services</h3>
            <p className="text-gray-600 text-sm">
              Get agreements, contracts, NDAs, and other legal documents quickly
              with transparent, fixed pricing.
            </p>
          </div>

          {/* Lawyer Matching System */}
          <div className="flex flex-col items-start">
           
              <Image src="/landing/lawyer.svg" width={40} height={40} alt="Lawyer Matching System" />
        
            <h3 className="font-bold text-lg mb-2">Lawyer Matching System</h3>
            <p className="text-gray-600 text-sm">
              Connect with expert lawyers tailored to your specific legal needs
              for seamless support.
            </p>
          </div>

          {/* Affordable Subscriptions */}
          <div className="flex flex-col items-start">
           
              <Image src="/landing/affordable.svg" width={40} height={40} alt="Affordable Subscriptions" />
         
            <h3 className="font-bold text-lg mb-2">Affordable subscriptions.</h3>
            <p className="text-gray-600 text-sm">
              Choose cost-effective plans for lawyers and clients with exclusive
              benefits and no hidden fees.
            </p>
          </div>

          {/* Virtual Consulting */}
          <div className="flex flex-col items-start">
            
              <Image src="/landing/virtual.svg" width={40} height={40} alt="Virtual Consulting" />
           
            <h3 className="font-bold text-lg mb-2">Virtual consulting.</h3>
            <p className="text-gray-600 text-sm">
              Access expert legal advice and consultations anytime, anywhere,
              from the comfort of your home.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="relative">
          <div className="absolute top-0 left-4 h-60 w-60 bg-orange-500 rounded-full blur-3xl opacity-30"></div>
          <img
            src="/flag.svg"
            alt="Flag Design"
            className="w-80 h-auto right-0 "
          />
        </div>
      </div>
    </section>
  );
};

export default WhyTurn2Law;