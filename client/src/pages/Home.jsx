import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsLetter from "../components/NewsLetter";
import BrandsColab from "../components/VipCustomers";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller/>
      <BrandsColab/>
      <OurPolicy/>
      <NewsLetter/>
    </div>
  );
};

export default Home;
