"use client";
import React, { useState } from 'react';

export default function Turn2LawSummary() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <header className="text-center mb-8 text-4xl font-semibold">
        Know about us.
      </header>

      <div className="accordion w-full">
        <div className="accordion-item border-b border-border">
          <button
            className="accordion-trigger w-full text-left py-4 px-2 text-lg font-semibold text-primary hover:bg-gray-100 transition-colors duration-300"
            onClick={() => toggleItem('what-is')}
          >
            What is Instant Access to Law?
          </button>
          <div
            className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
              openItem === 'what-is' ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-4">
              <p className="mb-2"><strong>Definition:</strong> On-demand access to legal services, advice, and resources, anytime, anywhere.</p>
              <p><strong>Why It&apos;s Needed:</strong></p>
              <ul className="list-disc pl-5">
                <li>High costs of traditional legal services</li>
                <li>Delays and geographic limitations</li>
                <li>Complexity of legal systems</li>
                <li>Language barriers</li>
                <li>Injustice due to delayed support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item border-b border-border">
          <button
            className="accordion-trigger w-full text-left py-4 px-2 text-lg font-semibold text-primary hover:bg-gray-100 transition-colors duration-300"
            onClick={() => toggleItem('key-statistics')}
          >
            Key Statistics
          </button>
          <div
            className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
              openItem === 'key-statistics' ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-4 space-y-4">
              <div>
                <h4 className="font-semibold">Legal Workforce in India:</h4>
                <ul className="list-disc pl-5">
                  <li>1.5 million lawyers (BCI registered)</li>
                  <li>60,000+ graduates/year from 1,000+ law schools</li>
                  <li>Projected market size: USD 5 billion by 2025</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Challenges in Distribution:</h4>
                <ul className="list-disc pl-5">
                  <li>Urban Bias: Concentration in cities</li>
                  <li>New Lawyers: Limited opportunities in smaller towns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item border-b border-border">
          <button
            className="accordion-trigger w-full text-left py-4 px-2 text-lg font-semibold text-primary hover:bg-gray-100 transition-colors duration-300"
            onClick={() => toggleItem('channels')}
          >
            Channels of Instant Legal Access
          </button>
          <div
            className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
              openItem === 'channels' ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-4">
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>Helplines:</strong> Quick legal support via phone.</li>
                <li><strong>AI Chatbots:</strong> Answer basic legal queries, connect users with lawyers.</li>
                <li>
                  <strong>Online Platforms:</strong>
                  <ul className="list-disc pl-5">
                    <li>Search and filter lawyers based on preferences.</li>
                    <li>Verify lawyer credentials and profiles.</li>
                  </ul>
                </li>
                <li><strong>Resource Libraries:</strong> Self-help guides, FAQs, templates for handling basic legal issues.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="accordion-item border-b border-border">
          <button
            className="accordion-trigger w-full text-left py-4 px-2 text-lg font-semibold text-primary hover:bg-gray-100 transition-colors duration-300"
            onClick={() => toggleItem('services')}
          >
            Included Services
          </button>
          <div
            className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
              openItem === 'services' ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-4 flex flex-wrap gap-2">
              {[
                "Rental & Lease Agreements", "NDA (Non-Disclosure Agreements)", "Legal Opinions", "Sale/Purchase Agreements",
                "Contracts", "Wills & Trusts", "Partnership Agreements", "Loan Agreements", "Mortgage Agreements",
                "Regular Supply Contracts", "Freelance Contracts", "Franchise Agreements"
              ].map((service, index) => (
                <span key={index} className="badge bg-secondary text-white p-2 rounded">{service}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="accordion-item border-b border-border">
          <button
            className="accordion-trigger w-full text-left py-4 px-2 text-lg font-semibold text-primary hover:bg-gray-100 transition-colors duration-300"
            onClick={() => toggleItem('why-choose')}
          >
            Why Choose Turn2Law?
          </button>
          <div
            className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
              openItem === 'why-choose' ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-4">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Case Study Example</h3>
                </div>
                <div className="card-content">
                  <p>A Delhi-based person falsely accused in Chennai quickly found legal assistance through Turn2Law, bridging the gap in an unfamiliar legal system.</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="list-disc pl-5">
                  <li>24/7 instant support for emergencies</li>
                  <li>Affordable and accessible legal services</li>
                  <li>Reduced reliance on law firms</li>
                  <li>User-friendly and available to all</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item border-b border-border">
          <button
            className="accordion-trigger w-full text-left py-4 px-2 text-lg font-semibold text-primary hover:bg-gray-100 transition-colors duration-300"
            onClick={() => toggleItem('team')}
          >
            Meet the Team
          </button>
          <div
            className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
              openItem === 'team' ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-4">
              <ul className="list-disc pl-5">
                <li>Yash Phoghat</li>
                <li>Adhyayan Dubey</li>
                <li>Aditi Prasanth</li>
                <li>Abhilipsa Sahoo</li>
                <li>Harshil Malhotra</li>
                <li>Pranav Sri Krishna</li>
                <li>Anshika Singh</li>
                <li>Sreekar Jallepalli</li>
                <li>Rahul Marban</li>
                <li>Abhishek Kutikuppala</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}