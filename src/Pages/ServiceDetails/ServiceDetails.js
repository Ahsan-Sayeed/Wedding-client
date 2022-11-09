import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import Comments from "./Comments/Comments";
import InsertReview from "./InsertReview/InsertReview";
import Ratings from "./Rating&Review/Ratings";
import useTitle from "../../Hooks/useTitle";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [insertedId, setInsertedId] = useState();
  const [loaderData, setLoaderData] = useState();
  useTitle("Service Details");
  
  useEffect(() => {
    fetch(`http://localhost:5000/review/${data._id}`)
      .then((response) => response.json())
      .then((data) => {
        setLoaderData(data);
      });
  }, [insertedId]);

  // console.log(loaderData?.result)
  console.log(data);
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        {/* Box start//======== */}
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img
              src={
                data.imageUrl || "https://source.unsplash.com/random/480x360"
              }
              alt=""
              className="w-full h-60 sm:h-96 dark:bg-gray-500"
            />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                  {data.title}
                </h3>
                <p className="text-xs dark:text-gray-400">
                <span>service by <a className="text-blue-600" href={"mailto:"+data.email}> @{data.email.split("@")[0]} </a></span>
                </p>
                <p className="dark:text-gray-400">
                <span className="text-sm dark:text-gray-400">service charge ${data.price}</span>
                </p>
              </div>
              <div className="dark:text-gray-100">
              <p className="my-5">{data.shortDesc}</p>
              <hr />
              <p className="my-2">{data.fullDesc}</p>
              </div>
              {/* ====Rating start===== */}
              <div className="flex justify-center">
                <Ratings></Ratings>
              </div>

              <div>
                <h1 className="my-2"> {loaderData?.count} comments</h1>
                {loaderData?.result.map((value) => {
                  return <Comments key={value._id} value={value}></Comments>;
                })}
              </div>

              {user && user.uid ? (
                <div className="flex justify-center">
                  <InsertReview
                    setInsertedId={setInsertedId}
                    data={data}
                  ></InsertReview>
                </div>
              ) : (
                <div className="flex justify-center">
                  <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    <Link to="/login">Please login to add a review</Link>
                  </button>
                </div>
              )}
              {/* ====== Rating end ====== */}
            </div>
          </div>
        </div>
        {/* ======//Box end */}

      </section>
    </div>
  );
};

export default ServiceDetails;
