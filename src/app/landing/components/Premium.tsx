import React from "react";

const PremiumCard = () => {
  return (
    <div className="flex justify-between items-center bg-[#FAEDE4] rounded-2xl p-8 max-w-4xl mx-auto shadow-lg ">
      {/* Left Side Content */}
      <div className="max-w-lg">
        <div className="text-4xl font-bold mb-4">
            <img src="/logoBlack.svg" alt="Logo" className="w-10 h-10 mb-4" />
          <span className="text-black">The </span>
          <span className="text-primary font-semibold">premium</span>
          <span className="text-black"> way to find the right one</span>
        </div>
        <p className="text-black text-sm leading-relaxed">
          At Turn2Law, we make finding the perfect legal expert effortless and
          efficient. Our platform offers advanced filters to match you with the
          right lawyer based on case type, experience, specialization, and
          location. With verified profiles and real-time availability, you can
          confidently choose a professional who meets your needs. Access premium
          features like case tracking, direct consultations, and expert
          recommendations—all designed to ensure a seamless legal experience.
        </p>
      </div>

      {/* Right Side Colored Box */}
      <div className="bg-primary w-72 h-80 rounded-2xl"></div>
    </div>
  );
};

export default PremiumCard;
