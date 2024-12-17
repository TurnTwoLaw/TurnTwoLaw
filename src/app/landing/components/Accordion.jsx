import React, { useState } from "react";

export const Accordion = ({ children }) => {
  return <div className="accordion space-y-4">{children}</div>;
};

export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg shadow">
      <button
        className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};
