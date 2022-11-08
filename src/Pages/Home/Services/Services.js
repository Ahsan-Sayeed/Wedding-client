import React from "react";
import Card from "./Card/Card";

const Services = ({card}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid xl:grid-cols-3 gap-4 justify-items-center my-20">
        {
          card?.map(value=><Card key={value._id} value={value}/>)
        }
      </div>

    </div>
  );
};

export default Services;
