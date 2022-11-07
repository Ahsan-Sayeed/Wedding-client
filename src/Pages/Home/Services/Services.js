import React from "react";
import Card from "./Card/Card";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid xl:grid-cols-3 gap-4 justify-items-center my-20">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className="mb-10">
        <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          See all
        </button>
      </div>
    </div>
  );
};

export default Services;
