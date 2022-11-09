import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Comments from "./Comments/Comments";
import Pagination from "./Pagination/Pagination";
import ReviewCard from "./ReviewCard/ReviewCard";

const MyReviews = () => {
  const data = useLoaderData();
  const [select,setSelect] = useState(0);
  

  return (
    <div className="flex lg:flex-row flex-col justify-center">
      {/* ==first page== */}
      <div className="flex flex-col max-w-5xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold">Services</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
        {
          data.result.map((value,idx)=><ReviewCard key={value._id} value={value} setSelect={setSelect} idx={idx}></ReviewCard>)
        }
        

        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total: 
            <span className="font-semibold">{data.count}</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          {/* <Pagination></Pagination> */}
        </div>
      </div>
      {/* first page */}
      {/* ==second page== */}

      <article className="max-w-5xl px-6 py-24 space-y-12 dark:bg-gray-800 dark:text-gray-50">
        <div className="w-full mx-auto space-y-4 text-center">
          <p className="text-xs font-semibold tracking-wider uppercase">
            #Your_Reviews_And_Comments
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {data.result[select].title}
          </h1>
          <p className="text-sm dark:text-gray-400">
          price: ${data.result[select].price}
          </p>
        </div>
        <div className="dark:text-gray-100">
          <p>{data.result[select].shortDesc}</p>
        </div>
        <Comments 
        value={data.result[select]}
        ></Comments>
      </article>
      {/* second page */}
    </div>
  );
};

export default MyReviews;
