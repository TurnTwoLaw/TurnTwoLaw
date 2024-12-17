import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="p-8 flex flex-col justify-center items-center space-y-4 h-screen">
      <span className="text-4xl text-text font-bold text-center">
        Pricing
      </span>
      <div className="flex justify-center items-center space-x-4">
        <div className="bg-border p-8 rounded-2xl w-80 h-96 flex flex-col items-center justify-center">
          <span className="text-4xl text-text font-bold">₹0</span>
          <span className="text-text text-sm">normal</span>
        </div>

        <div className="bg-tertiary p-8 rounded-2xl w-80 h-96 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-white">₹99</span>
          <span className="text-gray-300 text-sm">essential</span>
        </div>

        <div className="bg-secondary p-8 rounded-2xl w-80 h-96 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-white">₹500</span>
          <span className="text-gray-300 text-sm">premium</span>
        </div>
      </div>
    </div>
  );
};

export default Pricing;