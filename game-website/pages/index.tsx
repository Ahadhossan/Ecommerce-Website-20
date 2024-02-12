import BestSeller from "@/components/BestSeller";
import Contact from "@/components/Contact";
import FeaturedProduct from "@/components/FeaturedProduct";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import News from "@/components/News";
import TopProduct from "@/components/TopProduct";
import React from "react";

const HomePage = () => {
  return <div className="overflow-x-hidden">
    <Nav/>
    <Hero/>
    <FeaturedProduct/>
    <TopProduct/>
    <BestSeller/>
    <News/>
    <Contact/>
    <Footer/>
  </div>;
};

export default HomePage;
