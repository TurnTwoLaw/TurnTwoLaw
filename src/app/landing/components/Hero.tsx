import React from 'react';

const LegalAccess = () => {
  const items = [
    { src: '/hero/FaHandshake.svg', alt: 'Rental and lease agreements', text: 'Rental and lease agreements' },
    { src: '/hero/FaBookOpen.svg', alt: 'Legal Opinions', text: 'Legal Opinions' },
    { src: '/hero/IoPersonOutline.svg', alt: 'Wills & Trust', text: 'Wills & Trust' },
    { src: '/hero/Nda.svg', alt: 'Non-Disclosure agreements', text: 'Non-Disclosure agreements' },
    { src: '/hero/VscLaw.svg', alt: 'Others', text: 'Others' },
  ];

  return (
    <div>
      <div className="relative h-screen flex flex-col items-center justify-center p-20">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('/heroImg.svg')" }}
        ></div>   

        {/* Main Content */}
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We Simplify Legal <br/> Access for <span className="text-primary">Everyone.</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-lg mx-auto">
            Find high-quality lawyers which suits you, with help of AI tools that get the justice right on time.
          </p>
          <button className="bg-primary text-black font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition">
            Consult a Lawyer
          </button>
        </div>
      </div>

      <div className="relative w-full px-6 md:px-12 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4  p-6 ">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-start text-left p-4 py-8 border border-border rounded-2xl bg-gray-100 shadow-md">
              <img src={item.src} alt={item.alt} className="mb-2" />
              <p className="font-semibold text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalAccess;