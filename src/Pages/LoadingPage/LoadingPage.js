import React from "react";

const LoadingPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-20">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>{" "}
        <h1 className="my-5 text-xl">Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingPage;
