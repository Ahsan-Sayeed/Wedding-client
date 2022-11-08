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

    </div>
  );
};

export default Services;
