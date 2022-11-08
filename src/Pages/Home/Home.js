import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel/Carousel";
import FAQ from "./FAQ/FAQ";
import Features from "./Features/Features";
import GetUpdate from "./GetUpdate/GetUpdate";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Services></Services>
      <div className="mb-10 flex justify-center">
        <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
         <Link to='/services'>See all</Link> 
        </button>
      </div>
      <Features></Features>
      <FAQ></FAQ>
      <GetUpdate></GetUpdate>
    </div>
  );
};

export default Home;
