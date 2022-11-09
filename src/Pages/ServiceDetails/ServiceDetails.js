import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import Comments from "./Comments/Comments";
import InsertReview from "./InsertReview/InsertReview";
import Ratings from "./Rating&Review/Ratings";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [insertedId, setInsertedId] = useState();
  const [loaderData,setLoaderData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((response) => response.json())
      .then((data) => {
        setLoaderData(data)
      });
  }, [insertedId]);

  // console.log(loaderData?.result)
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              src={
                data.imageUrl || "https://source.unsplash.com/random/480x360"
              }
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {data.title}
              </h3>
              <span>${data.price}</span>
              <br />
              <span className="text-xs dark:text-gray-400">
                February 19, 2021
              </span>
              <p>{data.fullDesc}</p>
            </div>
          </a>
          <div className="flex justify-center">
            <Ratings></Ratings>
          </div>

          <div>
            <h1>Total comment: {loaderData?.count} </h1>
            {loaderData?.result.map(value=>{
              return <Comments key={value._id} value={value}></Comments>;
            })}
          </div>

          {user && user.uid ? (
            <div className="flex justify-center">
              <InsertReview setInsertedId={setInsertedId}></InsertReview>
            </div>
          ) : (
            <div className="flex justify-center">
              <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Please login to add a review
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
