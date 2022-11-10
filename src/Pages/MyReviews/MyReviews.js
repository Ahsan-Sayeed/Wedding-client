import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import LoadingPage from "../LoadingPage/LoadingPage";
import Comments from "./Comments/Comments";
import Pagination from "./Pagination/Pagination";
import ReviewCard from "./ReviewCard/ReviewCard";
import useTitle from '../../Hooks/useTitle';
import {AuthContext} from '../../Context/Context';

const MyReviews = () => {
  // const data = useLoaderData();
  const {user} = useContext(AuthContext);
  // console.log(user.uid);
  const [select, setSelect] = useState(0);
  const [data, setData] = useState();
  const [stateChange, setStateChange] = useState();
  const [edit,setEdit] = useState(false);

  useTitle("My Review")

  useEffect(() => {
    fetch(`http://localhost:5000/review/profile/${user.uid}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [stateChange]);

  useEffect(() => {
     setEdit(false);
  }, [select])
  
  return (
    <>
      {data === undefined ? (
        <LoadingPage />
      ) : (
        <>
          {data?.count !== 0 ? (
            <div className="flex lg:flex-row flex-col justify-center">
              {/* ==first page== */}
              <div className="flex flex-col w-full max-w-5xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <h2 className="text-xl font-semibold">Services</h2>
                <ul className="flex flex-col divide-y divide-gray-700">
                  {data?.result.map((value, idx) => (
                    <ReviewCard
                      key={value._id}
                      value={value}
                      setSelect={setSelect}
                      idx={idx}
                      setStateChange={setStateChange}
                      setEdit={setEdit}
                    ></ReviewCard>
                  ))}
                </ul>
                <div className="space-y-1 text-right">
                  <p>
                    Total:
                    <span className="font-semibold">{data?.count}</span>
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

              <article className="max-w-5xl w-full px-6 py-24 space-y-12 dark:bg-gray-800 dark:text-gray-50">
                <div className="w-full mx-auto space-y-4 text-center">
                  <p className="text-xs font-semibold tracking-wider uppercase">
                    #Your_Reviews_And_Comments
                  </p>
                  <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                    {data?.result[select]?.title}
                  </h1>
                  <p className="text-sm dark:text-gray-400">
                    price: ${data?.result[select]?.price}
                  </p>
                </div>
                <div className="dark:text-gray-100">
                  <p>{data?.result[select]?.shortDesc}</p>
                </div>
                <Comments value={data?.result[select]} edit={edit} setEdit={setEdit} setStateChange={setStateChange}></Comments>
              </article>
              {/* second page */}
              {/* <Modal/> */}
            </div>
          ) : (
            <div className="text-center text-5xl border rounded py-72">
              No reviews were added
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MyReviews;
