import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel/Carousel";
import FAQ from "./FAQ/FAQ";
import Features from "./Features/Features";
import GetUpdate from "./GetUpdate/GetUpdate";
import Services from "./Services/Services";
import useTitle from '../../Hooks/useTitle';

const Home = () => {
  const [card,setCard] = useState();
  useEffect(()=>{
    fetch("http://localhost:5000/services?limit=3")
      .then((response) => response.json())
      .then((data) => {
       setCard(data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  },[])

  useTitle("Home");
  return (
    <div>
      <Carousel></Carousel>
      <Services card={card}></Services>
      <div className="mb-10 flex justify-center">
         <Link to='/services' className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">See all</Link> 
      </div>
      <Features></Features>
      <FAQ></FAQ>
      <GetUpdate></GetUpdate>
    </div>
  );
};

export default Home;
