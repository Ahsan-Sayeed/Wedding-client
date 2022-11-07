import React from "react";
import Review from "./Review";

const Ratings = () => {
  return (
    <div>
      <div className="block sm:flex p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
        <div style={{flex:0.4}}>
          <h2 className="text-2xl font-semibold">
          Ratings and reviews
          </h2>
          <h1 className="text-6xl">3.5</h1>
          <p className="text-sm dark:text-gray-400">861 global ratings</p>
        </div>

        <div style={{flex:0.6}}>
          <Review></Review>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
