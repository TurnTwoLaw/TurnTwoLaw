import Navbar from "../globalcomponents/Navigation";
import Pricing from "./components/Pricing";
import Footer from "../globalcomponents/Footer";
import WhyT2L from "./components/WhyT2L";
import Scrolling from "./components/Scrolling";
import Hero from "./components/Hero";
import Premium from "./components/Premium";
import WhatT2L from "./components/WhatT2L";
import Know from "./components/Know";

const Page = () => {


  return (
    <>
      <Navbar />
      <Hero />
      <WhatT2L />
      <WhyT2L />
      <Scrolling />
      <Know />
      <Premium />
      <Pricing />
      <Footer />



    </>
  );
};

export default Page;